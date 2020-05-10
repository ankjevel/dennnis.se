import React from 'react'
import { classNames } from '@/utils'

import css from './Tags.css'

export const Component = ({
  className,
  tags,
}: {
  tags: string[]
  className?: string
}) => {
  return (
    <ul className={classNames([css.tags, className])}>
      {tags.map((tag) => (
        <li key={`tag-${tag}`}>{tag}</li>
      ))}
    </ul>
  )
}

export default Component
