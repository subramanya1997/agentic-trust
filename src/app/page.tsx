import { Header } from "@/components/landing/Header";
import { ToolAccessHeroSection } from "@/components/landing/ToolAccessHeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { DirectoryRegistrySection } from "@/components/landing/DirectoryRegistrySection";
import { BuiltForTeamsSection } from "@/components/landing/BuiltForTeamsSection";
import { SecurityGovernanceSection } from "@/components/landing/SecurityGovernanceSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { Footer } from "@/components/landing/Footer";

export default function AgenticTrustPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <ToolAccessHeroSection />
      <ProblemSection />
      <DirectoryRegistrySection />
      <BuiltForTeamsSection />
      <SecurityGovernanceSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}
