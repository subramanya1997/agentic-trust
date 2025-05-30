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
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">
            WHY AGENTIC TRUST
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Stop Building Boilerplate, Start Shipping Features
          </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                <benefit.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h4>
              <p className="text-gray-600 mb-3">{benefit.desc}</p>
              <p className="text-sm text-gray-500">{benefit.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 