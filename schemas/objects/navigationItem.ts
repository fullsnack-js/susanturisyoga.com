import { defineField, defineType } from 'sanity'

import { getIcon } from '../utils/get-icon'

export const navigationItemType = defineType({
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  icon: getIcon('navItem'),
  fieldsets: [
    {
      name: 'navigation',
      title: 'Navigation',
    },
  ],

  fields: [
    defineField({
      name: 'navLink',
      title: 'Navigation Item URL',
      type: 'object',
      icon: getIcon('navLink'),
      options: {
        columns: 2,
      },
      fields: [
        {
          title: 'Select the type of link',
          description:
            'External links go to other websites using the format `https://www.google.com`. Internal links are restricted to YWST pages.',
          name: 'linkType',
          type: 'string',
          options: {
            list: [
              { title: 'External', value: 'external' },
              { title: 'Internal', value: 'internal' },
            ],
            // layout: 'radio',
          },
        },

        {
          name: 'internal',
          type: 'linkInternal',
          hidden: ({ parent }) => parent?.linkType !== 'internal',
        },
        {
          name: 'external',
          type: 'linkExternal',
          hidden: ({ parent }) => parent?.linkType !== 'external',
        },
      ],
    }),
  ],
  preview: {
    select: {
      linkType: 'navLink.linkType',
      external: 'navLink.external.title',
      internal: 'navLink.internal.title',
    },
    prepare({ title, linkType, external, internal }) {
      return {
        title: title ?? `${linkType === 'external' ? external : internal}`,
        subtitle: linkType,
      }
    },
  },
})
