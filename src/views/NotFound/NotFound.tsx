import React, { Fragment } from 'react'

import Nav from '@/components/Nav'
import Info from '@/components/Info'

import css from './NotFound.css'

export const View = () => {
  return (
    <Fragment>
      <Nav className={css.nav} />
      <Info className={css.info}>
        <h1>Page not found</h1>
      </Info>
    </Fragment>
  )
}

export default View
