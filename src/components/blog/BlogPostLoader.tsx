"use client";

import { useEffect } from 'react';

export function BlogPostLoader({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Force a re-render when blog posts are loaded
    const handleBlogPostsLoaded = () => {
      // Trigger a re-render by dispatching a custom event
      window.dispatchEvent(new Event('blogPostsUpdate'));
    };

    window.addEventListener('blogPostsLoaded', handleBlogPostsLoaded);
    
    // Check if already loaded
    if (typeof window !== 'undefined') {
      // Small delay to ensure the fetch has started
      setTimeout(() => {
        // Dispatch event to trigger any listeners
        window.dispatchEvent(new Event('blogPostsUpdate'));
      }, 100);
    }

    return () => {
      window.removeEventListener('blogPostsLoaded', handleBlogPostsLoaded);
    };
  }, []);

  return <>{children}</>;
} 