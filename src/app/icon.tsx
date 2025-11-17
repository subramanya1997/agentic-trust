import { ImageResponse } from 'next/og';
import { OG_CONFIG } from '@/lib/og/config';

export const runtime = 'edge';

export const size = OG_CONFIG.sizes.icon;
export const contentType = 'image/png';

export default async function Icon() {
  const { logoSvg, colors, spacing } = OG_CONFIG;
  
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: colors.brand,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: spacing.iconBorderRadius,
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox={logoSvg.viewBox}
          fill="none"
          stroke={colors.white}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {logoSvg.paths.map((d, i) => (
            <path key={`path-${i}`} d={d} />
          ))}
          {logoSvg.rects.map((rect, i) => (
            <rect key={`rect-${i}`} {...rect} />
          ))}
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
