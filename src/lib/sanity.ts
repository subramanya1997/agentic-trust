import { getClient } from '../../sanity/lib/client'
import {
  allPostsQuery,
  postsQuery,
  postsByCategoryQuery,
  postBySlugQuery,
  featuredPostsQuery,
  categoriesQuery,
  authorsQuery,
  settingsQuery,
  searchPostsQuery,
  postPathsQuery,
  sitemapQuery,
  relatedPostsQuery,
} from '../../sanity/lib/queries'
import readingTime from 'reading-time'
import { cachedQuery, CACHE_TAGS, REVALIDATE_TIMES } from './sanity-performance'

export interface Author {
  _id: string
  name: string
  slug: {
    current: string
  }
  avatar?: string
  role?: string
  bio?: string
  email?: string
  socialLinks?: {
    twitter?: string
    linkedin?: string
    github?: string
    website?: string
  }
}

export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  color?: string
}

export interface BlogPost {
  _id: string
  slug: {
    current: string
  }
  title: string
  description: string
  excerpt: string
  date: string
  publishedAt: string
  readTime: string
  authors: Author[]
  category: Category
  content: any[] // Portable Text blocks
  markdownContent?: string
  htmlContent?: string
  coverImage?: string
  coverImageAlt?: string
  tags?: string[]
  featured?: boolean
  status: 'draft' | 'review' | 'published'
  seo?: any
  relatedPosts?: any[]
}

// Transform Sanity post to match existing BlogPost interface
function transformPost(post: any): BlogPost {
  // Calculate reading time from content or markdown
  let readTimeText = '5 min read'
  if (post.markdownContent) {
    const stats = readingTime(post.markdownContent)
    readTimeText = stats.text
  } else if (post.content) {
    // Estimate from portable text blocks
    const textContent = post.content
      .filter((block: any) => block._type === 'block')
      .map((block: any) => block.children?.map((child: any) => child.text).join(' '))
      .join(' ')
    const stats = readingTime(textContent)
    readTimeText = stats.text
  }

  return {
    _id: post._id,
    slug: post.slug,
    title: post.title,
    description: post.excerpt || post.description || '',
    excerpt: post.excerpt || '',
    date: post.publishedAt?.split('T')[0] || new Date().toISOString().split('T')[0],
    publishedAt: post.publishedAt,
    readTime: readTimeText,
    authors: post.authors || [],
    category: post.category || { _id: '', title: 'General', slug: { current: 'general' } },
    content: post.content || [],
    markdownContent: post.markdownContent,
    coverImage: post.coverImage,
    coverImageAlt: post.coverImageAlt,
    tags: post.tags || [],
    featured: post.featured || false,
    status: post.status || 'published',
    seo: post.seo,
    relatedPosts: post.relatedPosts,
  }
}

// Get all blog posts
export const getAllBlogPosts = cachedQuery(
  async (preview = false): Promise<BlogPost[]> => {
    const client = getClient(preview)
    const posts = await client.fetch(allPostsQuery)
    return posts.map(transformPost)
  },
  {
    tags: CACHE_TAGS.posts,
    revalidate: REVALIDATE_TIMES.posts,
    key: 'all-blog-posts', // Add unique cache key
  }
)

// Get paginated blog posts
export async function getPaginatedPosts(
  page: number = 1,
  postsPerPage: number = 10,
  preview = false
): Promise<{ posts: BlogPost[]; totalPages: number }> {
  const client = getClient(preview)
  const start = (page - 1) * postsPerPage
  const end = start + postsPerPage
  
  const [posts, total] = await Promise.all([
    client.fetch(postsQuery, { start, end }),
    client.fetch(`count(*[_type == "blogPost" && status == "published"])`),
  ])
  
  return {
    posts: posts.map(transformPost),
    totalPages: Math.ceil(total / postsPerPage),
  }
}

// Get posts by category
export async function getPostsByCategory(
  categorySlug: string,
  preview = false
): Promise<BlogPost[]> {
  const client = getClient(preview)
  const posts = await client.fetch(postsByCategoryQuery, { categorySlug })
  return posts.map(transformPost)
}

// Get a single blog post by slug
export const getBlogPost = cachedQuery(
  async (slug: string, preview = false): Promise<BlogPost | null> => {
    const client = getClient(preview)
    const post = await client.fetch(postBySlugQuery, { slug })
    return post ? transformPost(post) : null
  },
  {
    tags: CACHE_TAGS.posts, // Will need to tag with specific post later
    revalidate: REVALIDATE_TIMES.post,
    key: 'post',
  }
)

// Get featured posts
export async function getFeaturedPosts(preview = false): Promise<BlogPost[]> {
  const client = getClient(preview)
  const posts = await client.fetch(featuredPostsQuery)
  return posts.map(transformPost)
}

// Get all categories
export const getCategories = cachedQuery(
  async (preview = false): Promise<string[]> => {
    const client = getClient(preview)
    const categories: Category[] = await client.fetch(categoriesQuery)
    
    // Ensure we have valid categories and filter out any undefined/null titles
    const validCategories = categories.filter((cat: Category) => cat && cat.title)
    const categoryNames: string[] = validCategories.map((cat: Category) => cat.title)
    
    // Return unique categories with 'All' at the beginning
    const uniqueCategories = Array.from(new Set(categoryNames))
    return ['All', ...uniqueCategories]
  },
  {
    tags: CACHE_TAGS.categories,
    revalidate: REVALIDATE_TIMES.categories,
    key: 'categories-list', // Add unique cache key
  }
)

// Get all authors
export async function getAuthors(preview = false): Promise<Author[]> {
  const client = getClient(preview)
  return client.fetch(authorsQuery)
}

// Get site settings
export const getSettings = cachedQuery(
  async (preview = false): Promise<any> => {
    const client = getClient(preview)
    return client.fetch(settingsQuery)
  },
  {
    tags: CACHE_TAGS.settings,
    revalidate: REVALIDATE_TIMES.settings,
  }
)

// Search posts
export async function searchPosts(
  searchTerm: string,
  preview = false
): Promise<BlogPost[]> {
  const client = getClient(preview)
  const posts = await client.fetch(searchPostsQuery, { searchTerm })
  return posts.map(transformPost)
}

// Get post paths for static generation
export async function getPostPaths(): Promise<string[]> {
  const client = getClient()
  return client.fetch(postPathsQuery)
}

// Get data for sitemap
export async function getSitemapData(): Promise<any> {
  const client = getClient()
  return client.fetch(sitemapQuery)
}

// Get related posts
export async function getRelatedPosts(
  currentId: string,
  categoryId: string,
  tags: string[],
  preview = false
): Promise<BlogPost[]> {
  const client = getClient(preview)
  const posts = await client.fetch(relatedPostsQuery, {
    currentId,
    categoryId,
    tags,
  })
  return posts.map(transformPost)
}

// Compatibility layer - export functions with the same names as the file-based system
export { getAllBlogPosts as getAllBlogPostsFromSanity }
export { getBlogPost as getBlogPostFromSanity }
export { getCategories as getCategoriesFromSanity }
