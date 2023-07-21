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
import type { HomePagePayload, YogaClass } from 'types'
import { SettingsPayload } from 'types'

import HomePageHead from './HomePageHead'





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
  const timetable = [
    {
      time: {
        _type: "timeRange",
        start: "14:15",
        end: "15:30"
      },
      title: "General/ Level 1",
      level: "1",
      classType: "hybrid",
      venue: {
        _type: "venue",
        name: "Iyengar Yoga Institute of New York",
        description: [
          {
            _key: "1e6983cbe3c5",
            markDefs: [],
            children: [
              {
                text: "https://iyengarnyc.org/association-institutes/mission/",
                _key: "652c1641bdb60",
                _type: "span",
                marks: []
              }
            ],
            _type: "block",
            style: "normal"
          }
        ],
        _id: "4565293b-6078-4058-828d-130476f7990c",
        _updatedAt: "2023-07-08T09:46:08Z",
        url: "https://www.iyengarnyc.org",
        address: {
          other: "2nd Floor",
          city: "New York",
          street: "227 West 13th Street",
          postalCode: "10011",
          state: "NY",
          country: "USA"
        },
        _rev: "8bWJNLsfg5fFtWbhrTAvBU",
        _createdAt: "2023-07-08T09:46:08Z"
      },
      _id: "2229ac97-524a-4ec5-a2a1-69a5dd02345e",
      weekday: "tuesday",
      description: "This class is accessible for students new to Iyengar Yoga, continuing beginners and students who want to focus on the foundation of the practice. Focus on fundamental postures and actions within standing poses, seated poses, twists, and forward bending. Inversions such as Halasana (plow pose) and Sarvangasana (shoulder stand) are introduced and refined.",
      registerUrl: "https://iyengarnyc.org/association-institutes/online-classes/"
    },
    {
      _id: "4cb7d7c3-0096-48da-8d8c-2adf36233309",
      weekday: "saturday",
      time: {
        start: "14:15",
        end: "15:30",
        _type: "timeRange"
      },
      title: "General/ Level 1",
      venue: {
        _createdAt: "2023-07-08T09:46:08Z",
        _rev: "8bWJNLsfg5fFtWbhrTAvBU",
        address: {
          other: "2nd Floor",
          city: "New York",
          street: "227 West 13th Street",
          postalCode: "10011",
          state: "NY",
          country: "USA"
        },
        _type: "venue",
        name: "Iyengar Yoga Institute of New York",
        description: [
          {
            children: [
              {
                text: "https://iyengarnyc.org/association-institutes/mission/",
                _key: "652c1641bdb60",
                _type: "span",
                marks: []
              }
            ],
            _type: "block",
            style: "normal",
            _key: "1e6983cbe3c5",
            markDefs: []
          }
        ],
        _id: "4565293b-6078-4058-828d-130476f7990c",
        _updatedAt: "2023-07-08T09:46:08Z",
        url: "https://www.iyengarnyc.org"
      },
      level: "1",
      description: "This class is accessible for students new to Iyengar Yoga, continuing beginners and students who want to focus on the foundation of the practice. Focus on fundamental postures and actions within standing poses, seated poses, twists, and forward bending. Inversions such as Halasana (plow pose) and Sarvangasana (shoulder stand) are introduced and refined.",
      classType: "hybrid",
      registerUrl: "https://zoom.org/2"
    },
    {
      classType: "online",
      registerUrl: "https://iyengarnyc.org/association-institutes/online-classes/",
      _id: "8ba49036-a92a-4bb6-a17f-9ec7fe25ffc6",
      time: {
        start: "10:00",
        end: "11:30",
        _type: "timeRange"
      },
      level: "2",
      description: "Once the basic foundation is learned, Level 1 standing poses are deeply familiar and Sarvangasana can be held for at least 5 minutes, students move onto Level 2. This includes, refines and expands upon what was taught in Level 1. Sirsasana (headstand), Full Arm Balance, and Backbends are all introduced. Deeper twistings and forward extensions and variations in the familiar Shoulderstand are explored.",
      venue: null,
      weekday: "monday",
      title: "General/ Level 2"
    },
    {
      title: "General",
      description: "For all students. Sign up via email",
      classType: "online",
      level: "General",
      registerUrl: "https://zoom.com",
      venue: null,
      _id: "95de4c45-19cd-4c19-9eb5-03b5ca7d4b92",
      weekday: "wednesday",
      time: {
        _type: "timeRange",
        start: "18:00",
        end: "19:30"
      }
    },
    {
      _id: "b2e582b9-5132-446c-a6d0-30cdd1120ce2",
      weekday: "wednesday",
      level: "1",
      description: "For continuing Iyengar students deeply familiar with standing poses and can hold Sarvangasana for at least 5 minutes. Level 2 builds upon and expandsThis class is accessible for students new to Iyengar Yoga, continuing beginners and students who want to focus on the foundation of the practice. Focus on fundamental postures and actions within standing poses, seated poses, twists, and forward bending. Inversions such as Halasana (plow pose) and Sarvangasana (shoulder stand) are introduced and refined. the teachings of Level 1. Classes emphasize awareness in action and incorporate Sanskrit names and philosophy terms. Pranayama, which is the study of the breathing process, is also introduced. Level 2 introduces new postures such as Sirsasana (headstand), Full Arm Balance, and Backbends, as well as deeper twists, forward extensions, and variations in the familiar Shoulderstand.",
      classType: "hybrid",
      registerUrl: "https://iyengarnyc.org/association-institutes/online-classes/",
      time: {
        _type: "timeRange",
        start: "10:15",
        end: "11:45"
      },
      title: "Beginner/ Level 1",
      venue: null
    },
    {
      venue: null,
      _id: "b2f8e0f0-5359-4ba2-8cd6-5482b97fbf48",
      weekday: "thursday",
      time: {
        _type: "timeRange",
        start: "11:30",
        end: "13:00"
      },
      title: "General",
      classType: "online",
      registerUrl: "https://zoom.com",
      level: "General",
      description: "For all students. Sign up via contact form."
    },
    {
      venue: {
        _createdAt: "2023-07-08T09:46:08Z",
        _rev: "8bWJNLsfg5fFtWbhrTAvBU",
        name: "Iyengar Yoga Institute of New York",
        description: [
          {
            markDefs: [],
            children: [
              {
                text: "https://iyengarnyc.org/association-institutes/mission/",
                _key: "652c1641bdb60",
                _type: "span",
                marks: []
              }
            ],
            _type: "block",
            style: "normal",
            _key: "1e6983cbe3c5"
          }
        ],
        _id: "4565293b-6078-4058-828d-130476f7990c",
        _updatedAt: "2023-07-08T09:46:08Z",
        url: "https://www.iyengarnyc.org",
        address: {
          country: "USA",
          other: "2nd Floor",
          city: "New York",
          street: "227 West 13th Street",
          postalCode: "10011",
          state: "NY"
        },
        _type: "venue"
      },
      _id: "c099e10a-d26c-4127-b5e8-5dec8a75423b",
      time: {
        _type: "timeRange",
        start: "08:15",
        end: "09:45"
      },
      title: "General/ Level 2",
      level: "2",
      description: "Once the basic foundation is learned, Level 1 standing poses are deeply familiar and Sarvangasana can be held for at least 5 minutes, students move onto Level 2. This includes, refines and expands upon what was taught in Level 1. Sirsasana (headstand), Full Arm Balance, and Backbends are all introduced. Deeper twistings and forward extensions and variations in the familiar Shoulderstand are explored.",
      weekday: "wednesday",
      classType: "hybrid",
      registerUrl: "https://iyengarnyc.org/association-institutes/online-classes/"
    },
    {
      level: "Free",
      description: null,
      weekday: "friday",
      time: {
        _type: "timeRange",
        start: "14:15",
        end: "15:45"
      },
      title: "Sutra Study",
      venue: null,
      _id: "e31185b1-f817-487f-baa6-d4957307c329",
      classType: "online",
      registerUrl: "https://zoom.com"
    }
  ]
 
  let groups = Timetable(classes)

