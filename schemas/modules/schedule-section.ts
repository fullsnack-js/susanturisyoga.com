import { defineField, defineType } from 'sanity'

import { getIcon } from '../utils/get-icon'

export const scheduleSection = defineType({
  name: 'scheduleSection',
  type: 'object',
  title: 'Class Schedule Section',
  preview: {
    select: {
      classes: 'classes',
    },
    prepare({ classes }) {
      return {
        title: 'Current Schedule',
        subtitle: `Active classes: ${classes?.length || 0}`,
        media: getIcon('schedule'),
      }
    },
  },
  fields: [
    defineField({
      name: 'classes',
      type: 'array',
      title: 'Classes',
      of: [
        {
          type: 'reference',
          to: [{ type: 'class' }],
          // options: {
          //   // Just include programs that's part of an event, and that hasn't been selected already
          //   filter: ({ parent }) => ({
          //     filter: "!(_id in $current)",
          //     params: {
          //       current: parent?.map(({ _ref }) => _ref),
          //     },
          //   }),
          // },
        },
      ],
    }),
  ],
})
