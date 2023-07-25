import { PreviewSuspense } from '@sanity/preview-kit'
import { RegisterPage } from 'components/pages/project/ProjectPage'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import { getHomePage, getSettings,getClasses } from 'lib/sanity.client'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { HomePagePayload, SettingsPayload, YogaClass} from 'types'

const ProjectPagePreview = lazy(
  () => import('components/pages/project/ProjectPreview')
)

interface PageProps {
  page: HomePagePayload
  settings: SettingsPayload
  classes: YogaClass[]
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function IndexPage(props: PageProps) {
  const { page, settings, classes, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <RegisterPage homePageTitle={page.title} classes={classes} settings={settings} preview={preview} />
          </PreviewWrapper>
        }
      >
        <ProjectPagePreview token={token} />
      </PreviewSuspense>
    )
  }

  return <RegisterPage homePageTitle={page.title} classes={classes} settings={settings} />
}

const fallbackPage: HomePagePayload = {
  title: '',
  overview: [],
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const token = previewData.token
  const [settings, page, classes] = await Promise.all([
    getSettings({ token }),
    getHomePage({ token }),
    getClasses({token})
  ])

  return {
    props: {
      page,
      settings,
      classes,
      preview,
      token: previewData.token ?? null,
    },
  }
}
