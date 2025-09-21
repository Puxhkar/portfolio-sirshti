import { NextResponse } from 'next/server';

// Mock team data
const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Chief Scientific Officer",
    bio: "Dr. Chen brings over 15 years of experience in molecular biology and drug discovery. She previously served as research director at leading pharmaceutical companies, where she led breakthrough research in gene therapy and personalized medicine.",
    expertise: ["Molecular Biology", "Drug Discovery", "Gene Therapy"],
    education: "PhD in Molecular Biology, Stanford University",
    image: "/team/sarah-chen.jpg"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Head of Market Analysis",
    bio: "Michael specializes in biotech investments and FDA regulatory pathways. With an MBA from Wharton and CFA certification, he provides deep insights into market trends and investment opportunities in the biotechnology sector.",
    expertise: ["Market Analysis", "Investment Strategy", "Regulatory Affairs"],
    education: "MBA, Wharton School; CFA Certified",
    image: "/team/michael-rodriguez.jpg"
  },
  {
    id: 3,
    name: "Dr. James Thompson",
    title: "Senior Research Analyst",
    bio: "Dr. Thompson brings expertise in clinical trials and therapeutic development. His research focuses on analyzing clinical data and predicting therapeutic success rates across various disease areas.",
    expertise: ["Clinical Trials", "Therapeutic Development", "Data Analysis"],
    education: "PhD in Biochemistry, MIT",
    image: "/team/james-thompson.jpg"
  },
  {
    id: 4,
    name: "Lisa Wang",
    title: "Data Science Lead",
    bio: "Lisa develops AI models for biotech market prediction and drug discovery analytics. As a former Google AI researcher, she specializes in applying machine learning to healthcare and biotechnology challenges.",
    expertise: ["Machine Learning", "AI/ML", "Healthcare Analytics"],
    education: "MS Computer Science, Carnegie Mellon",
    image: "/team/lisa-wang.jpg"
  },
  {
    id: 5,
    name: "Dr. Robert Kim",
    title: "Regulatory Affairs Specialist",
    bio: "Dr. Kim has deep knowledge of FDA approval processes and international biotech regulations. He helps companies navigate complex regulatory landscapes and optimize their approval strategies.",
    expertise: ["FDA Regulations", "International Compliance", "Regulatory Strategy"],
    education: "PharmD, UCSF; MS Regulatory Science",
    image: "/team/robert-kim.jpg"
  },
  {
    id: 6,
    name: "Amanda Foster",
    title: "Business Development Director",
    bio: "Amanda builds strategic partnerships with biotech companies, investors, and research institutions worldwide. She has a proven track record of creating value through strategic alliances and business development.",
    expertise: ["Business Development", "Strategic Partnerships", "International Markets"],
    education: "MBA, Harvard Business School",
    image: "/team/amanda-foster.jpg"
  }
];

export async function GET() {
  try {
    return NextResponse.json({
      team: teamMembers,
      total: teamMembers.length
    });
  } catch (error) {
    console.error('Team API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch team data' },
      { status: 500 }
    );
  }
}
