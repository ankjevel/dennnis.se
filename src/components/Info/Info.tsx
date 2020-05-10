import React, { ReactElement } from 'react'
import { classNames } from '@/utils'

import css from './Info.css'

export const Component = (props: {
  className?: string
  children: ReactElement
}) => {
  return (
    <header className={classNames([css.info, props.className])}>
      {props.children}
    </header>
  )
}

export default Component
