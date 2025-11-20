'use client';

import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { Shield, Users, LayoutDashboard, Lock, Settings, CheckCircle, AlertTriangle, ChevronDown, Key, Database, Activity, Eye, Server, Zap, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Identity Bypass',
    description: 'AI connections skip Okta and Entra entirely. No SAML, no OIDC, no authentication policies.',
  },
  {
    icon: AlertTriangle,
    title: 'Zero Policy Enforcement',
    description: 'No conditional access on AI tools. No device compliance, no location-based restrictions, no role-based provisioning.',
  },
  {
    icon: AlertTriangle,
    title: 'Shadow IT at Scale',
    description: 'No visibility into who\'s accessing what AI tools and data. Can\'t track provisioning, can\'t audit usage, can\'t enforce offboarding.',
  },
];

const solutionSteps = [
  {
    number: '01',
    icon: Key,
    title: 'One-click Identity Integration',
    description: 'Native Okta and Entra integration: SSO, SCIM provisioning, and conditional access apply to MCP the same way they apply to Slack or GitHub.',
  },
  {
    number: '02',
    icon: Lock,
    title: 'Attribute-Based Access Control (ABAC)',
    description: 'Enforce context-aware policies on MCP: scope access by user, device, location, and session without building new auth systems.',
  },
  {
    number: '03',
    icon: LayoutDashboard,
    title: 'Unified Access Management',
    description: 'Manage MCP access in the same dashboard you use for everything else. Provision, audit, and offboard from one place.',
  },
];

const enterpriseFeatures = [
  {
    icon: Key,
    title: 'Native IdP Integration',
    description: 'SSO, SCIM provisioning, and conditional access policies apply to MCP the same way they apply to Slack or GitHub. Automatic user/group sync with MCP access tied to your org chart.',
  },
  {
    icon: Server,
    title: 'Flexible Deployment',
    description: 'Self-hosted behind your VPC or multi-tenant SaaS. Deploy via Terraform (ECS) or Helm (EKS) in 10 minutes. No agents, no proxies, no data egress. Low-latency security scans because the gateway runs in your cloud.',
  },
  {
    icon: Shield,
    title: 'Private MCP Registry with Security Eval Scores',
    description: 'IT controls the catalog. Developers get one-click install. Every MCP server is vetted and scored before it reaches your organization. Support for 18,000+ external servers plus your internal tools. Version control and rollback built in.',
  },
  {
    icon: Lock,
    title: 'Attribute-Based Access Control (ABAC)',
    description: 'Context-aware authorization based on user, device, client, server, session, and request attributes. Fine-grained permissions per tool and resource. Scope bloated APIs like GitHub\'s 106 tools down to 4 safe ones. Device-based restrictions via MDM integration.',
  },
  {
    icon: Activity,
    title: 'Centralized Observability Dashboard',
    description: 'Complete visibility into MCP usage across all teams and clients. Track tool calls, user activity, security violations, and adoption metrics. Export to Datadog, Honeycomb, or your logging stack via OpenTelemetry.',
  },
  {
    icon: Settings,
    title: 'Automated Access Provisioning',
    description: 'Provision MCP access automatically based on Okta groups, departments, or roles. Onboard new employees with the right tools on day one. Offboard instantly when someone leaves.',
  },
];

