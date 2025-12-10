import { generateMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import { BridgeDemo } from '@/components/features/BridgeDemo';

export const metadata: Metadata = generateMetadata({
  title: 'Live Demo - MCP Server Bridge | Agentic Trust',
  description: 'Experience the power of Agentic Trust with our interactive demo. See how easy it is to deploy and manage MCP servers in production.',
  path: '/demo-preview',
  image: '/demo-preview/opengraph-image',
  keywords: ['MCP server demo', 'AI agent demo', 'infrastructure preview', 'live demo', 'AgenticTrust'],
});

export default function DemoPreviewPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      {/* Demo component */}
      <div className="w-full max-w-6xl">
        <BridgeDemo />
      </div>
    </div>
  );
} 