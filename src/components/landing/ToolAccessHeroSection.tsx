"use client";

import React from 'react';
import { Settings2, RefreshCw, ShieldCheck } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { BridgeDemo } from './BridgeDemo';

export const ToolAccessHeroSection = () => {
  return (
    <section className="relative bg-white py-8 overflow-hidden">
      <div className="container flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center w-full">
          {/* Small Title */}
          <h2 className="text-lg font-semibold text-brand mb-2">
            Tool-Based Access Control
          </h2>
          
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb leading-tight">
            Powerful and flexible<br />
            Permissions for AI agents.
          </h1>
          
          {/* Tagline */}
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Enterprise-grade authorization for secure and scalable tool access management.
          </p>
          
          {/* Visual Element */}
          <div className="mb-20">
            <div className="relative bg-gradient-to-t from-orange-100 via-orange-50 to-white rounded-3xl overflow-hidden">
              <div className="p-8">
                <BridgeDemo />
              </div>
            </div>
            
            {/* Three Key Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 max-w-4xl mx-auto">
              <div className="text-center max-w-xs mx-auto group">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <Settings2 className="w-8 h-8 text-gray-700 group-hover:text-brand transition-colors duration-300 group-hover:rotate-45" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Granular</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Fine-tuned access control with detailed tool permissions.
                </p>
              </div>
              
              <div className="text-center relative max-w-xs mx-auto group">
                <Separator orientation="vertical" className="hidden sm:block absolute -left-6 top-0 h-full" />
                <Separator orientation="vertical" className="hidden sm:block absolute -right-6 top-0 h-full" />
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <RefreshCw className="w-8 h-8 text-gray-700 group-hover:text-brand transition-colors duration-300 group-hover:animate-spin" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Connected</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Sync tool permissions directly from your identity provider.
                </p>
              </div>
              
              <div className="text-center max-w-xs mx-auto group">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <ShieldCheck className="w-8 h-8 text-gray-700 group-hover:text-brand transition-colors duration-300 group-hover:animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Secure</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Enforce least-privilege access with agent-scoped tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
