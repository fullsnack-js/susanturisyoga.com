import {defineField, defineType} from 'sanity'

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'href',
      title: 'Hypertext Reference / URL',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),

    defineField({
      name: 'openNewTab',
      title: 'Open New Tab',
      type: 'boolean',
    }),
  ],
})
