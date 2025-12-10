"use client";

import React from 'react';
import Image from 'next/image';

const integrations = [
  { name: 'Salesforce', logo: '/integrations/light/salesforce.svg' },
  { name: 'Slack', logo: '/integrations/light/slack.svg' },
  { name: 'GitHub', logo: '/integrations/light/github.svg' },
  { name: 'Gmail', logo: '/integrations/light/gmail.svg' },
  { name: 'Linear', logo: '/integrations/light/linear.svg' },
  { name: 'Notion', logo: '/integrations/light/notion.svg' },
  { name: 'Zendesk', logo: '/integrations/light/zendesk.svg' },
  { name: 'Zoom', logo: '/integrations/light/zoom.svg' },
  { name: 'QuickBooks', logo: '/integrations/light/quickbooks.svg' },
];

export const LogoMarquee = () => {
  // Double the items for seamless infinite scroll
  const duplicatedIntegrations = [...integrations, ...integrations];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-zinc-50/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
            Bring your own integrations
          </p>
          <p className="text-xs text-zinc-400 mt-2">
            Connect your tools, APIs, and internal services
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex animate-marquee">
          {duplicatedIntegrations.map((integration, index) => (
            <div
              key={`${integration.name}-${index}`}
              className="flex-shrink-0 mx-8 group"
            >
              <div className="flex items-center justify-center w-32 h-16 px-4 py-3 transition-all duration-300 group-hover:scale-105">
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  width={100}
                  height={40}
                  className="object-contain opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Count */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mt-10">
          <p className="text-zinc-600">
            <span className="font-bold text-zinc-900">50+ pre-built integrations</span> — or connect your own internal tools and custom APIs
          </p>
        </div>
      </div>
    </section>
  );
};

