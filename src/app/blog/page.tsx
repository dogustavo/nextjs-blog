import { Breadcrumb, Container, Pagination } from 'common'

import Posts from './components/Posts'
import Filter from './components/Filter'

import styled from './styles.module.scss'

import { getAllPosts } from 'services'
interface IPage {
  searchParams: { [key: string]: any | null | undefined }
}

export default async function Blog({ searchParams }: IPage) {
  const posts = await getAllPosts({
    filter: {
      'pagination[page]': searchParams['pagination[page]'] || 1,
      'pagination[pageSize]':
        searchParams['pagination[pageSize]'] || 15,
      populate: '*',
      ...searchParams
    }
  })

  if ('hasError' in posts) return ''

  return (
    <div className={styled['post-page']}>
      <Container>
        <div className={styled['main-post-wrapper']}>
          <Filter />
          <div className={styled['post-side']}>
            <Breadcrumb
              breadcrumbs={[
                {
                  path: '/',
                  name: 'Home'
                },
                {
                  path: '/blog',
                  name: 'Blog'
                }
              ]}
            />
            <Posts posts={posts.data} />
            <Pagination
              searchParams={searchParams}
              pagination={posts.meta.pagination}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
