import React, { Fragment } from 'react'
import { EntypoCode } from 'react-entypo'
import Tags from '@/components/Tags'
import {
  isInternalProject,
  isShowcaseProject,
  InternalProject,
  ShowcaseProject,
} from '@/types/Project'
import { classNames } from '@/utils'

import css from './Projects.css'

export const Component = ({
  className,
  projects,
}: {
  projects: (ShowcaseProject | InternalProject)[]
  className?: string
}) => {
  return (
    <ul
      className={classNames([
        css.projects,
        isShowcaseProject(projects[0]) ? css.split : '',
        className,
      ])}
    >
      {projects.map((p, i) => (
        <li key={`project-${i}`} className={css.project}>
          {isInternalProject(p) ? (
            <Fragment>
              <h1>{p.title}</h1>
              <h2>
                {p.role} <small>~ {p.when.join(' - ')}</small>
              </h2>
              <p dangerouslySetInnerHTML={{ __html: p.desc }} />
              <Tags tags={p.tags} />
            </Fragment>
          ) : (
            <Fragment>
              <div className={css.left}>
                <h1>{p.title}</h1>
                <p dangerouslySetInnerHTML={{ __html: p.desc }} />
              </div>
              <div className={css.right}>
                <a href={p.link.url} title={p.link.title} target="_blank">
                  <EntypoCode />
                </a>
              </div>
              <div className={css.tags}>
                <Tags tags={p.tags} />
              </div>
            </Fragment>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Component
