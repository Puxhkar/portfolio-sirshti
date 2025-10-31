import { Redis } from '@upstash/redis';

// Initialize Upstash Redis client (optional - only if env vars are set)
export const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

// Session cache helpers
export async function cacheSession(sessionToken, data, ttl = 86400) {
  if (!redis) return;
  await redis.setex(`session:${sessionToken}`, ttl, JSON.stringify(data));
}

export async function getSession(sessionToken) {
  if (!redis) return null;
  const data = await redis.get(`session:${sessionToken}`);
  return data ? JSON.parse(data) : null;
}

export async function deleteSession(sessionToken) {
  if (!redis) return;
  await redis.del(`session:${sessionToken}`);
}

// Rate limiting
export async function checkRateLimit(identifier, limit = 5, window = 60) {
  if (!redis) return true; // Allow if Redis is not configured
  const key = `ratelimit:${identifier}`;
  const current = await redis.incr(key);
  
  if (current === 1) {
    await redis.expire(key, window);
  }
  
  return current <= limit;
}

// Email verification tokens
export async function storeVerificationToken(email, token, ttl = 86400) {
  if (!redis) return;
  await redis.setex(`verify:${email}`, ttl, token);
}

export async function getVerificationToken(email) {
  if (!redis) return null;
  return await redis.get(`verify:${email}`);
}

export async function deleteVerificationToken(email) {
  if (!redis) return;
  await redis.del(`verify:${email}`);
}

// Password reset tokens
export async function storeResetToken(email, token, ttl = 3600) {
  if (!redis) return;
  await redis.setex(`reset:${email}`, ttl, token);
}

export async function getResetToken(email) {
  if (!redis) return null;
  return await redis.get(`reset:${email}`);
}

export async function deleteResetToken(email) {
  if (!redis) return;
  await redis.del(`reset:${email}`);
}

export default redis;
