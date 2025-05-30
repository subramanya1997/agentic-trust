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
}

// Blog posts sorted by date (newest first)
export const blogPosts: BlogPost[] = [];

export const categories = ["All", "Product", "Company", "Engineering", "Security"]; 