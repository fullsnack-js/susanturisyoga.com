import { CogIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

import { generateEmailField } from '../utils/email'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  groups: [{ name: 'navigation', title: 'Site Navigation' }],
  fields: [
    defineField({
      title: 'Default SEO',
      name: 'seo',
      type: 'seo',
      validation: (rule) => rule.required(),
    }),
    defineField(
      generateEmailField({
        name: 'contactEmail',
        title: 'Contact Email',
        description: 'Reply email for website contact page',
      })
    ),
    defineField({
      name: 'socials',
      title: 'Social Media Accounts',
      type: 'array',
      of: [defineArrayMember({ type: 'social' })],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'menuItems',
      group: 'navigation',
      title: 'Menu Item list',
      description: 'Links displayed on the header of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'home',
            },
            {
              type: 'page',
            },
            {
              type: 'event',
            },
            { type: 'cta' },
          ],
        },
      ],
    }),
    defineField({
      name: 'footer',
      group: 'navigation',
      description:
        'This is a block of text that will be displayed at the bottom of the page.',
      title: 'Footer Info',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Menu Items',
      }
    },
  },
})
