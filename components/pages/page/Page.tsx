import Schedule from 'components/shared/Calendar'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'
import Head from 'next/head'
import { useRef, useState } from 'react'
import type { PagePayload, SettingsPayload } from 'types'

// import {BeatLoader} from "react-spinners"
import { PageContentRenderer } from '../../shared/PageContentRenderer'
import PageHead from './PageHead'
import SanityImage from 'components/shared/SanityImage'

export interface PageProps {
  page: PagePayload | undefined
  settings: SettingsPayload | undefined
  homePageTitle: string | undefined
  preview?: boolean
}

export enum Form {
  Initial,
  Loading,
  Success,
  Error
}
export type FormState = {
  state: Form;
  message?:string;
};


export function useSubscribeToNewsletter() {
	const [form, setForm] = useState<FormState>({ state: Form.Initial});
	const inputEl = useRef(null);

  async function subscribe(e) {
    e.preventDefault();
    setForm({ state: Form.Loading });
  
    const res = await fetch(`/api/subscribe`, {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });
    const { error } = await res.json();

    if (error) {
      setForm({
        state: Form.Error,
        message: error
      });
      return;
    }

    inputEl.current.value = '';

    setForm({
      state: Form.Success,
      message: `Success! You've been added to the list!`
    });
  } 
  return { subscribe, inputEl, form };
  }
 

export function Page({ page, settings, homePageTitle, preview }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { pageContent, coverImage, subtitle, title } = page || {}
  // Declare state variables for email, message, status, isLoading, and isSubscribed.
  const { form, subscribe, inputEl } = useSubscribeToNewsletter();




  return (
    <>
      <Head>
        <PageHead page={page} settings={settings} title={homePageTitle} />
      </Head>

      <Layout settings={settings} preview={preview}>
        <div className='mt-4'>
          <div className="mb-14 px-4 md:px-6">
            {coverImage && (
              <div className="flex items-center justify-center">
              <SanityImage
                asset={coverImage.image.asset}
                alt={coverImage.alt || 'Timeline item icon'}
                className={`rounded-md shadow w-full md:w-1/2 h-96 object-cover`}
                width={500}
                // height={350}
              />
              </div>
            )}
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
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0" onSubmit={subscribe}>
            <label htmlFor="email-address" className="sr-only" >
              Email address
            </label>
            <input
            ref={inputEl}
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-56 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            //   onChange={(event) => setEmail(event.target.value)}
            // disabled={isSubscribed}
            />
            <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
              <button
                type="submit"
                // disabled={isSubscribed || isLoading}
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
