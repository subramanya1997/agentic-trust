import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { createClient } from '@sanity/client'
import { htmlToBlocks } from '@sanity/block-tools'
import { JSDOM } from 'jsdom'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'
import { Schema } from '@sanity/schema'
import blockContent from '../schemas/block-content'

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Create schema for block-tools
const defaultSchema = Schema.compile({
  name: 'default',
  types: [blockContent],
})

const blockContentType = defaultSchema.get('blockContent')

// Helper to convert markdown to HTML
async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(markdown)
  
  return result.toString()
}

// Helper to convert HTML tables to our custom table format
function extractTablesFromHtml(htmlContent: string): { tables: any[], cleanedHtml: string } {
  const dom = new JSDOM(htmlContent)
  const document = dom.window.document
  const tables = document.querySelectorAll('table')
  const extractedTables: any[] = []
  
  tables.forEach((table, index) => {
    const headers: string[] = []
    const rows: any[] = []
    
    // Extract headers
    const headerCells = table.querySelectorAll('thead th, thead td')
    if (headerCells.length === 0) {
      // Try first row as headers
      const firstRow = table.querySelector('tr')
      if (firstRow) {
        firstRow.querySelectorAll('th, td').forEach(cell => {
          headers.push(cell.textContent?.trim() || '')
        })
      }
    } else {
      headerCells.forEach(cell => {
        headers.push(cell.textContent?.trim() || '')
      })
    }
    
    // Extract rows
    const bodyRows = table.querySelectorAll('tbody tr')
    const allRows = bodyRows.length > 0 ? bodyRows : table.querySelectorAll('tr')
    
    allRows.forEach((row, rowIndex) => {
      // Skip header row if we already extracted headers
      if (rowIndex === 0 && headers.length > 0 && !table.querySelector('thead')) {
        return
      }
      
      const cells: any[] = []
      row.querySelectorAll('td, th').forEach(cell => {
        cells.push({
          content: cell.textContent?.trim() || '',
          isHeader: cell.tagName === 'TH',
        })
      })
      
      if (cells.length > 0) {
        rows.push({ cells })
      }
    })
    
    // Create table object
    const tableObj = {
      _type: 'table',
      headers,
      rows,
      caption: table.querySelector('caption')?.textContent?.trim(),
    }
    
    extractedTables.push(tableObj)
    
    // Replace table with placeholder
    const placeholder = document.createElement('div')
    placeholder.setAttribute('data-table-placeholder', index.toString())
    table.parentNode?.replaceChild(placeholder, table)
  })
  
  return {
    tables: extractedTables,
    cleanedHtml: dom.serialize(),
  }
}

// Helper to convert HTML to Portable Text blocks
function htmlToPortableText(htmlContent: string, tables: any[]): any[] {
  const dom = new JSDOM(htmlContent)
  const blocks = htmlToBlocks(htmlContent, blockContentType, {
    parseHtml: (html: string) => dom.window.document,
  })
  
  // Replace table placeholders with actual table blocks
  const processedBlocks: any[] = []
  let tableIndex = 0
  
  blocks.forEach(block => {
    if (block._type === 'block' && block.children) {
      const text = block.children.map((child: any) => child.text).join('')
      const placeholderMatch = text.match(/data-table-placeholder="(\d+)"/)
      
      if (placeholderMatch) {
        const index = parseInt(placeholderMatch[1])
        if (tables[index]) {
          processedBlocks.push(tables[index])
        }
      } else {
        processedBlocks.push(block)
      }
    } else {
      processedBlocks.push(block)
    }
  })
  
  return processedBlocks
}

// Helper to create or get author
async function ensureAuthor(authorData: any) {
  const { name, avatar, role } = authorData
  const slug = name.toLowerCase().replace(/\s+/g, '-')
  
  // Check if author exists
  const existingAuthor = await client.fetch(
    `*[_type == "author" && slug.current == $slug][0]`,
    { slug }
  )
  
  if (existingAuthor) {
    return existingAuthor._id
  }
  
  // Create new author
  const author = await client.create({
    _type: 'author',
    name,
    slug: { current: slug },
    role,
    avatar: avatar ? {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: await uploadImage(avatar),
      },
    } : undefined,
  })
  
  return author._id
}

