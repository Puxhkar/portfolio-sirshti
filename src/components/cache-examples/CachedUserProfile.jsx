'use cache';

/**
 * Next.js 16 Component-Level Caching Example
 * 
 * This component demonstrates component-level caching.
 * Only this component's output is cached, allowing different
 * components on the same page to have different caching strategies.
 * 
 * The cache key is automatically generated based on the component props (userId).
 */

export default async function CachedUserProfile({ userId }) {
  const user = await fetchUser(userId);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
          {user.name.charAt(0)}
        </div>
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <p className="text-gray-700">{user.bio}</p>
        <div className="flex gap-4 text-sm text-gray-500">
          <span>Joined: {new Date(user.joinedAt).toLocaleDateString()}</span>
          <span>Role: {user.role}</span>
        </div>
      </div>
    </div>
  );
}

// Mock user data fetching
async function fetchUser(userId) {
  // Simulate database query
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return {
    id: userId,
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@mindreaderbio.com',
    bio: 'Biotech researcher specializing in neural interfaces and cognitive enhancement.',
    joinedAt: '2024-01-15',
    role: 'Researcher',
  };
}
