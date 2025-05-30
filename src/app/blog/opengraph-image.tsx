import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Agentic Trust Blog - AI Infrastructure Insights';
export const size = {
  width: 1200,
  height: 630,
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
        {/* Background pattern - subtle circles */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.03,
            backgroundImage: 'radial-gradient(circle at 20% 50%, #f97316 0%, transparent 50%), radial-gradient(circle at 80% 80%, #f97316 0%, transparent 50%)',
          }}
        />
        
        {/* Logo and Title Container */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40, marginBottom: 40, zIndex: 10 }}>
          {/* Logo */}
          <svg 
            width="100" 
            height="100" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#f97316" 
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
          
          {/* Title - Blog in orange, rest in white */}
          <div style={{ fontSize: 80, fontWeight: 'bold', lineHeight: 1, display: 'flex', alignItems: 'center', gap: 20 }}>
            <span style={{ color: '#ffffff' }}>Agentic Trust</span>
            <span style={{ color: '#ffffff' }}>|</span>
            <span style={{ color: '#f97316' }}>Blog</span>
          </div>
        </div>
        
        {/* Subtitle */}
        <div style={{ fontSize: 28, color: '#d1d5db', textAlign: 'center', maxWidth: 800, zIndex: 10 }}>
          Insights on AI agent infrastructure, MCP servers, and production best practices
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 