// Helper to create or get category
async function ensureCategory(categoryName: string) {
  const slug = categoryName.toLowerCase().replace(/\s+/g, '-')
  
  // Check if category exists
  const existingCategory = await client.fetch(
    `*[_type == "category" && slug.current == $slug][0]`,
    { slug }
  )
  
  if (existingCategory) {
    return existingCategory._id
  }
  
  // Create new category
  const category = await client.create({
    _type: 'category',
    title: categoryName,
    slug: { current: slug },
  })
  
  return category._id
}

// Helper to upload image
async function uploadImage(imagePath: string): Promise<string> {
  if (!imagePath || !fs.existsSync(path.join(process.cwd(), 'public', imagePath))) {
    return ''
  }
  
  try {
    const imageFile = fs.readFileSync(path.join(process.cwd(), 'public', imagePath))
    const asset = await client.assets.upload('image', imageFile, {
      filename: path.basename(imagePath),
    })
    
    return asset._id
  } catch (error) {
    console.error(`Failed to upload image ${imagePath}:`, error)
    return ''
  }
}

// Main migration function
export async function migrateMarkdownPosts() {
  const blogsDirectory = path.join(process.cwd(), 'blogs')
  const files = fs.readdirSync(blogsDirectory).filter(f => f.endsWith('.md'))
  
  console.log(`Found ${files.length} markdown files to migrate`)
  
  for (const file of files) {
    console.log(`\nMigrating ${file}...`)
    
    try {
      const filePath = path.join(blogsDirectory, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data: frontMatter, content } = matter(fileContents)
      
      // Convert markdown to HTML
      const htmlContent = await markdownToHtml(content)
      
      // Extract tables and convert to portable text
      const { tables, cleanedHtml } = extractTablesFromHtml(htmlContent)
      const portableTextContent = htmlToPortableText(cleanedHtml, tables)
      
      // Ensure authors exist
      const authorIds = await Promise.all(
        (frontMatter.authors || [{ name: 'Agentic Trust Team' }]).map(ensureAuthor)
      )
      
      // Ensure category exists
      const categoryId = await ensureCategory(frontMatter.category || 'General')
      
      // Upload cover image if exists
      let coverImageAssetId = ''
      if (frontMatter.coverImage) {
        coverImageAssetId = await uploadImage(frontMatter.coverImage)
      }
      
      // Create blog post
      const slug = file.replace(/\.md$/, '')
      
      // Check if post already exists
      const existingPost = await client.fetch(
        `*[_type == "blogPost" && slug.current == $slug][0]`,
        { slug }
      )
      
      const postData = {
        _type: 'blogPost',
        title: frontMatter.title || slug.replace(/-/g, ' '),
        slug: { current: slug },
        authors: authorIds.map(id => ({ _type: 'reference', _ref: id })),
        category: { _type: 'reference', _ref: categoryId },
        publishedAt: frontMatter.date ? new Date(frontMatter.date).toISOString() : new Date().toISOString(),
        excerpt: frontMatter.description || '',
        content: portableTextContent,
        markdownContent: content,
        tags: frontMatter.tags || [],
        status: 'published',
        coverImage: coverImageAssetId ? {
          _type: 'image',
          asset: { _type: 'reference', _ref: coverImageAssetId },
          alt: frontMatter.title || '',
        } : undefined,
        seo: {
          metaTitle: frontMatter.title,
          metaDescription: frontMatter.description,
          keywords: frontMatter.tags || [],
        },
      }
      
      if (existingPost) {
        await client.patch(existingPost._id).set(postData).commit()
        console.log(`Updated existing post: ${frontMatter.title}`)
      } else {
        await client.create(postData)
        console.log(`Created new post: ${frontMatter.title}`)
      }
      
    } catch (error) {
      console.error(`Failed to migrate ${file}:`, error)
    }
  }
  
  console.log('\nMigration complete!')
}

// Run migration if called directly
if (require.main === module) {
  migrateMarkdownPosts()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('Migration failed:', error)
      process.exit(1)
    })
}
