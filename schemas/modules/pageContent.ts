import { defineArrayMember, defineField } from 'sanity'

import { getIcon } from '../utils/get-icon'
import { faqsSection } from './questions-and-answers-section'
import { scheduleSection } from './schedule-section'

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
    defineField(scheduleSection),
    defineField(faqsSection),
    defineField(formSection),
  ],
})
