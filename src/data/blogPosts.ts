"use client";

import { useEffect, useState } from 'react';

export interface Author {
  name: string;
  avatar: string;
  role?: string;
}

export interface BlogPost {
  id: number;
  date: string;
  readTime: string;
  title: string;
  description: string;
  authors: Author[];
  category: string;
  slug?: string;
}

// Blog posts will be populated from markdown files
export let blogPosts: BlogPost[] = [];
export let categories: string[] = ["All", "Product", "Company", "Engineering", "Security"];

// Auto-fetch blog posts when this module is loaded on client side
if (typeof window !== 'undefined') {
  fetch('/api/blog-posts')
    .then(response => response.json())
    .then(data => {
      if (data.blogPosts) {
        blogPosts.splice(0, blogPosts.length, ...data.blogPosts);
      }
      if (data.categories) {
        categories.splice(0, categories.length, ...data.categories);
      }
      // Trigger a re-render by dispatching a custom event
      window.dispatchEvent(new CustomEvent('blogPostsLoaded'));
    })
    .catch(error => {
      console.error('Failed to fetch blog posts:', error);
    });
}

// Hook to fetch blog posts
export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
  const [cats, setCats] = useState<string[]>(categories);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/blog-posts');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setPosts(data.blogPosts);
        setCats(data.categories);
        // Update the exported variables too
        blogPosts = data.blogPosts;
        categories = data.categories;
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return { posts, categories: cats, loading, error };
} 