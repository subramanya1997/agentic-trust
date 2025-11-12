"use client";

import React from 'react';

// AI Tools with SVG logo representations
// Using simple, clean SVG designs for each brand
const aiTools = [
  {
    name: 'ChatGPT',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" fill="#10a37f"/>
        <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Claude',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect x="4" y="4" width="16" height="16" rx="3" fill="#d97757"/>
        <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Gemini',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" fill="#4285f4"/>
        <path d="M12 6L8 12l4 6 4-6z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Perplexity',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect x="4" y="4" width="16" height="16" rx="8" fill="#20808d"/>
        <circle cx="12" cy="12" r="3" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'GitHub Copilot',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="#000000"/>
      </svg>
    ),
  },
  {
    name: 'Cursor',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M5 3l14 9-6 1-3 8z" fill="#000000"/>
      </svg>
    ),
  },
  {
    name: 'Midjourney',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="#000000"/>
        <path d="M8 8h8v8H8z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Notion AI',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M4 4h16v16H4z" fill="#000000"/>
        <path d="M7 7v10l10-5z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Jasper',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" fill="#8b5cf6"/>
        <path d="M12 7v10M7 12h10" stroke="white" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    name: 'Copy.ai',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect x="6" y="6" width="12" height="12" rx="2" fill="#10b981"/>
        <rect x="8" y="8" width="8" height="8" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Grammarly',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" fill="#15c39a"/>
        <path d="M8 12l2 2 6-6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Writesonic',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect x="4" y="4" width="16" height="16" rx="3" fill="#6366f1"/>
        <path d="M8 12h8" stroke="white" strokeWidth="2"/>
      </svg>
    ),
  },
];

export const WorksWithAIToolsSection = () => {
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-semibold mb-3">
            Universal Compatibility
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Works with 300+ AI Tools
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            <span className="font-semibold text-gray-900">ChatGPT</span>, <span className="font-semibold text-gray-900">Claude</span>, <span className="font-semibold text-gray-900">Gemini</span>, <span className="font-semibold text-gray-900">Perplexity</span>, and hundreds more
          </p>
        </div>

        {/* Infinite Scroll Ticker */}
        <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white rounded-xl py-4">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex gap-6 animate-scroll-continuous">
            {[...aiTools, ...aiTools, ...aiTools].map((tool, index) => (
              <div
                key={`ticker-${index}`}
                className="flex-shrink-0 flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="transform scale-75">
                  {tool.svg}
                </div>
                <span className="text-gray-700 font-medium whitespace-nowrap text-xs">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        
      </div>

      <style jsx>{`
        @keyframes scroll-continuous {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll-continuous {
          animation: scroll-continuous 30s linear infinite;
        }
        .animate-scroll-continuous:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
