import { fetcher } from 'services'

import { IPostData, IPostItem } from 'types/blog'

export interface IErrorHandler {
  hasError: boolean
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
