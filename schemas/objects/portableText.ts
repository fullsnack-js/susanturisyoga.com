import { defineArrayMember, defineType } from 'sanity'

import linkEmail from '../annotations/linkEmail'
import linkExternal from '../annotations/linkExternal'
import linkInternal from '../annotations/linkInternal'
import { highlightMarker } from '../utils/custom-block-text'

export const portableText = defineType({
  name: 'portableText',
  title: 'Portable Text',
  type: 'array',
  of: [
    {
      name: 'Block',
      type: 'block',
      styles: [
        { title: 'Paragraph', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
        {
          title: 'Pre',
          value: 'pre',
          // blockEditor: {
          //   render: CodeRender,
          // },
        },
      ],
      lists: [
        { title: 'Bulleted List', value: 'bullet' },
        { title: 'Numbered List', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike-Through', value: 'strike-through' },
          highlightMarker,
        ],

        annotations: [linkExternal, linkInternal, linkEmail],
      },
    },
    // {type: 'attachment'},
    {
      type: 'figure',
    },
  ],
})
