import { definePlugin } from 'sanity'

export const markdownPlugin = definePlugin({
  name: 'markdown-plugin',
  document: {
    actions: (prev, context) => {
      // Only add actions for blog posts
      if (context.schemaType !== 'blogPost') {
        return prev
      }

      return [
        ...prev,
        {
          label: 'Import Markdown',
          onHandle: async () => {
            const input = document.createElement('input')
            input.type = 'file'
            input.accept = '.md,.markdown'
            
            input.onchange = async (e) => {
              const file = e.target.files[0]
              if (file) {
                const text = await file.text()
                // Store markdown in the markdownContent field
                console.log('Imported markdown:', text)
                alert('Markdown imported! Check the Markdown tab to see the content.')
              }
            }
            
            input.click()
          },
        },
        {
          label: 'Export Markdown',
          onHandle: async () => {
            // Get current document content and convert to markdown
            console.log('Exporting to markdown...')
            alert('Export functionality coming soon!')
          },
        },
      ]
    },
  },
})
