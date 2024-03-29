import { groq } from 'next-sanity'

const figureQuery = `
_type, alt, caption, "image":image {...,
					asset->
        }
`
const ctaQuery = `text, kind, "slug": reference->slug.current, url`
const pageContentQuery = `
...,
_type == 'figure' => {${figureQuery}}, _type == 'cta' => {${ctaQuery}}, _type == 'richText' => {...,}, type == 'imageWithText' => {...,}, _type == 'scheduleSection' => {classes[]->{...,}}`
export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    footer,
    overview,
    pageContent{${pageContentQuery}},
    pageHero{${figureQuery}},
    landingCta{${ctaQuery}},
    showcaseEvents[]->{
      _type,
      coverImage,
      overview,
      description,
      site,
      "slug": slug.current,
      tags,
      title,
      eventDuration{start,end},
      "classType": setting.classType,
    "registerUrl": setting.registerUrl,
    "venue": setting.venue->,
    subtitle,
    },
    title,
    seo->
  }
`


export const classesQuery= groq`
  *[_type=="class"]{
    _id,
    "weekday": day,
    "time": duration,
    title,
    level,
    description,
    "classType": setting.classType,
    "registerUrl": setting.registerUrl,
    "venue": setting.venue->,
  }
`
export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    subtitle,
     pageContent,
    seo->,
    coverImage {${figureQuery}},
    title,
    "slug": slug.current,
  }
`

export const pagePaths = groq`
  *[_type == "page" && slug.current != null].slug.current
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    seo,
    ogImage,
  }
`

export const eventBySlugQuery = groq`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`

export const eventPaths = groq`
  *[_type == "event" && slug.current != null].slug.current
`
