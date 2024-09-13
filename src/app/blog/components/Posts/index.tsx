import { IPostData } from 'types/blog'

import styled from './styles.module.scss'

import PostItem from './post'

interface IPost {
  posts: IPostData[]
}

export default function PostsList({ posts }: IPost) {
  return (
    <section className={styled['post-section']}>
      <div className={styled['post-cards']}>
        {posts.map((post, index) => (
          <PostItem key={post.id} post={post} index={index} />
        ))}
      </div>
    </section>
  )
}
