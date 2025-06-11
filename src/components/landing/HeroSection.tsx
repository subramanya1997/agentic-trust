"use client";

import React, { useState, useEffect } from 'react';
import { UnifiedContextRouterPreview } from './UnifiedContextRouterPreview';
import { ecommerceConfig, devOpsConfig, simpleConfig } from './example-config';
import type { UnifiedContextRouterConfig } from './UnifiedContextRouterPreview';

export const HeroSection = () => {
  // Array of all available configurations including the default
  const configurations: { config?: UnifiedContextRouterConfig; name: string }[] = [
    { config: undefined, name: 'default' }, // undefined will use the default config
    { config: ecommerceConfig, name: 'ecommerce' },
    { config: devOpsConfig, name: 'devops' },
    { config: simpleConfig, name: 'simple' }
  ];

  // State to track current configuration index
  const [configIndex, setConfigIndex] = useState(0);

  // Calculate animation duration based on current configuration
  useEffect(() => {
    // Get the current configuration
    const currentConfig = configurations[configIndex].config;
    
    // Get number of agents (use default config if undefined)
    const agentCount = currentConfig?.agents.length || 3; // 3 is the default config agent count
    
    // Each agent animation takes 4200ms
    // We want to show at least 2 complete cycles through all agents
    // Plus add some buffer time for viewers to see the pattern
    const animationCycleTime = agentCount * 4200; // Time for one complete cycle
    const numberOfCycles = 2; // Show 2 complete cycles
    const bufferTime = 3000; // 3 seconds buffer after cycles complete
    
    const totalDuration = (animationCycleTime * numberOfCycles) + bufferTime;

    const timeout = setTimeout(() => {
      setConfigIndex((prevIndex) => (prevIndex + 1) % configurations.length);
    }, totalDuration);

    return () => clearTimeout(timeout);
  }, [configIndex, configurations]);

  return (
    <section className="bg-gradient-to-b from-blue-50/30 via-white to-gray-50/50 min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle - top left */}
        <div className="absolute -top-24 -left-24 w-64 h-64 sm:w-96 sm:h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 sm:opacity-20 animate-pulse"></div>
        
        {/* Medium circle - top right */}
        <div className="absolute -top-12 -right-12 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 sm:opacity-20 animate-pulse [animation-delay:2000ms]"></div>
        
        {/* Small circle - bottom left (hidden on xs, less blur) */}
        <div className="hidden sm:block absolute -bottom-8 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-lg sm:blur-xl opacity-20 animate-pulse [animation-delay:4000ms]"></div>
        
        {/* Medium circle - bottom right (smaller on xs) */}
        <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-80 sm:h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 sm:opacity-20 animate-pulse [animation-delay:3000ms]"></div>
        
        {/* Extra circle - center (hidden on xs) */}
        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse [animation-delay:1000ms]"></div>
        
        {/* Additional floating circles for depth (hidden on xs) */}
        <div className="hidden md:block absolute top-1/4 left-1/4 w-48 h-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse [animation-delay:1500ms]"></div>
        <div className="hidden md:block absolute bottom-1/3 right-1/3 w-56 h-56 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse [animation-delay:2500ms]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="flex flex-col items-center">
          {/* Top: Hero Text */}
          <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Build production-ready{' '}
              <span className="text-orange-500 inline-block">MCP servers</span>{' '}
              in minutes
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-6">
              Focus on your agent logic. We handle authentication, security, rate limiting, and infrastructure.
            </p>
            
            {/* Key benefits */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center text-xs sm:text-sm md:text-base">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">One unified endpoint</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">No version management</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Enterprise-ready from day 1</span>
              </div>
            </div>
            
            {/* Built by engineers section */}
            <div className="mt-8 sm:mt-10 flex flex-col items-center">
              <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-3 sm:mb-4">Built by engineers from</p>
              <div className="flex items-center justify-center">
                {/* Combined Logo */}
                <div className="relative group">
                  <img 
                    src="/logos/cisco-ucb-umass.png"
                    alt="Cisco, UMass Amherst, and UC Berkeley"
                    className="h-5 sm:h-6 md:h-8 w-auto opacity-70 group-hover:opacity-80 transition-opacity duration-200 filter grayscale contrast-0 brightness-0"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* UnifiedContextRouterPreview - Responsive */}
          <div className="w-full overflow-x-auto sm:overflow-visible">
            <UnifiedContextRouterPreview config={configurations[configIndex].config} />
          </div>
        </div>
      </div>
    </section>
  );
}; 
