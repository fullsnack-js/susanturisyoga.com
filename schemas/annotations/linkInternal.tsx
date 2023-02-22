import {LinkIcon} from '@sanity/icons'
import {Rule} from 'sanity'

export default {
  title: 'Internal Link',
  name: 'annotationLinkInternal',
  type: 'object',
  icon: () => <LinkIcon />,
  component: ({children}: {children: React.ReactElement}) => (
    <span>
      <LinkIcon
        style={{
          marginLeft: '0.05em',
          marginRight: '0.1em',
          width: '0.75em',
        }}
      />
      {children}
    </span>
  ),
  fields: [
    // Reference
    {
      name: 'reference',
      type: 'reference',
      weak: true,
      validation: (Rule: Rule) => Rule.required(),
      to: [{type: 'page'}, {type: 'policy'}],
    },
  ],
}
