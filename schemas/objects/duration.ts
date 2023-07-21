import { MdTimelapse } from 'react-icons/md'
import { defineField, defineType } from 'sanity'

import { timeList12h, verifyRange } from '../utils/time-range.utils'
import { DurationInput } from 'schemas/utils/DurationInput'

export const duration = defineType({
  name: 'duration',
  title: 'Duration',
  type: 'object',
  icon: MdTimelapse,
  validation: (Rule) => Rule.custom(verifyRange),
  fields: [
    defineField({
      title: 'Start time',
      name: 'start',
      type: 'timeValue',
      initialValue: timeList12h[10].value,
      options: {
        list: timeList12h,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'End Time',
      name: 'end',
      type: 'string',
      initialValue: timeList12h[16].value,
      options: {
        list: timeList12h,
      },
      validation: (Rule) => Rule.required(),
    }),
    
  ],
  components: {input: DurationInput},
  options: {columns:2},
 
})
