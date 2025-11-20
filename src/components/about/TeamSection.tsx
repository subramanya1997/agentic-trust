"use client";

import Image from "next/image";

export function TeamSection() {
  return (
    <section className="py-24 bg-white border-y border-zinc-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
            Built by Engineers From
          </h2>
          <p className="text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Our founding team brings deep expertise in distributed systems,
            security, and AI infrastructure from leading institutions and
            companies.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            <div className="relative w-40 h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-105">
              <Image
                src="/logos/cisco.svg"
                alt="Cisco"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-40 h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-105">
              <Image
                src="/logos/uc-berkeley.svg"
                alt="UC Berkeley"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-40 h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-105">
              <Image
                src="/logos/umass-amherst.png"
                alt="UMass Amherst"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

