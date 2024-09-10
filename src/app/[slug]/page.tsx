import { notFound } from 'next/navigation'
import { getStrapiPages } from 'services'

import { MDHtml, Container, Breadcrumb } from 'common'

import styled from './styles.module.scss'

interface IPage {
  params: { slug: string }
}

export default async function Pages({ params }: IPage) {
  const pages = await getStrapiPages({ page: params.slug })

  if ('hasError' in pages) notFound()

  if (!pages.data.length)
    return (
      <div>
        <p>Página não encontrada</p>
      </div>
    )

  const { attributes } = pages.data[0]

  return (
    <main className={styled['pages-content']}>
      <Container>
        <Breadcrumb
          breadcrumbs={[
            {
              path: '/',
              name: 'Home'
            },
            {
              path: `/${attributes.slug}`,
              name: attributes.page
            }
          ]}
        />
        <section>
          <MDHtml content={attributes.content} />
        </section>
      </Container>
    </main>
  )
}
