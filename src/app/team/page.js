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
          Looking Ahead
Mindreader is in its establishment phase, with a mission to grow into a trusted partner at the intersection of science and finance. As our team expands, we look forward to welcoming new collaborators who share our passion for innovation.

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
    name: "Dr. Srishti Gupta",
    role: "Chief Science Officer",
    description: "Dr. Srishti Gupta is the Chief Science Officer (CSO) at Mindreader Enterprises, where she leads the company’s scientific vision and strategy. She holds a Ph.D. in Biological sciences from Colorado State University and a Master’s degree in Biotechnology.Her research background spans molecular biology, protein biochemistry, and cell biology, with extensive experience in recombinant protein expression, RNA sequencing, and functional genomics. Dr. Gupta also brings expertise in translational research, bridging fundamental discoveries with applied outcomes. At Mindreader, she leverages her scientific training to evaluate biotechnology pipelines, analyze emerging therapies, and translate complex research into actionable insights for investors and stakeholders. ",
    icon: "👩‍🔬"
  },
  {
    name: "Dr. Joshua Dloomy, MD", 
    role: "Chief Technology Officer",
    description: "Dr. Joshua Dloomy serves as Chief Technology Officer (CTO) at Mindreader Enterprises, bringing a unique blend of medical expertise, technological vision, and market insight. With deep knowledge of human immunology, a passion for biotech innovation, and strong experience in trading and market analysis, he drives the company’s technology strategy and research platforms.At Mindreader, Dr. Dloomy combines his clinical background with biotech market expertise to ensure that our analyses and tools are scientifically robust and strategically aligned with industry needs",
    icon: "📊"
  },
  {
    name: "[Founder’s Name]",
    role: "Founder & CEO ", 
    description: "[Founder’s Name] is the visionary behind Mindreader Enterprises, with a passion for bridging the gap between scientific innovation and market strategy. With experience in [finance/biotech/entrepreneurship – adjust as needed], [he/she/they] founded Mindreader to provide investors and stakeholders with reliable, science-based insights into one of the fastest-growing industries in the world.",
    icon: "🤖"
  }
];
