import type {ReactElement} from 'react'
import {EnvelopeIcon} from '@sanity/icons'

export default {
  title: 'Email link',
  name: 'annotationLinkEmail',
  type: 'object',
  icon: () => <EnvelopeIcon />,
  component: ({children}: {children: ReactElement}) => (
    <span>
      <EnvelopeIcon
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
    // Email
    {
      title: 'Email',
      name: 'email',
      type: 'email',
    },
  ],
}
