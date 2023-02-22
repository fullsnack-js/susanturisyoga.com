import { Rule } from 'sanity'

import { policyContact } from '../fields/policyContact'
import { getIcon } from '../utils/get-icon'

export const policy = {
  name: 'policy',
  type: 'document',
  title: 'Legal Terms & Agreements',
  icon: getIcon('legal'),
  __experimental_actions: [/**/ 'create', 'delete', 'update', 'publish'],
  initialValue: () => ({
    last_modified: new Date().toISOString(),
  }),

  fields: [
    // {
    //   title: 'Icon',
    //   name: 'icon',
    //   type: 'iconPicker',
    //   validation: (rule: Rule) => rule.required(),
    // },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },

    {
      name: 'content',
      title: 'Content',
      type: 'portableTextSimple',
      validation: (rule: Rule) => rule.required(),
    },
    policyContact,
    {
      name: 'last_modified',
      title: 'Date Modified',
      type: 'datetime',
      validation: (rule: Rule) =>
        rule
          .required()
          .warning('Must provide the most recent modification date.'),
    },
  ],
  preview: {
    select: {
      icon: 'icon',
      title: 'title',
    },
    prepare(selection: Record<string, any>) {
      const { title, icon } = selection
      return {
        title,
        // media: preview(icon),
      }
    },
  },
}
