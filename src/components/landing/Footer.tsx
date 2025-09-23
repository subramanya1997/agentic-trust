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
    <footer className="bg-gray-900 text-gray-300 py-12 sm:py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 sm:gap-12 mb-10 sm:mb-12">
          {/* Left Part: Company Info */}
          <div className="md:max-w-xs lg:max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32"
                height="32"
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
              <h3 className="text-white font-bold text-lg sm:text-xl">Agentic Trust</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Enterprise-grade access control for AI agents. Connect your IdP, define roles, deploy securely.
            </p>
          </div>

          {/* Right Part: Product and Legal Links Side-by-Side */}
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12 md:gap-16 lg:gap-20">
            {/* Resources Column */}
            <div>
              <h4 className="text-white font-semibold mb-2.5 sm:mb-3 uppercase text-[11px] sm:text-xs tracking-wider">Resources</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li>
                  <Link href="/blog" className="text-xs sm:text-sm hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <span className="text-xs sm:text-sm text-gray-500 cursor-not-allowed">
                    Documentation (Coming Soon)
                  </span>
                </li>
              </ul>
            </div>
            {/* Legal Column */}
            <div>
              <h4 className="text-white font-semibold mb-2.5 sm:mb-3 uppercase text-[11px] sm:text-xs tracking-wider">Legal</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li>
                  <Link href="/privacy" className="text-xs sm:text-sm hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-xs sm:text-sm hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/responsible-disclosure" className="text-xs sm:text-sm hover:text-white transition-colors">
                    Responsible Disclosure
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar - Keep this part as is */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-500">
          <p className="text-center md:text-left mb-3 md:mb-0">© 2025 Agentic Labs Inc. All rights reserved.</p>
          <a 
            href="https://subramanya.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[10px] sm:text-xs hover:text-white transition-colors"
          >
            made by subramanya
          </a>
        </div>
      </div>
    </footer>
  );
}; 