import { NextRequest, NextResponse } from 'next/server';
import { auth } from '../../../../lib/auth';
import { createBillingPortalSession } from '../../../../lib/stripe';
import prisma from '../../../../lib/prisma';

export async function POST(req) {
  try {
    const session = await auth();

    if (session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (user?.stripeCustomerId) {
      return NextResponse.json(
        { error: 'No Stripe customer found' },
        { status: 400 }
      );
    }

    const portalSession = await createBillingPortalSession(user.stripeCustomerId);

    return NextResponse.json({ url: portalSession.url });
  } catch (error) {
    console.error('Portal error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
