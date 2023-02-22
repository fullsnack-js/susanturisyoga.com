import { defineField, defineType } from 'sanity'

import { getIcon } from '../utils/get-icon'

export const eventCalendarType = defineType({
  name: 'eventCalendar',
  type: 'object',
  title: 'Calendar Information',
  description:
    'Select the calendar that manages the event and enter the associated ID. Please make sure that the calendar has been set to public!',
  options: {
    columns: 2,
  },
  fields: [
    defineField({
      name: 'app',
      title: 'Calendar App',
      type: 'string',
      options: {
        list: [
          { title: 'Google Calendar', value: 'google' },
          { title: 'Apple iCal', value: 'apple' },
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'calendarId',
      type: 'string',
      title: 'Calendar ID',
    }),
  ],
  preview: {
    select: {
      app: 'app',
      calendarId: 'calendarId',
    },
    prepare({ app, calendarId }: { app: any; calendarId: any }) {
      return {
        title: app,
        subtitle: calendarId ?? '(calendarId not set)',
        media: getIcon(app),
      }
    },
  },
})
