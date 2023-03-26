import { defineField, defineType } from 'sanity'

import { getIcon } from '../utils/get-icon'

export const questionAndAnswer = defineType({
  name: 'questionAndAnswer',
  type: 'object',
  title: 'Question and Answer',
  icon: getIcon('questionAndAnswer'),
  preview: {
    select: {
      title: 'question',
      subtitle: 'answer',
    },
  },
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      title: 'Question',
    }),
    defineField({
      name: 'answer',
      type: 'portableTextSimple',
      title: 'Answer',
    }),
  ],
})
