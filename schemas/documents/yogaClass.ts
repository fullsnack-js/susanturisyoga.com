import { defineField, defineType } from 'sanity'
import { getIcon } from '../utils/get-icon'

const yogaResources = defineType({
  title: 'External Resources',
  name: 'classResources',
  type: 'object',
  fields: [defineField({
  title: 'Title',
  name: 'title',
  type: 'string'}),
// URL
defineField({
  name: 'url',
  title: 'URL',
  type: 'url',
  validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
})]})

export const yogaClass = defineType({
  name: 'class',
  title: 'Class',
  type: 'document',
  icon: getIcon('yoga'),
  preview: {
    select: {
      title: 'title',
      setting: 'setting',
      level: 'level',
      schedule: 'schedule',
    },
    prepare({ title, setting, schedule, level }) {
      const day = schedule.weekday
      const formattedDay = day
        ? day[0].toUpperCase() + day.slice(1)
        : 'Please choose a day'
      const subtitle = `${formattedDay} ${schedule.time.start}-${schedule.time.end}`
      return {
        title: `${title}/ Level ${level} - ${setting.classType.toUpperCase()}`,
        subtitle,
      }
    },
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().error('Must provide a class name.'),
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .error('Must provide a level for prospective yoga students'),
    }),
    defineField({
      name: 'description',
      title: 'Class Description',
      type: 'text',
      rows: 3,
      validation: (rule) =>
        rule
          .required()
          .warning('Must provide a short description for web viewers'),
    }),
    defineField({
      name: 'schedule',
      type: 'schedule',
    }),
    defineField({
      name: 'day',
      type: 'string',
      title: 'Weekday',
      options: {
        list: [
          {title: 'Sunday', value: '0'},
          {title: 'Monday', value: '1'},
          {title: 'Tuesday', value: '2'},
          {title: 'Wednesday', value: '3'},
          {title: 'Thursday', value: '4'},
          {title: 'Friday', value: '5'},
          {title: 'Saturday', value: '6'},
        ]
      }
    }),
    defineField( {
      name: 'duration',
      type: 'duration',
    }),
    defineField({
      name: 'setting',
      type: 'setting',
      validation: (rule) =>
        rule.required().error('Must provide a setting for this class.'),
    }),
    defineField({
      name: 'eventCalendar',
      type: 'eventCalendar',
    }),
    {
      title: 'External Resources',
      name: 'classResources',
      type: 'object',
      fields: [defineField({
      title: 'Title',
      name: 'title',
      type: 'string'}),
    // URL
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    })]}
  ],
})
