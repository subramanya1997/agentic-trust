import { ImageResponse } from 'next/og';
import { OG_CONFIG } from '@/lib/og/config';
import { generateBlogOG } from '@/lib/og/templates';

export const runtime = 'edge';

export const alt = 'Agentic Trust Blog - AI Infrastructure Insights';
export const size = OG_CONFIG.sizes.og;
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    generateBlogOG({
      title: 'Agentic Trust | Blog',
      subtitle: 'Secure AI agent infrastructure insights and best practices',
    }),
    {
      ...size,
    }
  );
}
