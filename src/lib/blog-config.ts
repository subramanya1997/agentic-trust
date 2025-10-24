// Configuration for blog data source
export const BLOG_CONFIG = {
  // Blog is now using Sanity CMS exclusively
  dataSource: 'sanity' as const,
  
  // Enable preview mode for Sanity
  enablePreview: process.env.NEXT_PUBLIC_ENABLE_PREVIEW === 'true',
  
  // Cache revalidation time in seconds
  revalidate: 60,
}

export function useSanityData(): boolean {
  return true; // Always use Sanity
}
