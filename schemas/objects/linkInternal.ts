import {LinkIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

// type ReferenceType = 'post' | 'route' | 'policy' | 'page'

export const linkInternal = defineType({
  title: 'Internal Link',
  name: 'linkInternal',
  type: 'object',
  icon: LinkIcon,
  fields: [
    // Title
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // Reference
    defineField({
      name: 'reference',
      type: 'reference',
      weak: true,
      validation: (Rule) => Rule.required(),
      to: [
        // {type: 'route'},
        {type: 'page'},
        {type: 'policy'},
        // {type: 'post'},
      ],
    }),
  ],
  preview: {
    select: {
      reference: 'reference',
      referenceTitle: 'reference.title',
      referenceType: 'reference._type',
      title: 'title',
    },
    prepare(selection: Record<string, any>) {
      const {reference, referenceTitle, referenceType, title} = selection

      let subtitle = []
      if (reference) {
        subtitle.push([`→ ${referenceTitle || reference?._id}`])
      } else {
        subtitle.push('(Nonexistent document reference)')
      }

      return {
        // media: image,
        subtitle: subtitle.join(' '),
        title,
      }
    },
  },
})
