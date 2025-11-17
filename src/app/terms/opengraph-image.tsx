import { ImageResponse } from 'next/og';
import { OG_CONFIG } from '@/lib/og/config';
import { generatePageOG } from '@/lib/og/templates';

export const runtime = 'edge';

export const alt = 'Agentic Trust - Terms of Service';
export const size = OG_CONFIG.sizes.og;
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    generatePageOG({
      title: 'Agentic Trust | Terms of Service',
      subtitle: 'Clear and transparent terms for using Agentic Trust',
    }),
    {
      ...size,
    }
  );
}
