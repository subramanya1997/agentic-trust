import groq from 'groq'

// Author fields to include in queries
const authorFields = groq`
  _id,
  name,
  slug,
  role,
  bio,
  email,
  "avatar": avatar.asset->url,
  socialLinks
`

// Category fields
const categoryFields = groq`
  _id,
  title,
  slug,
  description,
  color
`

// SEO fields
const seoFields = groq`
  metaTitle,
  metaDescription,
  keywords,
  "ogImage": ogImage.asset->url,
  canonicalUrl,
  noIndex,
  structuredData,
  faqItems
`

// Blog post fields for list views
export const postListFields = groq`
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  featured,
  status,
  "coverImage": coverImage.asset->url,
  "coverImageAlt": coverImage.alt,
  "authors": authors[]->{${authorFields}},
  "category": category->{${categoryFields}},
  tags
`

// Full blog post fields
export const postFields = groq`
  ${postListFields},
  content,
  markdownContent,
  "seo": seo{${seoFields}},
  "relatedPosts": relatedPosts[]->{
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "coverImage": coverImage.asset->url,
    "category": category->title
  }
`

// Get all published blog posts
export const allPostsQuery = groq`
  *[_type == "blogPost" && status == "published"] | order(publishedAt desc) {
    ${postListFields}
  }
`

// Get posts with pagination
export const postsQuery = groq`
  *[_type == "blogPost" && status == "published"] | order(publishedAt desc) [$start...$end] {
    ${postListFields}
  }
`

// Get posts by category
export const postsByCategoryQuery = groq`
  *[_type == "blogPost" && status == "published" && category->slug.current == $categorySlug] | order(publishedAt desc) {
    ${postListFields}
  }
`

// Get a single post by slug
export const postBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    ${postFields}
  }
`

// Get featured posts
export const featuredPostsQuery = groq`
  *[_type == "blogPost" && status == "published" && featured == true] | order(publishedAt desc) [0...3] {
    ${postListFields}
  }
`

// Get all categories
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    ${categoryFields}
  }
`

// Get all authors
export const authorsQuery = groq`
  *[_type == "author"] | order(name asc) {
    ${authorFields}
  }
`

// Get site settings
export const settingsQuery = groq`
  *[_type == "settings"][0] {
    title,
    description,
    siteUrl,
    socialMedia,
    "defaultSeo": defaultSeo{${seoFields}},
    googleAnalyticsId,
    postsPerPage
  }
`

// Search posts query
export const searchPostsQuery = groq`
  *[_type == "blogPost" && status == "published" && (
    title match $searchTerm + "*" ||
    excerpt match $searchTerm + "*" ||
    pt::text(content) match $searchTerm + "*"
  )] | order(publishedAt desc) {
    ${postListFields}
  }
`

// Get post paths for static generation
export const postPathsQuery = groq`
  *[_type == "blogPost" && defined(slug.current)][].slug.current
`

// Get posts for sitemap
export const sitemapQuery = groq`
  {
    "posts": *[_type == "blogPost" && status == "published"] {
      "slug": slug.current,
      publishedAt,
      "_updatedAt": _updatedAt
    },
    "categories": *[_type == "category"] {
      "slug": slug.current,
      "_updatedAt": _updatedAt
    },
    "authors": *[_type == "author"] {
      "slug": slug.current,
      "_updatedAt": _updatedAt
    }
  }
`

// Get related posts
export const relatedPostsQuery = groq`
  *[_type == "blogPost" && status == "published" && _id != $currentId && (
    category._ref == $categoryId ||
    count((tags[])[@ in $tags]) > 0
  )] | order(publishedAt desc) [0...3] {
    ${postListFields}
  }
`