const faqs = [
  {
    question: 'What AI clients does Agentic Trust support?',
    answer: 'All 300+ MCP clients including Cursor, VS Code, Claude Code, GitHub Copilot, ChatGPT, Claude Desktop, Windsurf, and any client that implements MCP.',
  },
  {
    question: 'Do I need to change my workflow or learn new tools?',
    answer: 'No, we work with your existing IDE and AI client with the only difference being authentication through company SSO instead of personal API keys.',
  },
  {
    question: 'How do I add new MCP servers or tools I need?',
    answer: 'Request through the catalog: security-approved servers are available immediately with one click, while new servers go through fast-tracked approval in minutes instead of weeks.',
  },
  {
    question: 'Can I use local MCP servers?',
    answer: 'Yes, with zero installation friction and the same governance/observability as remote servers, plus CLI tools to make local-to-hosted workflows seamless.',
  },
  {
    question: 'How does Agentic Trust integrate with our existing security and IT policies?',
    answer: 'We integrate with Okta and Entra for identity, enforce the same conditional access and device compliance checks you use everywhere else, and provide complete audit trails, so AI becomes like another enterprise application, not a special case.',
  },
  {
    question: 'Will this slow down my workflow?',
    answer: 'No, scans run with low latency and you get one-click access instead of manually configuring JSON files.',
  },
  {
    question: 'Can I still use my favorite AI tools (Cursor, Claude Code, ChatGPT)?',
    answer: 'Yes, your development experience stays identical. You just get access to vetted, secure MCP servers instead of random GitHub repos.',
  },
  {
    question: 'Can I build custom MCP servers for internal APIs?',
    answer: 'Yes, we help convert internal APIs into MCP servers that appear in the catalog alongside external ones with identical access controls and observability.',
  },
  {
    question: 'What happens to my existing MCP configurations and workflows?',
    answer: 'Minimal disruption: we import existing configurations and your prompts/workflows remain the same, with most teams starting new servers through Agentic Trust then gradually migrating existing ones.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 px-6 flex items-center justify-between text-left group hover:bg-zinc-50 transition-all duration-200"
      >
        <span className="text-lg font-semibold text-zinc-900 pr-8 group-hover:text-brand transition-colors">{question}</span>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
          isOpen 
            ? 'bg-brand text-white rotate-180' 
            : 'bg-zinc-100 text-zinc-400 group-hover:bg-brand/10 group-hover:text-brand'
        }`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-2 text-zinc-600 text-base leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function ITTeamsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-brand/10 px-4 py-2 rounded-full mb-8">
                <Shield className="w-4 h-4 text-brand" />
                <span className="text-sm font-semibold text-brand">IT Teams</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-900 mb-8 leading-tight tracking-tight">
                Scale AI with Your<br />Existing Identity Stack
              </h1>
              <p className="text-xl sm:text-2xl text-zinc-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Agentic Trust extends your existing identity stack to give you the same control over MCP usage that you have over every other application in your organization, without slowing anyone down.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="https://calendly.com/subramanya1997/introduction" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-full px-8 h-12 text-lg font-medium shadow-lg hover:shadow-xl transition-all">
                    Book a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full mb-6">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">Problem</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
                MCP Alone Breaks Your<br />Identity Stack
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Your teams are already connecting to thousands of external MCP servers to query databases, update tickets, and automate workflows. This is happening across every industry, completely outside identity and access systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problems.map((problem) => {
                const Icon = problem.icon;
                  return (
                  <div key={problem.title} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                      <Icon className="w-7 h-7 text-red-600" />
                      </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-3">{problem.title}</h3>
                    <p className="text-zinc-700 leading-relaxed">{problem.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
        </section>

        {/* Solution Flow Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-6">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">Solution</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
                AI That Works the Way<br />Your Stack Already Does
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                MCP is automating workflows that used to take hours or days. Agentic Trust makes MCP work like enterprise apps: same identity providers, same access policies, same deployment model. Enable AI transformation without rebuilding your IAM stack.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {solutionSteps.map((step, index) => {
                const Icon = step.icon;
                  return (
                  <div key={step.number} className="relative">
                    {index < solutionSteps.length - 1 && (
                      <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-brand/30 to-transparent -translate-x-4" />
                    )}
                    <div className="bg-white rounded-2xl p-8 border-2 border-zinc-200 hover:border-brand hover:shadow-xl transition-all duration-300 relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-brand/10 to-purple-500/10 rounded-2xl flex items-center justify-center border-2 border-brand/20">
                          <Icon className="w-8 h-8 text-brand" />
                        </div>
                        <div className="text-5xl font-bold text-brand/20">{step.number}</div>
                      </div>
                      <h3 className="text-xl font-bold text-zinc-900 mb-3">{step.title}</h3>
                      <p className="text-zinc-600 leading-relaxed">{step.description}</p>
                    </div>
                    </div>
                  );
                })}
              </div>
          </div>
        </section>

        {/* Enterprise Features Grid */}
        <section className="py-24 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                Deploy Once.<br />Manage Everywhere.
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                Enterprise-grade infrastructure that integrates with your existing stack. Works with your current AI tools and identity systems. Self-hosted deployment in 10 minutes with the same governance patterns you use for other enterprise software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {enterpriseFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-brand" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-zinc-300 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://calendly.com/subramanya1997/introduction" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100 rounded-full px-8 h-12 text-lg font-medium shadow-xl hover:shadow-2xl transition-all">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Cross-sell Sections */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
                Built to Enable AI for Every Team
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Security Teams */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <Shield className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Enable AI Adoption with Visibility and Control</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-zinc-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Real-time threat detection</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Attribute-based access control (ABAC)</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Human-in-the-loop approval</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Audit trails (for GRC & incident response)</span>
                    </li>
                </ul>
                <Link href="/trust" className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all">
                  Explore Security Features
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Engineering Teams */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <Zap className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Build 3.4x Faster. Never Leave Your IDE Again.</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-zinc-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Support for 300+ MCP clients</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>One-click install</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Subagents (specialized AI agents)</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Local MCP support</span>
                  </li>
                </ul>
                <Link href="/engineering-teams" className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all">
                  Explore Engineering Features
                  <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

              {/* Discovery CTA */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border-2 border-green-200">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <Users className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Discover How To Map Agentic Trust to Your Stack</h3>
                <p className="text-zinc-700 mb-8 leading-relaxed">
                  Tell us your existing identity stack and we'll walk through deployment best practices, integration timelines, and how our enterprise customers went from pilot to production in weeks.
                </p>
                <Link href="https://calendly.com/subramanya1997/introduction" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-full px-6 h-10 font-medium shadow-md hover:shadow-lg transition-all">
                    Book a Demo
                  </Button>
                </Link>
                  </div>
                  </div>
                </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-8">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">FAQ</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 mb-8 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xl sm:text-2xl text-zinc-600 leading-relaxed max-w-3xl mx-auto">
                Everything you need to know about Agentic Trust for IT teams.
              </p>
            </div>

            <div className="bg-white rounded-3xl border-2 border-zinc-200 shadow-xl overflow-hidden">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
              Agents and Work. Connected.
            </h2>
            <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
              Agentic Trust makes it easy to create, host, and scale MCP servers across your organization. Local or remote, every server is secure, discoverable, and simple to manage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://calendly.com/subramanya1997/introduction" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-full px-8 h-12 text-lg font-medium shadow-lg hover:shadow-xl transition-all">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
