import Link from 'next/link';
import { Shield, Key, Eye, Server } from 'lucide-react';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product — Secure AI Agent Infrastructure',
  description: 'Identity, policy enforcement, and observability for AI agents. Built for MCP and enterprise security.',
};

const productAreas = [
  {
    id: 'access-control',
    name: 'Access Control & Policy',
    icon: Shield,
    description: 'Fine-grained permissions, role-based access, and dynamic policy enforcement',
    features: [
      'Role-to-tool permission mapping',
      'Tenant isolation and scoping',
      'Conditional policies (time, environment, IP)',
      'Rate limiting per agent/role',
      'Egress control and DLP',
    ],
    href: '/product/access-control',
  },
  {
    id: 'identity',
    name: 'Identity & Auth',
    icon: Key,
    description: 'Verifiable agent identities with seamless IdP integration',
    features: [
      'IdP mapping (Okta, Entra, Google)',
      'Service account management',
      'Signed agent credentials',
      'Automatic key rotation',
      'SAML, SCIM, OIDC support',
    ],
    href: '/product/identity',
  },
  {
    id: 'observability',
    name: 'Observability & Audit',
    icon: Eye,
    description: 'End-to-end tracing and tamper-evident audit logs',
    features: [
      'Agent action tracing',
      'Immutable audit logs',
      'Cross-stack attribution',
      'Incident timelines',
      'SIEM export integration',
    ],
    href: '/product/observability',
  },
  {
    id: 'mcp',
    name: 'MCP Orchestration',
    icon: Server,
    description: 'Secure deployment and management for MCP servers',
    features: [
      'MCP server registry',
      'Deployment boundaries',
      'Tenant isolation',
      'Safe defaults and guardrails',
      'Compatible with existing servers',
    ],
    href: '/product/mcp-orchestration',
  },
];

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Product
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete infrastructure for secure, governed AI agents. Identity, policy, observability, and orchestration in one platform.
              </p>
            </div>

            {/* Product Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {productAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <Link
                    key={area.id}
                    href={area.href}
                    className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-brand hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-brand" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand transition-colors">
                          {area.name}
                        </h2>
                        <p className="text-gray-600">{area.description}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {area.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-brand mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to secure your agents?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with Agentic Trust today. Deploy in minutes, scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://calendly.com/subramanya1997/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-brand text-white rounded-lg font-semibold hover:bg-brand/90 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="https://calendly.com/subramanya1997/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

