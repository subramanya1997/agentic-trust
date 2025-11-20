import React from 'react';
import Link from "next/link";
import { Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-200 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <div className="relative flex items-center justify-center w-8 h-8 group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-brand"
                >
                  <path d="M10 18H5a3 3 0 0 1-3-3v-1" />
                  <path d="M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" />
                  <path d="M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" />
                  <path d="m7 21 3-3-3-3" />
                  <rect x="14" y="14" width="8" height="8" rx="2" />
                  <rect x="2" y="2" width="8" height="8" rx="2" />
                </svg>
              </div>
              <span className="font-bold text-lg text-zinc-900">Agentic Trust</span>
            </Link>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              The command and control plane for AI agents. Secure, monitor, and control your AI infrastructure.
            </p>
            <div className="flex space-x-4">
              <Link href="https://linkedin.com/company/agentic-trust" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-brand transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="flex gap-16">
          <div>
              <h4 className="font-semibold text-zinc-900 mb-6">Solutions</h4>
            <ul className="space-y-4">
                <li><Link href="/it-teams" className="text-zinc-600 hover:text-brand transition-colors">IT Teams</Link></li>
                <li><Link href="/engineering-teams" className="text-zinc-600 hover:text-brand transition-colors">Engineering Teams</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-zinc-600 hover:text-brand transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-zinc-600 hover:text-brand transition-colors">Blog</Link></li>
                <li><span className="text-zinc-400 cursor-not-allowed">Docs (Coming Soon)</span></li>
            </ul>
          </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Agentic Labs Inc. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm">
            <Link href="/privacy" className="text-zinc-500 hover:text-brand transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-zinc-500 hover:text-brand transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};