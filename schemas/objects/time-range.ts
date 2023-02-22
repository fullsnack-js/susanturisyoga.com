import { MdTimelapse } from 'react-icons/md'
import { defineField, defineType } from 'sanity'

import { timeList12h, verifyRange } from '../utils/time-range.utils'

export const timeRange = defineType({
  name: 'timeRange',
  title: 'Time range',
  type: 'object',
  icon: MdTimelapse,
  validation: (Rule) => Rule.custom(verifyRange),
  fields: [
    defineField({
      title: 'Start time',
      name: 'start',
      type: 'string',
      initialValue: timeList12h[10].value,
      options: {
        list: timeList12h,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'End Time',
      name: 'end',
      type: 'string',
      initialValue: timeList12h[16].value,
      options: {
        list: timeList12h,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      time: 'time',
      day: 'day',
    },
    prepare({ time, day }) {
      const title = day
        ? day[0].toUpperCase() + day.slice(1)
        : 'Please choose a day'
      const subtitle = `${time.start}-${time.end}`

      return {
        title,
        subtitle,
      }
    },
  },
})
