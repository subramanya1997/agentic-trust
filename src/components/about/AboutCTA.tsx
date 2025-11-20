"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function AboutCTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 text-center">
        <h2 className="text-5xl sm:text-6xl font-bold text-zinc-900 mb-8 tracking-tight">
          Ready to secure your<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-600">AI infrastructure?</span>
        </h2>
        <p className="text-xl text-zinc-600 mb-12 max-w-2xl mx-auto">
          Join forward-thinking engineering teams building the next generation of secure AI agents.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="https://calendly.com/subramanya1997/introduction" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800 hover:text-white rounded-full px-8 h-12 text-lg font-medium shadow-lg hover:shadow-xl transition-all">
              Book a Demo
            </Button>
          </Link>
          <Link href="/docs">
            <Button size="lg" variant="outline" className="bg-white text-zinc-900 hover:text-zinc-900 border-zinc-200 hover:bg-zinc-50 rounded-full px-8 h-12 text-lg font-medium">
              Read the Docs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
