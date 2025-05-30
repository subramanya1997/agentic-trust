import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Agentic Trust - Enterprise MCP Server Infrastructure';
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
          fontSize: 128,
          background: backgroundColor,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Logo and Title Container */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40, marginBottom: 40 }}>
          {/* Logo */}
          <svg 
            width="120" 
            height="120" 
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
          
          {/* Title - same size as logo */}
          <div style={{ fontSize: 120, fontWeight: 'bold', color: '#ffffff', lineHeight: 1 }}>
            Agentic Trust
          </div>
        </div>
        
        {/* Subtitle */}
        <div style={{ fontSize: 32, color: '#d1d5db', textAlign: 'center', maxWidth: 800 }}>
          The unified MCP server platform for production AI agents
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 