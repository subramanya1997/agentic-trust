"use client";

import { useState } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="font-bold text-lg text-gray-900">Menu</span>
            <button
              onClick={closeMenu}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-6">
            <ul className="space-y-6">
              <li>
                <Link
                  href="/blog"
                  onClick={closeMenu}
                  className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <span className="text-lg font-medium text-gray-400 cursor-not-allowed block">
                  Docs (Coming Soon)
                </span>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="p-6 border-t border-gray-200">
            <Link
              href="https://calendly.com/subramanya1997/introduction"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <Button className="w-full bg-black text-white hover:bg-gray-800 py-3 text-base rounded-md">
                Book Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

