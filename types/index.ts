import type { Image, PortableTextBlock } from 'sanity'
export interface FAQContent {
  title: string
  questions: { question: string; answer: PortableTextBlock[] }[]
}
export type PageContent =
  | CTA
  | ImageWithText
  | Figure
  | PortableTextBlock[]
  | FAQContent

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
  image: Image
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
