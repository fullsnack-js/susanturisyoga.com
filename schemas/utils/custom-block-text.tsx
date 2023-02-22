import React from 'react'
const highlightIcon = () => <span style={{fontWeight: 'bold'}}>H</span>
const highlightRender = (props) => (
  <span style={{backgroundColor: 'rgba(0, 184, 212, 0.3)'}}>{props.children}</span>
)

export const highlightMarker = {
  title: 'Highlight',
  value: 'highlight',
  icon: highlightIcon,
  component: highlightRender,
}
