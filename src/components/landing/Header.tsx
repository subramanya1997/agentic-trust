import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-14 max-w-screen-2xl items-center mx-auto px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg text-gray-900">Agentic Trust</span>
        </Link>
        <nav className="flex flex-1 items-center justify-center space-x-6 text-sm font-medium text-gray-600">
          <Link href="#features" className="hover:text-gray-900 transition-colors">Features</Link>
          <Link href="#faq" className="hover:text-gray-900 transition-colors">FAQ</Link>
          <Link href="#documentation" className="hover:text-gray-900 transition-colors">Documentation</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="default" className="bg-black text-white hover:bg-gray-800 px-4 py-2 text-sm rounded-md">
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  );
}; 