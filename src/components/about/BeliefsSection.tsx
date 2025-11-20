"use client";

import { ArrowRight, TrendingUp, CheckCircle2 } from "lucide-react";

export function BeliefsSection() {
  return (
    <section className="py-32 bg-zinc-50 relative">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 tracking-tight mb-6">
            Why We're Here
          </h2>
          <p className="text-xl text-zinc-600 leading-relaxed">
            The AI landscape is shifting from curiosity to critical infrastructure. 
            We believe the future belongs to those who can trust their agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* Large Card - Inflection Point */}
          <div className="md:col-span-7 bg-white p-10 rounded-[2rem] shadow-sm border border-zinc-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-8">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">
              The Inflection Point
            </h3>
            <p className="text-lg text-zinc-600 leading-relaxed">
              The race for the "best model" has been supplanted by a mad dash to
              control how AI interacts with the world's tools and data. The
              winners won't just have the smartest AI—they'll have the most
              connected one.
            </p>
          </div>

          {/* Side Card - MCP */}
          <div className="md:col-span-5 bg-white p-10 rounded-[2rem] shadow-sm border border-zinc-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                MCP is the Standard
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed">
                But it launched without the enterprise "plumbing"—no auth, no
                audit trails, no governance. We are filling that gap.
              </p>
            </div>
          </div>

          {/* Wide Bottom Card - Dark */}
          <div className="md:col-span-12 bg-zinc-900 p-10 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden group">
            {/* Background Effects for Dark Card */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none group-hover:bg-blue-600/30 transition-colors duration-700" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-orange-500/20 transition-colors duration-700" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  The "Impossible Choice" is Over
                </h3>
                <p className="text-xl text-zinc-300 leading-relaxed">
                  Companies face two choices: block AI or risk everything. 
                  <br className="hidden md:block" />
                  We're building the infrastructure that lets you say{" "}
                  <span className="text-white font-semibold underline decoration-blue-500 underline-offset-4">
                    "yes"
                  </span>{" "}
                  safely.
                </p>
              </div>
              
              <div className="shrink-0 self-start md:self-center">
                <div className="group/btn flex items-center gap-3 px-6 py-3 rounded-full bg-white text-zinc-900 font-medium hover:bg-blue-50 transition-colors cursor-default">
                  <span>Foundation for the future</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
