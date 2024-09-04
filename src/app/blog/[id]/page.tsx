import { notFound } from 'next/navigation'
import { getPostById } from 'services'

import { MDHtml, Container } from 'common'

import BlogHeader from './components/Header'

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
      <article>
        <Container>
          <BlogHeader tags={tags.data} postInfo={rest} />
          <MDHtml content={post} />
        </Container>
      </article>
    </main>
  )
}
