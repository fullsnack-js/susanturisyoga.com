/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, previewSecretId, projectId } from 'lib/sanity.api'
import { previewDocumentNode } from 'plugins/previewPane'
import { productionUrl } from 'plugins/productionUrl'
import { pageStructure, singletonPlugin } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { person, policy, venue } from 'schemas/documents'
import page from 'schemas/documents/page'
import project from 'schemas/documents/project'
import { questionAndAnswer, timeValueType } from 'schemas/objects'
import {duration} from 'schemas/objects/duration'
import milestone from 'schemas/objects/milestone'
import timeline from 'schemas/objects/timeline'
import home from 'schemas/singletons/home'
import settings from 'schemas/singletons/settings'
import { globalSettings } from './schemas/documents/globalSettings'
import { yogaClass } from './schemas/documents/yogaClass'
import { ctaType } from './schemas/objects/callToAction'
import { classSettingType } from './schemas/objects/classSetting'
import { eventCalendarType } from './schemas/objects/eventCalendar'
import { figureType } from './schemas/objects/figure'
import { imageWithText } from './schemas/objects/imageWithText'
import { link } from './schemas/objects/link'
import { linkExternal } from './schemas/objects/linkExternal'
import { linkInternal } from './schemas/objects/linkInternal'
import { portableText } from './schemas/objects/portableText'
import { portableTextSimple } from './schemas/objects/portableTextSimple'
import { content } from './schemas/objects/richText'
import { scheduleType } from './schemas/objects/schedule'
import { seo } from './schemas/objects/seo'
import { socialType } from './schemas/objects/social'
import { timeRange } from './schemas/objects/time-range'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  'Susan Turis Yoga'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  home.name,
  page.name,
  project.name,
]

export default defineConfig({
  basePath: '/studio',
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      home,
      settings,
      // Documents
      // globalSettings,
      duration,
      page,
      person,
      policy,
      project,
      venue,
      yogaClass,

      // Objects
      ctaType,
      classSettingType,
      content,
      eventCalendarType,
      figureType,
      imageWithText,
      link,
      linkExternal,
      linkInternal,
      portableText,
      portableTextSimple,
      questionAndAnswer,
      scheduleType,
      seo,
      timeValueType,
      socialType,
      timeRange,
      milestone,
      timeline,
    ],
  },
  plugins: [
    deskTool({
      structure: pageStructure([home, settings]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
