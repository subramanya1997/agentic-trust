# Agentic Trust

The unified MCP server platform for production AI agents. Enterprise-grade authentication, monitoring, and deployment in minutes.

![Agentic Trust](https://agentictrust.com/opengraph-image)

## 🚀 Overview

Agentic Trust is a comprehensive platform that simplifies the deployment and management of MCP (Model Context Protocol) servers for AI agents in production environments. We provide a unified infrastructure that handles authentication, monitoring, deployment, and security - allowing teams to focus on building great AI experiences.

## ✨ Key Features

- **🔐 Enterprise Authentication**: Built-in auth for MCP servers with SSO support
- **📊 Real-time Monitoring**: Track performance, usage, and health metrics
- **🚀 One-Click Deployment**: Deploy MCP servers to production in minutes
- **🛡️ Security First**: End-to-end encryption and compliance-ready infrastructure
- **🔄 Auto-scaling**: Handle any load with automatic scaling
- **📱 Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Dynamic Social Images**: Auto-generated Open Graph and Twitter images
- **📝 Blog System**: Dual support for markdown files and Sanity CMS
- **✏️ Content Management**: Embedded Sanity Studio with markdown support

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **CMS**: [Sanity](https://sanity.io/) (optional, with markdown fallback)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist (Sans & Mono)

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/agentic-trust.git
cd agentic-trust
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📁 Project Structure

```
agentic-trust/
├── public/              # Static assets
│   ├── favicon.svg      # Site favicon
│   ├── manifest.json    # PWA manifest
│   └── robots.txt       # SEO robots file
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Home page
│   │   ├── blog/       # Blog section
│   │   └── *.tsx       # Dynamic social images
│   ├── components/     # React components
│   │   ├── landing/    # Landing page sections
│   │   ├── blog/       # Blog components
│   │   └── ui/         # Reusable UI components
│   ├── data/          # Static data
│   └── lib/           # Utility functions
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## 🎨 Features

### Responsive Design
- Mobile-first approach with breakpoints for all screen sizes
- Hidden navigation elements on mobile with hamburger menu support
- Responsive typography and spacing
- Optimized UnifiedContextRouterPreview for desktop viewing

### Dynamic Social Media Images
- Automatically generated Open Graph images (1200x630)
- Twitter card images (512x512)
- Monochromatic dark gray themes with random variations
- Blog-specific social images with "Coming June 2025" badge

### SEO Optimization
- Dynamic sitemap generation
- Robots.txt configuration
- Meta tags optimization
- PWA support with manifest.json
- Proper favicon configuration

### Landing Page Sections
1. **Hero Section** - Eye-catching introduction with animated elements
2. **Benefits Section** - Key platform benefits
3. **Features Section** - Detailed platform capabilities with tabs
4. **Target Audience** - Who should use Agentic Trust
5. **FAQ Section** - Common questions and answers
6. **Final CTA** - Newsletter signup

### Blog System
- **Dual Data Sources**: Markdown files or Sanity CMS (configurable)
- **Content Management**: Embedded Sanity Studio at `/studio`
- **Markdown Support**: Import/export with visual and markdown editing modes
- **Rich Content**: Tables, code blocks, callouts, and embedded media
- **SEO Optimized**: Auto-generated meta tags, sitemaps, and structured data
- **Performance**: ISR, caching, and CDN optimization
- Modern blog layout with category filtering
- Featured post section with author metadata

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://agentictrust.com

# Blog Data Source ('markdown' or 'sanity')
NEXT_PUBLIC_BLOG_DATA_SOURCE=markdown

# Sanity Configuration (optional, see SANITY_INTEGRATION.md)
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-read-token
```

For detailed Sanity CMS setup, see [SANITY_INTEGRATION.md](./SANITY_INTEGRATION.md)

### Metadata Configuration

Update the metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://agentictrust.com'),
  title: "Agentic Trust",
  description: "Your description here",
  // ... other metadata
};
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with Docker

## 📄 License

This project is proprietary software. All rights reserved.

## 🤝 Contributing

We're not currently accepting external contributions, but feel free to report issues or suggest features.

## 📞 Contact

For enterprise inquiries: enterprise@agentictrust.com

---

Built with ❤️ by the Agentic Trust team
