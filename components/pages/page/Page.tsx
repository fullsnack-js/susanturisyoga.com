import Schedule from 'components/shared/Calendar'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'
import Head from 'next/head'
import type { PagePayload, SettingsPayload } from 'types'

import { PageContentRenderer } from '../../shared/PageContentRenderer'
import PageHead from './PageHead'

export interface PageProps {
  page: PagePayload | undefined
  settings: SettingsPayload | undefined
  homePageTitle: string | undefined
  preview?: boolean
}

export function Page({ page, settings, homePageTitle, preview }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { pageContent, coverImage, subtitle, title } = page || {}

  return (
    <>
      <Head>
        <PageHead page={page} settings={settings} title={homePageTitle} />
      </Head>

      <Layout settings={settings} preview={preview}>
        <div>
          <div className="mb-14">
            {/* {coverImage && (
              <ImageBox
                image={coverImage.image}
                alt={coverImage.alt || 'Timeline item icon'}
                size="10vw"
                width={65}
                height={65}
              />
            )} */}
            {/* Header */}
            <Header centered title={title} subtitle={subtitle} />
            {page.slug == 'schedule' && <Schedule />}
            {/* Body */}
            {pageContent && PageContentRenderer(pageContent)}

            {/* Workaround: scroll to top on route change */}
            <ScrollUp />
          </div>
          <div className="absolute left-0 w-screen border-t" />
        </div>
      </Layout>
    </>
  )
}
