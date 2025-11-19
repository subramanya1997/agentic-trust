'use client';

import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { Zap, Code, Terminal, Cpu, Download, CheckCircle, AlertTriangle, Clock, Shield, MousePointerClick, ChevronDown, Users, Settings } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Blocked by Security',
    description: 'Security reviews delay adoption, so engineers bypass review, use unsanctioned tools, or don\'t use AI at all.',
  },
  {
    icon: Clock,
    title: 'Context-Switching',
    description: 'Every interruption breaks flow. Productivity gains disappear in the gaps between tools.',
  },
  {
    icon: Terminal,
    title: 'Manual Configuration',
    description: 'Every engineer configures the same MCP servers differently. By the time it\'s working, the task is already done manually.',
  },
];

const solutionSteps = [
  {
    number: '01',
    icon: Shield,
    title: 'Pre-Approved by Security',
    description: 'Every MCP server in your org\'s catalog already passed security review. No waiting. No questionnaires. No manual vetting.',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Configured by IT',
    description: 'Identity, permissions, and access controls work the same way as every other tool in your stack. SSO, conditional access, and device compliance are already done.',
  },
  {
    number: '03',
    icon: MousePointerClick,
    title: 'Installed in One Click',
    description: 'Instant access to MCP servers that have already passed security review. Works with whatever IDE you\'re already using. No JSON editing. No API key management. No workflow changes.',
  },
];

const features = [
  {
    icon: Download,
    title: 'One-Click Install to All IDEs',
    description: 'No JSON editing. No manual configuration. No API key management. Deploy in minutes, not days.',
  },
  {
    icon: Code,
    title: 'Tool Remixing',
    description: 'Combine tools across MCP servers into custom workflows. Use Linear + GitHub + Slack in one automated sequence.',
  },
  {
    icon: Cpu,
    title: 'Subagents (Specialized AI Agents)',
    description: 'Build custom AI agents for your team\'s workflows with policy-scoped execution and complete observability.',
  },
  {
    icon: Terminal,
    title: 'Local MCP Support with Zero Friction',
    description: 'Run MCP servers locally without installation overhead. Security and performance stay in your control.',
  },
  {
    icon: Zap,
    title: 'Support for 300+ MCP Clients',
    description: 'Connect Cursor, VS Code, Claude Code, GitHub Copilot, ChatGPT, Claude Desktop, Windsurf, and more.',
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

export default function EngineeringTeamsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-brand/10 px-4 py-2 rounded-full mb-8">
                <Zap className="w-4 h-4 text-brand" />
                <span className="text-sm font-semibold text-brand">Engineering Teams</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-900 mb-8 leading-tight tracking-tight">
                Build 3x Faster.<br />Never Leave Your IDE.
              </h1>
              <p className="text-xl sm:text-2xl text-zinc-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Agentic Trust is the first enterprise MCP platform to connect AI tools to your entire stack with pre-approved access already configured. One-click install, zero workflow changes, full speed ahead.
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
              <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full mb-6">
                <AlertTriangle className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Problem</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
                More Time Configuring AI<br />Than Building with It
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Your team is more productive with AI, but these tools still can't connect to databases, update tickets, or automate workflows without MCP.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problems.map((problem) => {
                const Icon = problem.icon;
                return (
                  <div key={problem.title} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                      <Icon className="w-7 h-7 text-orange-600" />
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
                Never Leave Your IDE Again
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Build at startup velocity with enterprise-grade control. More time shipping features, solving hard problems, and doing the work only you can do, all from your IDE.
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

        {/* Feature Grid Section */}
        <section className="py-24 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                Faster Engineers Without<br />Compromising Security
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                Agentic Trust is the first enterprise MCP platform, built for how you actually work with AI today. Work with your existing tools, integrate with your existing identity stack, run locally, build custom MCP servers, and experiment safely.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {features.map((feature) => {
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
                Everything you need to know about Agentic Trust for engineering teams.
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
