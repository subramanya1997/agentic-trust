import { ImageResponse } from 'next/og';
import { OG_CONFIG } from '@/lib/og/config';
import { generateDemoOG } from '@/lib/og/templates';

export const runtime = 'edge';

export const alt = 'Agentic Trust Live Demo - MCP Server Bridge';
export const size = OG_CONFIG.sizes.og;
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    generateDemoOG({
      title: 'Live Demo',
      subtitle: 'Experience the power of Agentic Trust MCP Server Bridge',
      badge: 'Interactive Demo',
    }),
    {
      ...size,
    }
  );
}
