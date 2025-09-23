import { Header } from "@/components/landing/Header";
import { ToolAccessHeroSection } from "@/components/landing/ToolAccessHeroSection";
import { RoleBasedPermissionsSection } from "@/components/landing/RoleBasedPermissionsSection";
import { AgentToolSyncSection } from "@/components/landing/AgentToolSyncSection";
import { CustomToolsSection } from "@/components/landing/CustomToolsSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { Footer } from "@/components/landing/Footer";

export default function AgenticTrustPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <ToolAccessHeroSection />
      <RoleBasedPermissionsSection />
      <AgentToolSyncSection />
      <CustomToolsSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}
