/**
 * Next.js 16 Cache Utilities
 * 
 * This module provides utilities for working with Next.js 16's new caching APIs:
 * - revalidateTag() with cacheLife profiles
 * - updateTag() for Server Actions with read-your-writes semantics
 * - refresh() for uncached dynamic data
 */

import { revalidateTag, unstable_updateTag as updateTag, unstable_refresh as refresh } from 'next/cache';

/**
 * Built-in cacheLife profiles for revalidateTag()
 * 
 * - 'max': Long-lived content with background revalidation (recommended for most cases)
 * - 'days': Content that changes daily
 * - 'hours': Content that changes hourly
 * - 'minutes': Frequently changing content
 */
export const CACHE_PROFILES = {
  MAX: 'max',
  DAYS: 'days',
  HOURS: 'hours',
  MINUTES: 'minutes',
};

/**
 * Revalidate cached content with stale-while-revalidate (SWR) behavior
 * 
 * @param {string} tag - The cache tag to revalidate
 * @param {string|object} profile - Built-in profile ('max', 'days', 'hours', 'minutes') or custom config
 * 
 * @example
 * // Use built-in profile
 * await revalidateCachedContent('blog-posts', 'max');
 * 
 * @example
 * // Use custom revalidation time
 * await revalidateCachedContent('products', { revalidate: 3600 });
 */
export async function revalidateCachedContent(tag, profile = CACHE_PROFILES.MAX) {
  try {
    await revalidateTag(tag, profile);
    console.log(`✓ Cache revalidated for tag: ${tag} with profile: ${typeof profile === 'string' ? profile : 'custom'}`);
  } catch (error) {
    console.error(`✗ Failed to revalidate cache for tag: ${tag}`, error);
    throw error;
  }
}

/**
 * Update cache tag for Server Actions with immediate read-your-writes semantics
 * Users see their changes instantly
 * 
 * @param {string} tag - The cache tag to update
 * 
 * @example
 * // In a Server Action
 * 'use server';
 * export async function updateUserProfile(userId, profile) {
 *   await db.users.update(userId, profile);
 *   await updateCacheTag(`user-${userId}`);
 * }
 */
export async function updateCacheTag(tag) {
  try {
    await updateTag(tag);
    console.log(`✓ Cache updated for tag: ${tag}`);
  } catch (error) {
    console.error(`✗ Failed to update cache for tag: ${tag}`, error);
    throw error;
  }
}

/**
 * Refresh uncached dynamic data only (doesn't touch cache)
 * Perfect for live counters, notifications, and real-time metrics
 * 
 * @example
 * // In a Server Action
 * 'use server';
 * export async function markNotificationAsRead(notificationId) {
 *   await db.notifications.markAsRead(notificationId);
 *   await refreshDynamicData(); // Refresh notification count
 * }
 */
export async function refreshDynamicData() {
  try {
    await refresh();
    console.log('✓ Dynamic data refreshed');
  } catch (error) {
    console.error('✗ Failed to refresh dynamic data', error);
    throw error;
  }
}

/**
 * Cache tag generators for consistent naming
 */
export const CacheTags = {
  user: (userId) => `user-${userId}`,
  blogPost: (postId) => `blog-post-${postId}`,
  blogPosts: () => 'blog-posts',
  product: (productId) => `product-${productId}`,
  products: () => 'products',
  analytics: () => 'analytics',
  emailCampaign: (campaignId) => `email-campaign-${campaignId}`,
  emailCampaigns: () => 'email-campaigns',
  subscription: (userId) => `subscription-${userId}`,
  invoice: (invoiceId) => `invoice-${invoiceId}`,
};

/**
 * Helper function to revalidate multiple tags at once
 * 
 * @param {string[]} tags - Array of cache tags to revalidate
 * @param {string|object} profile - Cache profile to use
 * 
 * @example
 * await revalidateMultipleTags(['blog-posts', 'featured-posts'], 'max');
 */
export async function revalidateMultipleTags(tags, profile = CACHE_PROFILES.MAX) {
  try {
    await Promise.all(tags.map(tag => revalidateTag(tag, profile)));
    console.log(`✓ Cache revalidated for ${tags.length} tags`);
  } catch (error) {
    console.error('✗ Failed to revalidate multiple tags', error);
    throw error;
  }
}

/**
 * Conditional cache revalidation based on environment
 * Useful for development vs production caching strategies
 * 
 * @param {string} tag - The cache tag to revalidate
 * @param {object} options - Revalidation options
 */
export async function conditionalRevalidate(tag, options = {}) {
  const {
    devProfile = CACHE_PROFILES.MINUTES,
    prodProfile = CACHE_PROFILES.MAX,
  } = options;

  const profile = process.env.NODE_ENV === 'production' ? prodProfile : devProfile;
  await revalidateCachedContent(tag, profile);
}
