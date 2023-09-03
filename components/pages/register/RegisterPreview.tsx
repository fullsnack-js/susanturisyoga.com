import { usePreview } from 'lib/sanity.preview'
import { projectBySlugQuery } from 'lib/sanity.queries'
import type { ProjectPayload } from 'types'

import { RegisterPage, RegisterPageProps } from './RegisterPage'

export default function ProjectPreview({
  token,
  settings,
  classes,
  homePageTitle,
}: {
  token: null | string
} & RegisterPageProps) {
  // const projectPreview: ProjectPayload = usePreview(token, projectBySlugQuery, {
  //   slug: project?.slug,
  // })

  return (
    <RegisterPage
      // project={projectPreview}
      classes={classes}
      settings={settings}
      homePageTitle={homePageTitle}
      preview={true}
    />
  )
}
