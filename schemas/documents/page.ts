import { ComposeIcon, DocumentIcon, ImageIcon, SearchIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { formSection } from 'schemas/modules/form-section'
import { faqsSection } from 'schemas/modules/questions-and-answers-section'
import { scheduleSection } from 'schemas/modules/schedule-section'
import { getIcon } from 'schemas/utils/get-icon'

export default defineType({
  type: 'document',
  name: 'page',
  title: 'Page',
  icon: getIcon('page'),
  groups: [{ name: 'seo', title: 'SEO', icon: SearchIcon }],
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'figure' }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      title: 'Page Content',
      name: 'pageContent',
      type: 'array',
      icon: getIcon('pageSections'),
      of: [
        { type: 'cta' },
        { type: 'imageWithText' },
        { type: 'richText' },
        { type: 'figure' },
        defineField(scheduleSection),
        defineField(faqsSection),
        defineField(formSection),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Page',
        title,
      }
    },
  },
})
