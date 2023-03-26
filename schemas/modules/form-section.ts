import { ClipboardIcon } from '@sanity/icons'
import { defineField } from 'sanity'

export const formSection = {
  name: 'formSection',
  title: 'Form section',
  type: 'object',
  icon: ClipboardIcon,
  fields: [
    defineField({
      name: 'type',
      type: 'string',
      title: 'Form type',
      description: '',
      options: {
        list: [
          { title: 'Contact form', value: 'contact' },
          { title: 'Registration form', value: 'registration' },
          { title: 'Newsletter form', value: 'newsletter' },
        ],
      },
    }),
    defineField({
      name: 'id',
      type: 'string',
      title: 'ID',
      description:
        'ID for connecting the form with an external service (Mailchimp, Hopin, etc.)',
    }),
    defineField({
      name: 'buttonText',
      type: 'string',
      title: 'Button text',
      description: 'Text for the submit button',
      validation: (rule) =>
        rule
          .required()
          .warning('Text is required for the call to action button'),
    }),
    defineField({
      name: 'target',
      type: 'linkExternal',
      title: 'Target Link',
      // description:
      //   'The target of the form. Must beging with "mailto:" or "https://"',
      // validation: (Rule) => Rule.uri({ scheme: ['mailto', 'https'] }),
    }),
    defineField({
      name: 'redirect',
      type: 'reference',
      title: 'Redirect',
      description: 'The page to redirect to after the form has been submitted',
      to: [{ type: 'page' }, { type: 'home' }],
    }),
  ],
}
