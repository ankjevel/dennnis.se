import React, { Fragment } from 'react'
import css from './Iteam.css'

import projects from './projects.json'
import Nav from '@/components/Nav'
import Info from '@/components/Info'

export const Iteam = () => {
  return (
    <Fragment>
      <Nav className={css.nav} />

      <Info className={css.header}>
        <h1>✎ This is just a selection of the work I've done at iteam</h1>
      </Info>

      <main className={css.main}>
        <section className={css.projects}>
          <ul>
            {projects.map((p, i) => (
              <li key={`project-${i}`} className={css.project}>
                <h1>{p.title}</h1>
                <h2>
                  {p.role} <small>~ {p.when.join(' - ')}</small>
                </h2>
                <p>{p.desc}</p>
                <ul>
                  {p.tags.map((tag, j) => (
                    <li key={`tag-${i}-${j}`}>{tag}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Fragment>
  )
}

export default Iteam
