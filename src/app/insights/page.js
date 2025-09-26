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
            We are providing a mixed portfolio of names we think will do well but are fairly well researched so we will provide the names without any fundamental or technical comment and let our subscribers know when we make changes in the general portfolio. All stocks in any of our portfolios will be in Dr Forsyth’s active portfolio.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {insightPosts.map((post, index) => (
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
      </div>
    </div>
  );
}

// Biotech Portfolio Data
const insightPosts = [
  {
    title: "BDTX (Black Diamond Therapeutics)",
    excerpt: "Innovating precision oncology with MasterKey therapies targeting oncogenic mutations.",
    author: "Portfolio Analyst",
    date: "2025-09-26",
    category: "Oncology",
    slug: "bdtx-black-diamond-therapeutics"
  },
  {
    title: "IBRX (ImmunityBio)",
    excerpt: "Advancing next-generation immunotherapies to empower the immune system against cancer.",
    author: "Portfolio Analyst",
    date: "2025-09-26",
    category: "Immunotherapy",
    slug: "ibrx-immunitybio"
  },
  {
    title: "TEM (Tempus AI)",
    excerpt: "Leveraging AI-driven diagnostics to revolutionize personalized medicine.",
    author: "Portfolio Analyst",
    date: "2025-09-26",
    category: "Diagnostics",
    slug: "tem-tempus-ai"
  },
  {
    title: "ELTX (Elicio Therapeutics)",
    excerpt: "Pioneering off-the-shelf cancer vaccines through novel immunotherapy platforms.",
    author: "Portfolio Analyst",
    date: "2025-09-26",
    category: "Immunotherapy",
    slug: "eltx-elicio-therapeutics"
  },
  {
    title: "PGEN (Precigen)",
    excerpt: "Harnessing synthetic biology to develop precision gene and cell therapies.",
    author: "Portfolio Analyst",
    date: "2025-09-26",
    category: "Gene Therapy",
    slug: "pgen-precigen"
  },
  {
    title: "NKTR (Nektar Therapeutics)",
    excerpt: "Modulating the immune system to address autoimmune and inflammatory diseases.",
    author: "Portfolio Analyst",
    date: "2025-09-26",
    category: "Immunotherapy",
    slug: "nktr-nektar-therapeutics"
  },
  {
    title: "NUVB (Nuvation Bio)",
    excerpt: "Tackling unmet needs in oncology with differentiated therapeutic candidates.",
    author: "Portfolio Analyst",
    date: "2025-09-26",
    category: "Oncology",
    slug: "nuvb-nuvation-bio"
  },
  {
    title: "ARDX (Ardelyx)",
    excerpt: "Delivering first-in-class medicines for patients with unmet medical needs.",
    author: "Portfolio Analyst",
    date: "2025-09-26",
    category: "Pharmaceuticals",
    slug: "ardx-ardelyx"
  },
  {
    title: "RNA (BioNTech)",
    excerpt: "Pioneering mRNA-based therapies for infectious diseases and cancer.",
    author: "Portfolio Analyst",
    date: "2025-09-26",
    category: "mRNA Therapy",
    slug: "rna-biontech"
  },
  {
    title: "MRUS (Merus)",
    excerpt: "Developing bispecific antibody therapeutics to treat cancer.",
    author: "Portfolio Analyst",
    date: "2025-09-26",
    category: "Antibody Therapy",
    slug: "mrus-merus"
  },
  {
    title: "CLYM (Calyxt)",
    excerpt: "Utilizing gene editing to improve plant-based food ingredients.",
    author: "Portfolio Analyst",
    date: "2025-09-26",
    category: "Gene Editing",
    slug: "clym-calyxt"
  },
  {
    title: "INSM (Insmed)",
    excerpt: "Addressing rare diseases with targeted therapies.",
    author: "Portfolio Analyst",
    date: "2025-09-26",
    category: "Rare Diseases",
    slug: "insm-insmed"
  },
  {
    title: "REPL (Replimune)",
    excerpt: "Advancing oncolytic immunotherapies to treat solid tumors.",
    author: "Portfolio Analyst",
    date: "2025-09-26",
    category: "Immunotherapy",
    slug: "repl-replimune"
  },
  {
    title: "INKT (Inovio Pharmaceuticals)",
    excerpt: "Developing DNA medicines to treat cancers and infectious diseases.",
    author: "Portfolio Analyst",
    date: "2025-09-26",
    category: "DNA Therapy",
    slug: "inkt-inovio-pharmaceuticals"
  },
  {
    title: "APVO (Aptevo Therapeutics)",
    excerpt: "Creating immunotherapies for cancer and autoimmune diseases.",
    author: "Portfolio Analyst",
    date: "2025-09-26",
    category: "Immunotherapy",
    slug: "apvo-aptevo-therapeutics"
  },
  {
    title: "URGN (UroGen Pharma)",
    excerpt: "Developing therapies for uro-oncology, focusing on bladder cancer.",
    author: "Portfolio Analyst",
    date: "2025-09-26",
    category: "Oncology",
    slug: "urgn-urogen-pharma"
  }
];
