import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { PathsSection } from "@/components/paths-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <main id="main-content" className="relative">
      <HeroSection />
      <FeaturesSection />
      <PathsSection />
      <CTASection />
    </main>
  );
}
