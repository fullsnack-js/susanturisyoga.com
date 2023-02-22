/* eslint-disable no-useless-escape */
import { FiSettings } from 'react-icons/fi'
import { defineArrayMember, defineField, defineType } from 'sanity'

import { generateEmailField } from '../utils/email'

export const globalSettings = defineType({
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  icon: FiSettings,
  // __experimental_actions: ['create', 'delete', /**/ 'update', 'publish'],
  groups: [{ name: 'navigation', title: 'Site Navigation' }],
  fields: [
    defineField({
      name: 'title',
      title: 'Website title',
      type: 'string',
    }),
    defineField(
      generateEmailField({
        name: 'contactEmail',
        title: 'Contact Email',
        description: 'Reply email for website contact page',
      })
    ),
    defineField({
      group: 'navigation',
      title: 'Main navigation',
      name: 'mainNav',
      type: 'array',
      description:
        'Drag and drop items to represent the display order on the website main navigation',

      of: [{ type: 'navigationItem' }],
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      group: 'navigation',
      title: 'Footer navigation',
      name: 'footerNav',
      type: 'array',
      description:
        'Drag and drop items to represent the display order on the website footer navigation',

      of: [defineArrayMember({ type: 'navigationItem' })],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'socials',
      title: 'Social Media Accounts',
      type: 'array',
      of: [defineArrayMember({ type: 'social' })],
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Default SEO',
      name: 'seo',
      type: 'seo',
      validation: (rule) => rule.required(),
    }),
  ],
})
