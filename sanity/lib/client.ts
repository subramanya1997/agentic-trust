import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = '2024-01-01'

// Validate required environment variables
if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable')
}

// Create the client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
})

// Create a preview client with different settings
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'previewDrafts',
  ...(process.env.SANITY_API_TOKEN && { token: process.env.SANITY_API_TOKEN }),
})

// Helper for generating image URLs
export function urlFor(source: SanityImageSource) {
  const builder = imageUrlBuilder(client)
  return builder.image(source)
}

// Helper function to get the correct client
export function getClient(preview = false) {
  return preview ? previewClient : client
}
