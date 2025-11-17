import React from 'react';
import { TrustBadge } from '@/components/ui/badge-trust';
import { Shield, Lock, FileCheck, Eye, Clock, Globe, AlertTriangle, CheckCircle2 } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: 'Least-Privilege by Default',
    description: 'Every agent starts with zero permissions. Grant only what\'s needed, when it\'s needed.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Globe,
    title: 'Egress Control & DLP',
    description: 'Restrict outbound connections to approved domains. Automatically redact sensitive data.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: CheckCircle2,
    title: 'Approval Workflows',
    description: 'Require human-in-the-loop approval for high-risk operations before execution.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: FileCheck,
    title: 'Attestation & Auditability',
    description: 'Cryptographically signed agent actions with immutable audit trails for compliance.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Eye,
    title: 'Tamper-Evident Logs',
    description: 'Every action is logged with cryptographic integrity. Detect and prove any tampering.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    icon: Clock,
    title: 'Time-Boxed Sessions',
    description: 'Automatic session expiration and credential rotation to limit exposure windows.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
];

export const SecurityGovernanceSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand/10 px-4 py-2 rounded-full mb-4">
            <Lock className="w-4 h-4 text-brand" />
            <span className="text-sm font-semibold text-brand">Enterprise-Grade Security</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for Trust & Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Production-ready security controls. Align agent autonomy with your organization's governance and compliance requirements.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Warning about HUMAN Security */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900">
              <span className="font-semibold">Note:</span> Agentic Trust is not affiliated with HUMAN Security's "AgenticTrust" product. 
              We focus on IAM, policy enforcement, and audit for internal AI agents and MCP servers.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

