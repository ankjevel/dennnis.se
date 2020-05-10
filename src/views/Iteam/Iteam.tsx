import React, { Fragment } from 'react'
import Info from '@/components/Info'
import Nav from '@/components/Nav'
import Projects from '@/components/Projects'

import projects from './projects.json'

import css from './Iteam.css'

export const Iteam = () => {
  return (
    <Fragment>
      <Nav className={css.nav} />

      <Info className={css.header}>
        <h1>✎ This is just a selection of the work I've done at iteam</h1>
      </Info>

      <main className={css.main}>
        <section className={css.projects}>
          <Projects projects={projects} />
        </section>
      </main>
    </Fragment>
  )
}

export default Iteam
