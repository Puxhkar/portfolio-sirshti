import { HoverEffect } from "@/components/ui/card-hover-effect";

export const metadata = {
  title: "Team - MindReaderBio",
  description: "Meet the expert team behind MindReaderBio's biotech intelligence platform.",
};

export default function Team() {
  return (
    <div className="min-h-screen bg-black relative">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Expert Team
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            A diverse group of scientists, analysts, and industry experts dedicated to 
            advancing biotech intelligence and market insights
          </p>
        </div>
        
        <HoverEffect items={teamMembers} />
      </div>
    </div>
  );
}

const teamMembers = [
  {
    title: "Dr. Sarah Chen",
    description: "Chief Scientific Officer with 15+ years in molecular biology and drug discovery. Former research director at leading pharma companies.",
    link: "#",
  },
  {
    title: "Michael Rodriguez",
    description: "Head of Market Analysis specializing in biotech investments and FDA regulatory pathways. MBA from Wharton, CFA certified.",
    link: "#",
  },
  {
    title: "Dr. James Thompson",
    description: "Senior Research Analyst with expertise in clinical trials and therapeutic development. PhD in Biochemistry from MIT.",
    link: "#",
  },
  {
    title: "Lisa Wang",
    description: "Data Science Lead developing AI models for biotech market prediction. Former Google AI researcher with focus on healthcare applications.",
    link: "#",
  },
  {
    title: "Dr. Robert Kim",
    description: "Regulatory Affairs Specialist with deep knowledge of FDA approval processes and international biotech regulations.",
    link: "#",
  },
  {
    title: "Amanda Foster",
    description: "Business Development Director building partnerships with biotech companies, investors, and research institutions worldwide.",
    link: "#",
  },
];
