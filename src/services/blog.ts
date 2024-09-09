import { fetcher } from 'services'

import { IPosts, IPostItem } from 'types/blog'

interface IErrorHandler {
  hasError: boolean
}

export interface IPostsProp {
  filter?: any
}

export async function getAllPosts({
  filter
}: IPostsProp): Promise<IPosts | IErrorHandler> {
  try {
    const strFilter = formatQueryString(filter)
    console.log('filters 25:  ', strFilter)

    const res = await fetcher<IPosts>(`/posts?${strFilter}`, {
      method: 'GET'
    })

    return res
  } catch (error) {
    return {
      hasError: true
    }
  }
}

export async function getPostById({
  id
}: {
  id: string
}): Promise<IPostItem | IErrorHandler> {
  try {
    const res = await fetcher<IPostItem>(`/posts/${id}?populate=*`, {
      method: 'GET'
    })

    return res
  } catch (error) {
    return {
      hasError: true
    }
  }
}

export function formatQueryString(filters: {
  [key: string]: any
}): string {
  if (!filters) {
    return ''
  }
  return Object.keys(filters)
    .map((key) => `${key}=${encodeURIComponent(filters[key])}`)
    .join('&')
}
