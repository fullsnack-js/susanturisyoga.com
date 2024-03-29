import { getExtension, getImageDimensions } from '@sanity/asset-utils'
import { defineField, defineType } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    defineField({
      name: 'noIndex',
      description: `Hide this page from search engines and the sitemap`,
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: `title`,
      type: `string`,
      description: `Override the page title`,
    }),
    defineField({
      name: `description`,
      type: `text`,
      rows: 3,
      validation: (Rule) => [
        Rule.max(155).warning('Description should be less than 155 characters'),
        Rule.min(90).warning('Description should be at least 90 characters'),
      ],
    }),
    defineField({
      name: `image`,
      type: `image`,
      options: { hotspot: true },
      validation: (rule) =>
        rule.custom((value) => {
          if (!value?.asset?._ref) {
            return true
          }

          const filetype = getExtension(value.asset._ref)

          if (filetype !== 'jpg' && filetype !== 'png') {
            return 'Image must be a JPG or PNG'
          }

          const { width, height } = getImageDimensions(value.asset._ref)

          if (width < 1200 || height < 630) {
            return 'Image must be at least 1200x630 pixels'
          }

          return true
        }),
    }),
  ],
})
