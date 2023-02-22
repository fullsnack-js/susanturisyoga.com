import { defineField, defineType } from 'sanity'

import { getIcon } from '../utils/get-icon'

export const classSettingType = defineType({
  name: 'setting',
  title: 'Class Setting',
  type: 'object',
  icon: getIcon('classSetting'),
  fields: [
    defineField({
      name: 'classType',
      title: 'Class Type',
      type: 'string',
      description:
        'Where will this be taught? Live in-person, online or a hybrid...?',
      options: {
        list: [
          { title: 'Online-only', value: 'online' },
          { title: 'Hybrid class', value: 'hybrid' },
          { title: 'In-studio only', value: 'studio' },
        ],
        layout: 'dropdown',
      },

      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'venue',
      title: 'Studio',
      type: 'reference',
      to: { type: 'venue' },
      hidden: ({ parent }) => parent?.classType === 'online',
    }),
    defineField({
      name: 'streaming',
      title: 'Video Streaming Platform',
      description:
        'The streaming platform serving the live class recording, eg. zoom',
      type: 'string',
      hidden: ({ parent }) => parent?.role === 'studio',
    }),
    defineField({
      name: 'registerUrl',
      type: 'url',
      title: 'Registration Link',
      description: 'Link to the event site (e.g. registration link/ more info)',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'title', media: 'icon' },
    prepare(selection) {
      const { title, media } = selection
      return {
        title: title,
        media: media,
      }
    },
  },
})
