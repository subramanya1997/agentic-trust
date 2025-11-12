"use client";

import React from 'react';
import { Download, Activity, BarChart3 } from 'lucide-react';

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Download,
      title: "Deploy Agentic Trust",
      subtitle: "15 minutes to complete visibility",
      description: "Install our lightweight browser extension across your organization. No vendor integrations, no infrastructure changes, no IT complexity.",
      details: [
        "Zero infrastructure changes",
        "No vendor API integrations required",
        "Works with existing tools",
        "Deployed in minutes, not months"
      ],
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      number: "02",
      icon: Activity,
      title: "Real-Time Detection",
      subtitle: "Data flows automatically",
      description: "Agentic Trust begins detecting AI tool usage immediately, with data refreshing every 15 minutes. See what's happening now, not last quarter.",
      details: [
        "15-minute data refresh cycles",
        "Automatic tool discovery",
        "Privacy-first metadata only",
        "Shadow AI detection included"
      ],
      color: "from-orange-500 to-orange-600",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      number: "03",
      icon: BarChart3,
      title: "Instant Insights",
      subtitle: "Actionable intelligence from day one",
      description: "Access comprehensive dashboards showing adoption, proficiency scores, ROI metrics, and compliance risks—all updated in near real-time.",
      details: [
        "Maturity scores by team",
        "ROI & cost optimization",
        "Compliance monitoring",
        "Custom alerts & reports"
      ],
      color: "from-green-500 to-green-600",
      iconBg: "bg-green-50",
      iconColor: "text-green-600"
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-brand text-base sm:text-lg font-semibold mb-4">
            Simple Implementation
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            From deployment to insights
            <br />
            <span className="text-gray-600">in the same day</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            No complex integrations. No lengthy implementations. Just immediate visibility into your AI landscape.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Content */}
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl font-bold text-gray-200">
                      {step.number}
                    </span>
                    <div className={`w-16 h-16 ${step.iconBg} rounded-2xl flex items-center justify-center`}>
                      <Icon className={`w-8 h-8 ${step.iconColor}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-brand font-semibold mb-4 text-lg">
                    {step.subtitle}
                  </p>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}>
                  <div className={`relative bg-gradient-to-br ${step.color} rounded-3xl p-8 sm:p-12 shadow-2xl`}>
                    <div className="bg-white rounded-2xl p-6 shadow-xl">
                      {/* Step 1 Visual */}
                      {index === 0 && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                            <Download className="w-6 h-6 text-blue-600" />
                            <h4 className="font-bold text-gray-900">Deployment Status</h4>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                              <span className="text-sm font-medium text-gray-700">Installation</span>
                              <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">Complete</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                              <span className="text-sm font-medium text-gray-700">Configuration</span>
                              <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">Complete</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                              <span className="text-sm font-medium text-gray-700">Data Collection</span>
                              <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Active</span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500 text-center pt-2">Setup time: ~15 minutes</p>
                        </div>
                      )}

                      {/* Step 2 Visual */}
                      {index === 1 && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                            <h4 className="font-bold text-gray-900">Live Detection</h4>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-xs text-gray-500">Live</span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            {[
                              { tool: 'ChatGPT', users: 145, time: '2 min ago' },
                              { tool: 'Claude Pro', users: 89, time: '5 min ago' },
                              { tool: 'Perplexity', users: 34, time: '12 min ago' },
                            ].map((item, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                  <p className="text-sm font-semibold text-gray-900">{item.tool}</p>
                                  <p className="text-xs text-gray-500">{item.users} active users</p>
                                </div>
                                <span className="text-xs text-gray-400">{item.time}</span>
                              </div>
                            ))}
                          </div>
                          <p className="text-xs text-gray-500 text-center pt-2">Refreshes every 15 minutes</p>
                        </div>
                      )}

                      {/* Step 3 Visual */}
                      {index === 2 && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                            <BarChart3 className="w-6 h-6 text-green-600" />
                            <h4 className="font-bold text-gray-900">Insights Dashboard</h4>
                          </div>
                          <div className="space-y-3">
                            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                              <p className="text-xs text-gray-600 mb-1">AI Maturity Score</p>
                              <p className="text-3xl font-bold text-gray-900">74</p>
                              <div className="flex items-center gap-1 mt-1">
                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                                <span className="text-xs text-green-600 font-semibold">+12% this month</span>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-blue-50 p-3 rounded-lg text-center">
                                <p className="text-xs text-gray-600">Total Tools</p>
                                <p className="text-2xl font-bold text-gray-900">47</p>
                              </div>
                              <div className="bg-orange-50 p-3 rounded-lg text-center">
                                <p className="text-xs text-gray-600">Shadow AI</p>
                                <p className="text-2xl font-bold text-orange-600">12</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
