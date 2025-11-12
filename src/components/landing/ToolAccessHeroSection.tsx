"use client";

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

export const ToolAccessHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-orange-50/30 to-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-gray-900">
              Your AI,{' '}
              <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
                Enterprise Measured.
              </span>
          </h1>
          
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Track AI adoption, measure proficiency, and quantify ROI across your organization. 
              Get complete visibility in minutes, not months.
            </p>

            <div className="mb-8">
              <Link href="https://calendly.com/subramanya1997/introduction" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="bg-brand hover:bg-brand/90 text-white font-semibold px-8 py-6 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group w-full sm:w-auto"
                >
                  Book Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span>Trusted by forward-thinking enterprises</span>
              </div>
              
              {/* Built and Backed By - Inline */}
              <div className="flex flex-col gap-2">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                  Built by engineers
                </p>
                <div className="flex items-center">
                  <Image 
                    src="/logos/cisco-ucb-umass.png"
                    alt="Built and backed by Cisco, UC Berkeley, and UMass Amherst"
                    width={300}
                    height={40}
                    className="object-contain opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              </div>
              </div>
            </div>
            
          {/* Right Column - Floating 3D Visualization */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px] transition-transform duration-100 ease-out">
              {/* Main Card - AI Maturity Dashboard */}
              <div className="absolute top-0 right-0 w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform rotate-6 hover:rotate-3 transition-transform duration-500">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
                  <h3 className="text-white font-semibold text-lg">AI Maturity Score</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-5xl font-bold text-gray-900">74</span>
                    <div className="flex items-center gap-1 text-green-600 font-semibold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      <span>12%</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Engineering</span>
                        <span className="font-semibold text-gray-900">92</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Product</span>
                        <span className="font-semibold text-gray-900">78</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Marketing</span>
                        <span className="font-semibold text-gray-900">65</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Secondary Card - AI Tools Detected */}
              <div className="absolute top-32 -left-8 w-[280px] bg-white rounded-xl shadow-xl border border-gray-200 p-5 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">AI Tools Detected</h4>
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">ChatGPT</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Approved</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Claude</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Approved</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-600">Perplexity</span>
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">Shadow AI</span>
                  </div>
                </div>
              </div>
              
              {/* Tertiary Card - ROI Metrics */}
              <div className="absolute bottom-12 right-16 w-[240px] bg-white rounded-xl shadow-xl border border-gray-200 p-5 transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <h4 className="font-semibold text-gray-900 mb-3">Cost Savings</h4>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-green-600">$21.3K</span>
                    <span className="text-sm text-gray-500">/month</span>
                  </div>
                  <p className="text-xs text-gray-600">Potential savings from license optimization</p>
                </div>
              </div>

              {/* Floating dots/orbs */}
              <div className="absolute top-10 left-20 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-40 left-32 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '100ms' }}></div>
              <div className="absolute top-64 right-8 w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
