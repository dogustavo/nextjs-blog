'use client'

import { FC } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { GitSvg, InstaSvg, LinkedinSvg } from 'common/SVG'

import styled from './styles.module.scss'

const iconMap: Record<string, FC> = {
  github: GitSvg,
  linkedin: LinkedinSvg,
  instagram: InstaSvg
}

const socials = [
  {
    path: 'https://github.com/dogustavo',
    id: 'github',
    label: 'dogustavo'
  },
  {
    path: 'https://www.linkedin.com/in/oliveiragust/',
    id: 'linkedin',
    label: 'oliveiragust'
  },
  {
    path: 'https://www.instagram.com/_dogustavo/',
    id: 'instagram',
    label: '_dogustavo'
  }
]

const SocialLink = ({
  href,
  label,
  icon,
  index
}: {
  href: string
  label: string
  index: number
  icon: keyof typeof iconMap
}) => {
  const SvgIcon = iconMap[icon]

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.3 * index,
          ease: 'easeInOut'
        }
      }}
      className={styled['social-item']}
    >
      <SvgIcon />
      <span>{label}</span>
    </motion.a>
  )
}

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 }
}

export default function Card() {
  return (
    <div className={styled.card}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.3
        }}
        className={styled['card-image']}
      >
        <Image
          src="/static/me.png"
          alt="Minha foto de perfil"
          sizes="100%"
          fill
        />
      </motion.div>

      <motion.div
        variants={item}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 0.5
        }}
        className={styled['card-info']}
      >
        <p>Gustavo Oliveira</p>
        <p>Frontend | React | Next </p>
      </motion.div>

      <div className={styled['card-social-media']}>
        {socials.map((social, index) => (
          <SocialLink
            icon={social.id}
            key={social.id}
            href={social.path}
            label={social.label}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  )
}
