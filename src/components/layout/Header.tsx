import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-5xl bg-white/70 backdrop-blur-xl border border-zinc-200 rounded-full shadow-sm">
        <div className="flex h-14 items-center justify-between px-6">
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 group-hover:scale-110 transition-transform">
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
            <span className="font-bold text-xl text-zinc-900 tracking-tight hidden md:inline">Agentic Trust</span>
          </Link>

          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8 text-md font-medium text-zinc-600">
            <Link href="/about" className="hover:text-brand transition-colors">About</Link>
            <Link href="/blog" className="hover:text-brand transition-colors">Blog</Link>
          </nav>

            <Link href="https://calendly.com/subramanya1997/introduction" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-full px-4 text-md font-medium h-9 shadow-sm">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}; 