import { ImageResponse } from 'next/og';
import { OG_CONFIG } from '@/lib/og/config';
import { generateBlogPostOG } from '@/lib/og/templates';
import { getBlogPost } from '@/lib/sanity';
import { notFound } from 'next/navigation';

export const runtime = 'nodejs';

export const alt = 'Agentic Trust Blog Post';
export const size = OG_CONFIG.sizes.og;
export const contentType = 'image/png';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Image({ params }: Props) {
  try {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) {
      notFound();
    }

    // Extract author name (first author if multiple)
    const authorName = post.authors && post.authors.length > 0 
      ? post.authors[0].name 
      : undefined;

    // Extract category
    const category = post.category 
      ? (typeof post.category === 'object' ? post.category.title : post.category)
      : undefined;

    // Format date
    const date = post.date 
      ? new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      : undefined;

    return new ImageResponse(
      generateBlogPostOG({
        title: post.title,
        author: authorName,
        category,
        date,
      }),
      {
        ...size,
      }
    );
  } catch (error) {
    // Fallback to generic blog image on error
    console.error('Error generating blog post OG image:', error);
    notFound();
  }
}

