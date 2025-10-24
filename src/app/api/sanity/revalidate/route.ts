import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'
import { getRevalidationPaths, CACHE_TAGS } from '@/lib/sanity-performance'

// Verify webhook signature
function isValidSignature(
  req: NextRequest,
  body: string,
  secret: string
): boolean {
  const signature = req.headers.get('sanity-webhook-signature')
  if (!signature) return false
  
  // Implement HMAC verification
  // This is a simplified version - use proper HMAC verification in production
  return signature === secret
}

export async function POST(req: NextRequest) {
  try {
    // Verify webhook secret
    const secret = process.env.SANITY_WEBHOOK_SECRET
    if (!secret) {
      return NextResponse.json(
        { error: 'Webhook secret not configured' },
        { status: 500 }
      )
    }
    
    const body = await req.text()
    
    // Verify signature
    if (!isValidSignature(req, body, secret)) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      )
    }
    
    // Parse webhook body
    const { _type, slug, _id, operation } = JSON.parse(body)
    
    // Handle different document types
    switch (_type) {
      case 'blogPost':
        // Revalidate post list
        revalidateTag(CACHE_TAGS.posts)
        revalidatePath('/blog')
        
        // Revalidate specific post
        if (slug?.current) {
          revalidateTag(CACHE_TAGS.post(slug.current))
          revalidatePath(`/blog/${slug.current}`)
        }
        
        // Revalidate home page if featured post
        revalidatePath('/')
        break
        
      case 'author':
        revalidateTag(CACHE_TAGS.authors)
        if (slug?.current) {
          revalidateTag(CACHE_TAGS.author(slug.current))
        }
        revalidatePath('/blog')
        break
        
      case 'category':
        revalidateTag(CACHE_TAGS.categories)
        if (slug?.current) {
          revalidateTag(CACHE_TAGS.category(slug.current))
        }
        revalidatePath('/blog')
        break
        
      case 'settings':
        revalidateTag(CACHE_TAGS.settings)
        revalidatePath('/', 'layout')
        break
    }
    
    // Get all paths that need revalidation
    const paths = getRevalidationPaths({ _type, slug })
    
    // Revalidate all paths
    await Promise.all(paths.map(path => revalidatePath(path)))
    
    return NextResponse.json({
      message: 'Revalidation triggered',
      revalidated: true,
      paths,
      type: _type,
      operation,
    })
    
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}
