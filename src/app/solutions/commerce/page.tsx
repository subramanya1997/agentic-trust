import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ShoppingCart, Shield, AlertTriangle, Gauge, Users, Lock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commerce & Consumer Agents — Agentic Trust',
  description: 'Risk and abuse controls for customer-facing AI agents. Built for e-commerce and consumer applications.',
};

const challenges = [
  'Preventing agent abuse by bad actors',
  'Rate limiting without breaking legitimate use',
  'Enforcing policy gates on high-value transactions',
  'Detecting and blocking fraudulent patterns',
  'Balancing autonomy with risk controls',
  'Scaling to millions of users',
];

const capabilities = [
  {
    icon: Gauge,
    title: 'Smart Rate Limiting',
    description: 'Per-user, per-IP, and per-agent rate limits. Adaptive throttling based on behavior patterns and reputation.',
  },
  {
    icon: AlertTriangle,
    title: 'Abuse Detection',
    description: 'Real-time detection of suspicious patterns: credential stuffing, scraping, enumeration attacks, and more.',
  },
  {
    icon: Lock,
    title: 'Transaction Gates',
    description: 'Require additional verification for high-value operations. MFA step-up, fraud scoring, or manual review.',
  },
  {
    icon: Shield,
    title: 'Policy Enforcement',
    description: 'Block agents from executing prohibited actions: unauthorized discounts, inventory manipulation, data exfiltration.',
  },
  {
    icon: Users,
    title: 'User Identity Verification',
    description: 'Link agents to verified user accounts. Revoke access when accounts are flagged or suspended.',
  },
];

export default function CommercePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-brand/10 px-4 py-2 rounded-full mb-6">
                <ShoppingCart className="w-4 h-4 text-brand" />
                <span className="text-sm font-semibold text-brand">Commerce & Consumer</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Risk Controls for Customer-Facing Agents
              </h1>
              <p className="text-xl text-gray-600">
                Prevent abuse, detect fraud, and enforce policy gates on high-risk operations. Built for e-commerce, marketplaces, and consumer applications.
              </p>
            </div>

            {/* Challenges */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Commerce Security Challenges</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {challenges.map((challenge) => (
                  <div key={challenge} className="bg-white rounded-lg p-6 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{challenge}</span>
                    </div>
                  </div>
                ))}
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

            {/* Use Cases */}
            <div className="bg-gray-900 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">Commerce Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">E-commerce</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Shopping assistants with fraud prevention and policy gates
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Product recommendation agents</li>
                    <li>• Checkout automation with fraud checks</li>
                    <li>• Returns & refunds processing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Support bots with rate limiting and abuse detection
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Ticket triage agents</li>
                    <li>• FAQ and knowledge base bots</li>
                    <li>• Escalation automation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Marketplaces</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Multi-sided platforms with seller and buyer protection
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Listing moderation agents</li>
                    <li>• Transaction monitoring</li>
                    <li>• Dispute resolution bots</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <span className="font-semibold">Note:</span> Agentic Trust is not affiliated with HUMAN Security's "AgenticTrust" commerce fraud product. We focus on IAM, policy enforcement, and audit for AI agents in commerce applications.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

