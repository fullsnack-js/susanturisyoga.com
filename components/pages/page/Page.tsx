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
          {/* <div className="absolute left-0 w-screen border-t" /> */}
        </div>

        <div className="mt-12 border-t border-gray-900/10 pb-6 pt-6 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-56 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <hr />
      </Layout>
    </>
  )
}
