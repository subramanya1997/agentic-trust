import { unstable_cache } from 'next/cache'
import { draftMode } from 'next/headers'

// Cache tags for different content types
export const CACHE_TAGS = {
  posts: 'sanity:posts',
  post: (slug: string) => `sanity:post:${slug}`,
  authors: 'sanity:authors',
  author: (slug: string) => `sanity:author:${slug}`,
  categories: 'sanity:categories',
  category: (slug: string) => `sanity:category:${slug}`,
  settings: 'sanity:settings',
} as const

// Revalidation times
export const REVALIDATE_TIMES = {
  posts: 60 * 5, // 5 minutes
  post: 60 * 60, // 1 hour  
  authors: 60 * 60 * 24, // 24 hours
  categories: 60 * 60 * 24, // 24 hours
  settings: 60 * 60 * 24, // 24 hours
} as const

// Create cached function wrapper
export function cachedQuery<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  options: {
    tags: string | string[]
    revalidate?: number
    key?: string
  }
): T {
  const keyArray = options.key ? [options.key] : []
  const tagsArray = Array.isArray(options.tags) ? options.tags : [options.tags]
  
  return unstable_cache(
    async (...args: Parameters<T>) => {
      const { isEnabled } = await draftMode()
      if (isEnabled) {
        // Skip cache in draft mode
        return fn(...args)
      }
      return fn(...args)
    },
    keyArray,
    {
      tags: tagsArray,
      revalidate: options.revalidate,
    }
  ) as T
}

// Optimized GROQ query options
export const QUERY_OPTIONS = {
  // Use CDN in production
  useCdn: process.env.NODE_ENV === 'production',
  
  // Stale while revalidate
  staleWhileRevalidate: 60,
  
  // Cache options for different query types
  cache: {
    posts: {
      ttl: 60 * 5, // 5 minutes
      swr: 60 * 60, // 1 hour stale-while-revalidate
    },
    post: {
      ttl: 60 * 60, // 1 hour
      swr: 60 * 60 * 24, // 24 hours stale-while-revalidate
    },
    static: {
      ttl: 60 * 60 * 24, // 24 hours
      swr: 60 * 60 * 24 * 7, // 7 days stale-while-revalidate
    },
  },
}

// Image optimization settings for Sanity CDN
export const IMAGE_OPTIMIZATION = {
  // Automatic format selection (WebP/AVIF where supported)
  auto: 'format',
  
  // Quality settings per image type
  quality: {
    thumbnail: 70,
    card: 80,
    hero: 85,
    full: 90,
  },
  
  // Responsive image sizes
  sizes: {
    thumbnail: { width: 200, height: 200 },
    card: { width: 400, height: 250 },
    hero: { width: 1200, height: 630 },
    full: { width: 1920, height: 1080 },
  },
  
  // Device pixel ratio support
  dpr: [1, 2],
}

// Generate optimized image URL
export function getOptimizedImageUrl(
  url: string,
  size: keyof typeof IMAGE_OPTIMIZATION.sizes,
  options?: {
    quality?: number
    fit?: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min'
    crop?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'focalpoint' | 'entropy'
  }
): string {
  if (!url || !url.includes('sanity.io')) return url
  
  const params = new URLSearchParams({
    auto: IMAGE_OPTIMIZATION.auto,
    q: String(options?.quality || IMAGE_OPTIMIZATION.quality[size] || 80),
    w: String(IMAGE_OPTIMIZATION.sizes[size].width),
    h: String(IMAGE_OPTIMIZATION.sizes[size].height),
    fit: options?.fit || 'max',
  })
  
  if (options?.crop) {
    params.set('crop', options.crop)
  }
  
  // Add parameters to URL
  const separator = url.includes('?') ? '&' : '?'
  return `${url}${separator}${params.toString()}`
}

// Webhook revalidation paths
export function getRevalidationPaths(document: any): string[] {
  const paths: string[] = []
  
  switch (document._type) {
    case 'blogPost':
      paths.push('/blog')
      paths.push(`/blog/${document.slug?.current}`)
      break
    case 'author':
      paths.push('/blog')
      // Add author-specific pages if you have them
      break
    case 'category':
      paths.push('/blog')
      // Add category-specific pages if you have them
      break
    case 'settings':
      paths.push('/')
      paths.push('/blog')
      break
  }
  
  return paths
}
