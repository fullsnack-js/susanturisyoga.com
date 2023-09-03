import { PreviewSuspense } from '@sanity/preview-kit'
import { EventPage } from 'components/pages/event/EventPage'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import {
  getHomePageTitle,
  getEventBySlug,
  getEventPaths,
  getSettings,
} from 'lib/sanity.client'
import { resolveHref } from 'lib/sanity.links'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { EventPayload, SettingsPayload } from 'types'

const EventPreview = lazy(() => import('components/pages/event/EventPreview'))

interface PageProps {
  event?: EventPayload
  settings?: SettingsPayload
  homePageTitle?: string
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function EventSlugRoute(props: PageProps) {
  const { homePageTitle, settings, event, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <EventPage
              homePageTitle={homePageTitle}
              event={event}
              settings={settings}
              preview={preview}
            />
          </PreviewWrapper>
        }
      >
        <EventPreview
          token={token}
          event={event}
          settings={settings}
          homePageTitle={homePageTitle}
        />
      </PreviewSuspense>
    )
  }

  return (
    <EventPage
      homePageTitle={homePageTitle}
      event={event}
      settings={settings}
      preview={preview}
    />
  )
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx

  const token = previewData.token

  const [settings, event, homePageTitle] = await Promise.all([
    getSettings({ token }),
    getEventBySlug({ token, slug: params.slug }),
    getHomePageTitle({ token }),
  ])

  if (!event) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      event,
      settings,
      homePageTitle,
      preview,
      token: previewData.token ?? null,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getEventPaths()

  return {
    paths: paths?.map((slug) => resolveHref('event', slug)) || [],
    fallback: false,
  }
}
