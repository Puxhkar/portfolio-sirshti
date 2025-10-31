'use cache';

/**
 * Next.js 16 Demo Page
 * 
 * This page demonstrates all the new Next.js 16 features:
 * - Cache Components with "use cache" directive
 * - Turbopack for faster builds
 * - New caching APIs
 * - React 19.2 features
 */

import { Suspense } from 'react';
import CachedBlogPosts from '../components/cache-examples/CachedBlogPosts';
import CachedUserProfile from '../components/cache-examples/CachedUserProfile';
import { getAnalyticsData } from '../lib/cached-functions';

export const metadata = {
  title: 'Next.js 16 Features Demo | MindReader Biotech',
  description: 'Explore the latest Next.js 16 features including Cache Components, Turbopack, and improved caching APIs.',
};

export default async function NextJS16DemoPage() {
  // This entire page is cached due to "use cache" directive at the top
  const analytics = await getAnalyticsData('7d');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Next.js 16 Features Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of Cache Components, Turbopack, and the latest React 19.2 features
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-8 mb-16">
          {/* Cache Components Section */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Cache Components</h2>
                <p className="text-gray-600">Explicit caching with "use cache" directive</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Page-Level</h3>
                <p className="text-sm text-blue-700">Cache entire pages for maximum performance</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 mb-2">Component-Level</h3>
                <p className="text-sm text-purple-700">Cache individual components independently</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">Function-Level</h3>
                <p className="text-sm text-green-700">Cache expensive computations and API calls</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Note:</strong> This entire page is cached using the "use cache" directive at the top of the file.
                Subsequent visits will load instantly from cache.
              </p>
            </div>
          </section>

          {/* Turbopack Section */}
          <section className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold">Turbopack</h2>
                <p className="text-white/90">5-10x faster builds and HMR</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <h3 className="font-semibold mb-2">Build Performance</h3>
                <p className="text-sm text-white/90">Dramatically faster build times for large applications</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <h3 className="font-semibold mb-2">Filesystem Caching</h3>
                <p className="text-sm text-white/90">Minutes to seconds for subsequent builds</p>
              </div>
            </div>
          </section>

          {/* Analytics Dashboard */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Analytics Dashboard</h2>
            <p className="text-gray-600 mb-6">
              This data is fetched using a cached function with the "use cache" directive
            </p>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                <p className="text-sm opacity-90 mb-1">Total Users</p>
                <p className="text-3xl font-bold">{analytics.totalUsers.toLocaleString()}</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
                <p className="text-sm opacity-90 mb-1">Active Users</p>
                <p className="text-3xl font-bold">{analytics.activeUsers.toLocaleString()}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                <p className="text-sm opacity-90 mb-1">Revenue</p>
                <p className="text-3xl font-bold">${(analytics.revenue / 1000).toFixed(1)}k</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white">
                <p className="text-sm opacity-90 mb-1">Conversion</p>
                <p className="text-3xl font-bold">{analytics.conversionRate}%</p>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              Last updated: {new Date(analytics.lastUpdated).toLocaleString()}
            </p>
          </section>

          {/* Cached Components Demo */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cached Components</h2>
            
            <div className="space-y-8">
              {/* User Profile Component */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Component-Level Caching</h3>
                <Suspense fallback={<LoadingSkeleton />}>
                  <CachedUserProfile userId="user-123" />
                </Suspense>
              </div>

              {/* Blog Posts Component */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Cached Blog Posts</h3>
                <Suspense fallback={<LoadingSkeleton />}>
                  <CachedBlogPosts />
                </Suspense>
              </div>
            </div>
          </section>

          {/* New Caching APIs */}
          <section className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">New Caching APIs</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                <h3 className="font-semibold text-lg mb-2">revalidateTag()</h3>
                <p className="text-sm text-white/90 mb-3">
                  Background revalidation with stale-while-revalidate
                </p>
                <code className="text-xs bg-black/20 px-2 py-1 rounded">
                  revalidateTag('posts', 'max')
                </code>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                <h3 className="font-semibold text-lg mb-2">updateTag()</h3>
                <p className="text-sm text-white/90 mb-3">
                  Immediate cache updates for Server Actions
                </p>
                <code className="text-xs bg-black/20 px-2 py-1 rounded">
                  updateTag('user-123')
                </code>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                <h3 className="font-semibold text-lg mb-2">refresh()</h3>
                <p className="text-sm text-white/90 mb-3">
                  Refresh uncached dynamic data only
                </p>
                <code className="text-xs bg-black/20 px-2 py-1 rounded">
                  refresh()
                </code>
              </div>
            </div>
          </section>

          {/* React 19.2 Features */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">React 19.2 Features</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">View Transitions</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Smooth page transitions with the View Transitions API
                </p>
                <div className="bg-gray-50 rounded p-3">
                  <code className="text-xs text-gray-700">
                    document.startViewTransition()
                  </code>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">useEffectEvent()</h3>
                <p className="text-gray-600 text-sm mb-3">
                  New hook for event handlers without re-renders
                </p>
                <div className="bg-gray-50 rounded p-3">
                  <code className="text-xs text-gray-700">
                    const onClick = useEffectEvent(...)
                  </code>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">React Compiler</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Automatic memoization for better performance
                </p>
                <div className="bg-gray-50 rounded p-3">
                  <code className="text-xs text-gray-700">
                    // No manual useMemo needed
                  </code>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Activity Component</h3>
                <p className="text-gray-600 text-sm mb-3">
                  New component for loading states
                </p>
                <div className="bg-gray-50 rounded p-3">
                  <code className="text-xs text-gray-700">
                    {'<Activity fallback={...} />'}
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* Documentation Links */}
          <section className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Documentation & Resources</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="/NEXT_JS_16_UPGRADE_GUIDE.md" 
                className="bg-white/10 rounded-lg p-4 backdrop-blur hover:bg-white/20 transition-colors"
              >
                <h3 className="font-semibold mb-2">📚 Complete Upgrade Guide</h3>
                <p className="text-sm text-white/80">Comprehensive migration documentation</p>
              </a>
              
              <a 
                href="/NEXT_JS_16_QUICK_REFERENCE.md" 
                className="bg-white/10 rounded-lg p-4 backdrop-blur hover:bg-white/20 transition-colors"
              >
                <h3 className="font-semibold mb-2">⚡ Quick Reference</h3>
                <p className="text-sm text-white/80">Fast lookup for common patterns</p>
              </a>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600">
          <p className="text-sm">
            Built with Next.js 16 • React 19.2 • Turbopack
          </p>
          <p className="text-xs mt-2">
            MindReader Biotech • Bridging Science and Markets
          </p>
        </div>
      </div>
    </div>
  );
}

// Loading skeleton component
function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-32 bg-gray-200 rounded-lg"></div>
    </div>
  );
}
