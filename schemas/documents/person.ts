import { defineField, defineType } from 'sanity'

import { authorFields } from '../fields/authorFields'
import { generateEmailField } from '../utils/email'
import { getIcon } from '../utils/get-icon'
export const person = defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: getIcon('personDoc'),
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField(
      generateEmailField({
        name: 'email',
        description: 'The email address associated to this person',
      })
    ),
    defineField({
      name: 'role',
      title: 'Role',
      description: 'Select the type of role this person has',
      type: 'string',
      options: {
        list: [
          { title: 'Author', value: 'author' },
          { title: 'Policy Manager', value: 'manager' },
        ],
      },
    }),
    ...authorFields,
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
    prepare({ title = 'No title', media }) {
      return {
        title,
        media: media ?? getIcon('personDoc'),
      }
    },
  },
})
