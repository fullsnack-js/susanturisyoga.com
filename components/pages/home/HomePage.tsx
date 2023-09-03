import { ProjectListItem } from 'components/pages/home/EventListItem'
import { CustomPortableText } from 'components/shared/CustomPortableText'
// import HookForm from 'components/shared/Form'
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
import type { HomePagePayload, YogaClass } from 'types'
import { SettingsPayload } from 'types'

import HomePageHead from './HomePageHead'
import WeekSchedule from 'components/shared/Schedule'





export interface HomePageProps {
  settings?: SettingsPayload
  page?: HomePagePayload
  classes?: YogaClass[]
  preview?: boolean
}
//const imageUrl = image && urlForImage(image)?.height(height).width(width).fit('crop').url()
export function HomePage({ page, settings, classes, preview }: HomePageProps) {
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
          <div className="w-full sm:-mt-20 container mb-60 sm:mb-10 md:mb-8 flex flex-col sm:flex-row items-center pb-0 sm:justify-center sm:space-x-4 sm:pb-4 md:mb-6 h-[90vh] md:px-10 md:pb-0 lg:px-12 lg:pb-32 xl:px-14">
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
            <div className="w-full bg-brand-200/[.9] -mt-8 sm:mt-0 z-[8] p-2 sm:relative sm:w-1/2 sm:bg-inherit md:h-3/5">
              <div className="text-3xl sm:-mt-6 
              md:-mt-4 lg:mt-0 font-extrabold tracking-tight md:text-4xl">
                {title}
              </div>

              {overview && (
                <div className="text-sm px-4 mt-4 font-sans text-gray-700 lg:text-lg ">
                  <CustomPortableText value={overview} />
                </div>
              )}
              <div className="flex max-w-md gap-x-4 p-4">
                <button
                  type="submit"
                  className="flex-none rounded-md bg-emerald-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                ><Link href="/schedule">
                  Take A Class &rarr;</Link>
                </button>
                <button
                  type="submit"
                  className="flex-none rounded-md bg-emerald-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                >
                 <Link href="/contact">Contact</Link> 
                </button>
              </div>
            </div>
          </div>

          <div className="mt-72 sm:mt-8 md:mt-12 container sm:px-4 pb-6">
            {' '}
            {/* <Schedule /> */}
            <div className='p-4'>
              <h2 className="p-4 pb-6 text-center text-2xl font-bold">Schedule</h2>
                    <WeekSchedule classes={classes}/></div>
    
            {pageContent && PageContentRenderer(pageContent)}
          </div>
          {/* Workaround: scroll to top on route change */}

          <ScrollUp />
        </div>
      </Layout>
    </>
  )
}
