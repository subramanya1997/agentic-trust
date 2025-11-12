"use client";

import { AlertTriangle, TrendingDown, ShieldAlert } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Shadow AI Everywhere",
      description: "Employees use unapproved AI tools with sensitive data, creating compliance risks you don't know about.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: TrendingDown,
      title: "Unknown ROI",
      description: "You're investing in AI but can't measure adoption, productivity gains, or actual business impact.",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: ShieldAlert,
      title: "Compliance Blind Spots",
      description: "Without visibility into AI usage, you can't enforce policies, audit trails, or meet regulatory requirements.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            You can't manage
            <br />
            <span className="text-gray-500">what you can't measure</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Most enterprises are flying blind when it comes to AI adoption and usage. This creates real risks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 ${problem.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${problem.color}`} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

