import React from 'react'
import { Link } from 'react-router-dom'
import { EntypoChevronThinLeft } from 'react-entypo'
import { classNames } from '@/utils'

import css from './Nav.css'

export const Component = (props: { className?: string }) => {
  return (
    <nav className={classNames([css.nav, props.className])}>
      <ul>
        <li>
          <Link to="/">
            <EntypoChevronThinLeft /> Go back
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Component
