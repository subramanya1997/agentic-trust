import { Header } from "@/components/landing/Header";
import { ToolAccessHeroSection } from "@/components/landing/ToolAccessHeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { WorksWithAIToolsSection } from "@/components/landing/WorksWithAIToolsSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { Footer } from "@/components/landing/Footer";

export default function AgenticTrustPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <ToolAccessHeroSection />
      <WorksWithAIToolsSection />
      <ProblemSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}
