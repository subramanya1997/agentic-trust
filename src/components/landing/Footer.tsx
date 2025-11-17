import React from 'react';
import Link from "next/link";

// FooterLink component is not used, can be removed if desired, but kept for now.
// const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
//   <li>
//     <Link href={href} className="text-gray-500 hover:text-gray-700 transition-colors duration-150">
//       {children}
//     </Link>
//   </li>
// );

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-8">
          {/* Left Part: Company Info */}
          <div className="md:max-w-md">
            <div className="flex items-center gap-2 mb-3">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28"
                height="28"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#f97316"
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                aria-hidden="true"
              >
                <path d="M10 18H5a3 3 0 0 1-3-3v-1"/>
                <path d="M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"/>
                <path d="M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"/>
                <path d="m7 21 3-3-3-3"/>
                <rect x="14" y="14" width="8" height="8" rx="2"/>
                <rect x="2" y="2" width="8" height="8" rx="2"/>
              </svg>
              <h3 className="text-white font-bold text-lg">Agentic Trust</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Secure AI agent infrastructure. Identity, policy, and audit for AI agents.
            </p>
          </div>

          {/* Right Part: Links */}
          <div className="flex gap-12">
            {/* Resources */}
            <div>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-2">
          <p className="text-center sm:text-left">© 2025 Agentic Labs Inc. All rights reserved.</p>
          <a 
            href="https://subramanya.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            made by subramanya
          </a>
        </div>
      </div>
    </footer>
  );
}; 