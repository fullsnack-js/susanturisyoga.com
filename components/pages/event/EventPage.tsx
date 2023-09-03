import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import ScrollUp from 'components/shared/ScrollUp'
import Head from 'next/head'
import Link from 'next/link'
import type { EventPayload, SettingsPayload } from 'types'

import Layout from '../../shared/Layout'
import EventPageHead from './EventPageHead'

export interface EventPageProps {
  event: EventPayload
  settings: SettingsPayload | undefined
  homePageTitle: string | undefined
  preview?: boolean
}

export function EventPage({
  event,
  settings,
  homePageTitle,
  preview,
}: EventPageProps) {


  return (
    <>
      <Head>
        <EventPageHead title={homePageTitle} />
      </Head>

      <Layout settings={settings} preview={preview}>
       
          <div className="mb-20 space-y-6">
            {/* Header */}
            {/* <Header title={homePageTitle} description={'sdsdgd'} /> */}

            <div className="rounded-md border">
         {JSON.stringify(event, null, 2)}
            {/* Workaround: scroll to top on route change */}
            <ScrollUp />
          </div>
          <div className="absolute left-0 w-screen border-t" />
        </div>
      </Layout>
    </>
  )
}
