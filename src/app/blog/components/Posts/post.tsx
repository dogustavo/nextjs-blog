'use client'

import { IPostData } from 'types/blog'
import { motion } from 'framer-motion'
import { CustomLink } from 'common'

import styled from './styles.module.scss'
import { ITag } from 'types/tag'
import { formattedDate } from 'utils/dateFormatter'

interface IPostItemProp {
  post: IPostData
  index: number
}

const TagLink = ({ tag }: { tag: ITag }) => (
  <CustomLink
    key={tag.id}
    href={`/blog?tag=${tag.attributes.tag.toLowerCase()}`}
  >
    #{tag.attributes.tag}
  </CustomLink>
)

export default function PostItem({ post, index }: IPostItemProp) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.3 * index + 1,
          ease: 'easeInOut'
        }
      }}
      className={styled['post-card-item']}
    >
      <h3>{post.attributes.title}</h3>
      <div className={styled['tag-wrapper']}>
        {post.attributes.tags.data.map((tag) => (
          <TagLink tag={tag} key={tag.id} />
        ))}
      </div>

      <p className={styled['created-by']}>
        {formattedDate(new Date(post.attributes.createdAt))}
      </p>

      <p className={styled['post-summary']}>
        {post.attributes.summary}
      </p>
      <CustomLink
        className={styled['read-more']}
        href={`/blog/${post.id}`}
      >
        Ler mais
      </CustomLink>
    </motion.div>
  )
}
