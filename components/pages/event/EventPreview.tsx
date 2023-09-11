import { usePreview } from 'lib/sanity.preview'
import { eventBySlugQuery } from 'lib/sanity.queries'
import type { EventPayload } from 'types'

import { EventPage, EventPageProps } from './EventPage'

export default function EventPreview({
  token,
  settings,
  event,
  homePageTitle,
}: {
  token: null | string
} & EventPageProps) {
  const eventPreview: EventPayload = usePreview(token, eventBySlugQuery, {
    slug: event?.slug,
  })

  return (
    <EventPage
      event={eventPreview}
      settings={settings}
      homePageTitle={homePageTitle}
      preview={true}
    />
  )
}
