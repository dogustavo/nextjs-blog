'use client'
import { motion } from 'framer-motion'

import styled from './styles.module.scss'

const columns = 5

const PageTransitionEffect = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <div className={styled['transition-wrapper']}>
        {[...Array(columns)].map((_, id) => (
          <motion.div
            className={styled['slide-out']}
            key={id}
            initial={{
              top: 0
            }}
            animate={{
              top: '100vh',
              transition: {
                duration: 0.8,
                delay: 0.05 * id,
                ease: [0.215, 0.61, 0.355, 1],
                transitionEnd: { height: '0', top: '0' }
              }
            }}
            transition={{
              ease: 'easeInOut',
              duration: 0.8,
              delay: 0.06 * id
            }}
          />
        ))}
      </div>

      {children}
    </>
  )
}

export default PageTransitionEffect
