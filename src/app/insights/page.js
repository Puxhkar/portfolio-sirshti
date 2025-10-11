export const metadata = {
  title: "Insights - MindReaderBio",
  description:
    "Latest biotech insights, market analysis, and research developments from MindReaderBio experts.",
};

import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function Insights() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* Intro Section */}
        <div className="mb-12 text-center">
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We feel that there has to be balance in any investment portfolio. We will be providing a general as well as biotech investment portfolio. 
            In order to participate with MindReader stock pick you can connect and subscribe to MindReader.
          </p>
        </div>

        {/* Disclaimer Banner */}
        <div className="mb-12">
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-xl p-4 shadow-sm">
            <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0 text-yellow-600" />
            <p className="text-sm md:text-base leading-relaxed">
              <strong>Disclaimer:</strong> These portfolio names are subject to change. All summaries are for informational purposes only and do not constitute investment advice. We will publish updates on any changes in opinion or portfolio adjustments as they occur.
            </p>
          </div>
        </div>

        {/* General Portfolio */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            General Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a diversified portfolio of companies that we believe have strong potential and are already well-researched.
            To keep things straightforward, we will list the portfolio names without providing detailed fundamental or technical commentary. 
            Subscribers will be notified promptly whenever we make additions, sales, or other changes to the General Portfolio.
            All stocks featured here are part of Dr. Forsyth’s active personal portfolio, reflecting his own market positions.
            <br /><br />
            <strong>Stock prices will be published on the day we go live.</strong>
          </p>
        </div>

        {/* General Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {generalPortfolio.map((stock, index) => (
            <article 
              key={index} 
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full font-medium">
                  {stock.symbol}
                </span>
                <span className="text-gray-500 text-xs">{stock.category}</span>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-3">
                {stock.name}
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                {stock.description}
              </p>
            </article>
          ))}
        </div>

        {/* Biotech Insights Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Biotech Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are providing a mixed portfolio of names we think will do well but are fairly well researched so we will provide the names without any fundamental or technical comment and let our subscribers know when we make changes in the general portfolio. All stocks in any of our portfolios will be in Dr Forsyth’s active portfolio.
          </p>
        </div>

        {/* Biotech Insights Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {insightPosts.map((post, index) => (
            <article 
              key={index} 
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
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
            </article>
          ))}
        </div>

        {/* Informational Line */}
        <div className="bg-gray-50 rounded-2xl p-8 mt-16 mb-8">
          <p className="text-gray-700 text-center text-lg leading-relaxed max-w-4xl mx-auto">
            All these stocks appear in our portfolio but these are not meant to
            be any individual’s portfolio. These are provided for informational
            purposes. The suitability of any of these investments will be
            dependent on individual financial situation and risk tolerance.
          </p>
        </div>

        {/* Disclaimer at Bottom */}
        <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500 max-w-3xl mx-auto">
          <p>
            Disclaimer: The information provided by MindReader Enterprises is
            for educational and informational purposes only and should not be
            considered financial advice. Always do your own due diligence before
            making any investment decisions.
          </p>
        </div>
      </div>
    </div>
  );
}

// General Portfolio Data
const generalPortfolio = [
  {
    symbol: "BA",
    name: "Boeing Co.",
    description: "Global aerospace & defense company. Designs, manufactures, and services commercial airplanes, defense systems, satellites, and global services.",
    category: "Aerospace & Defense"
  },
  {
    symbol: "CRWV",
    name: "CoreWeave, Inc.",
    description: "AI infrastructure / computing services provider. Builds GPU / compute infrastructure for AI workloads, cloud services, etc.",
    category: "AI Infrastructure"
  },
  {
    symbol: "NBIS",
    name: "Nebius Group, N.V.",
    description: "AI / data / cloud computing / infrastructure services.",
    category: "Cloud & Data"
  },
  {
    symbol: "CDE",
    name: "Coeur Mining, Inc.",
    description: "Precious metals producer focused on gold and silver mining across North America.",
    category: "Mining / Metals"
  },
  {
    symbol: "HBM",
    name: "Hudbay Minerals Inc.",
    description: "Diversified mining company producing copper, gold, and zinc across operations in the Americas.",
    category: "Mining / Materials"
  },
  {
    symbol: "HOOD",
    name: "Robinhood Markets, Inc.",
    description: "Commission-free stock and crypto trading platform disrupting traditional brokerages.",
    category: "Fintech / Brokerage"
  },
  {
    symbol: "SNOW",
    name: "Snowflake Inc.",
    description: "Cloud-based data warehousing and analytics platform enabling scalable data solutions.",
    category: "Data / Cloud"
  },
  {
    symbol: "BMNR",
    name: "Brigham Minerals, Inc.",
    description: "Company acquiring and managing mineral and royalty interests in oil and gas assets.",
    category: "Energy / Royalties"
  },
  {
    symbol: "META",
    name: "Meta Platforms, Inc.",
    description: "Parent of Facebook, Instagram, and WhatsApp, investing in AR/VR and the metaverse.",
    category: "Technology / Social Media"
  },
  {
    symbol: "PEGA",
    name: "Pegasystems Inc.",
    description: "Software company providing customer engagement, workflow automation, and AI-driven solutions.",
    category: "Enterprise Software"
  },
  {
    symbol: "UUUU",
    name: "Energy Fuels Inc.",
    description: "Leading U.S. uranium producer with additional vanadium and rare earth recovery projects.",
    category: "Clean Energy / Uranium"
  },
  {
    symbol: "LOW",
    name: "Lowe’s Companies, Inc.",
    description: "Home improvement retailer offering building products, tools, and appliances.",
    category: "Retail / Consumer"
  },
  {
    symbol: "GSAT",
    name: "Globalstar, Inc.",
    description: "Provider of mobile satellite voice and data services worldwide.",
    category: "Communications / Satellite"
  },
  {
    symbol: "OXY",
    name: "Occidental Petroleum Corporation",
    description: "International oil and gas exploration and production company with low-carbon initiatives.",
    category: "Energy / Oil & Gas"
  }
];

// Biotech Insights Data
const insightPosts = [
  {
    title: "BDTX (Black Diamond Therapeutics)",
    excerpt: "Innovating precision oncology with MasterKey therapies targeting oncogenic mutations.",
    author: "Portfolio Analyst",
    date: "2025-09-26",
    category: "Oncology",
    slug: "https://finance.yahoo.com/quote/BDTX"
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
