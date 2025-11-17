import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { CodeBlock } from '@/components/ui/code-block';
import { Shield, Lock, Clock, Globe, Filter, AlertTriangle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Access Control & Policy — Agentic Trust',
  description: 'Fine-grained role-based permissions and dynamic policy enforcement for AI agents.',
};

const examplePolicy = `// Define role-based tool permissions
policy.defineRole("DataAnalyst", {
  tools: [
    "database:query",
    "files:read",
    "api:analytics"
  ],
  constraints: {
    rateLimit: "100/hour",
    tenantScope: "\${user.tenant}",
    timeWindow: "business_hours"
  }
});

// Conditional access based on context
policy.allow({
  role: "SupportAgent",
  tools: ["customer:read", "tickets:write"],
  conditions: {
    ipAllowList: ["10.0.0.0/8"],
    requiredMFA: true,
    maxSessionMinutes: 30
  }
});

// Egress control and DLP
policy.egress({
  allowedDomains: ["*.company.com"],
  blockSensitiveData: ["ssn", "credit_card"],
  requireApproval: ["financial:write"]
});`;

const features = [
  {
    icon: Shield,
    title: 'Role-Based Access Control',
    description: 'Map organizational roles to fine-grained tool permissions. Define who can access what, when, and under what conditions.',
  },
  {
    icon: Lock,
    title: 'Tenant Isolation',
    description: 'Automatic scoping of data access by tenant. Agents inherit boundaries from user context with zero config.',
  },
  {
    icon: Clock,
    title: 'Time-Boxed Permissions',
    description: 'Set automatic expiration on agent sessions. Enforce business hours, limited-time access, or custom time windows.',
  },
  {
    icon: Globe,
    title: 'Egress Control',
    description: 'Restrict outbound API calls to approved domains. Prevent data exfiltration with allow-list enforcement.',
  },
  {
    icon: Filter,
    title: 'DLP & Redaction',
    description: 'Automatically detect and redact PII, credentials, and sensitive patterns from agent inputs and outputs.',
  },
  {
    icon: AlertTriangle,
    title: 'Approval Workflows',
    description: 'Require human-in-the-loop approval for high-risk operations before agent execution.',
  },
];

export default function AccessControlPage() {
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
                <span className="text-sm font-semibold text-brand">Access Control & Policy</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Least-Privilege Access for Every Agent
              </h1>
              <p className="text-xl text-gray-600">
                Define fine-grained permissions with role-based policies. Enforce dynamic constraints based on identity, time, location, and risk.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature) => {
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

            {/* Code Example */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Policy as Code</h2>
              <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                Define access control declaratively. Version control your security policies alongside your infrastructure.
              </p>
              <CodeBlock code={examplePolicy} language="typescript" />
            </div>

            {/* How It Works */}
            <div className="bg-gray-900 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-brand">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Define Roles</h3>
                  <p className="text-sm text-gray-300">
                    Map organizational roles to tool permissions and constraints
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-brand">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Runtime Enforcement</h3>
                  <p className="text-sm text-gray-300">
                    Every agent action is evaluated against policies in real-time
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-brand">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Audit Trail</h3>
                  <p className="text-sm text-gray-300">
                    All decisions logged with full context for compliance
                  </p>
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

