import { BackgroundBeams } from "@/components/ui/background-beams";

export const metadata = {
  title: "About - MindReaderBio",
  description: "Learn about MindReader Enterprises and our mission to bridge science and markets in biotechnology.",
};

export default function About() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center antialiased">
      <BackgroundBeams />
      <div className="max-w-4xl mx-auto p-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About MindReaderBio
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Pioneering the future of biotech intelligence through scientific rigor and market insight
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg p-6 border border-neutral-800">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-neutral-300 leading-relaxed">
              MindReader Enterprises is dedicated to strategic biotech market analysis and innovation. 
              We provide insights into emerging therapies, breakthrough research, and FDA clinical 
              developments to guide investors and industry stakeholders in making informed decisions.
            </p>
          </div>

          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg p-6 border border-neutral-800">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
            <p className="text-neutral-300 leading-relaxed">
              To become the leading intelligence platform that bridges the gap between scientific 
              innovation and market opportunities, enabling smarter investments and accelerating 
              biotechnology advancement for global health impact.
            </p>
          </div>
        </div>

        <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg p-8 border border-neutral-800">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧬</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Scientific Rigor</h3>
              <p className="text-neutral-400">
                Evidence-based analysis grounded in peer-reviewed research and clinical data
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Market Intelligence</h3>
              <p className="text-neutral-400">
                Deep market insights combining financial analysis with scientific understanding
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation Focus</h3>
              <p className="text-neutral-400">
                Identifying breakthrough technologies that will shape the future of healthcare
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
