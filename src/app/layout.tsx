import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://agentictrust.com'),
  title: "Agentic Trust",
  description: "The unified MCP server platform for production AI agents. Enterprise-grade authentication, monitoring, and deployment in minutes.",
  keywords: ["MCP server", "AI agents", "infrastructure", "authentication", "monitoring", "deployment"],
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
    description: "The unified MCP server platform for production AI agents. Deploy with confidence.",
    type: "website",
    siteName: "Agentic Trust",
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Agentic Trust - Enterprise MCP Server Infrastructure',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Trust",
    description: "The unified MCP server platform for production AI agents.",
    images: ['/twitter-image'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
