"use client";

import { Target, Zap, Layers, ShieldCheck } from "lucide-react";

export function MissionSection() {
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
      {/* Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
            <Target className="w-4 h-4" />
            <span className="uppercase tracking-wider">Our Mission</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8">
            Redefining how AI works. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-600">
              From answers to action.
            </span>
          </h2>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We are building the infrastructure for safe, capable agents that don't
            just talk—they do work inside the tools you already use.
          </p>
        </div>

        {/* Visual Feature Blocks */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="group p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 bg-zinc-800/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500 border border-zinc-700 group-hover:border-blue-500/30">
              <Zap className="w-7 h-7 text-zinc-300 group-hover:text-blue-400 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
              Action First
            </h3>
            <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              Moving beyond chat interfaces to direct tool execution and complex
              workflows that deliver real value.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 bg-zinc-800/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-500 border border-zinc-700 group-hover:border-purple-500/30">
              <Layers className="w-7 h-7 text-zinc-300 group-hover:text-purple-400 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-100 transition-colors">
              Enterprise Ready
            </h3>
            <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              Scaling agentic workflows with the identity, auth, and
              governance infrastructure enterprises demand.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 bg-zinc-800/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-500 border border-zinc-700 group-hover:border-orange-500/30">
              <ShieldCheck className="w-7 h-7 text-zinc-300 group-hover:text-orange-400 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-100 transition-colors">
              Zero Compromise
            </h3>
            <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              Security and speed aren't trade-offs. We provide complete
              observability and control without the friction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
