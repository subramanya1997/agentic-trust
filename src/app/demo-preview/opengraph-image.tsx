import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Agentic Trust Live Demo - MCP Server Bridge';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to br, #292524 0%, #1c1917 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 40,
          }}
        >
          {/* Logo */}
          <div
            style={{
              background: 'rgba(249, 115, 22, 0.1)',
              borderRadius: 24,
              padding: 28,
              border: '1px solid rgba(249, 115, 22, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg 
              width="80" 
              height="80" 
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
          </div>
          
          {/* Title */}
          <div 
            style={{ 
              fontSize: 56, 
              fontWeight: 600,
              color: '#ffffff',
              textAlign: 'center',
              letterSpacing: '-1px',
            }}
          >
            Live Demo
          </div>
          
          {/* Subtitle */}
          <div 
            style={{ 
              fontSize: 22, 
              color: 'rgba(255, 255, 255, 0.7)',
              textAlign: 'center',
              fontWeight: 400,
              maxWidth: 650,
              lineHeight: 1.4,
            }}
          >
            Experience the power of Agentic Trust MCP Server Bridge
          </div>

          {/* Badge */}
          <div 
            style={{ 
              background: 'rgba(249, 115, 22, 0.2)',
              border: '1px solid rgba(249, 115, 22, 0.3)',
              borderRadius: 12,
              padding: '12px 24px',
              fontSize: 16,
              color: '#f97316',
              fontWeight: 500,
            }}
          >
            Interactive Demo
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 