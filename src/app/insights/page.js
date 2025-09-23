export const metadata = {
  title: "Insights - MindReaderBio",
  description: "Latest biotech insights, market analysis, and research developments from MindReaderBio experts.",
};

import Link from "next/link";

export default function Insights() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Biotech Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our expert analysis of emerging therapies, market trends, 
            and breakthrough research in biotechnology
          </p>
        </div>

        {/* Featured Insight */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full font-medium">
              Featured
            </span>
            <span className="text-gray-500 text-sm">{insightPosts[0].date}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            {insightPosts[0].title}
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {insightPosts[0].excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">By {insightPosts[0].author}</span>
            <Link 
              href={`/insights/${insightPosts[0].slug}`}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Read Article
            </Link>
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {insightPosts.slice(1).map((post, index) => (
            <article key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full font-medium">
                  {post.category}
                </span>
                <span className="text-gray-500 text-xs">{post.date}</span>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-3 hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">By {post.author}</span>
                <Link 
                  href={`/insights/${post.slug}`}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest biotech insights, market analysis, and breakthrough research delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const insightPosts = [
  {
    title: "CRISPR 3.0: Next-Generation Gene Editing Technologies",
    excerpt: "Exploring the latest advances in gene editing technology and their potential impact on therapeutic development and market opportunities.",
    author: "Dr. Sarah Chen",
    date: "Dec 15, 2024",
    category: "Technology",
    slug: "crispr-3-next-generation-gene-editing"
  },
  {
    title: "FDA Fast Track Designations: Q4 2024 Analysis",
    excerpt: "Comprehensive analysis of recent FDA fast track designations and what they mean for biotech investors and pharmaceutical companies.",
    author: "Michael Rodriguez",
    date: "Dec 12, 2024",
    category: "Regulatory",
    slug: "fda-fast-track-designations-q4-2024"
  },
  {
    title: "Immunotherapy Market Outlook: $200B by 2030",
    excerpt: "Market analysis of the growing immunotherapy sector, key players, and investment opportunities in cancer treatment innovations.",
    author: "Lisa Wang",
    date: "Dec 10, 2024",
    category: "Market Analysis",
    slug: "immunotherapy-market-outlook-200b-2030"
  },
  {
    title: "Biotech IPO Trends: What to Watch in 2025",
    excerpt: "Analysis of biotech IPO performance and predictions for upcoming public offerings in the biotechnology sector.",
    author: "Amanda Foster",
    date: "Dec 8, 2024",
    category: "Investment",
    slug: "biotech-ipo-trends-what-to-watch-2025"
  },
  {
    title: "AI-Driven Drug Discovery: Reducing Time to Market",
    excerpt: "How artificial intelligence is revolutionizing drug discovery processes and creating new opportunities for biotech companies.",
    author: "Dr. James Thompson",
    date: "Dec 5, 2024",
    category: "Innovation",
    slug: "ai-driven-drug-discovery-reducing-time-to-market"
  },
  {
    title: "Rare Disease Therapeutics: Untapped Potential",
    excerpt: "Exploring the growing market for rare disease treatments and the regulatory advantages driving investment in orphan drugs.",
    author: "Dr. Robert Kim",
    date: "Dec 3, 2024",
    category: "Therapeutics",
    slug: "rare-disease-therapeutics-untapped-potential"
  }
];
