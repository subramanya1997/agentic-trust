import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
// import { UiIsGoneSection } from "@/components/landing/UiIsGoneSection"; // Old import
import { TargetAudienceSection } from "@/components/landing/TargetAudienceSection"; // New import
import { FaqSection } from "@/components/landing/FaqSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { Footer } from "@/components/landing/Footer";

export default function AgenticTrustPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <TargetAudienceSection /> {/* New component usage */}
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}
