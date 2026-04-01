import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase-admin'

export async function POST(req: NextRequest) {
  try {
    const supabaseAdmin = getSupabaseAdmin()
    const authHeader = req.headers.get('authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const token = authHeader.slice(7)
    const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(token)
    if (authError || !user) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const { plan, seats } = await req.json()
    if (!plan || !['pro', 'business'].includes(plan)) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }

    // Create a short-lived checkout token
    const { data, error } = await supabaseAdmin
      .from('checkout_tokens')
      .insert({
        user_id: user.id,
        plan_requested: plan,
        seats_requested: plan === 'business' ? (seats || 3) : null,
      })
      .select('token')
      .single()

    if (error) {
      return NextResponse.json({ error: 'Failed to create token' }, { status: 500 })
    }

    return NextResponse.json({ token: data.token })
  } catch {
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
