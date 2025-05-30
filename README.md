# AgenticTrust Website

A modern, professional website for AgenticTrust - an AI governance and trust platform. Built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by leading SaaS platforms
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js 14 for optimal performance
- **Type Safe**: Written in TypeScript for better development experience
- **Accessible**: Built with accessibility in mind using shadcn/ui components
- **SEO Optimized**: Structured for search engine optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel deployment

## 📁 Project Structure

```
agentic-trust/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx          # About page
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   ├── components/
│   │   └── ui/                   # shadcn/ui components
│   └── lib/
│       └── utils.ts              # Utility functions
├── public/                       # Static assets
├── components.json               # shadcn/ui configuration
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

## 🎨 Pages

### Home Page (`/`)
- Hero section with compelling value proposition
- Features showcase with 6 key capabilities
- Industry solutions (Financial Services, Healthcare, Technology)
- Customer testimonials
- Call-to-action sections

### About Page (`/about`)
- Company mission, vision, and values
- Company story and background
- Team member profiles
- Call-to-action for careers and trials

### Contact Page (`/contact`)
- Multiple contact options (Sales, Support, Partnership)
- Contact form with validation
- Company contact information
- FAQ section
- Quick response options

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd agentic-trust
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

The website uses a consistent design system with:

- **Colors**: Blue and purple gradient theme
- **Typography**: Clean, modern font hierarchy
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Components**: Reusable shadcn/ui components
- **Icons**: Lucide React icons for consistency

## 🔧 Customization

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file with your component
3. Update navigation links in existing pages

### Modifying Styles

- Global styles: Edit `src/app/globals.css`
- Component styles: Use Tailwind classes
- Theme colors: Update `tailwind.config.js`

### Adding Components

Use shadcn/ui CLI to add new components:
```bash
npx shadcn@latest add [component-name]
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Content Management

To update content:

1. **Text Content**: Edit the JSX directly in page components
2. **Images**: Add to `public/` directory and reference in components
3. **Styling**: Use Tailwind classes or update global CSS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

Built with ❤️ using Next.js, TypeScript, and shadcn/ui
