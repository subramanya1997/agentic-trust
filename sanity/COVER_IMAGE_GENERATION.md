# Automatic Cover Image Generation

This feature allows you to automatically generate blog post cover images directly from the Sanity Studio dashboard.

## How to Use

1. **Open a Blog Post** in the Sanity Studio
2. **Fill in the required fields**:
   - Title (required)
   - Excerpt (optional, but recommended)
   - Category (optional, affects the background pattern)
3. **Save the document** at least once (as a draft is fine)
4. **Click the "Generate Cover Image" button** (🎨 icon) in the document actions menu at the bottom of the editor
5. The system will:
   - Generate a custom cover image based on your title, excerpt, and category
   - Automatically upload it to Sanity
   - Attach it to your blog post
   - Reload the page to show the new image

## Cover Image Features

The generated cover images include:

- **Agentic Trust branding** with logo and brand name
- **Your blog post title** (automatically wrapped for long titles)
- **Excerpt text** (if provided, up to 3 lines)
- **Category badge** in the top-right corner
- **Category-specific background patterns**:
  - Security: Shield patterns
  - Standards: Document/specification patterns
  - Engineering: Gear patterns
  - Product: Box/package patterns
  - Company: Building patterns
  - Default: Network/node patterns

## Technical Details

- **Image dimensions**: 1200x630px (optimal for social media sharing)
- **Format**: PNG
- **Generated via**: Server-side Canvas API
- **Automatic alt text**: Uses the blog post title

## API Endpoint

The cover generation is powered by the `/api/generate-cover` endpoint which accepts:

```json
{
  "title": "Your Blog Post Title",
  "excerpt": "Your blog post excerpt",
  "category": "Security"
}
```

And returns a PNG image buffer.

## Customization

To customize the cover image design, edit:
- `/src/app/api/generate-cover/route.ts` - The main generation logic
- Pattern functions in the same file - Category-specific background patterns

## Troubleshooting

- **"Please save the document first"**: Save your blog post as a draft before generating
- **"Please add a title first"**: The title field is required for generation
- **Generation fails**: Check the browser console and server logs for error details

## Manual Cover Upload

You can always upload a custom cover image instead of using the generator:
1. Click on the "Cover Image" field
2. Upload your image
3. Add alt text
4. Save the document

