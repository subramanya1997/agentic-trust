import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { DirectorySection } from "@/components/home/DirectorySection";
import { TeamsSection } from "@/components/home/TeamsSection";
import { SecuritySection } from "@/components/home/SecuritySection";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <HeroSection />
      <ProblemSection />
      <DirectorySection />
      <TeamsSection />
      <SecuritySection />
      <CtaSection />
      <Footer />
    </div>
  );
}
