"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from 'react';

export const FinalCtaSection = () => {
  const [email, setEmail] = useState('');
  
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-1 sm:mb-2">
            Stop Building Infrastructure.
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8">
            <span className="text-orange-500">Start Shipping Agents.</span>
          </h3>
          <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 leading-relaxed">
            Join teams building the next generation of AI agents.<br />
            One MCP server. Zero infrastructure headaches.<br />
            Production-ready in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 py-4 sm:py-5 px-3 sm:px-4 text-sm sm:text-base rounded-lg bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <Button 
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 sm:py-5 px-6 sm:px-8 text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
