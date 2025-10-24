import { NextResponse } from 'next/server';
import { getAllBlogPosts, getCategories } from '@/lib/sanity';

export async function GET() {
  try {
    // Get posts and categories from Sanity
    const posts = await getAllBlogPosts();
    const categories = await getCategories();
    
    // Transform to match the expected format
    const transformedPosts = posts.map((post, index) => ({
      id: index + 1,
      date: new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      readTime: post.readTime,
      title: post.title,
      description: post.description || post.excerpt || '',
      authors: post.authors.map(author => ({
        name: author.name,
        avatar: author.avatar,
        role: author.role
      })),
      category: typeof post.category === 'object' ? post.category.title : post.category,
      slug: typeof post.slug === 'object' ? post.slug.current : post.slug
    }));
    
    return NextResponse.json({
      blogPosts: transformedPosts,
      categories: categories
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
} 