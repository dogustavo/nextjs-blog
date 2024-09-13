'use client'
import { motion } from 'framer-motion'

import styled from './styles.module.scss'
import CustomLink from 'common/Link'

type IBreadcrumbProp = {
  breadcrumbs: {
    path: string
    name: string
  }[]
}

export default function Breadcrumb({ breadcrumbs }: IBreadcrumbProp) {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.4,
          ease: 'easeInOut'
        }
      }}
      className={styled.breadcrumb}
    >
      {breadcrumbs.map(({ name, path }, key) => (
        <li key={key}>
          {key + 1 === breadcrumbs.length ? (
            <span>{name}</span>
          ) : (
            <CustomLink href={path}>{name}</CustomLink>
          )}
        </li>
      ))}
    </motion.ul>
  )
}
