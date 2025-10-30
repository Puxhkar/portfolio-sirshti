import nodemailer from 'nodemailer';
import prisma from './prisma';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

async function sendEmail(options, type, userId) {
  try {
    // Send email
    const info = await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME || 'MindReader Biotech'}" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    });

    // Log email
    await prisma.emailLog.create({
      data: {
        userId,
        email: options.to,
        type: type,
        subject: options.subject,
        status: 'SENT',
        sentAt: new Date(),
        metadata: {
          messageId: info.messageId,
        },
      },
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email send error:', error);

    // Log failed email
    await prisma.emailLog.create({
      data: {
        userId,
        email: options.to,
        type: type,
        subject: options.subject,
        status: 'FAILED',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
    });

    return { success: false, error };
  }
}

// Welcome Email
export async function sendWelcomeEmail(email, name) {
  const html = `
    <DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; padding: 12px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to MindReader Biotech 🧬</h1>
          </div>
          <div class="content">
            <h2>Hi ${name},</h2>
            <p>Thank you for joining MindReader Biotech We're excited to have you on board.</p>
            <p>We're bridging science and markets in biotechnology, and we're thrilled you're part of our community.</p>
            
            <h3>What's Next?</h3>
            <ul>
              <li>Complete your profile</li>
              <li>Explore our latest research</li>
              <li>Connect with other researchers</li>
              <li>Stay updated with our newsletter</li>
            </ul>

            <a href="${process.env.NEXTAUTH_URL}/dashboard" class="button">Go to Dashboard</a>

            <p>If you have any questions, feel free to reach out to our support team.</p>
            
            <p>Best regards,<br>The MindReader Biotech Team</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} MindReader Biotech. All rights reserved.</p>
            <p>Bridging Science and Markets in Biotechnology</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const text = `
    Welcome to MindReader Biotech
    
    Hi ${name},
    
    Thank you for joining MindReader Biotech We're excited to have you on board.
    
    Visit your dashboard: ${process.env.NEXTAUTH_URL}/dashboard
    
    Best regards,
    The MindReader Biotech Team
  `;

  return sendEmail(
    {
      to: email,
      subject: 'Welcome to MindReader Biotech 🧬',
      html,
      text,
    },
    'WELCOME'
  );
}

// Login Notification Email
export async function sendLoginNotification(email, name, location) {
  const html = `
    <DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #667eea; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .alert { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🔐 New Login Detected</h2>
          </div>
          <div class="content">
            <p>Hi ${name},</p>
            <p>We detected a new login to your MindReader Biotech account.</p>
            
            <div class="alert">
              <strong>Login Details:</strong><br>
              Time: ${new Date().toLocaleString()}<br>
              ${location ? `Location: ${location}<br>` : ''}
            </div>

            <p>If this was you, you can safely ignore this email.</p>
            <p>If you didn't log in, please secure your account immediately by changing your password.</p>
            
            <p>Best regards,<br>MindReader Biotech Security Team</p>
          </div>
        </div>
      </body>
    </html>
  `;

  return sendEmail(
    {
      to: email,
      subject: '🔐 New Login to Your Account',
      html,
    },
    'LOGIN_NOTIFICATION'
  );
}

// Password Reset Email
export async function sendPasswordResetEmail(email, resetToken) {
  const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${resetToken}`;

  const html = `
    <DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #667eea; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; padding: 12px 30px; background: #dc3545; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .warning { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🔑 Password Reset Request</h2>
          </div>
          <div class="content">
            <p>You requested to reset your password for your MindReader Biotech account.</p>
            
            <p>Click the button below to reset your password:</p>
            <a href="${resetUrl}" class="button">Reset Password</a>

            <div class="warning">
              <strong>⚠️ Security Notice:</strong><br>
              This link will expire in 1 hour.<br>
              If you didn't request this, please ignore this email.
            </div>

            <p>Or copy and paste this URL into your browser:</p>
            <p style="word-break: break-all; color: #666;">${resetUrl}</p>
          </div>
        </div>
      </body>
    </html>
  `;

  return sendEmail(
    {
      to: email,
      subject: '🔑 Reset Your Password',
      html,
    },
    'PASSWORD_RESET'
  );
}

// Verification Email
export async function sendVerificationEmail(email, verificationToken) {
  const verifyUrl = `${process.env.NEXTAUTH_URL}/auth/verify?token=${verificationToken}`;

  const html = `
    <DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; padding: 12px 30px; background: #28a745; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✉️ Verify Your Email</h1>
          </div>
          <div class="content">
            <p>Thank you for signing up with MindReader Biotech</p>
            <p>Please verify your email address by clicking the button below:</p>
            
            <a href="${verifyUrl}" class="button">Verify Email</a>

            <p>Or copy and paste this URL into your browser:</p>
            <p style="word-break: break-all; color: #666;">${verifyUrl}</p>

            <p>This link will expire in 24 hours.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  return sendEmail(
    {
      to: email,
      subject: '✉️ Verify Your Email Address',
      html,
    },
    'VERIFICATION'
  );
}

export default transporter;
