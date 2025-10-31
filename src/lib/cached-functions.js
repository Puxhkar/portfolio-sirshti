'use cache';

/**
 * Next.js 16 Function-Level Caching Examples
 * 
 * These functions demonstrate function-level caching with the "use cache" directive.
 * Perfect for expensive computations or API calls that don't change frequently.
 * 
 * Cache keys are automatically generated based on function parameters.
 */

/**
 * Cached function for fetching product recommendations
 * Results are cached per userId
 */
export async function getProductRecommendations(userId) {
  console.log(`Fetching recommendations for user: ${userId}`);
  
  // Simulate expensive computation
  await new Promise(resolve => setTimeout(resolve, 200));
  
  const userPreferences = await fetchUserPreferences(userId);
  const recommendations = await computeRecommendations(userPreferences);
  
  return recommendations;
}

/**
 * Cached function for analytics data
 * Perfect for dashboard metrics that update periodically
 */
export async function getAnalyticsData(timeRange = '7d') {
  console.log(`Fetching analytics for: ${timeRange}`);
  
  // Simulate database aggregation
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return {
    totalUsers: 1250,
    activeUsers: 890,
    revenue: 45000,
    conversionRate: 3.2,
    timeRange,
    lastUpdated: new Date().toISOString(),
  };
}

/**
 * Cached function for complex calculations
 * Results are memoized based on input parameters
 */
export async function calculateBiotechMetrics(sampleData) {
  console.log('Computing biotech metrics...');
  
  // Simulate complex scientific calculations
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    efficacy: 87.5,
    safety: 92.3,
    stability: 89.1,
    purity: 95.8,
    computedAt: new Date().toISOString(),
  };
}

/**
 * Cached function for fetching external API data
 * Reduces API calls and improves response time
 */
export async function getMarketData(symbol) {
  console.log(`Fetching market data for: ${symbol}`);
  
  // Simulate external API call
  await new Promise(resolve => setTimeout(resolve, 150));
  
  return {
    symbol,
    price: 125.50,
    change: 2.3,
    volume: 1500000,
    marketCap: '5.2B',
    lastUpdated: new Date().toISOString(),
  };
}

// Helper functions (not cached)
async function fetchUserPreferences(userId) {
  return {
    categories: ['biotech', 'research', 'innovation'],
    interests: ['neural-interfaces', 'gene-therapy'],
  };
}

async function computeRecommendations(preferences) {
  return [
    { id: 1, title: 'Neural Interface Research Paper', relevance: 0.95 },
    { id: 2, title: 'Gene Therapy Breakthrough', relevance: 0.89 },
    { id: 3, title: 'Biotech Investment Trends', relevance: 0.82 },
  ];
}
