'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Users, Server, Check, Globe, CheckCircle2, Shield, Activity } from 'lucide-react';

const tabs = [
  {
    id: 'registry',
    label: 'MCP Registry',
    icon: Server,
    image: '/images/MCP Registry.png',
    badge: 'Tool Ecosystem',
    capabilities: [
      'Centralized directory for all AI agents and tools',
      'Custom tool registration and versioning',
      'Per-tool access policies and rate limits',
      'Health monitoring and usage analytics'
    ]
  },
  {
    id: 'agents',
    label: 'Agent Directory',
    icon: Users,
    image: '/images/Agent Directory.png',
    badge: 'Identity Management',
    capabilities: [
      'Manage agent identities and credentials',
      'Track agent activity and capabilities',
      'Automated provisioning and deprovisioning',
      'Role-based access control for agents'
    ]
  }
];

export const DirectoryRegistrySection = () => {
  const [activeTab, setActiveTab] = useState('registry');
  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];
  const Icon = currentTab.icon;

  return (
    <section className="py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-5 py-2.5 rounded-full mb-8 border border-blue-100/50 shadow-sm">
            <Globe className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 tracking-wide">Global Visibility</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-zinc-900 mb-6 tracking-tight">
            Command and Control Plane
          </h2>
          <p className="text-xl sm:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed font-light">
            A single pane of glass for all your AI agents, tools, and permissions.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-start">
          {/* Left: Interactive Screenshot */}
          <div className="relative order-2 lg:order-1">
            {/* Browser Window Frame */}
            <div className="bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden">
              {/* Browser Chrome */}
              <div className="bg-gradient-to-r from-zinc-100 to-zinc-50 px-4 py-3 border-b border-zinc-200 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="bg-white px-4 py-1.5 rounded-lg text-xs text-zinc-500 font-mono border border-zinc-200">
                    app.agentictrust.com/{currentTab.id}
                  </div>
                </div>
              </div>

              {/* Tab Switcher */}
              <div className="bg-white border-b border-zinc-200 px-4 flex gap-2">
                {tabs.map((tab) => {
                  const TabIcon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all relative ${
                        activeTab === tab.id
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-zinc-500 hover:text-zinc-700'
                      }`}
                    >
                      <TabIcon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Screenshot */}
              <div className="relative bg-zinc-50">
                <Image
                  src={currentTab.image}
                  alt={currentTab.label}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-zinc-200 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <span className="font-semibold text-zinc-800">Secure & Scalable</span>
            </div>
          </div>

          {/* Right: Capabilities */}
          <div className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 px-4 py-2 rounded-full mb-6 border border-purple-100/50">
                <Icon className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-600">{currentTab.badge}</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-8 tracking-tight">
                Key Capabilities
              </h3>
              
              <ul className="space-y-5">
                {currentTab.capabilities.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-lg text-zinc-700 group"
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center mt-0.5 border border-purple-500/20 group-hover:border-purple-500/40 group-hover:scale-110 transition-all duration-200">
                      <Check className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
