import React, {PropsWithChildren} from 'react'

import {getIcon, IconKey} from './get-icon'

export const externalLinkRender = ({
  title,
  children,
  blank,
}: PropsWithChildren<{
  title?: string
  blank?: boolean
}>) => {
  const TargetBlankIcon = getIcon('targetBlank')
  const LinkIcon = getIcon('externalLink')
  return (
    <span style={{color: '#2d53fe'}}>
      {title ?? children}{' '}
      <span style={{paddingLeft: '5px'}}>
        <LinkIcon />
      </span>
      {blank && (
        <span style={{paddingLeft: '10px'}}>
          <TargetBlankIcon />
        </span>
      )}
    </span>
  )
}
export const internalLinkRender = ({
  title,
  children,
}: PropsWithChildren<{
  title?: string
}>) => {
  const Icon = getIcon('internalLink')
  return (
    <span style={{color: '#2d53fe'}}>
      {title ?? children}{' '}
      <span style={{paddingLeft: '5px'}}>
        <Icon />
      </span>
    </span>
  )
}
export const attachmentLinkRender = ({
  title,
  children,
}: {
  title?: string
  children: React.ReactNode[]
}) => {
  const Icon = getIcon('attachment')
  return (
    <span style={{color: '#2d53fe'}}>
      {title ?? children}{' '}
      <span style={{paddingLeft: '5px'}}>
        <Icon />
      </span>
    </span>
  )
}
