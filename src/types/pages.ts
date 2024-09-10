export interface IPageAttributes {
  page: string
  content: string
  slug: string
  createdAt: string
  updatedAt: string
}

export interface IPageResponse {
  data: IPage[]
  meta: Meta | {}
}

export interface IPage {
  id: number
  attributes: IPageAttributes
}

export interface Meta {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}
