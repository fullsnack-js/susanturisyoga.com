import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { ProjectPayload } from 'types'

export interface RegisterPageHeadProps {
  project?: ProjectPayload | undefined
  title: string | undefined
}

export default function RegisterPageHead({
  project,
  title,
}: RegisterPageHeadProps) {
  return (
    <SiteMeta
      baseTitle={title}
      description={project?.overview ? toPlainText(project.overview) : ''}
      image={project?.coverImage}
      title={project?.title}
    />
  )
}
