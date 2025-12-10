"use client";

import React from 'react';
import { Calendar, Zap, Search, FileText, Globe, BookOpen, X, Plus } from 'lucide-react';
import Image from 'next/image';

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-bold text-zinc-900 mb-4 tracking-tight">
            Ship production agents,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-500">
              faster
            </span>
          </h2>
          <p className="text-lg text-zinc-600">
            Connect triggers, tools, and knowledge to build intelligent agents in minutes.
          </p>
        </div>

        {/* Three Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Panel 1: Schedules/Triggers */}
          <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-zinc-900 mb-3">Schedules/Triggers</h3>
              
              {/* Weekly Schedule Badge */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-zinc-200 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-zinc-700">Weekly</span>
                  <span className="text-xs text-zinc-500">Monday</span>
                  <span className="text-xs text-zinc-500">8:30am</span>
                  <span className="text-xs text-zinc-400">PDT</span>
                  <button className="ml-1 text-zinc-400 hover:text-zinc-600">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </div>
              
              {/* Add Schedule Button */}
              <button className="text-xs text-zinc-500 hover:text-zinc-700 flex items-center gap-1 mb-4">
                <Plus className="w-3 h-3" />
                Add schedule/trigger
              </button>
              
              {/* Schedule/Trigger Options */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-white rounded-lg p-3 border border-zinc-200 text-center hover:border-zinc-300 cursor-pointer transition-colors">
                  <Calendar className="w-5 h-5 mx-auto mb-1 text-zinc-600" />
                  <span className="text-xs text-zinc-700 font-medium">Schedule</span>
                </div>
                <div className="bg-white rounded-lg p-3 border border-zinc-200 text-center hover:border-zinc-300 cursor-pointer transition-colors">
                  <Zap className="w-5 h-5 mx-auto mb-1 text-zinc-600" />
                  <span className="text-xs text-zinc-700 font-medium">Trigger</span>
                </div>
              </div>
              
              {/* Integration Options */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-zinc-200 hover:border-zinc-300 cursor-pointer transition-colors">
                  <div className="w-5 h-5 flex items-center justify-center relative">
                    <Image
                      src="/integrations/light/slack.svg"
                      alt="Slack"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs text-zinc-700 font-medium">Slack</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-zinc-200 hover:border-zinc-300 cursor-pointer transition-colors">
                  <div className="w-5 h-5 flex items-center justify-center relative">
                    <Image
                      src="/integrations/light/github.svg"
                      alt="GitHub"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs text-zinc-700 font-medium">GitHub</span>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-zinc-600 mt-6">
              Run agents at a recurring interval or in response to external events
            </p>
          </div>

          {/* Panel 2: Tools & Integrations */}
          <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-zinc-900 mb-3">Tools & Integrations</h3>
              
              {/* Active Tool Badge */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-zinc-200 shadow-sm">
                  <Search className="w-3 h-3 text-zinc-600" />
                  <span className="text-xs text-zinc-700">Deep Research</span>
                  <button className="ml-1 text-zinc-400 hover:text-zinc-600">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </div>
              
              {/* Add Tool Button */}
              <button className="text-xs text-zinc-500 hover:text-zinc-700 flex items-center gap-1 mb-4">
                <Plus className="w-3 h-3" />
                Add tool or integration
              </button>
              
              {/* Available Tools & Integrations */}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 bg-white px-3 py-2.5 rounded-lg border border-zinc-200 hover:border-zinc-300 cursor-pointer transition-colors">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-zinc-600" />
                    <span className="text-xs text-zinc-700">File System</span>
                  </div>
                  <span className="text-[10px] text-zinc-400">Registry</span>
                </div>
                <div className="flex items-center justify-between gap-2 bg-white px-3 py-2.5 rounded-lg border border-zinc-200 hover:border-zinc-300 cursor-pointer transition-colors">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-zinc-600" />
                    <span className="text-xs text-zinc-700">Database</span>
                  </div>
                  <span className="text-[10px] text-zinc-400">Custom</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2.5 rounded-lg border border-zinc-200 hover:border-zinc-300 cursor-pointer transition-colors">
                  <FileText className="w-4 h-4 text-zinc-600" />
                  <span className="text-xs text-zinc-700">Read PDF</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2.5 rounded-lg border border-zinc-200 hover:border-zinc-300 cursor-pointer transition-colors">
                  <Globe className="w-4 h-4 text-zinc-600" />
                  <span className="text-xs text-zinc-700">Web Search</span>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-zinc-600 mt-6">
              Use built-in tools or connect your own integrations
            </p>
          </div>

          {/* Panel 3: Knowledge */}
          <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-zinc-900">Knowledge</h3>
                <span className="text-xs text-zinc-500 bg-white px-2 py-0.5 rounded-full border border-zinc-200">3</span>
              </div>
              
              {/* Knowledge Items */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-3 bg-white px-3 py-2.5 rounded-lg border border-zinc-200 hover:border-zinc-300 cursor-pointer transition-colors">
                  <div className="w-8 h-8 bg-zinc-100 rounded flex items-center justify-center">
                    <FileText className="w-4 h-4 text-zinc-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-zinc-700">Customer Data</p>
                    <p className="text-[10px] text-zinc-500">CSV</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white px-3 py-2.5 rounded-lg border border-zinc-200 hover:border-zinc-300 cursor-pointer transition-colors">
                  <div className="w-8 h-8 bg-red-50 rounded flex items-center justify-center">
                    <FileText className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-zinc-700">API Documentation</p>
                    <p className="text-[10px] text-zinc-500">PDF</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white px-3 py-2.5 rounded-lg border border-zinc-200 hover:border-zinc-300 cursor-pointer transition-colors">
                  <div className="w-8 h-8 bg-zinc-100 rounded flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-zinc-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-zinc-700">Company Handbook</p>
                    <p className="text-[10px] text-zinc-500 truncate">Internal policies and procedures...</p>
                  </div>
                </div>
              </div>
              
              {/* Add Knowledge Button */}
              <button className="text-xs text-zinc-500 hover:text-zinc-700 flex items-center gap-1">
                <Plus className="w-3 h-3" />
                Add knowledge
              </button>
            </div>
            
            <p className="text-xs text-zinc-600 mt-6">
              Give your agents knowledge and access to context
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

