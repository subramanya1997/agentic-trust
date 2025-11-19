'use client';

import React from 'react';
import { AlertTriangle, Database, Shield, Eye, Users, Server, EyeOff, Bot, Lock, Unlock, FileText, CreditCard, Code } from 'lucide-react';

const problems = [
  {
    icon: Unlock,
    title: 'Unmanaged AI Agents',
    description: 'Any employee can spin up agents with full access to production systems',
    example: 'Marketing intern\'s chatbot accessing customer payment data',
    className: "",
    visual: (
      <div className="flex items-center justify-center gap-3 h-full w-full p-4">
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
            <Users className="w-7 h-7 text-white" />
          </div>
          <span className="text-[10px] font-semibold text-zinc-700">Employee</span>
        </div>
        
        <div className="flex flex-col items-center gap-1">
          <Unlock className="w-7 h-7 text-red-500 animate-pulse" />
          <div className="text-[9px] font-bold text-red-600 uppercase tracking-wider">No Auth</div>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Bot className="w-7 h-7 text-white" />
          </div>
          <span className="text-[10px] font-semibold text-zinc-700">AI Agent</span>
        </div>
        
        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-7 bg-green-500 rounded-full animate-pulse" />
            <div className="w-0.5 h-7 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-0.5 h-7 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
          <div className="text-[9px] font-bold text-green-600 uppercase tracking-wider">Full Access</div>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center shadow-lg">
            <Database className="w-7 h-7 text-white" />
          </div>
          <span className="text-[10px] font-semibold text-zinc-700">Production DB</span>
        </div>
      </div>
    ),
  },
  {
    icon: CreditCard,
    title: 'Sensitive Data Leaks',
    description: 'PII, credentials, and business logic exposed through unsecured tool calls',
    example: 'API keys in agent logs, customer SSNs in responses',
    className: "",
    visual: (
      <div className="flex flex-col items-center justify-center gap-3 h-full w-full p-4">
        <div className="relative">
          <div className="w-24 h-32 bg-white rounded-lg border-2 border-zinc-300 shadow-md p-3 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-zinc-400" />
              <div className="text-[8px] font-bold text-zinc-600">CUSTOMER DATA</div>
            </div>
            <div className="space-y-1">
              <div className="h-1.5 bg-zinc-200 rounded w-full" />
              <div className="h-1.5 bg-zinc-200 rounded w-3/4" />
              <div className="h-1.5 bg-red-400 rounded w-full animate-pulse" />
              <div className="h-1.5 bg-red-400 rounded w-2/3 animate-pulse" />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <div className="w-12 h-px bg-gradient-to-r from-red-500 to-transparent" />
              <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
            </div>
            <div className="flex items-center gap-1">
              <div className="w-16 h-px bg-gradient-to-r from-orange-500 to-transparent" />
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
        </div>
        <div className="text-xs font-bold text-red-600 uppercase tracking-wider">Leaking</div>
      </div>
    ),
  },
  {
    icon: Shield,
    title: 'Unvetted MCP Servers',
    description: '18,000+ community servers with unknown security posture',
    example: 'npm install random-mcp-server with backdoor access',
    className: "",
    visual: (
      <div className="flex flex-col items-center justify-center gap-3 h-full w-full p-4">
        <div className="relative">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-12 h-8 bg-green-500 rounded border border-green-600 shadow-sm flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-[9px] text-green-700 font-semibold">Trusted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-8 bg-red-500 rounded border border-red-600 shadow-sm flex items-center justify-center relative">
                <Server className="w-4 h-4 text-white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center border border-white">
                  <span className="text-[8px] font-bold text-black">?</span>
                </div>
              </div>
              <span className="text-[9px] text-red-700 font-semibold">Unknown</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-8 bg-red-500 rounded border border-red-600 shadow-sm flex items-center justify-center relative">
                <Server className="w-4 h-4 text-white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center border border-white">
                  <span className="text-[8px] font-bold text-black">?</span>
                </div>
              </div>
              <span className="text-[9px] text-red-700 font-semibold">Unknown</span>
            </div>
          </div>
        </div>
        <div className="text-xl font-bold text-yellow-600">18K+</div>
      </div>
    ),
  },
  {
    icon: EyeOff,
    title: 'Zero Audit Trail',
    description: 'No logs of what agents accessed, modified, or leaked',
    example: 'Cannot answer "Who accessed customer #12345 data?"',
    className: "",
    visual: (
      <div className="flex items-center justify-center gap-4 h-full w-full p-4">
        <div className="flex flex-col gap-2 flex-1 max-w-[180px]">
          <div className="flex items-center gap-2 text-[10px] text-zinc-400">
            <FileText className="w-3 h-3" />
            <span className="font-mono">audit.log</span>
          </div>
          <div className="space-y-1.5 bg-zinc-900 rounded-lg p-2.5 font-mono text-[8px]">
            <div className="text-zinc-600">2024-01-15 14:23:41 ???</div>
            <div className="text-zinc-600">2024-01-15 14:24:12 ???</div>
            <div className="text-zinc-600">2024-01-15 14:25:33 ???</div>
            <div className="text-red-500 animate-pulse">2024-01-15 14:26:01 DATA_BREACH</div>
            <div className="text-zinc-600">2024-01-15 14:27:15 ???</div>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 rounded-full blur-lg opacity-30" />
            <EyeOff className="w-10 h-10 text-red-500 relative z-10 stroke-[2]" />
          </div>
          <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider">Blind Spot</span>
        </div>
      </div>
    ),
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-zinc-50/50 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Headline */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-orange-50 px-5 py-2.5 rounded-full mb-8 border border-red-100/50 shadow-sm">
            <AlertTriangle className="w-4 h-4 text-red-600" />
            <span className="text-sm font-semibold text-red-600 tracking-wide">The Risk</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-900 leading-[1.1] mb-8 tracking-tight">
            The tools your teams love are<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-600">
              leaking data.
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed font-light">
            A single unsecured agent can leak PII, code, or sensitive business logic in seconds.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className={`group relative bg-white rounded-2xl p-6 border-2 border-zinc-200 hover:border-red-400 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden ${problem.className}`}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/70 via-transparent to-orange-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Content Header */}
                <div className="relative z-10 mb-4">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                      <Icon className="w-5 h-5 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                    </div>
                    <h4 className="text-lg font-bold text-zinc-900 tracking-tight">{problem.title}</h4>
                  </div>
                  <p className="text-sm text-zinc-700 leading-relaxed font-medium">{problem.description}</p>
                </div>

                {/* Visual Diagram */}
                <div className="flex-1 flex items-center justify-center relative z-10 mb-4">
                  {problem.visual}
                </div>

                {/* Example */}
                <div className="relative z-10 pt-3 border-t border-zinc-200">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-zinc-600 leading-relaxed italic">
                      <span className="font-semibold text-zinc-700">Example: </span>
                      {problem.example}
                    </p>
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
