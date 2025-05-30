import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Agentic Trust Blog';
export const size = {
  width: 512,
  height: 512,
};
export const contentType = 'image/png';

export default async function Image() {
  // Generate monochromatic gray shade
  const lightness = Math.floor(Math.random() * 15) + 15; // 15-30% for dark gray
  const backgroundColor = `hsl(0, 0%, ${lightness}%)`;

  return new ImageResponse(
    (
      <div
        style={{
          background: backgroundColor,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Background accent - very subtle */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.03,
            background: 'radial-gradient(circle at center, #f97316 0%, transparent 70%)',
          }}
        />
        
        {/* Logo */}
        <svg 
          width="200" 
          height="200" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#f97316" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ marginBottom: 40 }}
        >
          <path d="M10 18H5a3 3 0 0 1-3-3v-1"/>
          <path d="M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"/>
          <path d="M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"/>
          <path d="m7 21 3-3-3-3"/>
          <rect x="14" y="14" width="8" height="8" rx="2"/>
          <rect x="2" y="2" width="8" height="8" rx="2"/>
        </svg>
        
        {/* Blog text */}
        <div style={{ fontSize: 48, fontWeight: 'bold', color: '#ffffff', letterSpacing: -1 }}>
          BLOG
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 