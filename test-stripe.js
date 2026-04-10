const Stripe = require('stripe');
try {
  new Stripe('sk_test_123', { apiVersion: '2025-08-27.basil' });
  console.log('SUCCESS');
} catch (e) {
  console.error('ERROR:', e.message);
}
