"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Route, Activity } from 'lucide-react';
import { InteractiveDashboardDemo } from '@/components/dashboard/InteractiveDashboardDemo';

export const HeroSection = () => {
  return (
    <section className="relative bg-white pt-32 pb-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-brand/8 via-orange-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand/10 px-4 py-2 rounded-full mb-8 border border-brand/20">
            <span className="text-sm font-semibold text-brand">Secure Agentic Infrastructure</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-zinc-900 mb-6 leading-[0.95] tracking-tight">
            Build AI Agents.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-orange-500 to-amber-500">
              Deploy with Control.
            </span>
          </h1>

          <p className="text-xl text-zinc-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            The secure infrastructure for AI agents. Connect your tools, route to any LLM, and deploy agentic workflows with enterprise-grade identity, routing, and observability.
          </p>

          {/* Interactive Dashboard Demo */}
          <div className="relative mb-24">
            <InteractiveDashboardDemo />
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-zinc-100 border border-zinc-200 group-hover:border-brand/50 group-hover:bg-brand/5 transition-all duration-300">
                <Shield className="w-7 h-7 text-zinc-500 group-hover:text-brand transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">Enterprise Identity</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                SSO, SCIM, and conditional access. AI agents under your existing Okta or Entra policies.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-zinc-100 border border-zinc-200 group-hover:border-brand/50 group-hover:bg-brand/5 transition-all duration-300">
                <Route className="w-7 h-7 text-zinc-500 group-hover:text-brand transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">Smart Routing</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Route to any LLM provider. Automatic fallbacks, cost optimization, and latency-based decisions.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-zinc-100 border border-zinc-200 group-hover:border-brand/50 group-hover:bg-brand/5 transition-all duration-300">
                <Activity className="w-7 h-7 text-zinc-500 group-hover:text-brand transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">Full Observability</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Traces, logs, and metrics for every call. Debug in seconds. Complete audit trails.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

