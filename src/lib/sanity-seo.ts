import { getSettings } from './sanity'
import { PortableTextBlock } from '@portabletext/types'

// Auto-generate meta description from content
export function generateMetaDescription(
  content: PortableTextBlock[] | string,
  maxLength: number = 160
): string {
  let text = ''
  
  if (typeof content === 'string') {
    text = content
  } else if (Array.isArray(content)) {
    // Extract text from Portable Text blocks
    text = content
      .filter((block: any) => block._type === 'block')
      .map((block: any) => 
        block.children
          ?.filter((child: any) => child._type === 'span')
          ?.map((child: any) => child.text)
          ?.join(' ') || ''
      )
      .join(' ')
  }
  
  // Clean up the text
  text = text
    .replace(/\s+/g, ' ')
    .replace(/[#*`\[\]]/g, '')
    .trim()
  
  // Truncate to max length at word boundary
  if (text.length > maxLength) {
    text = text.substring(0, maxLength - 3)
    const lastSpace = text.lastIndexOf(' ')
    if (lastSpace > 0) {
      text = text.substring(0, lastSpace)
    }
    text += '...'
  }
  
  return text
}

// Generate FAQ schema from content
export function generateFAQSchema(faqItems: any[]) {
  if (!faqItems || faqItems.length === 0) return null
  
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

// Generate HowTo schema from content
export function generateHowToSchema(post: any) {
  const steps = extractStepsFromContent(post.content)
  if (steps.length === 0) return null
  
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: post.title,
    description: post.excerpt || generateMetaDescription(post.content),
    image: post.coverImage,
    totalTime: `PT${post.readTime}`,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.text,
      position: index + 1,
    })),
  }
}

// Extract steps from content for HowTo schema
function extractStepsFromContent(content: PortableTextBlock[]): any[] {
  const steps: any[] = []
  let currentStep: any = null
  
  content.forEach((block: any) => {
    if (block._type === 'block') {
      // Check if it's a numbered list item or heading with step pattern
      const text = block.children?.map((c: any) => c.text).join('') || ''
      const stepMatch = text.match(/^(?:Step\s+)?(\d+)[\.:]\s*(.+)/i)
      
      if (stepMatch) {
        if (currentStep) {
          steps.push(currentStep)
        }
        currentStep = {
          title: stepMatch[2].trim(),
          text: '',
        }
      } else if (currentStep && block.style === 'normal') {
        currentStep.text += ' ' + text
      } else if (block.listItem === 'number' && !currentStep) {
        // Numbered list items as steps
        steps.push({
          title: text,
          text: text,
        })
      }
    }
  })
  
  if (currentStep) {
    steps.push(currentStep)
  }
  
  return steps
}

// Generate enhanced BlogPosting schema
export async function generateEnhancedBlogPostingSchema(post: any) {
  const settings = await getSettings()
  
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seo?.metaDescription || post.excerpt || generateMetaDescription(post.content),
    image: post.coverImage || settings?.defaultSeo?.ogImage,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt || post.publishedAt,
    author: post.authors?.map((author: any) => ({
      '@type': 'Person',
      name: author.name,
      url: author.website || author.socialLinks?.website,
      sameAs: [
        author.socialLinks?.twitter,
        author.socialLinks?.linkedin,
        author.socialLinks?.github,
      ].filter(Boolean),
    })),
    publisher: {
      '@type': 'Organization',
      name: settings?.title || 'Agentic Trust',
      logo: {
        '@type': 'ImageObject',
        url: `${settings?.siteUrl}/logos/agentic-trust-logo.png`,
      },
      sameAs: [
        settings?.socialMedia?.twitter,
        settings?.socialMedia?.linkedin,
        settings?.socialMedia?.github,
      ].filter(Boolean),
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${settings?.siteUrl}/blog/${post.slug.current}`,
    },
    keywords: post.seo?.keywords?.join(', ') || post.tags?.join(', '),
    articleSection: post.category?.title,
    wordCount: countWords(post.content),
    timeRequired: post.readTime,
  }
  
  // Add specific schema based on structuredData type
  if (post.seo?.structuredData === 'faq' && post.seo?.faqItems) {
    return [baseSchema, generateFAQSchema(post.seo.faqItems)]
  } else if (post.seo?.structuredData === 'howTo') {
    const howToSchema = generateHowToSchema(post)
    return howToSchema ? [baseSchema, howToSchema] : baseSchema
  }
  
  return baseSchema
}

// Count words in Portable Text content
function countWords(content: PortableTextBlock[]): number {
  const text = content
    .filter((block: any) => block._type === 'block')
    .map((block: any) => 
      block.children
        ?.filter((child: any) => child._type === 'span')
        ?.map((child: any) => child.text)
        ?.join(' ') || ''
    )
    .join(' ')
  
  return text.split(/\s+/).filter(word => word.length > 0).length
}

// Generate image sitemap entries
export function generateImageSitemapEntries(post: any): any[] {
  const images: any[] = []
  
  // Add cover image
  if (post.coverImage) {
    images.push({
      loc: post.coverImage,
      title: post.coverImageAlt || post.title,
      caption: post.excerpt,
    })
  }
  
  // Extract images from content
  post.content?.forEach((block: any) => {
    if (block._type === 'image' && block.asset) {
      images.push({
        loc: block.asset.url || block.asset._ref,
        title: block.alt,
        caption: block.caption,
      })
    }
  })
  
  return images
}

// Generate video sitemap entries (for embedded videos)
export function generateVideoSitemapEntries(post: any): any[] {
  const videos: any[] = []
  
  post.content?.forEach((block: any) => {
    if (block._type === 'embed' && block.url) {
      // Extract YouTube video ID
      const youtubeMatch = block.url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)
      if (youtubeMatch) {
        videos.push({
          thumbnail_loc: `https://img.youtube.com/vi/${youtubeMatch[1]}/maxresdefault.jpg`,
          title: block.caption || post.title,
          description: post.excerpt,
          content_loc: block.url,
          player_loc: `https://www.youtube.com/embed/${youtubeMatch[1]}`,
          duration: 0, // Would need to fetch from YouTube API
          publication_date: post.publishedAt,
        })
      }
    }
  })
  
  return videos
}
