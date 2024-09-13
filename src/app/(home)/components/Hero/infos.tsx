'use client'
import {
  motion,
  useMotionValue,
  useTransform,
  animate
} from 'framer-motion'
import styled from './styles.module.scss'
import { useEffect, useState } from 'react'

const heroItens = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Curabitur ac vehicula dui, iaculis varius est. Nulla facilisi',
  ' Donec urna eros, ultrices a diam sit amet, molestie fringilla justo',
  'Fusce ultricies, massa non scelerisque hendrerit'
]

const baseText = `Hello there!`

export default function Infos() {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  )

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: 'tween',
      delay: 0.6,
      duration: 0.8,
      ease: 'easeInOut'
    })
    return controls.stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styled['hero-info-wrapper']}>
      <div className={styled['hero-title']}>
        <motion.h1>{displayText}</motion.h1>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.4
          }}
        >
          ✌
        </motion.span>
      </div>
      <p>
        I’m Gustavo Oliveira, a passionate frontend developer crafting
        web experiences.
      </p>

      <ul>
        {heroItens.map((element, index) => (
          <motion.li
            initial={{
              opacity: 0,
              y: -10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              ease: 'linear',
              delay: 0.09 * index + 1
            }}
            key={index}
          >
            <span>{element}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
