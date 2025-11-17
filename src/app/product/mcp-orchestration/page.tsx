import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { CodeBlock } from '@/components/ui/code-block';
import { Server, Shield, Package, Settings, Layers, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MCP Orchestration — Agentic Trust',
  description: 'Secure deployment and management for Model Context Protocol servers. Built for production.',
};

const exampleConfig = `// Register and configure MCP servers
await mcp.registerServer({
  name: "customer-data-mcp",
  url: "https://mcp.company.com/customer",
  authentication: {
    type: "oauth2",
    clientId: process.env.MCP_CLIENT_ID
  },
  security: {
    tenantIsolation: true,
    allowedTools: ["customer:read", "customer:search"],
    rateLimits: {
      perAgent: "100/hour",
      perTenant: "1000/hour"
    },
    egressControl: {
      allowedDomains: ["*.company.com"]
    }
  }
});

// Deploy with guardrails
await mcp.deploy({
  server: "customer-data-mcp",
  environment: "production",
  safetyChecks: {
    requireApproval: ["customer:write"],
    testMode: false
  }
});`;

const features = [
  {
    icon: Package,
    title: 'MCP Server Registry',
    description: 'Central registry for all your MCP servers. Version tracking, health monitoring, and dependency management.',
  },
  {
    icon: Shield,
    title: 'Safe Defaults',
    description: 'Production-ready guardrails out of the box. Least-privilege access, rate limits, and isolation by default.',
  },
  {
    icon: Layers,
    title: 'Tenant Isolation',
    description: 'Multi-tenant MCP deployments with automatic data scoping. One server, infinite tenants.',
  },
  {
    icon: Settings,
    title: 'Deployment Boundaries',
    description: 'Define which agents can access which servers. Control blast radius with fine-grained routing.',
  },
  {
    icon: Server,
    title: 'Compatible & Flexible',
    description: 'Works with any MCP server. No vendor lock-in, no special protocols, just standard MCP.',
  },
  {
    icon: CheckCircle,
    title: 'Health & Monitoring',
    description: 'Automatic health checks, fallback routing, and alerting for MCP server degradation.',
  },
];

export default function MCPOrchestrationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-brand/10 px-4 py-2 rounded-full mb-6">
                <Server className="w-4 h-4 text-brand" />
                <span className="text-sm font-semibold text-brand">MCP Orchestration</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Production-Ready MCP Deployment
              </h1>
              <p className="text-xl text-gray-600">
                Deploy and manage MCP servers with enterprise security. Built-in guardrails, tenant isolation, and zero-trust defaults.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Configuration API</h2>
              <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                Deploy MCP servers with security policies and guardrails
              </p>
              <CodeBlock code={exampleConfig} language="typescript" />
            </div>

            {/* MCP Compatible */}
            <div className="bg-gradient-to-br from-brand/5 to-brand/10 rounded-2xl p-12 border border-brand/20">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Compatible with Any MCP Server
                </h2>
                <p className="text-gray-600 mb-8">
                  Agentic Trust works with existing MCP servers—no modifications required. Add security, observability, and policy enforcement without changing your server code.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm font-medium text-gray-700">
                    Standard MCP Protocol
                  </div>
                  <div className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm font-medium text-gray-700">
                    Any MCP Server
                  </div>
                  <div className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm font-medium text-gray-700">
                    No Vendor Lock-in
                  </div>
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

