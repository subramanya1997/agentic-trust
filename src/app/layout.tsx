import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { absoluteOgImage, generateOrganizationSchema, generateWebSiteSchema, SITE_CONFIG } from "@/lib/seo";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Agentic Trust - Enterprise MCP Server Infrastructure",
    template: "%s | Agentic Trust"
  },
  description: SITE_CONFIG.description,
  keywords: ["MCP server", "AI agents", "infrastructure", "authentication", "monitoring", "deployment", "production", "enterprise"],
  authors: [{ name: "Agentic Trust Team" }],
  creator: "Agentic Trust",
  publisher: "Agentic Trust",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Agentic Trust - Enterprise MCP Server Infrastructure",
    description: SITE_CONFIG.description,
    type: "website",
    siteName: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    images: [
      {
        url: absoluteOgImage('/opengraph-image'),
        width: 1200,
        height: 630,
        alt: 'Agentic Trust - Enterprise MCP Server Infrastructure',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE_CONFIG.twitterHandle,
    creator: SITE_CONFIG.twitterHandle,
    title: "Agentic Trust - Enterprise MCP Server Infrastructure",
    description: SITE_CONFIG.description,
    images: [absoluteOgImage('/opengraph-image')],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  other: {
    'twitter:image:alt': 'Agentic Trust - Enterprise MCP Server Infrastructure',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
