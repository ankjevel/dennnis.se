declare type RouteParamsLocation = {
  pathname: string
  search: string
  hash: string
  key: string
}

declare type RouteParams = {
  history: {
    length: number
    action: string
    location: RouteParamsLocation
  }
  location: RouteParamsLocation
  match: {
    path: string
    url: string
    isExact: boolean
    params: { [key: string]: string }
  }
}

declare interface IRoute {
  (params?: RouteParams): JSX.Element
}

declare type WithOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>

declare type MaybeNull<T> = T | null

declare type MaybeUndefined<T> = T | undefined

declare type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & {
  length: TLength
}
