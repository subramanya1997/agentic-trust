import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { CodeBlock } from '@/components/ui/code-block';
import { Eye, Activity, FileCheck, Search, Database, AlertCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Observability & Audit — Agentic Trust',
  description: 'End-to-end tracing and tamper-evident audit logs for AI agents. Full compliance and forensics.',
};

const exampleTrace = `// Query agent activity with full context
const trace = await audit.getTrace({
  agentId: "support-bot-01",
  timeRange: "last_24h",
  includeContext: true
});

console.log(trace);
// {
//   agent: "support-bot-01",
//   role: "SupportAgent",
//   user: "alice@company.com",
//   actions: [
//     {
//       timestamp: "2025-01-15T10:23:45Z",
//       tool: "customer:read",
//       input: { customerId: "12345" },
//       output: { name: "John Doe", ... },
//       decision: "allowed",
//       policyEvaluated: "support-read-policy-v2"
//     },
//     {
//       timestamp: "2025-01-15T10:24:12Z",
//       tool: "database:write",
//       decision: "denied",
//       reason: "Missing write permission"
//     }
//   ],
//   signature: "0x5f3a...",  // Tamper-evident
//   chainHash: "0xa2b4..."   // Linked to previous entries
// }`;

const features = [
  {
    icon: Activity,
    title: 'End-to-End Tracing',
    description: 'Track every agent action from request to response. See exactly what happened, when, and why.',
  },
  {
    icon: FileCheck,
    title: 'Tamper-Evident Logs',
    description: 'Cryptographically signed audit logs. Detect any modification or deletion with chain-of-custody proofs.',
  },
  {
    icon: Search,
    title: 'Incident Forensics',
    description: 'Reconstruct agent behavior with timeline views. Root-cause analysis with full context replay.',
  },
  {
    icon: Database,
    title: 'SIEM Integration',
    description: 'Export logs to Splunk, Datadog, Elastic, or your security stack. Real-time streaming or batch.',
  },
  {
    icon: Eye,
    title: 'Cross-Stack Attribution',
    description: 'Link agent actions to user identity, tool calls, and downstream effects. Full causality graph.',
  },
  {
    icon: AlertCircle,
    title: 'Anomaly Detection',
    description: 'Automatic detection of unusual patterns, policy violations, and suspicious agent behavior.',
  },
];

export default function ObservabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-brand/10 px-4 py-2 rounded-full mb-6">
                <Eye className="w-4 h-4 text-brand" />
                <span className="text-sm font-semibold text-brand">Observability & Audit</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                See Everything. Prove Anything.
              </h1>
              <p className="text-xl text-gray-600">
                End-to-end tracing with tamper-evident logs. Full compliance, forensics, and causality tracking for every agent action.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Audit API</h2>
              <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                Query agent activity with full context and cryptographic integrity
              </p>
              <CodeBlock code={exampleTrace} language="typescript" />
            </div>

            {/* Use Cases */}
            <div className="bg-gray-900 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Compliance & Audit</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Meet SOC 2, GDPR, HIPAA requirements with immutable audit trails and access logs
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Audit log retention policies</li>
                    <li>• Compliance report generation</li>
                    <li>• Third-party auditor access</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Incident Response</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Investigate security incidents with timeline reconstruction and full context
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Timeline visualization</li>
                    <li>• Root cause analysis</li>
                    <li>• Blast radius assessment</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Performance & Debugging</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Optimize agent behavior with detailed performance metrics and error tracking
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Latency breakdown</li>
                    <li>• Error rate monitoring</li>
                    <li>• Tool usage analytics</li>
                  </ul>
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

