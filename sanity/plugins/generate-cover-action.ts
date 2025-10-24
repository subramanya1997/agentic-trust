import { definePlugin, useDocumentOperation } from 'sanity'
import { useState } from 'react'
import { useToast } from '@sanity/ui'
import { ImageIcon } from '@sanity/icons'

export const generateCoverAction = definePlugin(() => {
  return {
    name: 'generate-cover-action',
    document: {
      actions: (prev, context) => {
        // Only add action for blog posts
        if (context.schemaType !== 'blogPost') {
          return prev
        }

        const GenerateCoverImageAction = (props: any) => {
          const { patch } = useDocumentOperation(props.id, props.type)
          const [isGenerating, setIsGenerating] = useState(false)
          const toast = useToast()

          return {
            label: isGenerating ? 'Generating...' : 'Generate Cover Image',
            icon: ImageIcon,
            disabled: isGenerating,
            onHandle: async () => {
              setIsGenerating(true)

              try {
                // Get the current document
                const doc = props.draft || props.published

                if (!doc) {
                  toast.push({
                    status: 'error',
                    title: 'No document found',
                    description: 'Please save the document first',
                  })
                  setIsGenerating(false)
                  return
                }

                // Prepare data for the API
                const data = {
                  title: doc.title,
                  category: doc.category?.title || doc.category,
                  authors: doc.authors?.map((author: any) => ({
                    name: author.name || 'Unknown Author',
                  })),
                  postId: doc._id,
                }

                // Get the studio's origin
                const origin = window.location.origin

                // Call the API endpoint
                const response = await fetch(`${origin}/api/generate-blog-cover`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
                })

                const result = await response.json()

                if (!response.ok) {
                  throw new Error(result.error || 'Failed to generate image')
                }

                // Success notification
                toast.push({
                  status: 'success',
                  title: 'Cover image generated!',
                  description: 'The cover image has been generated and saved.',
                })

                // Refresh the document
                setTimeout(() => {
                  props.onComplete()
                }, 1000)

              } catch (error: any) {
                console.error('Error generating cover image:', error)
                toast.push({
                  status: 'error',
                  title: 'Failed to generate cover image',
                  description: error.message || 'An unexpected error occurred',
                })
              } finally {
                setIsGenerating(false)
              }
            },
          }
        }

        // Add our action to the list
        return [...prev, GenerateCoverImageAction]
      },
    },
  }
})
