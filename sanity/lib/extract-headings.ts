// Extract headings from Sanity Portable Text content
export interface TocItem {
  id: string
  text: string
  level: number
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function extractTextFromBlock(block: any): string {
  if (!block.children) return ''
  
  return block.children
    .map((child: any) => {
      if (child._type === 'span' && child.text) {
        return child.text
      }
      return ''
    })
    .join('')
}

export function extractHeadings(content: any[]): TocItem[] {
  if (!content || !Array.isArray(content)) {
    return []
  }

  const headings: TocItem[] = []

  content.forEach((block) => {
    if (block._type === 'block' && block.style) {
      const level = block.style.match(/^h([1-4])$/)?.[1]
      if (level) {
        const text = extractTextFromBlock(block)
        if (text) {
          headings.push({
            id: slugify(text),
            text,
            level: parseInt(level),
          })
        }
      }
    }
  })

  return headings
}

