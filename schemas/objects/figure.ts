// import {Rule, defineField, defineType} from 'sanity'
// import {getIcon} from '../../utils/get-icon'
import {FiImage} from 'react-icons/fi'
import {defineField, defineType} from 'sanity'
export const figureType = defineType({
  name: 'figure',
  title: 'Image',
  type: 'object',
  icon: FiImage,
  fieldsets: [
    {
      name: 'text',
      title: 'Text',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['blurhash','exif', 'location', 'lqip', 'palette'],
      },
    }),
    defineField({
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.required(),
      fieldset: 'text',
    }),
    defineField({name: 'caption', type: 'string', fieldset: 'text'}),
  ],
  preview: {
    select: {
      media: 'image',
      alt: 'alt',
      caption: 'caption',
    },
    prepare({media, alt, caption}) {
      return {
        title: alt || caption || 'No alt text or caption',
        media,
      }
    },
  },
})
