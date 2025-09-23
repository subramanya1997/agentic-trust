#!/usr/bin/env node
/*
  Generate a precompiled blog posts JSON from markdown files in /blogs.
  This runs at build time to avoid runtime fetching for the blog list page.
*/

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const readingTime = require('reading-time');

const ROOT_DIR = process.cwd();
const BLOGS_DIR = path.join(ROOT_DIR, 'blogs');
const OUTPUT_PATH = path.join(ROOT_DIR, 'src', 'data', 'precompiled-blog-posts.json');

function ensureDirExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function formatDateISO(dateStr) {
  // Keep original format if it looks like YYYY-MM-DD; otherwise try to parse
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr;
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return new Date().toISOString().slice(0, 10);
  return d.toISOString().slice(0, 10);
}

function main() {
  try {
    const files = fs.readdirSync(BLOGS_DIR).filter((f) => f.endsWith('.md'));

    const posts = files.map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(BLOGS_DIR, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      const stats = readingTime(content || '');

      const title = data.title || slug.replace(/_/g, ' ');
      const description = data.description || '';
      const date = formatDateISO(data.date || new Date().toISOString().slice(0, 10));
      const readTime = stats.text; // e.g., "5 min read"
      const authors = Array.isArray(data.authors) && data.authors.length
        ? data.authors
        : [{ name: 'Manus AI' }];
      const category = data.category || 'General';
      const coverImage = data.coverImage || '';
      const tags = Array.isArray(data.tags) ? data.tags : [];

      return {
        slug,
        title,
        description,
        date,
        readTime,
        authors,
        category,
        coverImage,
        tags,
      };
    });

    // Sort by date desc
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Categories (include 'All')
    const categorySet = new Set(['All']);
    for (const p of posts) {
      if (p.category) categorySet.add(p.category);
    }
    const categories = Array.from(categorySet);

    // Ensure data directory exists
    ensureDirExists(path.dirname(OUTPUT_PATH));

    const output = {
      posts,
      categories,
      lastUpdated: new Date().toISOString(),
    };

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2) + '\n', 'utf8');

    console.log(`Precompiled blog data written to: ${OUTPUT_PATH}`);
    console.log(`Posts: ${posts.length}, Categories: ${categories.length}`);
  } catch (err) {
    console.error('Failed to generate precompiled blog posts:', err);
    process.exit(1);
  }
}

main();


