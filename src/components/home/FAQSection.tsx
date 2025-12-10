"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: 'How does Agentic Trust integrate with my existing tools?',
    answer: 'Agentic Trust offers 50+ pre-built integrations with popular tools like Salesforce, Slack, GitHub, and databases. You can also import any OpenAPI/Swagger spec to create custom integrations. Most connections are set up in minutes with our OAuth flow.',
  },
  {
    question: 'What types of AI agents can I build?',
    answer: 'You can build any type of autonomous AI agent — from simple task automation (lead enrichment, report generation) to complex multi-step workflows with conditional logic, human-in-the-loop approvals, and cross-system orchestration. We primarily focus on building agents in natural language, making it accessible for everyone.',
  },
  {
    question: 'Which LLM providers do you support?',
    answer: 'We support all major LLM providers including OpenAI (GPT-4, GPT-3.5), Anthropic (Claude), Google (Gemini), Azure OpenAI, AWS Bedrock, and local/self-hosted models. Our intelligent routing can automatically select the best model based on cost, speed, and quality requirements.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We follow zero-trust architecture principles with encryption at rest (AES-256) and in transit (TLS 1.3). We offer SSO/SAML integration, role-based access control, complete audit logging, and are SOC 2 Type II compliant. Your data never trains our models.',
  },
  {
    question: 'How does pricing work?',
    answer: 'We offer flexible usage-based pricing that scales with your needs. You only pay for what you use — agent executions, API calls, and LLM tokens. There are no hidden fees, and we provide detailed cost analytics to help you optimize spending. Contact us for enterprise pricing.',
  },
  {
    question: 'Can I try Agentic Trust before committing?',
    answer: 'Yes! We provide a free tier for small teams and proof-of-concept projects. Book a demo call with our team to discuss your specific use case and see Agentic Trust in action.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer comprehensive documentation, community support, and dedicated success managers for enterprise customers. All plans include email support, and enterprise plans include Slack support, dedicated onboarding, and custom training sessions.',
  },
  {
    question: 'Can I self-host Agentic Trust?',
    answer: 'Yes, we offer on-premise and private cloud deployment options for enterprise customers with strict data residency requirements. Contact our sales team to discuss your infrastructure needs.',
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-full mb-6 border border-zinc-200">
            <HelpCircle className="w-4 h-4 text-zinc-600" />
            <span className="text-sm font-semibold text-zinc-600">FAQ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-zinc-600">
            Everything you need to know about Agentic Trust.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? 'border-brand/30 shadow-lg shadow-brand/5'
                  : 'border-zinc-200 hover:border-zinc-300'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-semibold text-lg pr-4 ${
                  openIndex === index ? 'text-zinc-900' : 'text-zinc-700'
                }`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-brand' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-zinc-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Book Demo CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <div>
              <p className="text-xl text-zinc-600 mb-2">
                Ready to get started?
              </p>
              <p className="text-zinc-500">
                Book a demo to see Agentic Trust in action.
              </p>
            </div>
            <Link href="https://calendly.com/subramanya1997/introduction" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-full px-8 h-14 text-lg font-medium shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

