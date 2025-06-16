"use client";

import { CheckCircle, Shield, Activity } from 'lucide-react';

export const BenefitsSection = () => {
  const benefits = [
    { 
      icon: CheckCircle,
      title: 'Focus on Your Logic', 
      desc: 'Build agent capabilities, not infrastructure',
      details: 'Write your tool functions and prompts. We handle the MCP protocol, server setup, and production concerns.'
    },
    { 
      icon: Shield,
      title: 'Security Built-In', 
      desc: 'Enterprise authentication & authorization',
      details: 'OAuth, API keys, rate limiting, and access controls are configured automatically for every request.'
    },
    { 
      icon: Activity,
      title: 'One Server, All Agents', 
      desc: 'Connect once, scale infinitely',
      details: 'No more managing multiple MCP servers or versions. One endpoint serves all your agents with automatic updates.'
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-xs sm:text-sm font-semibold text-brand uppercase tracking-wider mb-2 sm:mb-3">
            WHY AGENTIC TRUST
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Stop Building Boilerplate, Start Shipping Features
          </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-gray-50 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-brand/10 rounded-lg mb-3 sm:mb-4">
                <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1.5 sm:mb-2">{benefit.title}</h4>
              <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base">{benefit.desc}</p>
              <p className="text-xs sm:text-sm text-gray-500">{benefit.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 