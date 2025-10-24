'use client'

import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from './client'
import hljs from 'highlight.js'
import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

// Table component for rendering custom table blocks
function TableComponent({ value }: any) {
  const { headers, rows, caption, alignment } = value

  return (
    <div className="my-6 overflow-x-auto">
      {caption && (
        <div className="text-sm text-gray-600 mb-2 italic">{caption}</div>
      )}
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers?.map((header: string, index: number) => (
              <th
                key={index}
                className={`px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider ${
                  alignment?.[index] === 'center'
                    ? 'text-center'
                    : alignment?.[index] === 'right'
                    ? 'text-right'
                    : 'text-left'
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows?.map((row: any, rowIndex: number) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.cells?.map((cell: any, cellIndex: number) => {
                const Tag = cell.isHeader ? 'th' : 'td'
                return (
                  <Tag
                    key={cellIndex}
                    className={`px-6 py-4 text-sm ${
                      cell.isHeader ? 'font-medium text-gray-900' : 'text-gray-500'
                    } ${
                      alignment?.[cellIndex] === 'center'
                        ? 'text-center'
                        : alignment?.[cellIndex] === 'right'
                        ? 'text-right'
                        : 'text-left'
                    }`}
                  >
                    {cell.content}
                  </Tag>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Mermaid diagram component
function MermaidDiagram({ code, filename }: { code: string; filename?: string }) {
  const mermaidRef = useRef<HTMLDivElement>(null)
  const [rendered, setRendered] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const renderMermaid = async () => {
      if (mermaidRef.current && !rendered && typeof window !== 'undefined') {
        try {
          // @ts-ignore - mermaid is loaded from CDN
          if (window.mermaid) {
            // @ts-ignore
            window.mermaid.initialize({ 
              startOnLoad: false,
              theme: 'default',
              securityLevel: 'loose',
            })
            
            const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
            // @ts-ignore
            const { svg } = await window.mermaid.render(id, code)
            if (mermaidRef.current) {
              mermaidRef.current.innerHTML = svg
              setRendered(true)
            }
          }
        } catch (error) {
          console.error('Error rendering mermaid:', error)
        }
      }
    }

    renderMermaid()
  }, [code, rendered, isMounted])

  // Don't render anything during SSR
  if (!isMounted) {
    return (
      <div className="my-6">
        {filename && (
          <div className="bg-gray-800 text-gray-200 px-4 py-2 text-sm rounded-t-lg">
            {filename}
          </div>
        )}
        <div className="bg-gray-50 p-4 rounded-b-lg border border-gray-200 flex justify-center">
          <pre className="text-sm">{code}</pre>
        </div>
      </div>
    )
  }

  return (
    <div className="my-6">
      {filename && (
        <div className="bg-gray-800 text-gray-200 px-4 py-2 text-sm rounded-t-lg">
          {filename}
        </div>
      )}
      <div 
        ref={mermaidRef}
        className="bg-gray-50 p-4 rounded-b-lg border border-gray-200 flex justify-center"
      >
        <pre className="text-sm">{code}</pre>
      </div>
    </div>
  )
}

// Code block component with syntax highlighting
function CodeBlock({ value }: any) {
  const codeRef = useRef<HTMLElement>(null)
  const { code, language, filename } = value

  useEffect(() => {
    if (codeRef.current && language && hljs.getLanguage(language)) {
      hljs.highlightElement(codeRef.current)
    }
  }, [code, language])

  // Special handling for Mermaid diagrams
  if (language === 'mermaid') {
    return <MermaidDiagram code={code} filename={filename} />
  }

  return (
    <div className="my-6">
      {filename && (
        <div className="bg-gray-800 text-gray-200 px-4 py-2 text-sm rounded-t-lg font-mono">
          {filename}
        </div>
      )}
      <pre className={`${filename ? 'rounded-b-lg' : 'rounded-lg'} overflow-x-auto`}>
        <code ref={codeRef} className={`language-${language || 'plaintext'}`}>
          {code}
        </code>
      </pre>
    </div>
  )
}

// Callout component
function CalloutComponent({ value }: any) {
  const { type, title, text } = value
  
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    tip: 'bg-purple-50 border-purple-200 text-purple-800',
  }
  
  const icons = {
    info: 'ℹ️',
    warning: '⚠️',
    error: '❌',
    success: '✅',
    tip: '💡',
  }

  return (
    <div className={`my-6 p-4 rounded-lg border-2 ${styles[type as keyof typeof styles] || styles.info}`}>
      <div className="flex items-start">
        <span className="text-2xl mr-3">{icons[type as keyof typeof icons] || icons.info}</span>
        <div className="flex-1">
          {title && <h4 className="font-semibold mb-1">{title}</h4>}
          <p className="text-sm">{text}</p>
        </div>
      </div>
    </div>
  )
}

// Utility function to auto-link URLs in text
function linkifyText(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  const parts = text.split(urlRegex)
  
  return parts.map((part, i) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:text-brand/80 underline transition-colors break-all"
        >
          {part}
        </a>
      )
    }
    return part
  })
}

// Process children to auto-link URLs
function processChildrenWithLinks(children: any): any {
  if (typeof children === 'string') {
    return linkifyText(children)
  }
  if (Array.isArray(children)) {
    return children.map((child, i) => {
      if (typeof child === 'string') {
        return <span key={i}>{linkifyText(child)}</span>
      }
      return child
    })
  }
  return children
}

// Extract plain text from React children
function extractText(children: any): string {
  if (typeof children === 'string') {
    return children
  }
  if (Array.isArray(children)) {
    return children.map(child => extractText(child)).join('')
  }
  if (children?.props?.children) {
    return extractText(children.props.children)
  }
  return ''
}

// Slugify text for IDs
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Custom Portable Text components
export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null
      
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || ''}
            width={800}
            height={450}
            className="rounded-lg w-full h-auto"
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-600 mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
    table: TableComponent,
    code: CodeBlock,
    callout: CalloutComponent,
    embed: ({ value }: any) => {
      const { url, caption } = value
      
      // YouTube embed
      if (url?.includes('youtube.com') || url?.includes('youtu.be')) {
        const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)?.[1]
        if (videoId) {
          return (
            <figure className="my-8">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={caption || 'YouTube video'}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                />
              </div>
              {caption && (
                <figcaption className="text-center text-sm text-gray-600 mt-2">
                  {caption}
                </figcaption>
              )}
            </figure>
          )
        }
      }
      
      // Generic iframe embed
      return (
        <figure className="my-8">
          <iframe
            src={url}
            title={caption || 'Embedded content'}
            className="w-full h-96 rounded-lg border border-gray-200"
          />
          {caption && (
            <figcaption className="text-center text-sm text-gray-600 mt-2">
              {caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href?.startsWith('/') ? 'noopener noreferrer' : undefined
      const target = !value.href?.startsWith('/') && value.blank !== false ? '_blank' : undefined
      
      return (
        <Link
          href={value.href}
          rel={rel}
          target={target}
          className="text-brand hover:text-brand/80 underline transition-colors"
        >
          {children}
        </Link>
      )
    },
    internalLink: ({ children, value }: any) => {
      return (
        <Link
          href={`/blog/${value.reference?.slug?.current}`}
          className="text-brand hover:text-brand/80 underline transition-colors"
        >
          {children}
        </Link>
      )
    },
    code: ({ children }: any) => (
      <code className="px-1 py-0.5 bg-gray-100 text-red-600 rounded text-sm font-mono">
        {children}
      </code>
    ),
    footnote: ({ children, value }: any) => {
      return (
        <span className="relative group">
          <span className="text-brand cursor-help">{children}</span>
          <span className="absolute bottom-full left-0 mb-2 hidden group-hover:block w-64 p-2 bg-gray-900 text-white text-xs rounded shadow-lg z-10">
            {value.text}
          </span>
        </span>
      )
    },
  },
  block: {
    h1: ({ children }: any) => {
      const text = typeof children === 'string' ? children : extractText(children)
      const id = slugify(text)
      return (
        <h1 id={id} className="text-4xl font-bold mt-12 mb-4 text-gray-900">
          {children}
        </h1>
      )
    },
    h2: ({ children }: any) => {
      const text = typeof children === 'string' ? children : extractText(children)
      const id = slugify(text)
      return (
        <h2 id={id} className="text-3xl font-bold mt-10 mb-4 text-gray-900">
          {children}
        </h2>
      )
    },
    h3: ({ children }: any) => {
      const text = typeof children === 'string' ? children : extractText(children)
      const id = slugify(text)
      return (
        <h3 id={id} className="text-2xl font-semibold mt-8 mb-3 text-gray-900">
          {children}
        </h3>
      )
    },
    h4: ({ children }: any) => {
      const text = typeof children === 'string' ? children : extractText(children)
      const id = slugify(text)
      return (
        <h4 id={id} className="text-xl font-semibold mt-6 mb-2 text-gray-900">
          {children}
        </h4>
      )
    },
    normal: ({ children }: any) => (
      <p className="mb-4 leading-relaxed text-gray-700">
        {processChildrenWithLinks(children)}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-brand pl-4 my-6 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="ml-4">{processChildrenWithLinks(children)}</li>
    ),
    number: ({ children }: any) => (
      <li className="ml-4">{processChildrenWithLinks(children)}</li>
    ),
  },
}

// Main component for rendering Portable Text content
export function PortableTextContent({ value }: { value: any }) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"
        strategy="beforeInteractive"
      />
      <div className="prose prose-lg max-w-none">
        <PortableText value={value} components={portableTextComponents} />
      </div>
    </>
  )
}