console.log({group:groups})
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
              <div className="w-full -z-5s0 justify-center sm:w-1/2 md:h-3/5 drop-shadow-xl px-4">
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
            <div className="w-full bg-sky-200/[.9] -mt-8 sm:mt-0 z-[999] p-2 sm:relative sm:w-1/2 sm:bg-inherit md:h-3/5">
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
                  className="flex-none rounded-md bg-yellow-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                ><Link href="/schedule">
                  Take A Class &rarr;</Link>
                </button>
                <button
                  type="submit"
                  className="flex-none rounded-md bg-yellow-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-50"
                >
                 <Link href="/contact">Contact</Link> 
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 sm:pt-0 container px-4 pb-6">
            {' '}
            {/* <Schedule /> */}
            <WeekSchedule {...groups}/>
            {pageContent && PageContentRenderer(pageContent)}
          </div>
          {/* Workaround: scroll to top on route change */}

          <ScrollUp />
        </div>
      </Layout>
    </>
  )
}
function Timetable(classes: YogaClass[]) {


  let groups = groupBy(classes.sort(function sortByDay(a, b) {
    let day1 = +a.weekday
    let day2 = +b.weekday
    return day1 - day2
  }), 'weekday')
  return groups
}
function groupBy(arr, property) {
  return arr.reduce(function (memo, x) {
    if (!memo[x[property]]) { memo[x[property]] = []} 
    memo[x[property]].push(x)
    return memo
  }, {})
};
const sortedTimetable = { "monday": [ { "_id": "8ba49036-a92a-4bb6-a17f-9ec7fe25ffc6", "description": "Once the basic foundation is learned, Level 1 standing poses are deeply familiar and Sarvangasana can be held for at least 5 minutes, students move onto Level 2. This includes, refines and expands upon what was taught in Level 1. Sirsasana (headstand), Full Arm Balance, and Backbends are all introduced. Deeper twistings and forward extensions and variations in the familiar Shoulderstand are explored.", "registerUrl": "https://iyengarnyc.org/association-institutes/online-classes/", "venue": null, "weekday": "monday", "time": { "_type": "timeRange", "start": "10:00", "end": "11:30" }, "title": "General/ Level 2", "level": "2", "classType": "online" } ], "tuesday": [ { "_id": "2229ac97-524a-4ec5-a2a1-69a5dd02345e", "weekday": "tuesday", "title": "General/ Level 1", "description": "This class is accessible for students new to Iyengar Yoga, continuing beginners and students who want to focus on the foundation of the practice. Focus on fundamental postures and actions within standing poses, seated poses, twists, and forward bending. Inversions such as Halasana (plow pose) and Sarvangasana (shoulder stand) are introduced and refined.", "registerUrl": "https://iyengarnyc.org/association-institutes/online-classes/", "venue": { "_createdAt": "2023-07-08T09:46:08Z", "_rev": "8bWJNLsfg5fFtWbhrTAvBU", "_type": "venue", "description": [ { "_type": "block", "style": "normal", "_key": "1e6983cbe3c5", "markDefs": [], "children": [ { "_type": "span", "marks": [], "text": "https://iyengarnyc.org/association-institutes/mission/", "_key": "652c1641bdb60" } ] } ], "_id": "4565293b-6078-4058-828d-130476f7990c", "address": { "country": "USA", "other": "2nd Floor", "city": "New York", "street": "227 West 13th Street", "postalCode": "10011", "state": "NY" }, "_updatedAt": "2023-07-08T09:46:08Z", "url": "https://www.iyengarnyc.org", "name": "Iyengar Yoga Institute of New York" }, "time": { "_type": "timeRange", "start": "14:15", "end": "15:30" }, "level": "1", "classType": "hybrid" }, { "title": "General", "level": "General", "description": "For all students. Sign up via contact form.", "classType": "online", "_id": "816cf09a-5e79-4386-8f82-5525b9a734fe", "weekday": "tuesday", "time": { "_type": "timeRange", "start": "11:30", "end": "13:00" }, "registerUrl": "https://zoom.com", "venue": null } ], "wednesday": [ { "title": "General", "level": "General", "description": "For all students. Sign up via email", "classType": "online", "registerUrl": "https://zoom.com", "venue": null, "_id": "95de4c45-19cd-4c19-9eb5-03b5ca7d4b92", "weekday": "wednesday", "time": { "_type": "timeRange", "start": "18:00", "end": "19:30" } }, { "weekday": "wednesday", "time": { "_type": "timeRange", "start": "10:15", "end": "11:45" }, "title": "Beginner/ Level 1", "description": "For continuing Iyengar students deeply familiar with standing poses and can hold Sarvangasana for at least 5 minutes. Level 2 builds upon and expandsThis class is accessible for students new to Iyengar Yoga, continuing beginners and students who want to focus on the foundation of the practice. Focus on fundamental postures and actions within standing poses, seated poses, twists, and forward bending. Inversions such as Halasana (plow pose) and Sarvangasana (shoulder stand) are introduced and refined. the teachings of Level 1. Classes emphasize awareness in action and incorporate Sanskrit names and philosophy terms. Pranayama, which is the study of the breathing process, is also introduced. Level 2 introduces new postures such as Sirsasana (headstand), Full Arm Balance, and Backbends, as well as deeper twists, forward extensions, and variations in the familiar Shoulderstand.", "registerUrl": "https://iyengarnyc.org/association-institutes/online-classes/", "_id": "b2e582b9-5132-446c-a6d0-30cdd1120ce2", "level": "1", "classType": "hybrid", "venue": null }, { "description": "Once the basic foundation is learned, Level 1 standing poses are deeply familiar and Sarvangasana can be held for at least 5 minutes, students move onto Level 2. This includes, refines and expands upon what was taught in Level 1. Sirsasana (headstand), Full Arm Balance, and Backbends are all introduced. Deeper twistings and forward extensions and variations in the familiar Shoulderstand are explored.", "registerUrl": "https://iyengarnyc.org/association-institutes/online-classes/", "venue": { "address": { "street": "227 West 13th Street", "postalCode": "10011", "state": "NY", "country": "USA", "other": "2nd Floor", "city": "New York" }, "_createdAt": "2023-07-08T09:46:08Z", "_rev": "8bWJNLsfg5fFtWbhrTAvBU", "_type": "venue", "description": [ { "markDefs": [], "children": [ { "_type": "span", "marks": [], "text": "https://iyengarnyc.org/association-institutes/mission/", "_key": "652c1641bdb60" } ], "_type": "block", "style": "normal", "_key": "1e6983cbe3c5" } ], "_id": "4565293b-6078-4058-828d-130476f7990c", "name": "Iyengar Yoga Institute of New York", "_updatedAt": "2023-07-08T09:46:08Z", "url": "https://www.iyengarnyc.org" }, "title": "General/ Level 2", "level": "2", "classType": "hybrid", "_id": "c099e10a-d26c-4127-b5e8-5dec8a75423b", "weekday": "wednesday", "time": { "end": "09:45", "_type": "timeRange", "start": "08:15" } } ], "thursday": [ { "time": { "_type": "timeRange", "start": "11:30", "end": "13:00" }, "registerUrl": "https://zoom.com", "venue": null, "description": "For all students. Sign up via contact form.", "classType": "online", "_id": "b2f8e0f0-5359-4ba2-8cd6-5482b97fbf48", "weekday": "thursday", "title": "General", "level": "General" } ], "friday": [ { "_id": "a8270ef5-a855-4068-8bc8-45f3af114b64", "weekday": "friday", "description": "For all students. Sign up via contact form.", "classType": "online", "registerUrl": "https://zoom.com", "venue": null, "time": { "_type": "timeRange", "start": "11:30", "end": "13:00" }, "title": "General", "level": "General" }, { "time": { "_type": "timeRange", "start": "14:15", "end": "15:45" }, "title": "Sutra Study", "description": null, "classType": "online", "_id": "e31185b1-f817-487f-baa6-d4957307c329", "weekday": "friday", "level": "Free", "registerUrl": "https://zoom.com", "venue": null } ], "saturday": [ { "venue": { "name": "Iyengar Yoga Institute of New York", "_updatedAt": "2023-07-08T09:46:08Z", "url": "https://www.iyengarnyc.org", "_type": "venue", "description": [ { "markDefs": [], "children": [ { "_type": "span", "marks": [], "text": "https://iyengarnyc.org/association-institutes/mission/", "_key": "652c1641bdb60" } ], "_type": "block", "style": "normal", "_key": "1e6983cbe3c5" } ], "_id": "4565293b-6078-4058-828d-130476f7990c", "address": { "country": "USA", "other": "2nd Floor", "city": "New York", "street": "227 West 13th Street", "postalCode": "10011", "state": "NY" }, "_createdAt": "2023-07-08T09:46:08Z", "_rev": "8bWJNLsfg5fFtWbhrTAvBU" }, "level": "1", "description": "This class is accessible for students new to Iyengar Yoga, continuing beginners and students who want to focus on the foundation of the practice. Focus on fundamental postures and actions within standing poses, seated poses, twists, and forward bending. Inversions such as Halasana (plow pose) and Sarvangasana (shoulder stand) are introduced and refined.", "classType": "hybrid", "registerUrl": "https://zoom.org/2", "_id": "4cb7d7c3-0096-48da-8d8c-2adf36233309", "weekday": "saturday", "time": { "_type": "timeRange", "start": "14:15", "end": "15:30" }, "title": "General/ Level 1" } ] }
export type SortedTimetable = typeof sortedTimetable
function ClassList (timetable: SortedTimetable) {
  console.log(typeof timetable)
  const list = Object.entries(timetable)
  const sorter = {
    0:"sunday", // << if sunday is first day of week
    1:"monday",
    2:"tuesday",
    3: "wednesday",
    4:"thursday",
    5: "friday",
    6:"saturday"
  }
  return(<>
  {list.map((el, idx) => (
      <div>
      <h2>{sorter[el[0]].toUpperCase()}</h2>
      {el[1].sort(function sortByTime(a, b) {
      let class1 = +a.time.start.split(':')[0]
      let class2 = +b.time.start.split(':')[0]
      return class1 - class2
    }).map((yogaClass, idx) => (
<div key={yogaClass._id}>
  
  <h5>{convertTime({startTime: yogaClass.time.start, endTime: yogaClass.time.end})}</h5>
  <h5>{yogaClass.title}</h5>
  {/* <h6>{yogaClass.level}</h6> */}
  <h6>{yogaClass.classType.toUpperCase()}</h6>
  <button className='p-4 bg-indigo-200 text-white'><a href={yogaClass.registerUrl}>Sign Up &rarr;</a></button>
</div>
      ))}
      </div>
    )
    )}</>)
  }
  function convertTime({startTime, endTime}) {
    
    let startingHour = startTime.split(':')[0];
    let endingHour = endTime.split(':')[0];
    const startingMinute = startTime.split(':')[1]
    const endingMinute = endTime.split(':')[1]
    if (startingHour > 12) {
      startingHour -= 12;
    }
    if (endingHour > 12) {
      endingHour -= 12;
    }
    let startingTime = `${startingHour}:${startingMinute}`;
    let endingTime = `${endingHour}:${endingMinute}`;;
    

    const startingTimeString = `${startingTime}${
      +startTime.split(':')[0] < 12 ? 'am' : 'pm'
    }`;
    const endingTimeString = `${endingTime}${
      +endTime.split(':')[0] < 12 ? 'am' : 'pm'
    }`;
    return `${startingTimeString}-${endingTimeString} EST`;
  }

  import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const people = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]

