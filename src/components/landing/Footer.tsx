import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-gray-500 hover:text-gray-700 transition-colors duration-150">
      {children}
    </Link>
  </li>
);

export const Footer = () => {
  const linkSections = [
    {
      title: "Product",
      links: [
        { href: "#features", label: "Features" },
        { href: "#solutions", label: "Solutions (Coming Soon)" },
        { href: "#pricing", label: "Pricing (Coming Soon)" },
        { href: "/docs", label: "Documentation" },
      ]
    },
    {
      title: "Developers",
      links: [
        { href: "/docs/api", label: "API Reference" },
        { href: "/docs/quickstart", label: "Quickstart Guide" },
        { href: "https://github.com/your-org/agentic-trust", label: "GitHub" , external: true},
        { href: "#status", label: "System Status (Coming Soon)" },
      ]
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/blog", label: "Blog (Coming Soon)" },
        { href: "/careers", label: "Careers (Coming Soon)" },
        { href: "/contact", label: "Contact Us" },
      ]
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/responsible-disclosure", label: "Responsible Disclosure" },
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Agentic Trust</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Building the next generation of agent-native infrastructure for seamless AI integration.
            </p>
          </div>
          
          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-sm hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-sm hover:text-white transition-colors">
                  Solutions (Coming Soon)
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm hover:text-white transition-colors">
                  Pricing (Coming Soon)
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-sm hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Developers */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider">Developers</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/api" className="text-sm hover:text-white transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/quickstart" className="text-sm hover:text-white transition-colors">
                  Quickstart Guide
                </Link>
              </li>
              <li>
                <Link href="https://github.com" className="text-sm hover:text-white transition-colors">
                  GitHub ↗
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-sm hover:text-white transition-colors">
                  System Status (Coming Soon)
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-white transition-colors">
                  Blog (Coming Soon)
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm hover:text-white transition-colors">
                  Careers (Coming Soon)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Legal Links */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-white font-semibold mb-2 uppercase text-xs tracking-wider">Legal</h4>
              <div className="flex space-x-4">
                <Link href="/privacy" className="text-xs hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-xs hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/disclosure" className="text-xs hover:text-white transition-colors">
                  Responsible Disclosure
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Agentic Trust Technologies Inc. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="https://linkedin.com" className="hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="https://github.com" className="hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="text-xs hover:text-white transition-colors">
              Contact
            </Link>
            <span className="text-xs">made by lemia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}; 