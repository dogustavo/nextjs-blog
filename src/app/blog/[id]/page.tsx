import { notFound } from 'next/navigation'
import { getPostById } from 'services'

import { MDHtml, Container, Breadcrumb } from 'common'

import BlogHeader from './components/Header'

import styled from './styles.module.scss'

export default async function BlogItem({
  params
}: {
  params: { id: string }
}) {
  const data = await getPostById({ id: params.id })

  if ('hasError' in data) notFound()

  const { tags, post, ...rest } = data.data.attributes

  return (
    <main>
      <article className={styled['blog-container']}>
        <Container>
          <Breadcrumb
            breadcrumbs={[
              {
                path: '/',
                name: 'Home'
              },
              {
                path: '/blog',
                name: 'Blog'
              },
              {
                path: `/blog/${params.id}`,
                name: rest.title
              }
            ]}
          />
          <BlogHeader tags={tags.data} postInfo={rest} />
          <MDHtml content={post} />
        </Container>
      </article>
    </main>
  )
}
