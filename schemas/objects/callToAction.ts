import { defineField, defineType } from 'sanity'

import { getIcon } from '../utils/get-icon'

export const ctaType = defineType({
  title: 'Call to action',
  name: 'cta',
  type: 'object',
  icon: getIcon('cta'),
  options: {
    collapsible: true,
    collapsed: false,
  },

  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'url',
      type: 'url',
      title: 'Call to Action URL',
      description: 'The target URL.',
      hidden: ({ parent }) => !parent.url && parent.reference,
      validation: (rule) => rule.uri({ scheme: ['https', 'mailto', 'tel'] }),
    }),
    defineField({
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      hidden: ({ parent }) => !parent.reference && parent.url,
      to: [{ type: 'page' }],
    }),
    defineField({
      title: 'Kind',
      name: 'kind',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['button', 'link', 'arrow'],
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      reference: 'reference.slug.current',
      url: 'url',
    },
    prepare({ title, reference, url }) {
      let subtitle = 'Not set'
      if (reference) {
        subtitle = `Internal: /${reference.replace(/\/$/, '')}`
      }
      if (url) {
        subtitle = `External: ${url}`
      }
      return {
        title,
        subtitle,
      }
    },
  },
})
