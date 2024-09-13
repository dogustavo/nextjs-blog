import { Logo, Container, CustomLink } from 'common'
import Menu from './menu'

import styled from './styles.module.scss'
import Link from 'next/link'

export default function Navigator() {
  return (
    <nav className={styled['nav-wrapper']}>
      <Container>
        <div className={styled['nav-container']}>
          <CustomLink href="/">
            <Logo />
          </CustomLink>
          <Menu />
        </div>
      </Container>
    </nav>
  )
}
