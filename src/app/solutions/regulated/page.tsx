import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { Shield, FileCheck, Lock, Eye, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { TrustBadge } from '@/components/ui/badge-trust';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Regulated Industries — Agentic Trust',
  description: 'Compliance solutions for FinServ, Healthcare, and Government. SOC 2, HIPAA, GDPR ready.',
};

const regulations = [
  {
    name: 'SOC 2 Type II',
    description: 'Security, availability, processing integrity, confidentiality, and privacy controls',
  },
  {
    name: 'HIPAA',
    description: 'Protected Health Information (PHI) safeguards for healthcare applications',
  },
  {
    name: 'GDPR',
    description: 'Data protection and privacy compliance for EU data subjects',
  },
  {
    name: 'PCI DSS',
    description: 'Payment card data security for financial transactions',
  },
  {
    name: 'FedRAMP',
    description: 'Security assessment for government cloud deployments',
  },
];

const controls = [
  {
    icon: Lock,
    title: 'PII Redaction & DLP',
    description: 'Automatically detect and redact sensitive data (SSN, credit cards, PHI). Block exfiltration attempts in real-time.',
    compliance: ['HIPAA', 'GDPR', 'PCI DSS'],
  },
  {
    icon: Eye,
    title: 'Tamper-Evident Audit Logs',
    description: 'Cryptographically signed logs with chain-of-custody proofs. Meet retention and immutability requirements.',
    compliance: ['SOC 2', 'HIPAA', 'FedRAMP'],
  },
  {
    icon: Shield,
    title: 'Egress Control',
    description: 'Restrict agent outbound connections to approved domains. Prevent unauthorized data transfer.',
    compliance: ['GDPR', 'FedRAMP', 'PCI DSS'],
  },
  {
    icon: FileCheck,
    title: 'Access Controls & Attribution',
    description: 'Role-based permissions with full attribution to human users. Track every action to identity.',
    compliance: ['SOC 2', 'HIPAA', 'GDPR'],
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    description: 'Automated breach detection, timeline reconstruction, and notification workflows.',
    compliance: ['GDPR', 'HIPAA'],
  },
  {
    icon: CheckCircle2,
    title: 'Data Residency',
    description: 'Deploy agents in specific regions. Enforce data locality requirements automatically.',
    compliance: ['GDPR', 'FedRAMP'],
  },
];

export default function RegulatedPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-brand/10 px-4 py-2 rounded-full mb-6">
                <Shield className="w-4 h-4 text-brand" />
                <span className="text-sm font-semibold text-brand">Regulated Industries</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Compliance-Ready AI Agents
              </h1>
              <p className="text-xl text-gray-600">
                Deploy agents in regulated environments with confidence. Built-in controls for SOC 2, HIPAA, GDPR, and industry-specific requirements.
              </p>
            </div>

            {/* Regulations */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Regulatory Standards</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {regulations.map((reg) => (
                  <div key={reg.name} className="bg-white rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{reg.name}</h3>
                    <p className="text-sm text-gray-600">{reg.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Compliance Controls</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {controls.map((control) => {
                  const Icon = control.icon;
                  return (
                    <div key={control.title} className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-brand" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{control.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{control.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {control.compliance.map((comp) => (
                              <span key={comp} className="text-xs px-2 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full">
                                {comp}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Compliance Badges */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Enterprise Security Standards</h2>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <TrustBadge type="saml" label="SAML 2.0" size="lg" />
                <TrustBadge type="scim" label="SCIM 2.0" size="lg" />
                <TrustBadge type="oidc" label="OpenID Connect" size="lg" />
                <TrustBadge type="kms" label="KMS Integration" size="lg" />
                <TrustBadge type="logs" label="Tamper-evident logs" size="lg" />
                <TrustBadge type="isolation" label="Tenant isolation" size="lg" />
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">Currently pursuing SOC 2 Type II certification</p>
                <a 
                  href="/trust" 
                  className="text-brand font-semibold hover:underline"
                >
                  View our Trust Center →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

