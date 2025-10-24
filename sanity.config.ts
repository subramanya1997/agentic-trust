import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import { markdownPlugin } from './sanity/plugins/markdown-plugin.js'
import { generateCoverAction } from './sanity/plugins/generate-cover-action'
import schemas from './sanity/schemas'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set(["settings"])

export default defineConfig({
  name: 'default',
  title: 'Agentic Trust Blog',
  basePath: '/studio',

  // Update these with your actual Sanity project details
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Blog posts
            S.listItem()
              .title('Blog Posts')
              .icon(() => '📝')
              .child(
                S.documentList()
                  .title('Blog Posts')
                  .filter('_type == "blogPost"')
              ),
            
            // Authors
            S.listItem()
              .title('Authors')
              .icon(() => '👤')
              .child(
                S.documentList()
                  .title('Authors')
                  .filter('_type == "author"')
              ),
            
            // Categories
            S.listItem()
              .title('Categories')
              .icon(() => '🏷️')
              .child(
                S.documentList()
                  .title('Categories')
                  .filter('_type == "category"')
              ),
            
            // Settings singleton
            S.listItem()
              .title('Settings')
              .icon(() => '⚙️')
              .child(
                S.document()
                  .schemaType('settings')
                  .documentId('settings')
              ),
          ]),
    }),
    visionTool(),
    codeInput(),
    markdownPlugin,
    generateCoverAction(),
  ],

  schema: {
    types: schemas,
    // Filter out singleton types from the global "New document" menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
