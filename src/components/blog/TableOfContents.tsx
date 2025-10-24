"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  htmlContent?: string;
  headings?: TocItem[];
}

export function TableOfContents({ htmlContent, headings: initialHeadings }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>(initialHeadings || []);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // If headings are provided directly, use them
    if (initialHeadings && initialHeadings.length > 0) {
      setHeadings(initialHeadings);
      return;
    }

    // Otherwise, parse HTML to extract headings
    if (htmlContent) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      const headingElements = doc.querySelectorAll('h2, h3, h4');
      
      const items: TocItem[] = Array.from(headingElements).map((heading, index) => {
        const id = heading.id || `heading-${index}`;
        const level = parseInt(heading.tagName.substring(1));
        return {
          id,
          text: heading.textContent || '',
          level
        };
      });
      
      setHeadings(items);
    }
  }, [htmlContent, initialHeadings]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -80% 0px',
      }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 space-y-1">
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
          >
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={cn(
                "text-sm block w-full text-left py-1 hover:text-brand transition-colors",
                activeId === heading.id
                  ? "text-brand font-medium"
                  : "text-gray-600"
              )}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
} 