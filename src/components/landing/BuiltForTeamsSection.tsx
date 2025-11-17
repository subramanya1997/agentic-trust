import React from 'react';
import { Wrench, ShieldAlert, Sparkles } from 'lucide-react';
import { PersonaCard } from '@/components/ui/persona-card';
import { SectionContainer } from '@/components/ui/section-container';

export const BuiltForTeamsSection = () => {
  return (
    <SectionContainer background="gradient" padding="lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Built for Teams
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Every team gets what they need to move fast and stay secure
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PersonaCard
          persona="Platform & Infra Teams"
          role="Deploy and scale with confidence"
          icon={Wrench}
          benefits={[
            'Self-service agent provisioning',
            'Centralized policy management',
            'Infrastructure-as-code support',
            'Multi-tenant isolation',
            'Usage monitoring and cost tracking',
          ]}
        />

        <PersonaCard
          persona="Security Engineering"
          role="Enforce governance without friction"
          icon={ShieldAlert}
          benefits={[
            'Fine-grained access controls',
            'Real-time threat detection',
            'Compliance audit trails',
            'Automated policy enforcement',
            'Incident response workflows',
          ]}
          variant="highlighted"
        />

        <PersonaCard
          persona="AI App Teams"
          role="Build agents that just work"
          icon={Sparkles}
          benefits={[
            'Simple SDK integration',
            'Pre-built policy templates',
            'Local development tools',
            'Production-ready defaults',
            'Debugging and observability',
          ]}
        />
      </div>
    </SectionContainer>
  );
};

