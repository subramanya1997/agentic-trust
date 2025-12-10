'use client';

import React from 'react';
import { Shield, Lock, FileCheck, Eye, AlertTriangle, ShieldCheck, FileText, Activity, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: "Zero Trust Architecture",
    description: "Every agent interaction is authenticated and authorized. Nothing is trusted by default.",
    className: "md:col-span-2",
    visual: (
      <div className="flex items-center justify-center gap-6 h-full">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-md">
            <Lock className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-zinc-600 font-medium">Authentication Required</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <span className="text-zinc-600 font-medium">Authorization Verified</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            <span className="text-zinc-600 font-medium">Policy Enforced</span>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: ShieldCheck,
    title: "Multi-tier Detectors",
    description: "Custom detectors catch policy violations, data leaks, and permission drift before execution.",
    className: "md:col-span-1",
    visual: (
      <div className="flex flex-col items-center justify-center gap-3 h-full">
        <div className="flex gap-2">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-md relative">
            <AlertTriangle className="w-6 h-6 text-white" />
            <div className="absolute inset-0 bg-red-500 rounded-lg blur-md opacity-50 animate-pulse" />
          </div>
        </div>
        <span className="text-xs font-semibold text-zinc-500">3 Detectors Active</span>
      </div>
    )
  },
  {
    icon: Eye,
    title: "SSO & SCIM",
    description: "Automated user provisioning and deprovisioning with your existing identity provider.",
    className: "md:col-span-1",
    visual: (
      <div className="flex items-center justify-center gap-3 h-full">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 px-3 py-2 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">O</span>
            </div>
            <span className="text-xs font-medium text-zinc-700">Okta</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg border border-blue-200">
            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">E</span>
            </div>
            <span className="text-xs font-medium text-zinc-700">Entra ID</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-6 bg-green-500 rounded-full animate-pulse" />
            <div className="w-0.5 h-6 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
          </div>
          <span className="text-[10px] font-bold text-green-600">SYNCED</span>
        </div>
      </div>
    )
  },
  {
    icon: Activity,
    title: "Real-time Audit Logs",
    description: "Complete visibility into every action taken by every agent across your infrastructure.",
    className: "md:col-span-1",
    visual: (
      <div className="flex items-center justify-center h-full">
        <div className="bg-zinc-900 rounded-lg p-3 font-mono text-[9px] w-full">
          <div className="space-y-1">
            <div className="text-zinc-600">14:23:41 agent.auth <span className="text-green-400">OK</span></div>
            <div className="text-zinc-600">14:24:12 tool.call <span className="text-green-400">OK</span></div>
            <div className="text-zinc-600">14:25:33 data.read <span className="text-green-400">OK</span></div>
            <div className="text-red-400 animate-pulse">14:26:01 policy.violation <span className="text-red-500">BLOCKED</span></div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: AlertTriangle,
    title: "Automated Compliance",
    description: "Enforce SOC2, HIPAA, and GDPR policies automatically with pre-built rule sets.",
    className: "md:col-span-1",
    visual: (
      <div className="flex items-center justify-center gap-3 h-full">
        <div className="flex flex-col gap-2">
          <div className="px-3 py-2 bg-green-50 rounded-lg border border-green-200 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-xs font-semibold text-green-700">SOC2</span>
          </div>
          <div className="px-3 py-2 bg-blue-50 rounded-lg border border-blue-200 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-semibold text-blue-700">HIPAA</span>
          </div>
          <div className="px-3 py-2 bg-purple-50 rounded-lg border border-purple-200 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-purple-600" />
            <span className="text-xs font-semibold text-purple-700">GDPR</span>
          </div>
        </div>
      </div>
    )
  }
];

export const SecuritySection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white via-zinc-50/50 to-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 px-5 py-2.5 rounded-full mb-8 border border-green-100/50 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-600 tracking-wide">Enterprise Security</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-zinc-900 mb-6 tracking-tight">
            Zero Trust Security Standards
          </h2>
          <p className="text-xl sm:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed font-light">
            Built-in detectors for threats other guardrails can't see.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 border-2 border-zinc-200 hover:border-green-300 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col ${feature.className}`}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/70 via-transparent to-blue-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

                {/* Content Header */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center border border-green-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 tracking-tight">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">{feature.description}</p>
                </div>

                {/* Visual */}
                <div className="flex-1 flex items-center justify-center relative z-10 min-h-[120px]">
                  {feature.visual}
                </div>
              </div>
            );
          })}
        </div>

        {/* Warning about HUMAN Security */}
      </div>
    </section>
  );
};

