import { getAllBlogPosts, getCategories } from "@/lib/blog";
import precompiled from "@/data/precompiled-blog-posts.json";

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
  slug: string;
}

export async function getBlogData() {
  // Prefer precompiled data at build time/fallback to runtime generation
  const pre = precompiled as unknown as {
    posts: Array<{
      slug: string;
      title: string;
      description: string;
      date: string;
      readTime: string;
      authors: { name: string; avatar?: string; role?: string }[];
      category: string;
      coverImage?: string;
    }>;
    categories: string[];
  } | undefined;
  const posts = pre?.posts ?? (await getAllBlogPosts());
  const categories = pre?.categories ?? (await getCategories());
  
  // Transform to match the expected format
  const transformedPosts: BlogPost[] = posts.map((post, index) => ({
    id: index + 1,
    date: new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }),
    readTime: post.readTime,
    title: post.title,
    description: post.description,
    authors: post.authors.map(author => ({
      name: author.name,
      avatar: author.avatar ?? author.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
      role: author.role
    })),
    category: post.category,
    slug: post.slug
  }));
  
  return {
    blogPosts: transformedPosts,
    categories
  };
} 