import { fetcher } from 'services'

import { ITagResponse } from 'types/tag'

interface IErrorHandler {
  hasError: boolean
}

export async function getAllTags(): Promise<
  ITagResponse | IErrorHandler
> {
  try {
    const res = await fetcher<ITagResponse>(`/tags?populate=*`, {
      method: 'GET'
    })

    return res
  } catch (error) {
    return {
      hasError: true
    }
  }
}
