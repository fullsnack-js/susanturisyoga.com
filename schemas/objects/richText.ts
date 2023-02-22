import { EditIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const content = defineType({
  name: 'richText',
  title: 'Rich Text',
  type: 'object',
  icon: EditIcon,
  fields: [
    defineField({
      name: 'body',
      title: 'Body',
      type: 'portableText',
    }),
  ],
  preview: {
    select: {
      title: 'body',
    },
    prepare(selection: Record<string, any>) {
      const title = selection.title[0].children[0].text // display the first item from the body content

      return {
        subtitle: 'Content',
        title,
      }
    },
  },
})
