// import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { PagePayload, SettingsPayload } from 'types'

export interface PageHeadProps {
  title: string | undefined
  page: PagePayload | undefined
  settings: SettingsPayload | undefined
}

export default function PageHead({ title, page, settings }: PageHeadProps) {
  return (
    <SiteMeta
      baseTitle={title}
      description={page?.seo?.description ?? settings?.seo?.description ?? ''}
      image={settings?.seo?.image}
      title={page?.title}
    />
  )
}
