import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import HookForm from 'components/shared/Form'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import Layout from 'components/shared/Layout'
import Newsletter from 'components/shared/Newsletter'
import { PageContentRenderer } from 'components/shared/PageContentRenderer'
import ScrollUp from 'components/shared/ScrollUp'
import { configuredSanityClient } from 'lib/sanity.client'
import { resolveHref } from 'lib/sanity.links'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useNextSanityImage } from 'next-sanity-image'
import { urlFor } from 'schemas/utils/urlFor'
import type { HomePagePayload } from 'types'
import { SettingsPayload } from 'types'

import HomePageHead from './HomePageHead'

export interface HomePageProps {
  settings?: SettingsPayload
  page?: HomePagePayload
  preview?: boolean
}
//const imageUrl = image && urlForImage(image)?.height(height).width(width).fit('crop').url()
export function HomePage({ page, settings, preview }: HomePageProps) {
  const { overview, landingCta, pageContent, pageHero, title } = page ?? {}
  const imageProps = useNextSanityImage(configuredSanityClient, pageHero.image)
  console.log({ pageHero })
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
            <div className="relative w-full drop-shadow-xl ">
              <Image
                {...imageProps}
                alt={pageHero.alt}
                style={{ width: '100%', height: 'auto' }} // layout="responsive" prior to Next 13.0.0
                sizes="(max-width: 800px) 100vw, 800px"
                placeholder="blur"
                blurDataURL={pageHero.image.asset.metadata.lqip}
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
