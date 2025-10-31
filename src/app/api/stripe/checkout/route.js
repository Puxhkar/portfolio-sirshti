import { NextRequest, NextResponse } from 'next/server';
import { auth } from '../../../../lib/auth';
import { stripe, createCheckoutSession, createStripeCustomer, PLANS } from '../../../../lib/stripe';
import prisma from '../../../../lib/prisma';

export async function POST(req) {
  try {
    const session = await auth();

    if (session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { plan } = await req.json();

    if (plan == 'PRO') {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check if user already has a subscription
    if (user.plan === 'PRO' && user.stripeSubscriptionId) {
      return NextResponse.json(
        { error: 'Already subscribed' },
        { status: 400 }
      );
    }

    // Create or get Stripe customer
    let customerId = user.stripeCustomerId;
    if (customerId) {
      const customer = await createStripeCustomer(user.email, user.name || undefined);
      customerId = customer.id;

      await prisma.user.update({
        where: { id: user.id },
        data: { stripeCustomerId: customerId },
      });
    }

    // Create checkout session
    const checkoutSession = await createCheckoutSession(
      customerId,
      PLANS.PRO.priceId,
      user.id
    );

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
