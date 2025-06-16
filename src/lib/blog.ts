import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import readingTime from 'reading-time';
import { rehype } from 'rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  authors: Author[];
  category: string;
  content: string;
  htmlContent?: string;
  coverImage?: string;
}

export interface Author {
  name: string;
  avatar?: string;
  role?: string;
}

const blogsDirectory = path.join(process.cwd(), 'blogs');

// Function to process references in the content
function processReferences(htmlContent: string): string {
  // Pattern to match reference-style links like [1] at the end of the post
  const referencePattern = /\[(\d+)\]\s*(https?:\/\/[^\s<]+)/g;
  
  // First, collect all references
  const references: { [key: string]: string } = {};
  let match;
  while ((match = referencePattern.exec(htmlContent)) !== null) {
    references[match[1]] = match[2];
  }
  
  // Replace inline reference numbers with hyperlinks
  let processedContent = htmlContent;
  Object.entries(references).forEach(([num, url]) => {
    // Pattern to match inline reference numbers like [1]
    const inlinePattern = new RegExp(`\\[(${num})\\](?!\\s*https?://)`, 'g');
    processedContent = processedContent.replace(inlinePattern, 
      `<a href="${url}" target="_blank" rel="noopener noreferrer" class="reference-link">[${num}]</a>`
    );
  });
  
  // Convert the reference list at the bottom to proper hyperlinks
  processedContent = processedContent.replace(referencePattern, 
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="reference-source">[$1] $2</a>'
  );
  
  return processedContent;
}

// Get all blog posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(blogsDirectory);
  
  const allPostsData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(blogsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // Parse front matter
        const { data, content } = matter(fileContents);
        
        // Calculate reading time
        const stats = readingTime(content);
        
        // Convert markdown to HTML with enhanced processing
        const processedContent = await remark()
          .use(remarkGfm) // GitHub Flavored Markdown for tables, strikethrough, etc.
          .use(html, { sanitize: false })
          .process(content);
        
        // Further process HTML with rehype for syntax highlighting and heading IDs
        const enhancedContent = await rehype()
          .use(rehypeSlug) // Add IDs to headings
          .use(rehypeHighlight)
          .process(processedContent.toString());
        
        // Process references to convert them to hyperlinks
        const htmlContent = processReferences(enhancedContent.toString());
        
        return {
          slug,
          title: data.title || fileName.replace(/\.md$/, '').replace(/_/g, ' '),
          description: data.description || '',
          date: data.date || new Date().toISOString(),
          readTime: stats.text,
          authors: data.authors || [{ name: 'Manus AI' }],
          category: data.category || 'General',
          content,
          htmlContent,
          coverImage: data.coverImage || '',
        } as BlogPost;
      })
  );
  
  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Get a single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parse front matter
    const { data, content } = matter(fileContents);
    
    // Calculate reading time
    const stats = readingTime(content);
    
    // Convert markdown to HTML with enhanced processing
    const processedContent = await remark()
      .use(remarkGfm) // GitHub Flavored Markdown for tables, strikethrough, etc.
      .use(html, { sanitize: false })
      .process(content);
    
    // Further process HTML with rehype for syntax highlighting and heading IDs
    const enhancedContent = await rehype()
      .use(rehypeSlug) // Add IDs to headings
      .use(rehypeHighlight)
      .process(processedContent.toString());
    
    // Process references to convert them to hyperlinks
    const htmlContent = processReferences(enhancedContent.toString());
    
    return {
      slug,
      title: data.title || slug.replace(/_/g, ' '),
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      readTime: stats.text,
      authors: data.authors || [{ name: 'Manus AI' }],
      category: data.category || 'General',
      content,
      htmlContent,
      coverImage: data.coverImage || '',
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

// Get all blog categories
export async function getCategories(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  const categories = new Set<string>();
  
  categories.add('All');
  posts.forEach(post => {
    if (post.category) {
      categories.add(post.category);
    }
  });
  
  return Array.from(categories);
} 