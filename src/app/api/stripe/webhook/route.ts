import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase-admin'
import { getStripe, STRIPE_PRICES, BUSINESS_MIN_SEATS } from '@/lib/stripe'
import Stripe from 'stripe'

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

// Activation code characters (excluding confusables I/O/0/1)
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
function generateActivationCode(): string {
  let code = 'FN-'
  for (let i = 0; i < 6; i++) {
    code += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]
  }
  return code
}

function getSubscriptionPeriod(subscription: Stripe.Subscription): {
  periodStart: string
  periodEnd: string
} | null {
  const items = subscription.items?.data ?? []
  if (items.length === 0) {
    console.error('Subscription has no items; cannot determine period:', subscription.id)
    return null
  }

  let start = items[0].current_period_start
  let end = items[0].current_period_end
  for (const item of items) {
    if (item.current_period_start < start) start = item.current_period_start
    if (item.current_period_end > end) end = item.current_period_end
  }

  return {
    periodStart: new Date(start * 1000).toISOString(),
    periodEnd: new Date(end * 1000).toISOString(),
  }
}

function getInvoiceSubscriptionId(invoice: Stripe.Invoice): string | null {
  const parentSub = invoice.parent?.subscription_details?.subscription
  if (parentSub) {
    return typeof parentSub === 'string' ? parentSub : parentSub.id
  }

  const legacy = (invoice as { subscription?: string | Stripe.Subscription }).subscription
  if (legacy) {
    return typeof legacy === 'string' ? legacy : legacy.id
  }

  return null
}

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!
  const stripe = getStripe()

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session)
        break
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription)
        break
      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription)
        break
      case 'invoice.paid':
        await handleInvoicePaid(event.data.object as Stripe.Invoice)
        break
    }
  } catch (err) {
    console.error(`Webhook handler error for ${event.type}:`, err)
    return NextResponse.json({ error: 'Handler failed' }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  if (session.mode !== 'subscription' || !session.subscription) return

  const stripe = getStripe()
  const subscription = await stripe.subscriptions.retrieve(session.subscription as string)
  const metadata = subscription.metadata
  const userId = metadata.supabase_user_id
  const plan = metadata.plan as 'pro' | 'business'

  if (!userId || !plan) {
    console.error('Missing metadata on subscription:', subscription.id)
    return
  }

  const supabaseAdmin = getSupabaseAdmin()
  const period = getSubscriptionPeriod(subscription)
  if (!period) return

  // Update user profile
  await supabaseAdmin
    .from('profiles')
    .update({
      plan,
      subscription_status: 'active',
      current_period_start: period.periodStart,
      current_period_end: period.periodEnd,
      current_period_usage: 0,
    })
    .eq('id', userId)

  if (plan === 'business') {
    await setupBusinessOrg(userId, subscription)
  }
}

async function setupBusinessOrg(userId: string, subscription: Stripe.Subscription) {
  const supabaseAdmin = getSupabaseAdmin()
  const seats = parseInt(subscription.metadata.seats || String(BUSINESS_MIN_SEATS))

  // Get user email for org name
  const { data: profile } = await supabaseAdmin
    .from('profiles')
    .select('email, full_name')
    .eq('id', userId)
    .single()

  const orgName = profile?.full_name
    ? `${profile.full_name}'s Team`
    : `Team ${profile?.email?.split('@')[0] || 'Unknown'}`

  // Create organization
  const { data: org, error: orgError } = await supabaseAdmin
    .from('organizations')
    .insert({
      name: orgName,
      stripe_subscription_id: subscription.id,
      admin_user_id: userId,
      seat_count: seats,
      max_users: seats,
      normalized_token_limit_per_user: 20_000_000,
    })
    .select('id')
    .single()

  if (orgError || !org) {
    console.error('Failed to create org:', orgError)
    return
  }

  // Generate activation code
  const code = generateActivationCode()
  await supabaseAdmin
    .from('activation_codes')
    .insert({
      org_id: org.id,
      code,
    })

  // Add admin as org member
  await supabaseAdmin
    .from('org_members')
    .insert({
      org_id: org.id,
      user_id: userId,
      role: 'admin',
    })
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const userId = subscription.metadata.supabase_user_id
  const plan = subscription.metadata.plan as string
  if (!userId) return

  const supabaseAdmin = getSupabaseAdmin()
  const period = getSubscriptionPeriod(subscription)
  if (!period) return

  const status = subscription.status === 'active' ? 'active'
    : subscription.status === 'past_due' ? 'past_due'
    : subscription.status === 'canceled' ? 'canceled'
    : 'none'

  await supabaseAdmin
    .from('profiles')
    .update({
      subscription_status: status,
      current_period_start: period.periodStart,
      current_period_end: period.periodEnd,
      cancel_at_period_end: subscription.cancel_at_period_end ?? false,
    })
    .eq('id', userId)

  // Handle seat count changes for business plans
  if (plan === 'business') {
    const seatItem = subscription.items.data.find(
      item => (item.price as Stripe.Price).id === STRIPE_PRICES.BUSINESS
    )
    if (seatItem) {
      await supabaseAdmin
        .from('organizations')
        .update({
          seat_count: seatItem.quantity || BUSINESS_MIN_SEATS,
          max_users: seatItem.quantity || BUSINESS_MIN_SEATS,
        })
        .eq('stripe_subscription_id', subscription.id)
    }
  }
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const userId = subscription.metadata.supabase_user_id
  if (!userId) return

  const supabaseAdmin = getSupabaseAdmin()

  // Revert the subscription owner to free
  await supabaseAdmin
    .from('profiles')
    .update({
      plan: 'free',
      subscription_status: 'none',
      cancel_at_period_end: false,
      current_period_start: null,
      current_period_end: null,
      current_period_usage: 0,
    })
    .eq('id', userId)

  // Full business org cleanup
  if (subscription.metadata.plan === 'business') {
    const { data: org } = await supabaseAdmin
      .from('organizations')
      .select('id')
      .eq('stripe_subscription_id', subscription.id)
      .single()

    if (org) {
      // Get all active org members (excluding admin who was already reverted above)
      const { data: members } = await supabaseAdmin
        .from('org_members')
        .select('user_id')
        .eq('org_id', org.id)
        .eq('is_active', true)

      // Revert all members' plan to free
      if (members) {
        for (const member of members) {
          await supabaseAdmin
            .from('profiles')
            .update({
              plan: 'free',
              subscription_status: 'none',
              cancel_at_period_end: false,
              current_period_start: null,
              current_period_end: null,
              current_period_usage: 0,
            })
            .eq('id', member.user_id)
        }
      }

      // Deactivate all org members
      await supabaseAdmin
        .from('org_members')
        .update({ is_active: false })
        .eq('org_id', org.id)

      // Deactivate activation codes
      await supabaseAdmin
        .from('activation_codes')
        .update({ is_active: false, deactivated_at: new Date().toISOString() })
        .eq('org_id', org.id)
        .eq('is_active', true)

      // Deactivate the org itself
      await supabaseAdmin
        .from('organizations')
        .update({ is_active: false, updated_at: new Date().toISOString() })
        .eq('id', org.id)
    }
  }
}

async function handleInvoicePaid(invoice: Stripe.Invoice) {
  // Only handle subscription invoices (not the first one — that's handled by checkout.session.completed)
  const subscriptionId = getInvoiceSubscriptionId(invoice)
  if (!subscriptionId || invoice.billing_reason === 'subscription_create') return

  const stripe = getStripe()
  const subscription = await stripe.subscriptions.retrieve(subscriptionId)
  const userId = subscription.metadata.supabase_user_id
  if (!userId) return

  const supabaseAdmin = getSupabaseAdmin()
  const period = getSubscriptionPeriod(subscription)
  if (!period) return

  // Reset usage for the new billing period
  await supabaseAdmin.rpc('reset_period_usage', {
    p_user_id: userId,
    p_period_start: period.periodStart,
    p_period_end: period.periodEnd,
  })

  // For business plans, reset all org members' period usage
  if (subscription.metadata.plan === 'business') {
    const { data: org } = await supabaseAdmin
      .from('organizations')
      .select('id')
      .eq('stripe_subscription_id', subscription.id)
      .single()

    if (org) {
      const { data: members } = await supabaseAdmin
        .from('org_members')
        .select('user_id')
        .eq('org_id', org.id)
        .eq('is_active', true)

      if (members) {
        for (const member of members) {
          await supabaseAdmin.rpc('reset_period_usage', {
            p_user_id: member.user_id,
            p_period_start: period.periodStart,
            p_period_end: period.periodEnd,
          })
        }
      }
    }
  }
}
