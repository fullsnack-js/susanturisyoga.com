import { defineField, defineType } from 'sanity'

import { getIcon } from '../utils/get-icon'

export const venue = defineType({
  name: 'venue',
  title: 'Venues',
  type: 'document',
  icon: getIcon('pin'),
  groups: [{ title: 'Location', name: 'location' }],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Venue URL',
      description: "The URL of the venue's website, if any",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'portableTextSimple',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      type: 'object',
      title: 'Address',
      group: 'location',
      options: {
        columns: 2,
      },
      fields: [
        {
          name: 'street',
          type: 'string',
          title: 'Street',
        },
        {
          name: 'other',
          type: 'string',
          title: 'Other (Floor, suite, etc.)',
        },
        {
          name: 'city',
          type: 'string',
        },
        {
          name: 'state',
          type: 'string',
        },
        {
          name: 'postalCode',
          type: 'string',
          title: 'ZIP/Postal Code',
        },
        { name: 'country', type: 'string' },
      ],
    }),
    defineField({
      name: 'geolocation',
      group: 'location',
      title: 'Geographical Location',
      type: 'geopoint',
    }),
    defineField({
      name: 'directions',
      type: 'portableTextSimple',
      hidden: ({ document }) => document?.address === undefined,
    }),
    defineField({
      name: 'image',
      type: 'figure',
    }),
    defineField({
      name: 'accessibility',
      type: 'object',
      title: 'Accessibility',
      options: {
        columns: 1,
      },
      fieldsets: [
        {
          name: 'checkList',
          title: 'Accessibility Checklist',
        },
      ],
      fields: [
        defineField({
          name: 'wheelchair',
          type: 'boolean',
          title: 'Wheelchair Accessible',
          fieldset: 'checkList',
        }),
        defineField({
          name: 'parking',
          type: 'boolean',
          title: 'Accessible parking',
          fieldset: 'checkList',
        }),
      ],
    }),
  ],
})
