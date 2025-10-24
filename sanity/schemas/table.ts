import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'table',
  title: 'Table',
  type: 'object',
  fields: [
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional table caption',
    }),
    defineField({
      name: 'headers',
      title: 'Headers',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'cells',
              title: 'Cells',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'content',
                      title: 'Content',
                      type: 'string',
                    },
                    {
                      name: 'isHeader',
                      title: 'Is Header Cell',
                      type: 'boolean',
                      initialValue: false,
                    },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: {
              cells: 'cells',
            },
            prepare({ cells }) {
              const cellContent = cells?.map((cell: any) => cell.content).join(' | ') || ''
              return {
                title: cellContent,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'alignment',
      title: 'Column Alignment',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Left', value: 'left' },
              { title: 'Center', value: 'center' },
              { title: 'Right', value: 'right' },
            ],
          },
        },
      ],
      description: 'Alignment for each column',
    }),
  ],
  preview: {
    select: {
      caption: 'caption',
      headers: 'headers',
    },
    prepare({ caption, headers }) {
      const headerText = headers?.join(' | ') || 'Table'
      return {
        title: caption || headerText,
        subtitle: caption ? headerText : undefined,
      }
    },
  },
})
