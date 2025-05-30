"use client";

import React from 'react';
import { UnifiedContextRouterPreview } from './UnifiedContextRouterPreview';

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50/30 via-white to-gray-50/50 min-h-[80vh] md:min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle - top left */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        
        {/* Medium circle - top right */}
        <div className="absolute -top-12 -right-12 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse [animation-delay:2000ms]"></div>
        
        {/* Small circle - bottom left */}
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse [animation-delay:4000ms]"></div>
        
        {/* Medium circle - bottom right */}
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse [animation-delay:3000ms]"></div>
        
        {/* Extra circle - center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse [animation-delay:1000ms]"></div>
        
        {/* Additional floating circles for depth */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse [animation-delay:1500ms]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse [animation-delay:2500ms]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-16 relative z-10">
        <div className="flex flex-col items-center">
          {/* Top: Hero Text */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Build production-ready{' '}
              <span className="text-orange-500 inline-block">MCP servers</span>{' '}
              in minutes
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-6">
              Focus on your agent logic. We handle authentication, security, rate limiting, and infrastructure.
            </p>
            
            {/* Key benefits */}
            <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center text-sm md:text-base">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">One unified endpoint</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">No version management</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Enterprise-ready from day 1</span>
              </div>
            </div>
            
            {/* Built by engineers section */}
            <div className="mt-10 flex flex-col items-center">
              <p className="text-sm md:text-base text-gray-500 mb-4">Built by engineers from</p>
              <div className="flex items-center justify-center">
                {/* Combined Logo */}
                <div className="relative group">
                  <img 
                    src="/logos/cisco-ucb-umass.png"
                    alt="Cisco, UMass Amherst, and UC Berkeley"
                    className="h-6 md:h-8 w-auto opacity-70 group-hover:opacity-80 transition-opacity duration-200 filter grayscale contrast-0 brightness-0"
                  />
                </div>
              </div>
            </div>
          </div>
          <UnifiedContextRouterPreview />
        </div>
      </div>
    </section>
  );
}; 
