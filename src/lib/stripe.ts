import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing STRIPE_SECRET_KEY')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-03-31.basil',
})

export const STRIPE_PRICES = {
  PRO: 'price_1THIu2CbJdvYgTCb7pWJw1LQ',
  BUSINESS: 'price_1THIu2CbJdvYgTCbGBXGJRer',
} as const

export const PLAN_LIMITS = {
  free: 2_000_000,
  pro: 20_000_000,
  business: 20_000_000,
  enterprise: 20_000_000,
} as const

export const BUSINESS_MIN_SEATS = 3
