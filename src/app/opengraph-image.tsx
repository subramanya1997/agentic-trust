import { ImageResponse } from 'next/og';
import { OG_CONFIG } from '@/lib/og/config';
import { generateGenericOG } from '@/lib/og/templates';

export const runtime = 'edge';

export const alt = 'Agentic Trust - Enterprise MCP Server Infrastructure';
export const size = OG_CONFIG.sizes.og;
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    generateGenericOG({
      title: 'Agentic Trust',
      subtitle: 'The unified MCP server platform for production AI agents',
    }),
    {
      ...size,
    }
  );
}
