import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import HookForm from 'components/shared/Form'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import Layout from 'components/shared/Layout'
import Newsletter from 'components/shared/NewsletterTile'
import { PageContentRenderer } from 'components/shared/PageContentRenderer'
import Schedule from 'components/shared/Schedule'
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
  console.log({ image: pageHero.image.asset })
  return (
    <>
      <Head>
        <HomePageHead page={page} settings={settings} />
      </Head>

      <Layout home settings={settings} preview={preview}>
        <div className="-mt-20 mx-auto w-full space-y-6">
          {/* Header */}
          <div className="w-full container  flex flex-col sm:flex-row items-center pb-4 sm:justify-center sm:space-x-4 sm:pb-4 md:mb-6 h-[90vh] md:px-10 md:pb-8 lg:px-12 lg:pb-10 xl:px-14">
            {pageHero && (
              <div className="w-full justify-center sm:w-1/2 md:h-3/5 drop-shadow-xl px-4">
                <Image
                  {...imageProps}
                  alt={pageHero.alt}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    objectPosition: 'bottom',
                  }}
                  sizes="(max-width: 300px) 100vw, 300px"
                  placeholder="blur"
                  blurDataURL={pageHero.image.asset.metadata.lqip}
                />
              </div>
            )}
            <div className="w-full bg-indigo-200/50 p-2 sm:relative sm:w-1/2 sm:bg-inherit md:h-3/5">
              <div className="text-3xl font-extrabold tracking-tight md:text-4xl">
                {title}
              </div>

              {overview && (
                <div className="text-md px-4 mt-4 font-serif text-gray-600 md:text-lg ">
                  <CustomPortableText value={overview} />
                </div>
              )}
              <div className="flex max-w-md gap-x-4 p-4">
                <button
                  type="submit"
                  className="flex-none rounded-md bg-cyan-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                ><Link href="/schedule">
                  Take A Class &rarr;</Link>
                </button>
                <button
                  type="submit"
                  className="flex-none rounded-md bg-cyan-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                 <Link href="/contact">Contact</Link> 
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 sm:pt-0 container px-4 pb-6">
            {' '}
            <Schedule />
            {pageContent && PageContentRenderer(pageContent)}
          </div>
          {/* Workaround: scroll to top on route change */}

          <ScrollUp />
        </div>
      </Layout>
    </>
  )
}
