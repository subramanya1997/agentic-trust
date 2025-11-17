# OpenGraph Image Generation System

A centralized, maintainable system for generating OpenGraph and Twitter Card images across the Agentic Trust platform.

## Overview

This system provides:
- **Centralized Configuration**: Single source of truth for brand colors, typography, and styling
- **Reusable Components**: Modular components for building OG images
- **Template Functions**: Pre-built templates for different page types
- **Dynamic Generation**: Support for dynamic blog post images with metadata
- **Type Safety**: Full TypeScript support

## Architecture

```
src/lib/og/
├── config.ts          # Brand configuration and constants
├── components.tsx     # Reusable OG components
├── templates.tsx      # Template generator functions
├── fonts.ts          # Font loading utilities
└── README.md         # This file
```

## Quick Start

### Creating a New OG Image

1. **Use an existing template:**

```typescript
import { ImageResponse } from 'next/og';
import { OG_CONFIG } from '@/lib/og/config';
import { generatePageOG } from '@/lib/og/templates';

export const runtime = 'edge';
export const alt = 'Your Page Title';
export const size = OG_CONFIG.sizes.og;
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    generatePageOG({
      title: 'Your Page Title',
      subtitle: 'Your page description',
    }),
    { ...size }
  );
}
```

2. **Build a custom layout:**

```typescript
import { OGContainer, OGLogo, OGTitle, OGSubtitle } from '@/lib/og/components';

export default function CustomImage() {
  return new ImageResponse(
    (
      <OGContainer>
        <OGLogo size={100} />
        <OGTitle size="large">Custom Title</OGTitle>
        <OGSubtitle>Custom subtitle text</OGSubtitle>
      </OGContainer>
    ),
    { ...OG_CONFIG.sizes.og }
  );
}
```

## Available Templates

### 1. Generic Template
For homepage and main landing pages.

```typescript
generateGenericOG({
  title: 'Agentic Trust',
  subtitle: 'The unified MCP server platform for production AI agents',
})
```

Features:
- Large title (72px)
- Centered logo
- Wide subtitle

### 2. Page Template
For static pages like Privacy, Terms, etc.

```typescript
generatePageOG({
  title: 'Agentic Trust | Privacy Policy',
  subtitle: 'Your data privacy and security are our top priorities',
})
```

Features:
- Medium title (56px)
- Smaller subtitle
- Professional layout

### 3. Blog Template
For blog index pages.

```typescript
generateBlogOG({
  title: 'Agentic Trust | Blog',
  subtitle: 'Insights on AI agent infrastructure',
})
```

Features:
- Medium title
- Blog-optimized spacing

### 4. Blog Post Template
For individual blog posts (dynamic).

```typescript
generateBlogPostOG({
  title: 'Getting Started with MCP Servers',
  author: 'John Doe',
  category: 'Tutorial',
  date: 'Dec 15, 2024',
})
```

Features:
- Dynamic content from Sanity CMS
- Author, category, and date metadata
- Smaller logo for more content space

### 5. Demo Template
For demo pages with badges.

```typescript
generateDemoOG({
  title: 'Live Demo',
  subtitle: 'Experience the power of Agentic Trust',
  badge: 'Interactive Demo',
})
```

Features:
- Badge component
- Call-to-action styling

## Components

### OGContainer
Base container with gradient background.

```typescript
<OGContainer>
  {children}
</OGContainer>
```

### OGLogo
Centralized logo component.

```typescript
<OGLogo size={80} /> // Default size is 80
```

### OGTitle
Title component with size variants.

```typescript
<OGTitle size="large">Title Text</OGTitle>  // 72px
<OGTitle size="medium">Title Text</OGTitle> // 56px (default)
```

### OGSubtitle
Subtitle with opacity and max-width.

```typescript
<OGSubtitle size="normal">Subtitle</OGSubtitle>  // 24px
<OGSubtitle size="small">Subtitle</OGSubtitle>   // 22px
```

### OGBadge
Badge for labels and tags.

```typescript
<OGBadge>Interactive Demo</OGBadge>
```

