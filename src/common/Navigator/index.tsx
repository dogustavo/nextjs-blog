import { Logo, Container } from 'common'
import Menu from './menu'

import styled from './styles.module.scss'

export default function Navigator() {
  return (
    <nav className={styled['nav-wrapper']}>
      <Container>
        <div className={styled['nav-container']}>
          <Logo />
          <Menu />
        </div>
      </Container>
    </nav>
  )
}
