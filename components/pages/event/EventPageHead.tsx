import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { EventPayload } from 'types'

export interface EventPageHeadProps {
  event?: EventPayload | undefined
  title: string | undefined
}

export default function EventPageHead({
  event,
  title,
}: EventPageHeadProps) {
  return (
    <SiteMeta
      baseTitle={title}
      description={event?.overview ? toPlainText(event.overview) : ''}
      image={event?.coverImage}
      title={event?.title}
    />
  )
}
