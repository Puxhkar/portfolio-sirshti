import Image from "next/image";
import img1 from './Joshua.jpg';
import img2 from './Srishti.JPG';
// import img3 from './Srishti.JPG';
export const metadata = {
  title: "Team - MindReaderBio",
  description: "Meet the expert team behind MindReaderBio's biotech intelligence platform.",
};

const teamMembers = [
  {
    name: "Dr Forsyth",
    role: "Founder & CEO",
    description: `Dr Forsyth initially studied economics and political science in a B Comm program. After MD and FP training, he founded a successful medical practice in Raleigh, NC, and maintained an interest in financial investing and current economic and political events. He is now a full-time investor focusing on growth companies. Like many smaller focused investors, he has outperformed the conventional averages handily. He has been very concerned with the state of general health in the country and will use this platform to help focus on solutions. He has aligned himself with a brilliant young biotech molecular scientist to try to stratify the complex world of emerging biotech. The risks are high, but the results can be lucrative.`,
    icon: "👩‍🔬",
    image: img1
  },
  {
    name: "Dr. Srishti Gupta",
    role: "Chief Science Officer",
    description: `Dr. Srishti Gupta is the Chief Science Officer (CSO) at Mindreader Enterprises, where she leads the company’s scientific vision and strategy. She holds a Ph.D. in Biological sciences from Colorado State University and a Master’s degree in Biotechnology. Her research background spans molecular biology, protein biochemistry, and cell biology, with extensive experience in recombinant protein expression, RNA sequencing, and functional genomics. Dr. Gupta also brings expertise in translational research, bridging fundamental discoveries with applied outcomes. At Mindreader, she leverages her scientific training to evaluate biotechnology pipelines, analyze emerging therapies, and translate complex research into actionable insights for investors and stakeholders.`,
    icon: "📊",
    image: img2
  },
  {
    name: "Dr. Joshua Dloomy, MD",
    role: "Chief Technology Officer",
    description: `Dr. Joshua Dloomy serves as Chief Technology Officer (CTO) at Mindreader Enterprises, bringing a unique blend of medical expertise, technological vision, and market insight. With deep knowledge of human immunology, a passion for biotech innovation, and strong experience in trading and market analysis, he drives the company’s technology strategy and research platforms. At Mindreader, Dr. Dloomy combines his clinical background with biotech market expertise to ensure that our analyses and tools are scientifically robust and strategically aligned with industry needs.`,
    icon: "🤖",
    image: img1
  }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Our Expert Team
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A diverse group of scientists, analysts, and industry experts dedicated to advancing biotech intelligence and market insights.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <Image
                src={member.image}
                alt={member.name}
                width={208}   // approximate size of w-52 / h-52
                height={208}
                className="object-cover rounded-full mb-6"
              />

              {/* Icon */}
              <div className="text-4xl mb-3">{member.icon}</div>

              {/* Name */}
              <h2 className="text-2xl font-bold text-black mb-1">{member.name}</h2>

              {/* Role */}
              <p className="text-blue-600 font-semibold mb-4">{member.role}</p>

              {/* Description */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
