"use client";

import { Eye, TrendingUp, DollarSign, ShieldCheck, BarChart3 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export const BenefitsSection = () => {
  const features = [
    { 
      icon: Eye,
      title: 'Complete AI Discovery',
      description: 'Automatically detect every AI tool in use across your organization—approved or shadow AI—with real-time visibility into adoption patterns.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Proficiency Measurement',
      description: 'Measure team AI maturity with proficiency scores combining usage patterns, prompt quality, and business value feedback.',
      color: 'bg-purple-50 text-purple-600'
    },
    { 
      icon: DollarSign,
      title: 'Quantifiable ROI',
      description: 'Track productivity gains, cost optimization opportunities, and demonstrate clear business impact to justify AI investments.',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Compliance',
      description: 'Ensure governance with real-time risk detection, comprehensive audit trails, and policy enforcement across all AI tools.',
      color: 'bg-red-50 text-red-600'
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column - Content */}
          <div className="max-w-xl">
            <p className="text-brand text-base sm:text-lg font-semibold mb-4">
              The all-in-one solution
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Complete AI Visibility
              <br />
              <span className="text-gray-600">for Decision Makers</span>
          </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Get the insights you need to drive AI adoption, measure business impact, and ensure compliance. 
              Agentic Trust gives you complete visibility into your AI landscape.
            </p>
            <Link href="https://calendly.com/subramanya1997/introduction" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-brand hover:bg-brand/90 text-white font-semibold px-8 py-6 text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                Start measuring your AI
              </Button>
            </Link>
          </div>

          {/* Right Column - Visual Placeholder */}
          <div className="relative hidden lg:block">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Dashboard preview card */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand to-orange-600 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">AI Measurement Platform</h4>
                    <p className="text-sm text-gray-500">Real-time visibility</p>
                  </div>
        </div>
        
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Total AI Tools</span>
                    <span className="text-xl font-bold text-gray-900">47</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm text-gray-700">Shadow AI Detected</span>
                    <span className="text-xl font-bold text-orange-600">12</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-700">Monthly Savings</span>
                    <span className="text-xl font-bold text-green-600">$21.3K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}; 
