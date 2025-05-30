"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
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
    {
      question: "What is MCP?",
      answer: "MCP (Model Context Protocol) is an open standard for AI agents to securely use tools and data. Think of it as APIs, but specifically designed for agents."
    },
    {
      question: "How does AgenticTrust use MCP?",
      answer: "AgenticTrust instantly turns your code into production-ready MCP servers. You define tools, we handle the MCP compliance, security, and scaling."
    },
    {
      question: "One server for all my agents?",
      answer: "Yes! Connect all your agents to a single AgenticTrust endpoint. We manage versions and routing automatically, so your agents always have a stable connection."
    },
    {
      question: "What code do I write?",
      answer: "You only write the functions for your agent's tools (e.g., accessing an API or database). AgenticTrust manages all server infrastructure and MCP details."
    },
    {
      question: "How quick is setup?",
      answer: "Launch a production-ready MCP server in under 5 minutes. Define a tool, run our CLI, and your agents can connect immediately."
    },
    {
      question: "Is it secure for enterprise use?",
      answer: "Absolutely. Every request is secured with enterprise-grade authentication (OAuth, API keys), access controls, and rate limiting. All activity is logged for audit and compliance."
    },
    {
      question: "Can I host it myself?",
      answer: "Yes. Deploy AgenticTrust in your own cloud (AWS, Azure, GCP) or on-premises for full data control. A managed cloud version is also available."
    },
    {
      question: "How does pricing work?",
      answer: "Our pricing is usage-based, so you only pay for what you use. Start for free. Enterprise plans offer dedicated support and custom SLAs."
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 mt-4">Your questions about AgenticTrust, answered.</p>
        </div>
        
        <div className="grid md:grid-cols-2 md:items-start gap-x-8 gap-y-6">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-start justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-t-lg"
                aria-expanded={openItems.has(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-base font-semibold text-gray-800 pr-4">
                  {item.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 transform ${
                    openItems.has(index) ? 'rotate-180 text-orange-500' : ''
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
                <div className="px-6 pb-5 pt-1 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-700">
            Can't find the answer you're looking for? Reach out to our{' '}
            <a href="/contact" className="text-orange-600 hover:text-orange-700 font-medium underline">
              support team
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}; 