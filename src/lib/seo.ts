import { Metadata } from 'next';

// Base configuration
export const SITE_CONFIG = {
  url: 'https://agentictrust.com',
  name: 'Agentic Trust',
  description: 'Secure AI agent infrastructure for teams and partners. Build agentic workflows with enterprise-grade identity, routing, and observability.',
  twitterHandle: '@agentictrust',
};

// Helper to convert relative URLs to absolute
export function absoluteUrl(path: string): string {
  return `${SITE_CONFIG.url}${path}`;
}

// Helper for OpenGraph/Twitter images
export function absoluteOgImage(path: string): string {
  return absoluteUrl(path);
}

// Generate organization structured data
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: absoluteUrl('/logos/agentic-trust-logo.svg'),
    sameAs: [
      'https://twitter.com/agentictrust',
      // Add other social media profiles here
    ],
    description: SITE_CONFIG.description,
  };
}

// Generate website structured data
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

// Generate blog posting structured data
export function generateBlogPostingSchema(post: {
  title: string;
  description: string;
  date: string;
  authors?: Array<{ name: string; role?: string }>;
  coverImage?: string;
  slug: string;
  content?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: new Date(post.date + 'T12:00:00').toISOString(),
    dateModified: new Date(post.date + 'T12:00:00').toISOString(),
    author: post.authors?.map(author => ({
      '@type': 'Person',
      name: author.name,
      jobTitle: author.role,
    })) || [{
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    }],
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/logos/agentic-trust-logo.svg'),
      }
    },
    image: post.coverImage ? absoluteUrl(post.coverImage) : absoluteUrl('/blog/opengraph-image'),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/blog/${post.slug}`),
    },
    url: absoluteUrl(`/blog/${post.slug}`),
  };
}

// Generate breadcrumb structured data
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

// Generate SoftwareApplication structured data
export function generateSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    creator: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
    featureList: [
      'Identity and authentication for AI agents',
      'Fine-grained tool permissions and access control',
      'Real-time policy enforcement',
      'Audit logs and forensics',
      'IdP integration (SAML, SCIM, OIDC)',
      'Tool orchestration and management',
    ],
  };
}

// Helper to generate complete metadata with Twitter card tags
export function generateMetadata(options: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
  keywords?: string[];
}): Metadata {
  const {
    title,
    description,
    path,
    image = '/opengraph-image',
    type = 'website',
    publishedTime,
    authors,
    keywords,
  } = options;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: SITE_CONFIG.name,
      type,
      images: [
        {
          url: absoluteOgImage(image),
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      ...(publishedTime && { publishedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: SITE_CONFIG.twitterHandle,
      creator: SITE_CONFIG.twitterHandle,
      images: [absoluteOgImage(image.replace('opengraph-image', 'twitter-image'))],
    },
    other: {
      'twitter:image:alt': title,
    },
  };
} 