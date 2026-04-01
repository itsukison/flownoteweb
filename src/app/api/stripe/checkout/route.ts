import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { stripe, STRIPE_PRICES, BUSINESS_MIN_SEATS } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  try {
    const { checkout_token } = await req.json()
    if (!checkout_token) {
      return NextResponse.json({ error: 'Missing checkout_token' }, { status: 400 })
    }

    // Validate checkout token
    const { data: tokenData, error: tokenError } = await supabaseAdmin
      .from('checkout_tokens')
      .select('*')
      .eq('token', checkout_token)
      .eq('used', false)
      .single()

    if (tokenError || !tokenData) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 })
    }

    // Check expiry
    if (new Date(tokenData.expires_at) < new Date()) {
      return NextResponse.json({ error: 'Token expired' }, { status: 400 })
    }

    // Mark token as used
    await supabaseAdmin
      .from('checkout_tokens')
      .update({ used: true })
      .eq('id', tokenData.id)

    // Get or create Stripe customer
    const { data: profile } = await supabaseAdmin
      .from('profiles')
      .select('stripe_customer_id, email')
      .eq('id', tokenData.user_id)
      .single()

    let customerId = profile?.stripe_customer_id

    if (!customerId) {
      const customer = await stripe.customers.create({
        email: profile?.email || undefined,
        metadata: { supabase_user_id: tokenData.user_id },
      })
      customerId = customer.id

      await supabaseAdmin
        .from('profiles')
        .update({ stripe_customer_id: customerId })
        .eq('id', tokenData.user_id)
    }

    const plan = tokenData.plan_requested as 'pro' | 'business'
    const priceId = plan === 'pro' ? STRIPE_PRICES.PRO : STRIPE_PRICES.BUSINESS
    const seats = plan === 'business'
      ? Math.max(tokenData.seats_requested || BUSINESS_MIN_SEATS, BUSINESS_MIN_SEATS)
      : 1

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.flownote-jp.com'

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: 'subscription',
      line_items: [{
        price: priceId,
        quantity: seats,
      }],
      subscription_data: {
        metadata: {
          supabase_user_id: tokenData.user_id,
          plan,
          seats: String(seats),
        },
      },
      success_url: `${baseUrl}/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/subscription/cancel`,
      locale: 'ja',
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Checkout error:', err)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
