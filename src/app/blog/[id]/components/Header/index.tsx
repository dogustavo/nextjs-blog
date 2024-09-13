import { ITag } from 'types/tag'

import styled from './styles.module.scss'
import { CustomLink } from 'common'
import { formattedDate } from 'utils/dateFormatter'

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
  <CustomLink
    key={tag.id}
    href={`/blog?tag=${tag.attributes.tag.toLowerCase()}`}
  >
    #{tag.attributes.tag}
  </CustomLink>
)

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
