# Agentic Trust Scripts

This directory contains utility scripts for the Agentic Trust website.

## generate-blog-cover-canvas.js

Automatically generates cover images for all blog posts based on their metadata.

### Features

- **Dynamic Cover Generation**: Reads all markdown files in the `/blogs` directory and generates custom cover images
- **Category-Based Themes**: Different background patterns for different blog categories:
  - **Security**: Shield patterns
  - **Standards**: Document/specification patterns
  - **Engineering**: Gear patterns
  - **Product**: Box/package patterns
  - **Company**: Building patterns
  - **Default**: Network node patterns
- **Automatic Text Wrapping**: Long titles and descriptions are automatically wrapped
- **Consistent Branding**: Uses Agentic Trust logo and brand colors
- **Metadata-Driven**: Pulls title, description, author, date, and category from blog frontmatter

### Usage

```bash
npm install  # Ensure dependencies are installed
node scripts/generate-blog-cover-canvas.js
```

### Output

Generated images are saved to `/public/images/blog/` with the filename pattern:
`{blog-slug}-cover.png`

### Blog Metadata Requirements

Each blog post should have the following frontmatter:

```yaml
---
title: "Your Blog Title"
description: "A brief description of your blog post"
date: "2025-06-17"
authors:
  - name: "Author Name"
    role: "Author Role"
category: "Security"  # or Standards, Engineering, Product, Company
coverImage: "/images/blog/{slug}-cover.png"
---
```

### Dependencies

- `canvas`: For image generation
- `gray-matter`: For parsing markdown frontmatter

## capture-demo.js & capture-demo-presets.js

Scripts for capturing demo screenshots (if applicable).

---

To add a new script, create it in this directory and update this README with its documentation. 