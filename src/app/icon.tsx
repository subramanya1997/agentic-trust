import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#f97316',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 36,
        }}
      >
        <svg 
          width="120" 
          height="120" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#ffffff" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M10 18H5a3 3 0 0 1-3-3v-1"/>
          <path d="M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"/>
          <path d="M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"/>
          <path d="m7 21 3-3-3-3"/>
          <rect x="14" y="14" width="8" height="8" rx="2"/>
          <rect x="2" y="2" width="8" height="8" rx="2"/>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
} 