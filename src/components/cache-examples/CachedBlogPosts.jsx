'use cache';

/**
 * Next.js 16 Cache Component Example
 * 
 * This component demonstrates page-level caching with the "use cache" directive.
 * The entire component output is cached, making subsequent renders instant.
 * 
 * Perfect for:
 * - Blog post listings
 * - Product catalogs
 * - Static content that doesn't change frequently
 */

export default async function CachedBlogPosts() {
  // Simulate fetching blog posts
  const posts = await fetchBlogPosts();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <article key={post.id} className="rounded-lg border p-6">
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <time className="text-sm text-gray-500">
            {new Date(post.publishedAt).toLocaleDateString()}
          </time>
        </article>
      ))}
    </div>
  );
}

// Mock data fetching function
async function fetchBlogPosts() {
  // In production, this would fetch from your database or CMS
  return [
    {
      id: 1,
      title: 'Understanding Next.js 16 Cache Components',
      excerpt: 'Learn how to use the new cache directive for better performance.',
      publishedAt: '2025-10-21',
    },
    {
      id: 2,
      title: 'Turbopack: The Future of Bundling',
      excerpt: 'Explore how Turbopack makes your builds 5-10x faster.',
      publishedAt: '2025-10-22',
    },
    {
      id: 3,
      title: 'React 19.2 Features',
      excerpt: 'Discover the latest features in React 19.2 and how to use them.',
      publishedAt: '2025-10-23',
    },
  ];
}
