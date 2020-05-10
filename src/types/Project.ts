import { hasOwnProperty } from '@/utils'

export interface Project {
  title: string
  desc: string
  tags: string[]
}

export interface InternalProject extends Project {
  role: string
  when: string[]
}

export function isInternalProject(x: any): x is InternalProject {
  return x != null && hasOwnProperty(x, 'role') && hasOwnProperty(x, 'when')
}

export interface ShowcaseProject extends Project {
  link: {
    url: string
    title: string
  }
}

export function isShowcaseProject(x: any): x is ShowcaseProject {
  return x != null && hasOwnProperty(x, 'link')
}
