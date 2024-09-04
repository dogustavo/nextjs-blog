import { markdownToHtml } from 'utils/markdownToHtml'

import styled from './styles.module.scss'

export default async function MDHtml({
  content
}: {
  content: string
}) {
  const element = await markdownToHtml(content)

  return (
    <div
      className={styled['md-blog-section']}
      dangerouslySetInnerHTML={{ __html: element }}
    />
  )
}
