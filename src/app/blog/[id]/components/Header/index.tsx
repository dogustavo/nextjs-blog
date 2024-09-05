import Link from 'next/link'
import { ITag } from 'types/tag'

import styled from './styles.module.scss'

interface IBlogInfo {
  postInfo: {
    createdAt: string
    updatedAt: string
    publishedAt: string
    summary: string
    title: string
    createdBy: string
  }
  tags: ITag[]
}

const TagLink = ({ tag }: { tag: ITag }) => (
  <Link
    key={tag.id}
    href={`/blog?tag=${tag.attributes.tag.toLowerCase()}`}
  >
    #{tag.attributes.tag}
  </Link>
)

const formattedDate = (data: Date) =>
  data
    .toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
    .replace(/de /g, '')

export default async function BlogHeader({
  tags,
  postInfo
}: IBlogInfo) {
  return (
    <>
      <header className={styled['post-header']}>
        <div className={styled['tag-wrapper']}>
          {tags.map((tag) => (
            <TagLink tag={tag} key={tag.id} />
          ))}
        </div>
        <h1>{postInfo.title}</h1>
        <p className={styled['created-at']}>
          {formattedDate(new Date(postInfo.createdAt))} por{' '}
          <span className={styled['created-by']}>
            {postInfo.createdBy}
          </span>
        </p>

        <div className={styled['sumary-wrapper']}>
          <p>{postInfo.summary}</p>
        </div>
      </header>
    </>
  )
}
