import { HelpCircleIcon } from '@sanity/icons'
import { defineField } from 'sanity'

export const faqsSection = {
  name: 'faqsSection',
  title: 'Q & A Section',
  type: 'object',
  icon: HelpCircleIcon,
  preview: {
    select: {
      title: 'title',
      questions: 'questions',
    },
    prepare({ title, questions }) {
      return {
        title,
        subtitle: questions.length
          ? `${questions.length} questions`
          : undefined,
      }
    },
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Optional title for the collection',
    }),
    defineField({
      name: 'questions',
      type: 'array',
      title: 'Questions',
      description:
        'Use for providing answers to common questions about the topic. Be brief, and link to outside sources for more information.',
      of: [
        {
          type: 'questionAndAnswer',
        },
      ],
    }),
  ],
}
