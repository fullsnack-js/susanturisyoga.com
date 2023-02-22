import {EarthGlobeIcon} from '@sanity/icons'
import {Rule} from 'sanity'

export default {
  title: 'External Link',
  name: 'annotationLinkExternal',
  type: 'object',
  icon: () => <EarthGlobeIcon />,
  component: ({children}: {children: React.ReactElement}) => (
    <span>
      <EarthGlobeIcon
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
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule: Rule) => Rule.required().uri({scheme: ['http', 'https']}),
    },
    // Open in a new window
    {
      title: 'Open in a new window?',
      name: 'newWindow',
      type: 'boolean',
      initialValue: true,
    },
  ],
}
