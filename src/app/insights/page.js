import { BackgroundBeams } from "@/components/ui/background-beams";

export const metadata = {
  title: "Insights - MindReaderBio",
  description: "Latest biotech insights, market analysis, and research developments from MindReaderBio experts.",
};

export default function Insights() {
  return (
    <div className="min-h-screen relative bg-black">
      <BackgroundBeams />
      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Biotech Insights
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Stay ahead with our expert analysis of emerging therapies, market trends, 
            and breakthrough research in biotechnology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-neutral-900/50 backdrop-blur-sm rounded-lg p-6 border border-neutral-800 hover:border-green-500/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                  {post.category}
                </span>
                <span className="text-neutral-500 text-sm">{post.date}</span>
              </div>
              
              <h2 className="text-xl font-semibold text-white mb-3 hover:text-green-400 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-neutral-300 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-400">By {post.author}</span>
                <button className="text-green-400 hover:text-green-300 text-sm font-medium">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-green-500/20 text-green-400 border border-green-500/50 rounded-lg hover:bg-green-500/30 transition-colors">
            Load More Insights
          </button>
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
    category: "Technology"
  },
  {
    title: "FDA Fast Track Designations: Q4 2024 Analysis",
    excerpt: "Comprehensive analysis of recent FDA fast track designations and what they mean for biotech investors and pharmaceutical companies.",
    author: "Michael Rodriguez",
    date: "Dec 12, 2024",
    category: "Regulatory"
  },
  {
    title: "Immunotherapy Market Outlook: $200B by 2030",
    excerpt: "Market analysis of the growing immunotherapy sector, key players, and investment opportunities in cancer treatment innovations.",
    author: "Lisa Wang",
    date: "Dec 10, 2024",
    category: "Market Analysis"
  },
  {
    title: "Biotech IPO Trends: What to Watch in 2025",
    excerpt: "Analysis of biotech IPO performance and predictions for upcoming public offerings in the biotechnology sector.",
    author: "Amanda Foster",
    date: "Dec 8, 2024",
    category: "Investment"
  },
  {
    title: "AI-Driven Drug Discovery: Reducing Time to Market",
    excerpt: "How artificial intelligence is revolutionizing drug discovery processes and creating new opportunities for biotech companies.",
    author: "Dr. James Thompson",
    date: "Dec 5, 2024",
    category: "Innovation"
  },
  {
    title: "Rare Disease Therapeutics: Untapped Potential",
    excerpt: "Exploring the growing market for rare disease treatments and the regulatory advantages driving investment in orphan drugs.",
    author: "Dr. Robert Kim",
    date: "Dec 3, 2024",
    category: "Therapeutics"
  }
];
