import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { Building, Shield, CheckCircle, Users, FileCheck, Lock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Solution — Agentic Trust',
  description: 'Governance at scale for large organizations. Align agent autonomy with corporate policies.',
};

const challenges = [
  'Ensuring agents act within corporate policy boundaries',
  'Managing permissions across thousands of users and agents',
  'Providing audit trails for internal and external regulators',
  'Enforcing approval workflows for high-risk operations',
  'Balancing agent autonomy with organizational governance',
];

const capabilities = [
  {
    icon: Shield,
    title: 'Policy Alignment',
    description: 'Agents inherit certified goals and boundaries from organizational policies. Every action is evaluated against current governance rules.',
  },
  {
    icon: Users,
    title: 'Multi-Tenant Architecture',
    description: 'Isolate agents by department, business unit, or customer. Scale governance across the entire organization without silos.',
  },
  {
    icon: CheckCircle,
    title: 'Approval Workflows',
    description: 'Route high-risk agent actions to human approvers based on role, tool, or risk score. Configurable approval chains.',
  },
  {
    icon: FileCheck,
    title: 'Audit & Compliance',
    description: 'Immutable audit logs with tamper-evident signatures. Export to SIEM or provide direct access to auditors.',
  },
  {
    icon: Lock,
    title: 'Least-Privilege by Default',
    description: 'Start with zero permissions. Grant only what\'s needed based on verified identity and role mapping from your IdP.',
  },
];

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-brand/10 px-4 py-2 rounded-full mb-6">
                <Building className="w-4 h-4 text-brand" />
                <span className="text-sm font-semibold text-brand">Enterprise</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Govern AI Agents at Scale
              </h1>
              <p className="text-xl text-gray-600">
                Align agent autonomy with corporate governance. Multi-tenant, policy-driven architecture for organizations deploying agents across teams and departments.
              </p>
            </div>

            {/* Challenges */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Enterprise Challenges</h2>
              <div className="bg-white rounded-xl p-8 border border-gray-200 max-w-4xl mx-auto">
                <ul className="space-y-4">
                  {challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-brand/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-brand text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Capabilities */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How Agentic Trust Helps</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {capabilities.map((capability) => {
                  const Icon = capability.icon;
                  return (
                    <div key={capability.title} className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-brand" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
                      <p className="text-sm text-gray-600">{capability.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Use Case */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Real-World Example</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  <strong className="text-white">Global Financial Services Firm</strong>
                </p>
                <p>
                  Deployed 500+ internal agents across trading, risk analysis, and customer support. Used Agentic Trust to:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Map agent permissions to existing Active Directory roles</li>
                  <li>• Enforce data residency requirements across regions</li>
                  <li>• Route financial transactions through approval workflows</li>
                  <li>• Provide regulators with tamper-evident audit logs</li>
                </ul>
                <p className="text-sm text-gray-400 mt-6">
                  Result: Passed SOC 2 Type II audit with zero findings related to agent security.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

