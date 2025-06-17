import { NextResponse } from 'next/server';
import { getAllBlogPosts, getCategories } from '@/lib/blog';

export async function GET() {
  try {
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
      description: post.description,
      authors: post.authors.map(author => ({
        name: author.name,
        avatar: author.avatar,
        role: author.role
      })),
      category: post.category,
      slug: post.slug
    }));
    
    return NextResponse.json({
      blogPosts: transformedPosts,
      categories
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
} 