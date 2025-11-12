"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FaqSection = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqItems: FaqItem[] = [
    // Product
    {
      category: "Product",
      question: "How does AI usage tracking work?",
      answer: "Agentic Trust uses browser-based detection to identify interactions with AI applications and tools. It captures metadata about usage patterns without reading actual conversation content, giving you complete visibility while respecting privacy."
    },
    {
      category: "Product",
      question: "What is AI proficiency measurement?",
      answer: "AI proficiency combines three signals: prompt quality analysis, real-time user feedback on value, and utilization patterns. This generates AI Maturity Scores that help you identify high performers and target training where it's most effective."
    },
    {
      category: "Product",
      question: "How do we measure AI ROI?",
      answer: "You measure AI ROI by connecting usage data with time savings surveys and productivity metrics. Agentic Trust tracks which teams are maximizing value, identifies cost optimization opportunities, and demonstrates clear business impact to stakeholders."
    },
    {
      category: "Product",
      question: "How does Shadow AI detection work?",
      answer: "Agentic Trust automatically discovers every AI tool in use across your organization, including personally purchased subscriptions (BYOAI). Detection happens in real-time (within 15 minutes), helping you identify unapproved tools before they become compliance risks."
    },
    // Security & Compliance
    {
      category: "Security & Compliance",
      question: "Does this monitor private employee activity?",
      answer: "No. Agentic Trust only identifies usage of known AI applications to understand tool adoption and patterns. It does not read conversation content, emails, messages, or documents. Privacy is built into the core design."
    },
    {
      category: "Security & Compliance",
      question: "What compliance standards do you support?",
      answer: "Agentic Trust uses zero-knowledge architecture and supports GDPR, CCPA, and enterprise data residency requirements. All activity is logged for audit trails and compliance reporting."
    },
    {
      category: "Security & Compliance",
      question: "How is our data protected?",
      answer: "We use enterprise-grade encryption (AES-256) and zero-knowledge architecture. Your data is encrypted at rest and in transit, with optional data residency controls for regulated industries."
    },
    // Getting Started
    {
      category: "Getting Started",
      question: "How quickly can we get started?",
      answer: "Deploy Agentic Trust in days, not months. The browser-based approach provides immediate visibility into your AI landscape without requiring vendor integrations or extensive IT setup. Most customers see data within 15 minutes of deployment."
    },
    {
      category: "Getting Started",
      question: "What's required for implementation?",
      answer: "Implementation requires browser extension deployment across your organization. No API integrations, no infrastructure changes, and no vendor coordination needed. Our team provides full onboarding support and training."
    },
    {
      category: "Getting Started",
      question: "How does pricing work?",
      answer: "Pricing is based on the number of users being measured. Start with a pilot group to demonstrate value, then scale across your organization. Contact us for enterprise pricing and custom deployment options."
    },
  ];

  // Split FAQs into two columns
  const midpoint = Math.ceil(faqItems.length / 2);
  const leftColumn = faqItems.slice(0, midpoint);
  const rightColumn = faqItems.slice(midpoint);

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Learn how Agentic Trust measures AI usage, proficiency, and impact.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-5">
          {/* Left Column */}
          <div className="flex-1 space-y-4">
            {leftColumn.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-start justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-xl"
                  aria-expanded={openItems.has(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 pr-4 leading-relaxed">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 transform ${
                      openItems.has(index) ? 'rotate-180 text-brand' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.has(index) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-4">
            {rightColumn.map((item, index) => {
              const actualIndex = index + midpoint;
              return (
                <div
                  key={actualIndex}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <button
                    onClick={() => toggleItem(actualIndex)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-start justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-xl"
                    aria-expanded={openItems.has(actualIndex)}
                    aria-controls={`faq-answer-${actualIndex}`}
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 pr-4 leading-relaxed">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 transform ${
                        openItems.has(actualIndex) ? 'rotate-180 text-brand' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={`faq-answer-${actualIndex}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openItems.has(actualIndex) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="https://calendly.com/subramanya1997/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-brand font-semibold hover:text-brand/80 transition-colors"
          >
            Schedule a call with our team →
          </a>
        </div>
      </div>
    </section>
  );
};
