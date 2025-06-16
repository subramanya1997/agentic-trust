import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Blog - Insights on AI Agent Infrastructure | Agentic Trust",
  description: "Insights and updates on AI agent infrastructure, MCP servers, deployment strategies, and production best practices from the Agentic Trust team.",
  path: "/blog",
  image: "/blog/opengraph-image",
  keywords: ["AI agents blog", "MCP servers", "infrastructure insights", "deployment guides", "best practices", "AgenticTrust", "AI development"],
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 