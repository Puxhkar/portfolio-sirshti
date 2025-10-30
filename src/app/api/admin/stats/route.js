import { NextResponse } from 'next/server';
import { auth } from '../../../lib/auth';
import prisma from '../../../lib/prisma';

export async function GET() {
  try {
    const session = await auth();

    if (!session || (session.user.role !== 'ADMIN' && session.user.role !== 'SUPER_ADMIN')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const [totalUsers, activeUsers, totalEmails, adminUsers] = await Promise.all([
      prisma.user.count(),
      prisma.user.count({
        where: {
          sessions: {
            some: {
              expires: {
                gte: new Date(),
              },
            },
          },
        },
      }),
      prisma.emailLog.count(),
      prisma.user.count({
        where: {
          role: {
            in: ['ADMIN', 'SUPER_ADMIN'],
          },
        },
      }),
    ]);

    return NextResponse.json({
      totalUsers,
      activeUsers,
      totalEmails,
      adminUsers,
    });
  } catch (error) {
    console.error('Stats error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
