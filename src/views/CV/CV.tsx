import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import {
  EntypoMail,
  EntypoPhone,
  EntypoLinkedin,
  EntypoGithub,
} from 'react-entypo'

import css from './CV.css'

export const CV = () => {
  return (
    <Fragment>
      <header className={css.header}>
        <section className={css.intro}>
          <h1>Hej,</h1>
          <h2>
            I'm Dennis Pettersson, a developer based in Stockholm, Sweden. I
            love solving problems and the never-ending optimisations.
          </h2>
        </section>
        <section className={css.linksAndMe}>
          <ul>
            <li>
              <a
                href="mailto:hello@dennnis.se"
                target="_blank"
                title="email me"
              >
                <EntypoMail />
              </a>
            </li>
            <li>
              <a href="tel:073-334 00 02" target="_blank" title="call me">
                <EntypoPhone />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ankjevel/"
                target="_blank"
                title="github"
              >
                <EntypoGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ankjevel/"
                target="_blank"
                title="linked in"
              >
                <EntypoLinkedin />
              </a>
            </li>
          </ul>
          <img className={css.me} src="/me.jpg" />
        </section>
      </header>

      <main className={css.main}>
        <section className={css.experience}>
          <header>
            <h1>Experience</h1>
          </header>
          <article>
            <h1>Iteam</h1>
            <h2>Developer, 2012 - Present</h2>
            <p>
              Iteam is a development consultancy working in-house.
              <br />I started as an intern in 2012. I've shifted my focus from
              frontend to backend.
              <br />
              I build web services, mostly written in Node. The integrations are
              made using GraphQL, with a TDD-mindset. When needed, I do write
              frontend in React or React Native. Based on the project, we work
              with either SCRUM or Kanban.
              <br /> We build microservices in Docker, running in AWS (EKS or
              EC2); TravisCI, Drone or GithubActions are used for building and
              deploying.
            </p>
            <Link to="/iteam">
              Here's a selection of the projects I've a been a part of at Iteam
            </Link>
          </article>
        </section>

        <section className={css.selectedProjects}>
          <header>
            <h1>Projects</h1>
          </header>
          <article>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </article>
        </section>
      </main>
    </Fragment>
  )
}

export default CV
