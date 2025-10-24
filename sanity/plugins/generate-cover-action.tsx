import { definePlugin } from 'sanity'
import { DocumentActionComponent } from 'sanity'

export const generateCoverAction = definePlugin({
  name: 'generate-cover-action',
  document: {
    actions: (prev, context) => {
      // Only add action for blog posts
      if (context.schemaType !== 'blogPost') {
        return prev
      }

      const GenerateCoverAction: DocumentActionComponent = (props) => {
        const { draft, published } = props

        return {
          label: 'Generate Cover Image',
          icon: () => '🎨',
          onHandle: async () => {
            const doc = draft || published
            
            if (!doc) {
              alert('Please save the document first')
              return
            }

            const { title, excerpt, category } = doc as any
            
            if (!title) {
              alert('Please add a title first')
              return
            }

            try {
              // Get category title if it's a reference
              let categoryTitle = 'Security'
              if (category?._ref) {
                // Resolve the category reference
                const { client } = context
                const categoryDoc = await client.fetch(
                  `*[_id == $ref][0]{title}`,
                  { ref: category._ref }
                )
                categoryTitle = categoryDoc?.title || 'Security'
              } else if (typeof category === 'object' && category.title) {
                categoryTitle = category.title
              }

              // Call the API to generate the cover
              const response = await fetch('/api/generate-cover', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  title,
                  excerpt,
                  category: categoryTitle,
                }),
              })

              if (!response.ok) {
                throw new Error('Failed to generate cover image')
              }

              // Get the image blob
              const blob = await response.blob()
              
              // Create a file from the blob
              const file = new File([blob], `${doc._id}-cover.png`, { type: 'image/png' })

              // Upload to Sanity using the client
              const { client } = context
              
              const asset = await client.assets.upload('image', file, {
                filename: `${doc._id}-cover.png`,
              })

              // Update the document with the new cover image
              await client
                .patch(doc._id)
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

              alert('Cover image generated and uploaded successfully!')
              
              // Reload the document to show the new image
              if (typeof window !== 'undefined') {
                window.location.reload()
              }
            } catch (error) {
              console.error('Error generating cover:', error)
              alert('Failed to generate cover image. Please try again.')
            }
          },
        }
      }

      return [...prev, GenerateCoverAction]
    },
  },
})

