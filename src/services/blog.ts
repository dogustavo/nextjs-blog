import { fetcher } from 'services'

import { IPosts, IPostItem } from 'types/blog'

import { formatQueryString } from 'utils/queryString'

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