function WeekSchedule(timetable: SortedTimetable) {
  console.log(typeof timetable)
  const list = Object.entries(timetable)
  const sorter = {
    0:"sunday", // << if sunday is first day of week
    1:"monday",
    2:"tuesday",
    3: "wednesday",
    4:"thursday",
    5: "friday",
    6:"saturday"
  }
  return(
    <ul role="list" className="flex flex-start flex-col sm:flex-row sm:flex-wrap">
  {list.map((el, idx) => (
     <li className="divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
      <div className="flex flex-1 flex-col p-4">
      <h3 className="mt-6 text-sm font-medium text-gray-900">{sorter[el[0]].toUpperCase()}</h3>
      {el[1].sort(function sortByTime(a, b) {
      let class1 = +a.time.start.split(':')[0]
      let class2 = +b.time.start.split(':')[0]
      return class1 - class2
    }).map((yogaClass, idx) => (
<dl className="mt-1 flex flex-grow flex-col justify-between" key={yogaClass._id}>
  
  <dt className="sr-only">Time</dt>
              <dd className="text-sm text-gray-500">{convertTime({startTime: yogaClass.time.start, endTime: yogaClass.time.end})}</dd>
              <dt className="sr-only">Class Title</dt>
              <dd className="text-sm text-gray-500">{yogaClass.title.toUpperCase()}</dd>
              <dt className="sr-only">Class Type</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                {yogaClass.classType.toUpperCase()}
                </span>
              </dd>

  <button className='p-4 bg-indigo-200 text-white'><a href={yogaClass.registerUrl}>Sign Up &rarr;</a></button>
</dl>

      ))}</div></li>))} 
      </ul>
    )
    }
  
{/*    
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
            <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{person.title}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {person.role}
                </span>
              </dd>
            </dl>
          </div>
        
          </div>
        </li>
      ))}
    </ul>
  )
} */}
