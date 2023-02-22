import { defineField } from 'sanity'
import { getIcon } from '../utils/get-icon'

export const pageBuilder = defineField({
  title: 'Page Content',
  name: 'pageContent',
  type: 'array',
  icon: getIcon('pageSections'),
  of: [
    { type: 'cta' },
    { type: 'imageWithText' },
    { type: 'content' },
    { type: 'figure' },
  ],
})
