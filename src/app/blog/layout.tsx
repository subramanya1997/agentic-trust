import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Agentic Trust",
  description: "Insights and updates on AI agent infrastructure, MCP servers, deployment strategies, and production best practices from the Agentic Trust team.",
  keywords: ["AI agents", "MCP servers", "infrastructure", "deployment", "best practices", "AgenticTrust"],
  openGraph: {
    title: "Blog | Agentic Trust",
    description: "Insights and updates on AI agent infrastructure, MCP servers, and production best practices.",
    type: "website",
    siteName: "Agentic Trust",
    images: [
      {
        url: '/blog/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Agentic Trust Blog - AI Infrastructure Insights',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Agentic Trust",
    description: "Insights and updates on AI agent infrastructure and MCP servers.",
    images: ['/blog/twitter-image'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 