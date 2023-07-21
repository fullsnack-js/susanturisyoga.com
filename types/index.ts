import { SanityImageSource } from '@sanity/asset-utils'
import type { Image, ImageMetadata, PortableTextBlock } from 'sanity'
export interface FAQContent {
  title: string
  questions: { question: string; answer: PortableTextBlock[] }[]
}
export type PageContent =
  | CTA
  | ImageWithText
  | Figure
  | PortableTextBlock[]
  | FAQContent | IyengarClass[]

export interface SEO {
  title: string
  description?: string
  image?: Image
  noIndex?: boolean
}

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface CTA {
  _type: string
  title: string
  url?: string
  reference?: any
  kind: 'button' | 'link' | 'arrow'
}

export interface ImageWithText {
  _type: string
  layout: 'media-left' | 'media-right'
  body?: PortableTextBlock[]
  links?: any[]
  media: Figure
}

export interface Figure {
  _type: string
  image: {
    _type: string
    asset: {
      _id: string
      _type: string
      assetId: string
      extension: string
      url: string
      metadata: {
        _type: string
        dimensions: {
          _type: string
          aspectRatio: number
          height: number
          width: number
        }
        exif?: { [key: string]: string }
        hasAlpha?: boolean
        isOpaque?: boolean
        lqip?: string
      }
    }
  }
  alt: string
  caption?: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}

export interface YogaClass {
 weekday: string | number;
  time: {
    start: string
    end: string
  }
  description: string
  title: string
  _id: string
  level: string
  classType: 'hybrid' | 'online' | 'in-person'
  venue?:{
    name: string
    url: string
    _id: string
    description: string
    address: {
      postalCode: string
      state: string
      country: string
      other: string
      city: string
      street: string
    }
  }
  registerUrl:string
  classResources?:{
    title: string
    url:string
  }
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  pageHero: Figure
  overview?: PortableTextBlock[]
  landingCta?: CTA
  pageContent?: PageContent
  title?: string
}


export interface PagePayload {
  seo?: SEO
  coverImage?: Figure
  pageContent?: PageContent
  title?: string
  subtitle?: PortableTextBlock[]
  slug?: string
}

export interface ProjectPayload {
  client?: string
  coverImage?: Image
  description?: PortableTextBlock[]
  duration?: {
    start?: string
    end?: string
  }
  overview?: PortableTextBlock[]
  site?: string
  slug: string
  tags?: string[]
  title?: string
}

export interface SocialItem {
  _type: string
  type: string
  url: string
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  seo: SEO
  socials?: SocialItem[]
  contactEmail: string
  ogImage?: Image
}

export enum Form {
  Initial,
  Loading,
  Success,
  Error
}

export type FormState = {
  state: Form;
  message?: string;
};