import { MdTimelapse } from 'react-icons/md'
import { defineField, defineType } from 'sanity'

export const eventDuration = defineField({
  name: 'eventDuration',
  title: 'Event Duration',
  type: 'object',
  icon: MdTimelapse,
  validation: rule => rule.required(),
  fields: [
    defineField({
      title: 'Start time',
      name: 'start',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'End Time',
      name: 'end',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
  ],
//   preview: {
//     select: {
//       time: 'time',
//       day: 'day',
//     },
//     prepare({ time, day }) {
//       const title = day
//         ? day[0].toUpperCase() + day.slice(1)
//         : 'Please choose a day'
//       const subtitle = `${time.start}-${time.end}`

//       return {
//         title,
//         subtitle,
//       }
//     },
//   },
})
