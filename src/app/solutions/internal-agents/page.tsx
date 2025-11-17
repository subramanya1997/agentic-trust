import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { Briefcase, Database, Cloud, Shield, Users, BarChart } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Internal Agents — Agentic Trust',
  description: 'Safe agent access to internal systems. CRM, ERP, databases with least-privilege security.',
};

const systems = [
  {
    icon: Database,
    name: 'CRM & Sales',
    examples: ['Salesforce', 'HubSpot', 'Pipedrive'],
    description: 'Customer data with read/write controls per role',
  },
  {
    icon: Briefcase,
    name: 'ERP & Finance',
    examples: ['NetSuite', 'SAP', 'QuickBooks'],
    description: 'Financial operations with approval workflows',
  },
  {
    icon: Database,
    name: 'Databases',
    examples: ['PostgreSQL', 'MySQL', 'MongoDB'],
    description: 'Direct database access with query restrictions',
  },
  {
    icon: Cloud,
    name: 'Internal APIs',
    examples: ['Inventory', 'Order', 'Analytics'],
    description: 'Microservices and internal endpoints',
  },
  {
    icon: Users,
    name: 'HR Systems',
    examples: ['Workday', 'BambooHR', 'ADP'],
    description: 'Employee data with strict PII controls',
  },
  {
    icon: BarChart,
    name: 'Analytics Platforms',
    examples: ['Tableau', 'Looker', 'PowerBI'],
    description: 'Business intelligence with tenant scoping',
  },
];

const capabilities = [
  'Least-privilege access: agents start with zero permissions',
  'IdP integration: map agent roles to existing groups',
  'Tenant scoping: automatic data isolation per user/org',
  'Rate limiting: prevent runaway queries or operations',
  'Audit trails: track every internal system access',
  'Egress control: block unauthorized external calls',
];

export default function InternalAgentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-brand/10 px-4 py-2 rounded-full mb-6">
                <Briefcase className="w-4 h-4 text-brand" />
                <span className="text-sm font-semibold text-brand">Internal Agents</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Secure Access to Internal Systems
              </h1>
              <p className="text-xl text-gray-600">
                Give agents safe, least-privilege access to CRM, ERP, databases, and internal APIs. Built for IT ops, analytics teams, and internal tooling.
              </p>
            </div>

            {/* Systems Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Supported Internal Systems</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {systems.map((system) => {
                  const Icon = system.icon;
                  return (
                    <div key={system.name} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-brand hover:shadow-lg transition-all">
                      <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-brand" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{system.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{system.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {system.examples.map((ex) => (
                          <span key={ex} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Capabilities */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Security Capabilities</h2>
              <div className="bg-white rounded-xl p-8 border border-gray-200 max-w-4xl mx-auto">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div className="bg-gray-900 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">Common Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">IT Operations</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Automate infrastructure provisioning, monitoring, and incident response
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Server provisioning agents</li>
                    <li>• Alert triage automation</li>
                    <li>• Deployment orchestration</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Analytics & BI</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    SQL query agents with automatic scoping and rate limits
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Data analysis agents</li>
                    <li>• Report generation</li>
                    <li>• Dashboard automation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Internal Tools</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Build agent-powered internal apps with built-in security
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Admin panel agents</li>
                    <li>• Workflow automation</li>
                    <li>• Integration bots</li>
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

