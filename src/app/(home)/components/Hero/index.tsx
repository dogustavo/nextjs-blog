import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from 'common'

import Card from './card'
import Infos from './infos'

import styled from './styles.module.scss'

export default function Hero() {
  return (
    <section className={styled['hero-section']}>
      <Container>
        <div className={styled['hero-wrapper']}>
          <Card />
          <Infos />
        </div>
      </Container>
    </section>
  )
}
