import Link from 'next/link';
import { Building, Shield, Briefcase, ShoppingCart } from 'lucide-react';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions — Agentic Trust',
  description: 'Enterprise-grade security solutions for AI agents across industries. Governance, compliance, and safe deployment.',
};

const solutions = [
  {
    id: 'enterprise',
    name: 'Enterprise',
    icon: Building,
    description: 'Governance at scale for large organizations',
    details: 'Align agent autonomy with corporate policies. Multi-tenant architecture, approval workflows, and audit trails for internal audit and regulators.',
    href: '/solutions/enterprise',
    audience: 'Platform teams, CISOs, IT directors',
  },
  {
    id: 'regulated',
    name: 'Regulated Industries',
    icon: Shield,
    description: 'Compliance for FinServ, Healthcare, and Government',
    details: 'Meet SOC 2, HIPAA, GDPR, and industry-specific requirements. PII redaction, egress controls, and immutable audit logs.',
    href: '/solutions/regulated',
    audience: 'Financial services, Healthcare, Government',
  },
  {
    id: 'internal',
    name: 'Internal Agents',
    icon: Briefcase,
    description: 'Safe access to internal systems',
    details: 'Secure agent access to CRM, ERP, databases, and internal APIs. Least-privilege permissions with tenant scoping.',
    href: '/solutions/internal-agents',
    audience: 'IT ops, Analytics teams, Internal tools',
  },
  {
    id: 'commerce',
    name: 'Commerce & Consumer',
    icon: ShoppingCart,
    description: 'Risk and abuse controls for customer-facing agents',
    details: 'Prevent agent abuse, rate limit bad actors, and enforce policy gates on transactions. Built for scale.',
    href: '/solutions/commerce',
    audience: 'E-commerce, Customer support, Product teams',
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Secure AI agents across your organization and industry. Purpose-built solutions for governance, compliance, and safe deployment.
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                return (
                  <Link
                    key={solution.id}
                    href={solution.href}
                    className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-brand hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-brand" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand transition-colors">
                          {solution.name}
                        </h2>
                        <p className="text-sm font-medium text-gray-500 mb-3">{solution.audience}</p>
                        <p className="text-gray-700 font-medium mb-2">{solution.description}</p>
                        <p className="text-sm text-gray-600">{solution.details}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-brand font-semibold">
                      Learn more
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-4">Not sure which solution fits?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Talk to our team. We'll help you design the right architecture for your use case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://calendly.com/subramanya1997/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-brand text-white rounded-lg font-semibold hover:bg-brand/90 transition-colors"
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

