import { getAllPosts } from 'services'

import Posts from './components/posts'

interface IPage {
  searchParams: { [key: string]: any | null | undefined }
}

export default async function Blog({ searchParams }: IPage) {
  const posts = await getAllPosts({
    filter: {
      'pagination[page]': searchParams['pagination[page]'] || 1,
      'pagination[pageSize]':
        searchParams['pagination[pageSize]'] || 10,
      populate: '*',
      ...searchParams
    }
  })

  if ('hasError' in posts) return ''

  return (
    <main>
      <Posts posts={posts.data} />
    </main>
  )
}
