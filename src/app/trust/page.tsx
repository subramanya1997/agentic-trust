import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TrustBadge } from '@/components/ui/badge-trust';
import { Shield, Lock, Eye, CheckCircle, Clock, Server, AlertCircle, FileText } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trust Center — Agentic Trust',
  description: 'Security, compliance, and transparency information. SOC 2, GDPR, data handling policies.',
};

const securityFeatures = [
  {
    icon: Shield,
    title: 'Security Overview',
    description: 'Enterprise-grade security with encryption at rest and in transit, regular penetration testing, and vulnerability management.',
  },
  {
    icon: Lock,
    title: 'Data Protection',
    description: 'Data encrypted using AES-256. TLS 1.3 for all connections. Customer data isolated by tenant with cryptographic boundaries.',
  },
  {
    icon: Eye,
    title: 'Audit & Monitoring',
    description: 'Comprehensive logging of all system access. Real-time security monitoring with automated alerting for anomalies.',
  },
  {
    icon: CheckCircle,
    title: 'Incident Response',
    description: 'Dedicated security incident response team. 24/7 monitoring with defined escalation procedures and customer notification protocols.',
  },
];

const complianceStatus = [
  {
    framework: 'SOC 2 Type II',
    status: 'In Progress',
    description: 'Security, availability, processing integrity audit underway',
    expectedDate: 'Q2 2025',
  },
  {
    framework: 'GDPR',
    status: 'Compliant',
    description: 'Data processing agreements available, EU data residency options',
    expectedDate: null,
  },
  {
    framework: 'ISO 27001',
    status: 'Planned',
    description: 'Information security management system certification',
    expectedDate: 'Q4 2025',
  },
  {
    framework: 'HIPAA',
    status: 'Available',
    description: 'Business Associate Agreement (BAA) available for healthcare customers',
    expectedDate: null,
  },
];

const subprocessors = [
  {
    name: 'Amazon Web Services (AWS)',
    purpose: 'Cloud infrastructure and hosting',
    location: 'United States, Europe',
  },
  {
    name: 'Vercel',
    purpose: 'Application hosting and CDN',
    location: 'United States',
  },
];

export default function TrustCenterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-brand/10 px-4 py-2 rounded-full mb-6">
                <Shield className="w-4 h-4 text-brand" />
                <span className="text-sm font-semibold text-brand">Trust & Security</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Trust Center
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transparency in security, compliance, and data handling. Built for enterprise trust.
              </p>
            </div>

            {/* Security Features */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Security & Privacy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {securityFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-brand" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Standards & Certifications */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Standards & Protocols</h2>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 border border-gray-200">
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <TrustBadge type="saml" label="SAML 2.0" size="lg" />
                  <TrustBadge type="scim" label="SCIM 2.0" size="lg" />
                  <TrustBadge type="oidc" label="OpenID Connect" size="lg" />
                  <TrustBadge type="kms" label="KMS Integration" size="lg" />
                  <TrustBadge type="logs" label="Tamper-evident logs" size="lg" />
                  <TrustBadge type="isolation" label="Tenant isolation" size="lg" />
                  <TrustBadge type="policy" label="Policy as Code" size="lg" />
                </div>
              </div>
            </div>

            {/* Compliance Status */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Compliance Roadmap</h2>
              <div className="space-y-4">
                {complianceStatus.map((item) => (
                  <div key={item.framework} className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{item.framework}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.status === 'Compliant' ? 'bg-green-100 text-green-700' :
                            item.status === 'Available' ? 'bg-blue-100 text-blue-700' :
                            item.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        {item.expectedDate && (
                          <p className="text-xs text-gray-500 mt-2">Expected: {item.expectedDate}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subprocessors */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sub-processors</h2>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Service Provider</th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Purpose</th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subprocessors.map((sub) => (
                      <tr key={sub.name} className="border-b border-gray-100 last:border-0">
                        <td className="py-4 px-6 text-sm text-gray-900">{sub.name}</td>
                        <td className="py-4 px-6 text-sm text-gray-600">{sub.purpose}</td>
                        <td className="py-4 px-6 text-sm text-gray-600">{sub.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Data Location */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Data Location & Residency</h2>
              <div className="bg-white rounded-xl p-8 border border-gray-200 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Primary Regions</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <Server className="w-4 h-4 text-brand" />
                        US East (Virginia)
                      </li>
                      <li className="flex items-center gap-2">
                        <Server className="w-4 h-4 text-brand" />
                        EU West (Ireland)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Residency Options</h3>
                    <p className="text-sm text-gray-600">
                      Enterprise customers can request specific regional deployment. Contact us to discuss your data residency requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">System Status</h2>
              <div className="bg-green-50 rounded-xl p-8 border border-green-200 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">All Systems Operational</div>
                    <div className="text-sm text-gray-600">99.9% uptime SLA</div>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-600">
                  Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-900 rounded-2xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Questions about Security?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Our security team is here to help. We're happy to discuss our practices, provide documentation, or answer specific questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:security@agentictrust.com"
                  className="px-6 py-3 bg-brand text-white rounded-lg font-semibold hover:bg-brand/90 transition-colors"
                >
                  Contact Security Team
                </a>
                <a
                  href="/responsible-disclosure"
                  className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  Responsible Disclosure
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

