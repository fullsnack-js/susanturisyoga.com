import {defineType} from 'sanity'

export const portableTextSimple = defineType({
  name: 'portableTextSimple',
  title: 'Portable Text',
  type: 'array',
  of: [
    {
      name: 'block',
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [],
      },
    },
  ],
})
