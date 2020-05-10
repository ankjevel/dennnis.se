import React, { ReactElement } from 'react'

import css from './Info.css'

export const component = (props: {
  className?: string
  children: ReactElement
}) => {
  return (
    <header
      className={props.className ? `${css.info} ${props.className}` : css.info}
    >
      {props.children}
    </header>
  )
}

export default component
