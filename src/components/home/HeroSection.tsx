"use client";

import React from 'react';
import { Settings2, RefreshCw, ShieldCheck } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { BridgeDemo } from '@/components/features/BridgeDemo';

export const HeroSection = () => {
  return (
    <section className="relative bg-white pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand/5 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center w-full">
          {/* Small Title */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            <span className="text-sm font-medium text-zinc-600">Enterprise-Ready AI Infrastructure</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-zinc-900 mb-8 leading-[0.9] tracking-tighter">
            The Command and<br />
            Control Plane for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-600">AI Agents.</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl text-zinc-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Agentic Trust turns agent security into visibility, control, and trust. Make your AI agents enterprise-ready instantly.
          </p>

          {/* Visual Element */}
          <div className="mb-24 relative">
            <BridgeDemo />

            {/* Three Pillars */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 max-w-4xl mx-auto">
              <div className="text-center max-w-xs mx-auto group">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-white border border-zinc-200 shadow-sm group-hover:border-brand/50 transition-all duration-300 group-hover:scale-110">
                  <ShieldCheck className="w-6 h-6 text-zinc-400 group-hover:text-brand transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">Agent Identity</h3>
                <p className="text-base text-zinc-500 leading-relaxed">
                  Issue, rotate, revoke. Map to org roles.
                </p>
              </div>

              <div className="text-center relative max-w-xs mx-auto group">
                <div className="hidden sm:block absolute -left-6 top-1/2 -translate-y-1/2 w-px h-12 bg-zinc-200" />
                <div className="hidden sm:block absolute -right-6 top-1/2 -translate-y-1/2 w-px h-12 bg-zinc-200" />

                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-white border border-zinc-200 shadow-sm group-hover:border-brand/50 transition-all duration-300 group-hover:scale-110">
                  <Settings2 className="w-6 h-6 text-zinc-400 group-hover:text-brand transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">Policy & Gateway</h3>
                <p className="text-base text-zinc-500 leading-relaxed">
                  Allow/deny/throttle + time-boxing.
                </p>
              </div>

              <div className="text-center max-w-xs mx-auto group">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-white border border-zinc-200 shadow-sm group-hover:border-brand/50 transition-all duration-300 group-hover:scale-110">
                  <RefreshCw className="w-6 h-6 text-zinc-400 group-hover:text-brand transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">Traceability</h3>
                <p className="text-base text-zinc-500 leading-relaxed">
                  Rich events and decision explanations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
