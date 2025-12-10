import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutHero } from '@/components/about/AboutHero';
import { MissionSection } from '@/components/about/MissionSection';
import { BeliefsSection } from '@/components/about/BeliefsSection';
import { TeamSection } from '@/components/about/TeamSection';
import { ValuesSection } from '@/components/about/ValuesSection';
import { AboutCTA } from '@/components/about/AboutCTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Agentic Trust',
  description: 'Making enterprise AI secure, compliant, and fully connected. Built by engineers from Cisco, UC Berkeley, and UMass Amherst.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      
      <main>
        <AboutHero />
        <MissionSection />
        <BeliefsSection />
        <TeamSection />
        <ValuesSection />
        <AboutCTA />
      </main>

      <Footer />
    </div>
  );
}
