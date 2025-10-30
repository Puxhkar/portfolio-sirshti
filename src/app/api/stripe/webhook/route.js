import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { stripe } from '../../../lib/stripe';
import prisma from '../../../lib/prisma';

export async function POST(req) {
  const body = await req.text();
  const headersList = await headers();
  const signature = headersList.get('stripe-signature');

  if (signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        const subscription = await stripe.subscriptions.retrieve(
          session.subscription
        );

        await prisma.user.update({
          where: { id: session.metadata?.userId },
          data: {
            plan: 'PRO',
            stripeSubscriptionId: subscription.id,
            stripePriceId: subscription.items.data[0].price.id,
            stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
          },
        });

        // Send subscription confirmation email
        const user = await prisma.user.findUnique({
          where: { id: session.metadata?.userId },
        });

        if (user) {
          await prisma.emailLog.create({
            data: {
              userId: user.id,
              email: user.email,
              type: 'SUBSCRIPTION_CONFIRMED',
              subject: '🎉 Welcome to Pro',
              status: 'SENT',
              sentAt: new Date(),
            },
          });
        }

        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object;
        const subscription = await stripe.subscriptions.retrieve(
          invoice.subscription
        );

        await prisma.user.update({
          where: { stripeSubscriptionId: subscription.id },
          data: {
            plan: 'PRO',
            stripePriceId: subscription.items.data[0].price.id,
            stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
          },
        });

        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object;

        const user = await prisma.user.findUnique({
          where: { stripeSubscriptionId: invoice.subscription },
        });

        if (user) {
          await prisma.emailLog.create({
            data: {
              userId: user.id,
              email: user.email,
              type: 'PAYMENT_FAILED',
              subject: '⚠️ Payment Failed',
              status: 'SENT',
              sentAt: new Date(),
            },
          });
        }

        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object;

        await prisma.user.update({
          where: { stripeSubscriptionId: subscription.id },
          data: {
            plan: 'FREE',
            stripeSubscriptionId: null,
            stripePriceId: null,
            stripeCurrentPeriodEnd: null,
          },
        });

        break;
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object;

        await prisma.user.update({
          where: { stripeSubscriptionId: subscription.id },
          data: {
            plan: subscription.status === 'active' ? 'PRO' : 'FREE',
            stripePriceId: subscription.items.data[0].price.id,
            stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
          },
        });

        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook handler error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}
