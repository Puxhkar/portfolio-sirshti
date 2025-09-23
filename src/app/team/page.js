export const metadata = {
  title: "Team - MindReaderBio",
  description: "Meet the expert team behind MindReaderBio's biotech intelligence platform.",
};

import Link from "next/link";

export default function Team() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Our Expert Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse group of scientists, analysts, and industry experts dedicated to 
            advancing biotech intelligence and market insights
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{member.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2 text-center">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium text-center mb-4">
                {member.role}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="bg-blue-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Join Our Team
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals who share our passion for advancing biotech intelligence. 
            If you&apos;re interested in joining our mission, we&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View Open Positions
          </Link>
        </div>
      </div>
    </div>
  );
}

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Scientific Officer",
    description: "15+ years in biotech research and drug development. Former FDA advisor specializing in oncology therapeutics.",
    icon: "👩‍🔬"
  },
  {
    name: "Michael Rodriguez", 
    role: "Head of Market Analysis",
    description: "Expert in biotech investments and IPO strategies. Previously at Goldman Sachs Healthcare Division.",
    icon: "📊"
  },
  {
    name: "Dr. James Thompson",
    role: "Lead Data Scientist", 
    description: "Developing AI models for drug discovery prediction. PhD in Computational Biology from Stanford.",
    icon: "🤖"
  },
  {
    name: "Lisa Wang",
    role: "VP of Business Development",
    description: "12+ years connecting biotech startups with investors. Former partner at Andreessen Horowitz.",
    icon: "💼"
  },
  {
    name: "Dr. Robert Kim",
    role: "Senior Research Analyst",
    description: "Focusing on rare disease therapeutics and regulatory pathways. Former Genentech researcher.",
    icon: "🧬"
  },
  {
    name: "Amanda Foster",
    role: "Head of Communications",
    description: "Expert in biotech storytelling and stakeholder engagement. Building investor relations.",
    icon: "📢"
  }
];
