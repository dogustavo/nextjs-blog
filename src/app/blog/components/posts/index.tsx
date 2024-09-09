import { IPostData } from 'types/blog'

import { Container } from 'common'

import styled from './styles.module.scss'
import Link from 'next/link'
import { ITag } from 'types/tag'
import { formattedDate } from 'utils/dateFormatter'

interface IPost {
  posts: IPostData[]
}

const TagLink = ({ tag }: { tag: ITag }) => (
  <Link
    key={tag.id}
    href={`/blog?tag=${tag.attributes.tag.toLowerCase()}`}
  >
    #{tag.attributes.tag}
  </Link>
)

const PostItem = ({ post }: { post: IPostData }) => (
  <div className={styled['post-card-item']}>
    <h3>{post.attributes.title}</h3>
    <div className={styled['tag-wrapper']}>
      {post.attributes.tags.data.map((tag) => (
        <TagLink tag={tag} key={tag.id} />
      ))}
    </div>
    <p>
      {formattedDate(new Date(post.attributes.createdAt))} por{' '}
      <span>{post.attributes.createdBy}</span>
    </p>

    <p className={styled['post-summary']}>
      {post.attributes.summary}
    </p>
    <Link className={styled['read-more']} href={`/blog/${post.id}`}>
      Ler mais
    </Link>
  </div>
)

export default function PostsList({ posts }: IPost) {
  return (
    <section className={styled['post-section']}>
      <Container>
        <div className={styled['post-cards']}>
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </section>
  )
}
