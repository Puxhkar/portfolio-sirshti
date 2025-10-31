'use server';

/**
 * Next.js 16 Server Actions with New Caching APIs
 * 
 * Demonstrates the use of:
 * - updateTag() for immediate cache updates with read-your-writes semantics
 * - revalidateTag() with cacheLife profiles for background revalidation
 * - refresh() for uncached dynamic data
 */

import { updateCacheTag, revalidateCachedContent, refreshDynamicData, CacheTags } from '../lib/cache-utils';

/**
 * Update user profile with immediate cache update
 * Users see their changes instantly
 */
export async function updateUserProfile(userId, profileData) {
  try {
    // Update database
    // await db.users.update(userId, profileData);
    console.log(`Updating user profile for: ${userId}`, profileData);
    
    // Simulate database update
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Update cache immediately - users see changes right away
    await updateCacheTag(CacheTags.user(userId));
    
    return { success: true, message: 'Profile updated successfully' };
  } catch (error) {
    console.error('Failed to update user profile:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Update blog post with background revalidation
 * Uses stale-while-revalidate for optimal performance
 */
export async function updateBlogPost(postId, postData) {
  try {
    // Update database
    // await db.blogPosts.update(postId, postData);
    console.log(`Updating blog post: ${postId}`, postData);
    
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Revalidate with 'max' profile for long-lived content
    // Users get cached version immediately, revalidation happens in background
    await revalidateCachedContent(CacheTags.blogPost(postId), 'max');
    await revalidateCachedContent(CacheTags.blogPosts(), 'max');
    
    return { success: true, message: 'Blog post updated successfully' };
  } catch (error) {
    console.error('Failed to update blog post:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Mark notification as read and refresh dynamic data
 * Perfect for live counters and real-time updates
 */
export async function markNotificationAsRead(notificationId) {
  try {
    // Update notification in database
    // await db.notifications.markAsRead(notificationId);
    console.log(`Marking notification as read: ${notificationId}`);
    
    await new Promise(resolve => setTimeout(resolve, 50));
    
    // Refresh uncached dynamic data (notification count)
    // Doesn't touch cached page content
    await refreshDynamicData();
    
    return { success: true, message: 'Notification marked as read' };
  } catch (error) {
    console.error('Failed to mark notification as read:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Update product inventory with immediate cache update
 */
export async function updateProductInventory(productId, quantity) {
  try {
    // Update inventory in database
    // await db.products.updateInventory(productId, quantity);
    console.log(`Updating inventory for product: ${productId}`, quantity);
    
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Immediate cache update for inventory-critical operations
    await updateCacheTag(CacheTags.product(productId));
    await updateCacheTag(CacheTags.products());
    
    return { success: true, message: 'Inventory updated successfully' };
  } catch (error) {
    console.error('Failed to update inventory:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Submit form with settings update
 * Demonstrates immediate cache update for user-facing changes
 */
export async function updateUserSettings(userId, settings) {
  try {
    // Update settings in database
    // await db.userSettings.update(userId, settings);
    console.log(`Updating settings for user: ${userId}`, settings);
    
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // User must see their settings changes immediately
    await updateCacheTag(CacheTags.user(userId));
    
    return { success: true, message: 'Settings updated successfully' };
  } catch (error) {
    console.error('Failed to update settings:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Revalidate analytics data with hourly profile
 * Analytics can use slightly stale data for better performance
 */
export async function refreshAnalytics() {
  try {
    console.log('Refreshing analytics cache...');
    
    // Revalidate with 'hours' profile for analytics data
    await revalidateCachedContent(CacheTags.analytics(), 'hours');
    
    return { success: true, message: 'Analytics refreshed successfully' };
  } catch (error) {
    console.error('Failed to refresh analytics:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Bulk revalidation for multiple related entities
 */
export async function revalidateUserContent(userId) {
  try {
    console.log(`Revalidating all content for user: ${userId}`);
    
    // Revalidate multiple related cache tags
    await Promise.all([
      revalidateCachedContent(CacheTags.user(userId), 'max'),
      revalidateCachedContent(CacheTags.subscription(userId), 'hours'),
    ]);
    
    return { success: true, message: 'User content revalidated successfully' };
  } catch (error) {
    console.error('Failed to revalidate user content:', error);
    return { success: false, error: error.message };
  }
}
