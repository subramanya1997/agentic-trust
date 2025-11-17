import { ImageResponse } from 'next/og';
import { OG_CONFIG } from '@/lib/og/config';
import { generatePageOG } from '@/lib/og/templates';

export const runtime = 'edge';

export const alt = 'Agentic Trust - Privacy Policy';
export const size = OG_CONFIG.sizes.og;
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    generatePageOG({
      title: 'Agentic Trust | Privacy Policy',
      subtitle: 'Your data privacy and security are our top priorities',
    }),
    {
      ...size,
    }
  );
}
