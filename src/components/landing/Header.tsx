import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-14 max-w-7xl items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
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
          <span className="font-bold text-lg text-gray-900">Agentic Trust</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-6 text-sm font-medium text-gray-600">
          <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
          <span className="text-gray-400 cursor-not-allowed">Docs (Coming Soon)</span>
        </nav>
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link href="https://calendly.com/subramanya1997/introduction" target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="bg-black text-white hover:bg-gray-800 px-3 sm:px-4 py-2 text-sm rounded-md">
              Book a Call
            </Button>
          </Link>
          {/* Placeholder for Hamburger Menu for mobile */}
          <div className="md:hidden">
            {/* <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
            </Button> */}
          </div>
        </div>
      </div>
    </header>
  );
}; 