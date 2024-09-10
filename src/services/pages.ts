import { fetcher } from 'services'

import { IPageResponse } from 'types/pages'

interface IErrorHandler {
  hasError: boolean
}

export async function getStrapiPages({
  page
}: {
  page: string
}): Promise<IPageResponse | IErrorHandler> {
  try {
    const res = await fetcher<IPageResponse>(
      `/pages?filters[slug][$eq]=${page}`,
      {
        method: 'GET'
      }
    )

    return res
  } catch (error) {
    return {
      hasError: true
    }
  }
}
