import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import HookForm from 'components/shared/Form'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import Layout from 'components/shared/Layout'
import Newsletter from 'components/shared/Newsletter'
import { PageContentRenderer } from 'components/shared/PageContentRenderer'
import ScrollUp from 'components/shared/ScrollUp'
import { resolveHref } from 'lib/sanity.links'
import Head from 'next/head'
import Link from 'next/link'
import type { HomePagePayload } from 'types'
import { SettingsPayload } from 'types'

import HomePageHead from './HomePageHead'

export interface HomePageProps {
  settings?: SettingsPayload
  page?: HomePagePayload
  preview?: boolean
}

export function HomePage({ page, settings, preview }: HomePageProps) {
  const { overview, landingCta, pageContent, pageHero, title } = page ?? {}

  return (
    <>
      <Head>
        <HomePageHead page={page} settings={settings} />
      </Head>

      <Layout home settings={settings} preview={preview}>
        <div className="space-y-20">
          {/* Header */}
          {title && <Header centered title={title} subtitle={overview} />}
          {pageHero && (
            <div className="relative w-full h-150">
              <ImageBox
                alt={pageHero.alt}
                image={pageHero.image}
                size={'70vw'}
                width={300}
                height={200}
              />
            </div>
          )}
          {pageContent && PageContentRenderer(pageContent)}
          {/* Workaround: scroll to top on route change */}

          <ScrollUp />
        </div>
      </Layout>
    </>
  )
}
