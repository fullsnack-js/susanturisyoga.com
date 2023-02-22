import {isBefore} from 'date-fns'
import {defineType, defineField} from 'sanity'

export const scheduleType = defineType({
  name: 'schedule',
  type: 'object',
  title: 'Schedule',
  validation: (Rule) =>
    Rule.custom(
      (schedule: {from: any; to: any}) =>
        !isBefore(schedule.from, schedule.to) || 'End time cannot be before start time.'
    ),
  fields: [
    // TODO: FIX to only do time, maybe change the component ?

    defineField({
      title: 'Day',
      name: 'weekday',
      type: 'string',
      options: {
        list: [
          {title: 'Sunday', value: 'sunday'},
          {title: 'Monday', value: 'monday'},
          {title: 'Tuesday', value: 'tuesday'},
          {title: 'Wednesday', value: 'wednesday'},
          {title: 'Thursday', value: 'thursday'},
          {title: 'Friday', value: 'friday'},
          {title: 'Saturday', value: 'saturday'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'timeRange',
      // of: [{type: 'timeRange'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      time: 'time',
      day: 'weekday',
    },
    prepare({time, day}) {
      const title = day ? day[0].toUpperCase() + day.slice(1) : 'Please choose a day'
      const subtitle = `${time.start}-${time.end}`

      return {
        title,
        subtitle,
      }
    },
  },
})
