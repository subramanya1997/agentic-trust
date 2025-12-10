import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { FeaturesBento } from "@/components/home/FeaturesBento";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FAQSection } from "@/components/home/FAQSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <HeroSection />
      <LogoMarquee />
      <FeaturesBento />
      <HowItWorks />
      <FAQSection />
      <Footer />
    </div>
  );
}
