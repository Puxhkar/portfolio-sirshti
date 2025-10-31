import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-10-29.clover',
});

// Subscription Plans
export const PLANS = {
  FREE: {
    name: 'Free',
    price: 0,
    priceId: null,
    features: [
      'Basic access to platform',
      'Limited research articles',
      'Community forum access',
      'Email support',
    ],
  },
  PRO: {
    name: 'Pro',
    price: 49,
    priceId: process.env.STRIPE_PRO_PRICE_ID,
    features: [
      'Full platform access',
      'Unlimited research articles',
      'Advanced analytics',
      'Priority email support',
      'Exclusive webinars',
      'API access',
      'Custom reports',
      'Early access to new features',
    ],
  },
};

export async function createStripeCustomer(email, name) {
  return await stripe.customers.create({
    email,
    name: name || undefined,
    metadata: {
      source: 'mindreaderbio',
    },
  });
}

export async function createCheckoutSession(
  customerId,
  priceId,
  userId
) {
  return await stripe.checkout.sessions.create({
    customer: customerId,
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXTAUTH_URL}/dashboard?success=true`,
    cancel_url: `${process.env.NEXTAUTH_URL}/pricing?canceled=true`,
    metadata: {
      userId,
    },
  });
}

export async function createBillingPortalSession(customerId) {
  return await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${process.env.NEXTAUTH_URL}/dashboard`,
  });
}

export async function cancelSubscription(subscriptionId) {
  return await stripe.subscriptions.cancel(subscriptionId);
}

export async function getSubscription(subscriptionId) {
  return await stripe.subscriptions.retrieve(subscriptionId);
}
