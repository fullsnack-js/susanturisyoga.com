import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { ctaType } from 'schemas/objects'
import { getIcon } from 'schemas/utils/get-icon'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pageHero',
      title: 'Page Hero',
      type: 'figure',
    }),
    defineField({
      name: 'landingCta',
      title: 'Above the Fold CTA',
      type: 'cta',
    }),
    defineField({
      name: 'overview',
      description:
        'Used both for the <meta> description tag for SEO, and the personal website subheader.',
      title: 'Description',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
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
      ],
    }),
    // defineField({
    //   name: 'showcaseProjects',
    //   title: 'Showcase projects',
    //   description:
    //     'These are the projects that will appear first on your landing page.',
    //   type: 'array',
    //   of: [
    //     defineArrayMember({
    //       type: 'reference',
    //       to: [{ type: 'project' }],
    //     }),
    //   ],
    // }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
