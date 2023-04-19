import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import Schedule from 'components/shared/Calendar'
import { CustomPortableText } from 'components/shared/CustomPortableText'
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
  console.log({ image: pageHero.image.asset })
  return (
    <>
      <Head>
        <HomePageHead page={page} settings={settings} />
      </Head>

      <Layout home settings={settings} preview={preview}>
        <div className="mx-auto -mt-20 w-full space-y-8">
          {/* Header */}
          <div className="container flex w-full flex-col items-center pb-4 sm:flex-row  sm:justify-between sm:space-x-4 sm:pb-4 md:mb-12 md:h-[75vh] md:px-10 md:pb-8 lg:px-12 lg:pb-10 xl:px-14">
            {pageHero && (
              <div className="w-full px-4 drop-shadow-xl sm:w-1/2 md:h-3/5">
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
            <div className="absolute bottom-0 w-full bg-indigo-200/75 px-4 sm:relative sm:w-1/2 sm:bg-inherit md:h-3/5">
              <div className="text-3xl font-extrabold tracking-tight md:text-4xl">
                {title}
              </div>

              {overview && (
                <div className="text-md mt-4 font-serif text-gray-600 md:text-lg ">
                  <CustomPortableText value={overview} />
                </div>
              )}
              <div className="flex max-w-md gap-x-4 p-4">
                <button
                  type="submit"
                  className="flex-none rounded-md bg-cyan-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Take A Class {'->'}
                </button>
                <button
                  type="submit"
                  className="flex-none rounded-md bg-cyan-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>

          <div className="pt:0 container px-4 pb-6">
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
