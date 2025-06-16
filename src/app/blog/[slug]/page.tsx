import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import { BlogContent } from "@/components/blog/BlogContent";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { generateBlogPostingSchema, generateBreadcrumbSchema, absoluteOgImage, absoluteUrl, SITE_CONFIG } from "@/lib/seo";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Generate structured data
  const blogPostingSchema = generateBlogPostingSchema({
    title: post.title,
    description: post.description,
    date: post.date,
    authors: post.authors,
    coverImage: post.coverImage,
    slug: post.slug,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Script
        id={`blog-posting-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema),
        }}
      />
      <Script
        id={`breadcrumb-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Left sidebar - Table of Contents */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <TableOfContents htmlContent={post.htmlContent || ""} />
            </div>
          </aside>

          {/* Main content area */}
          <article className="lg:col-span-6">
            {/* Back button */}
            <Link 
              href="/blog" 
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors mb-8"
            >
              <svg 
                className="w-4 h-4 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
              Back to Blog
            </Link>

            {/* Date, read time, and tags */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 flex-wrap">
              <time dateTime={new Date(post.date + 'T12:00:00').toISOString()}>
                {new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
              {post.category && (
                <>
                  <span>•</span>
                  <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author section */}
            {post.authors?.length > 0 && (
              <div className="flex items-center gap-4 mb-8">
                {post.authors.map((author) => (
                  <div key={author.name} className="flex items-center gap-3">
                    {author.avatar ? (
                      <Image
                        src={author.avatar}
                        alt={author.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gradient-to-br from-brand to-brand/60 rounded-full flex items-center justify-center text-white font-semibold">
                        {author.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-gray-900">{author.name}</p>
                      {author.role && (
                        <p className="text-sm text-gray-600">{author.role}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Divider */}
            <hr className="border-gray-200 mb-12" />

            {/* Blog content */}
            <BlogContent htmlContent={post.htmlContent || ""} />
          </article>

          {/* Right sidebar - empty for now, can be used for related posts or ads */}
          <aside className="hidden lg:block lg:col-span-3">
            {/* Future: Related posts, social sharing, etc. */}
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Generate static params for SSG
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) {
    return {};
  }
  
  const publishedTime = new Date(post.date + 'T12:00:00').toISOString();
  
  return {
    title: `${post.title} | Agentic Trust Blog`,
    description: post.description,
    authors: post.authors?.map(author => ({ name: author.name })),
    keywords: [post.category, 'AI agents', 'MCP servers', 'infrastructure', ...post.title.split(' ')].filter(Boolean),
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime,
      modifiedTime: publishedTime,
      authors: post.authors?.map(a => a.name),
      tags: post.category ? [post.category] : undefined,
      siteName: SITE_CONFIG.name,
      url: absoluteUrl(`/blog/${slug}`),
      images: post.coverImage ? [
        {
          url: absoluteOgImage(post.coverImage),
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [
        {
          url: absoluteOgImage('/blog/opengraph-image'),
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      site: SITE_CONFIG.twitterHandle,
      creator: SITE_CONFIG.twitterHandle,
      images: post.coverImage ? [absoluteOgImage(post.coverImage)] : [absoluteOgImage('/blog/twitter-image')],
    },
    alternates: {
      canonical: absoluteUrl(`/blog/${slug}`),
    },
    other: {
      'twitter:image:alt': post.title,
    },
  };
} 