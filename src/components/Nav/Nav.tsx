import React from 'react'
import { Link } from 'react-router-dom'
import { EntypoChevronThinLeft } from 'react-entypo'

import css from './Nav.css'

export const component = (props: { className?: string }) => {
  return (
    <nav
      className={props.className ? `${css.nav} ${props.className}` : css.nav}
    >
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

export default component
