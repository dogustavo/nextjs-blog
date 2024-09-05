import { Logo, Container } from 'common'
import Menu from './menu'

import styled from './styles.module.scss'
import Link from 'next/link'

export default function Navigator() {
  return (
    <nav className={styled['nav-wrapper']}>
      <Container>
        <div className={styled['nav-container']}>
          <Link href="/">
            <Logo />
          </Link>
          <Menu />
        </div>
      </Container>
    </nav>
  )
}