### OGAuthor
Author metadata display for blog posts.

```typescript
<OGAuthor 
  name="John Doe" 
  category="Tutorial" 
  date="Dec 15, 2024" 
/>
```

## Configuration

### Updating Brand Colors

Edit `src/lib/og/config.ts`:

```typescript
export const OG_CONFIG = {
  colors: {
    brand: '#f97316',           // Orange brand color
    gradientFrom: '#292524',    // Dark gradient start
    gradientTo: '#1c1917',      // Dark gradient end
    // ... other colors
  },
  // ...
}
```

### Updating Typography

```typescript
export const OG_CONFIG = {
  typography: {
    titleLarge: 72,
    titleMedium: 56,
    subtitle: 24,
    // ... other sizes
  },
  // ...
}
```

### Updating Logo

Update the logo SVG paths in config:

```typescript
export const OG_CONFIG = {
  logoSvg: {
    viewBox: '0 0 24 24',
    paths: [
      // SVG path data
    ],
    rects: [
      // SVG rect data
    ],
  },
}
```

## Dynamic Blog Post Images

Blog post images are automatically generated from Sanity CMS data:

**Location:** `src/app/blog/[slug]/opengraph-image.tsx`

**Data Source:** Fetches from `getBlogPost(slug)` in Sanity

**Fallback:** Returns 404 if post not found (falls back to generic blog image)

**Includes:**
- Post title
- First author name
- Category
- Formatted date

## Best Practices

### 1. Always Use Config Constants
❌ Don't hardcode values:
```typescript
style={{ color: '#f97316' }}
```

✅ Use config:
```typescript
style={{ color: OG_CONFIG.colors.brand }}
```

### 2. Use Templates When Possible
Templates ensure consistency and reduce code duplication.

### 3. Test with Social Media Validators
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### 4. Keep Titles Concise
- Maximum ~60 characters for optimal display
- Use clear, descriptive text
- Avoid overly long subtitles

### 5. Edge Runtime
Always use edge runtime for fast generation:
```typescript
export const runtime = 'edge';
```

## Troubleshooting

### Image Not Updating
1. Clear social media cache using validators
2. Check browser cache
3. Verify file location matches Next.js conventions

### Long Text Overflow
- Reduce font size in config
- Adjust maxWidth for subtitles
- Use ellipsis or text truncation

### Font Loading Fails
The system gracefully falls back to system fonts if custom font loading fails. Check console for warnings.

### Build Errors
Ensure all imports are correct:
```typescript
import { OG_CONFIG } from '@/lib/og/config';
import { generatePageOG } from '@/lib/og/templates';
```

## Performance

- **Generation Time**: ~100-200ms per image
- **Runtime**: Edge functions for optimal performance
- **Caching**: Automatic via Next.js
- **Bundle Size**: Minimal impact (~10KB for all templates)

## Twitter Images

Twitter images have been consolidated with OpenGraph images. Next.js automatically uses OpenGraph images for Twitter when no dedicated twitter-image file exists. This eliminates duplication and ensures consistency.

## Examples

### Homepage
```
Title: "Agentic Trust" (large)
Subtitle: "The unified MCP server platform for production AI agents"
```

### Blog Post
```
Title: "Getting Started with MCP Servers in Production"
Author: "John Doe"
Category: "Tutorial"
Date: "Dec 15, 2024"
```

### Legal Page
```
Title: "Agentic Trust | Privacy Policy"
Subtitle: "Your data privacy and security are our top priorities"
```

## Future Enhancements

Potential improvements:
- [ ] A/B testing different layouts
- [ ] Category-specific color schemes
- [ ] Author avatar images
- [ ] Light theme variants
- [ ] Animated OG images (video)
- [ ] Localization support

## Support

For questions or issues with the OG image system:
1. Check this documentation
2. Review existing implementations in `src/app/**/opengraph-image.tsx`
3. Test with social media validators
4. Contact the development team

---

**Last Updated:** December 2024  
**Maintained By:** Agentic Labs Inc

