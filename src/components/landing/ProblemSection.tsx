'use client';

import React from 'react';
import { AlertTriangle, Database, Shield, Eye, Users, Server, Lock, Activity } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unmanaged AI',
    description: 'Teams deploy agents without identity controls',
    iconColor: 'text-red-600',
    bgColor: 'bg-red-50',
    visual: (
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="flex flex-col gap-2">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-blue-600" />
          </div>
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-purple-600" />
          </div>
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-green-600" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-px h-8 bg-red-300" />
          <AlertTriangle className="w-6 h-6 text-red-500" />
          <div className="w-px h-8 bg-red-300" />
        </div>
        <div className="text-xs text-gray-500 max-w-[80px]">No identity mapping</div>
      </div>
    ),
  },
  {
    icon: Database,
    title: 'Data Exposure',
    description: 'Unsecured MCPs leak sensitive information',
    iconColor: 'text-orange-600',
    bgColor: 'bg-orange-50',
    visual: (
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <Server className="w-6 h-6 text-gray-600" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <div className="w-16 h-px bg-orange-300" />
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          </div>
          <div className="flex items-center gap-1">
            <div className="w-16 h-px bg-orange-300" />
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          </div>
          <div className="flex items-center gap-1">
            <div className="w-16 h-px bg-orange-300" />
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          </div>
        </div>
        <div className="text-xs text-orange-600 font-semibold">LEAK</div>
      </div>
    ),
  },
  {
    icon: Shield,
    title: 'Unvetted Servers',
    description: 'Unknown attack surfaces in your stack',
    iconColor: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    visual: (
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="relative">
          <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
            <Server className="w-7 h-7 text-gray-600" />
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">?</span>
          </div>
        </div>
        <div className="text-2xl text-gray-300">×</div>
        <div className="text-xl font-bold text-yellow-600">18K+</div>
      </div>
    ),
  },
  {
    icon: Eye,
    title: 'Zero Visibility',
    description: 'No observability or audit trails',
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    visual: (
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="flex flex-col gap-2">
          <div className="w-16 h-2 bg-gray-200 rounded-full" />
          <div className="w-12 h-2 bg-gray-200 rounded-full" />
          <div className="w-14 h-2 bg-gray-200 rounded-full" />
        </div>
        <Eye className="w-8 h-8 text-gray-300 opacity-30" />
      </div>
    ),
  },
];

export const ProblemSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-100 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-100 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Headline */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full mb-6 border border-red-100">
            <AlertTriangle className="w-4 h-4 text-red-600" />
            <span className="text-sm font-semibold text-red-600">The Challenge</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            One platform to run{' '}
            <span className="relative inline-block">
              <span className="text-brand">faster, safely</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 4C50 2 100 6 150 3C175 1.5 190 4 200 4"
                  stroke="#f97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI tools boost productivity—but expose your organization to security risks.
          </p>
        </div>

        {/* Problem Blocks - 4 Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-gray-200 hover:border-brand hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Visual Diagram */}
                <div className="h-28 lg:h-32 flex items-center justify-center mb-8 lg:mb-10">
                  {problem.visual}
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">{problem.title}</h4>
                <p className="text-base text-gray-600 leading-relaxed text-center">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
