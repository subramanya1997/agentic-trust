/** @jsxImportSource react */
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@sanity/client'
import { ImageResponse } from '@vercel/og'

// Initialize Sanity client for uploading
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

export async function POST(req: NextRequest) {
  try {
    const { title, category, authors, postId } = await req.json()

    if (!title) {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      )
    }

    // Generate the image using @vercel/og
    const imageResponse = new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#1a1b26',
            backgroundImage: 'linear-gradient(135deg, #1a1b26 0%, #24283b 100%)',
            padding: '60px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {/* Pattern overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 40px,
                rgba(255, 255, 255, 0.02) 40px,
                rgba(255, 255, 255, 0.02) 80px
              )`,
            }}
          />

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#7c3aed',
                borderRadius: '12px',
                marginRight: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold',
              }}
            >
              AT
            </div>
            <div style={{ color: 'white', fontSize: '28px', fontWeight: 'bold' }}>
              Agentic Trust
            </div>
          </div>

          {/* Category badge */}
          {category && (
            <div style={{ marginBottom: '30px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  backgroundColor: '#7c3aed',
                  color: 'white',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '16px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {category}
              </div>
            </div>
          )}

          {/* Title */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              fontSize: '48px',
              fontWeight: 'bold',
              lineHeight: '1.2',
              marginBottom: '40px',
            }}
          >
            {title}
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            {/* Authors */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {authors && authors.length > 0 && (
                <div style={{ color: '#a0a0b0', fontSize: '20px', marginBottom: '8px' }}>
                  {authors.map((a: any) => a.name).join(', ')}
                </div>
              )}
              <div style={{ color: '#808090', fontSize: '18px' }}>
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>

            {/* Decorative element */}
            <div
              style={{
                width: '100px',
                height: '4px',
                backgroundColor: '#7c3aed',
                borderRadius: '2px',
              }}
            />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )

    // Convert to buffer
    const arrayBuffer = await imageResponse.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Upload to Sanity
    const asset = await client.assets.upload('image', buffer, {
      filename: `${title.toLowerCase().replace(/\s+/g, '-')}-cover.png`,
    })

    // If postId is provided, update the post
    if (postId) {
      await client
        .patch(postId)
        .set({
          coverImage: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: asset._id,
            },
            alt: title,
          },
        })
        .commit()
    }

    return NextResponse.json({
      success: true,
      assetId: asset._id,
      url: asset.url,
    })
  } catch (error: any) {
    console.error('Error generating cover image:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to generate cover image' },
      { status: 500 }
    )
  }
}
