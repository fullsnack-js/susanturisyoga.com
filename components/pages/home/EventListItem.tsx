import { CustomPortableText } from 'components/shared/CustomPortableText'
import ImageBox from 'components/shared/ImageBox'
import type { ShowcaseEvent } from 'types'
import Image from "next/image"
import { configuredSanityClient } from 'lib/sanity.client'
import { useNextSanityImage } from 'next-sanity-image'
import Link from 'next/link'
import { eventBySlugQuery } from 'lib/sanity.queries'
interface EventProps {
  event: ShowcaseEvent
  odd: number
}



export function EventListItem(props: EventProps) {
  const { event, odd } = props
  const imageProps = useNextSanityImage(configuredSanityClient, event.coverImage)
console.log(imageProps, event.coverImage)
const formatEventDuration = (eventDuration:{start:string;end:string;}) => {
const formatDate = (utcString:string) => new Date(utcString).toString().slice(0,15)
return `${formatDate(eventDuration.start)} - ${formatDate(eventDuration.end)}`
}
console.log({event})
  return (
    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-xl font-semibold leading-7 text-indigo-600">{formatEventDuration(event.eventDuration)}</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {event.title}
        </p>
        <h3 className='text-xl text-indigo-500'>{event.subtitle}</h3>
        <div className='rounded-xl py-4'>
        <Image
        {...imageProps}
        alt={event.coverImage.alt ?? 'susan turis retreat'}  
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          objectPosition: 'bottom',
        }}
        className="w-[72rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
  width={2432}
  height={1442}
        // sizes="(max-width: 300px) 100vw, 300px"
        // placeholder="blur"
        // blurDataURL={event.coverImage.asset.metadata.lqip}
      />

      </div>
        <div className="mt-2 text-lg text-left leading-8 text-gray-600">
          <CustomPortableText value={event.overview}/>
        </div>
      </div>
   
      {/* <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        {/* <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div> */}
      <div className="mx-auto text-center p-4">
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-600 py-2.5 px-3.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                ><a href={event.site}>
                  Sign Up Today! &rarr;</a>
                </button>
                {/* <button
                  type="submit"
                  className="flex-none rounded-md bg-emerald-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                >
                 <Link href={event.slug}>Learn More</Link> 
                </button> */}
              </div>
    </div>
  </div>
  )
}


export function EventListItem2(props: EventProps) {
  const { event, odd } = props
  const imageProps = useNextSanityImage(configuredSanityClient, event.coverImage)
  return (
<div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <TextBox event={event}/>
             
            </div>
          </div>
          <Image
                  {...imageProps}
                  alt={event.coverImage.alt ?? 'susan turis retreat'}  
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    objectPosition: 'bottom',
                  }}
                  className="w-[72rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
                  // sizes="(max-width: 300px) 100vw, 300px"
                  // placeholder="blur"
                  // blurDataURL={event.coverImage.asset.metadata.lqip}
                />
            {/* <img
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt=""
            /> */}
           </div>
      </div>
    </div>
  )
}

export function EventListItem1(props: EventProps) {
  const { event, odd } = props

  return (
    <div
      className={`flex flex-col gap-x-5 p-2 transition hover:bg-gray-50/50 xl:flex-row ${
        odd && 'border-t border-b xl:flex-row-reverse'
      }`}
    >
      <div className="w-full xl:w-9/12">
        <ImageBox
          image={event.coverImage}
          alt={`Cover image from ${event.title}`}
          classesWrapper="relative aspect-[16/9]"
        />
      </div>
      <div className="flex xl:w-1/4">
        <TextBox event={event} />
      </div>
    </div>
  )
}

function TextBox({ event }: { event: ShowcaseEvent }) {
  return (
    <div className="relative mt-2 flex w-full flex-col justify-between p-3 xl:mt-0">
      <div>
        {/* Title */}
        <div className="mb-2 text-xl font-extrabold tracking-tight md:text-2xl">
          {event.title}
        </div>
        {/* Overview  */}
        <div className="font-serif text-gray-500">
          <CustomPortableText value={event.overview} />
        </div>
      </div>
      {/* Tags */}
      <div className="mt-4 flex flex-row gap-x-2">
        {event.tags?.map((tag, key) => (
          <div className="text-sm font-medium lowercase md:text-lg" key={key}>
            #{tag}
          </div>
        ))}
      </div>
    </div>
  )
}
