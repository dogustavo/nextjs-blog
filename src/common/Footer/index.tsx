import { Container } from 'common'

import styled from './styles.module.scss'

export default function Footer() {
  return (
    <footer className={styled['footer-wrapper']}>
      <Container>
        <div className={styled['footer-container']}>
          © {new Date().getFullYear()}, Made by&ensp;
          <a
            href="https://github.com/dogustavo"
            target="_blank"
            rel="noopener noreferrer"
          >
            @_dogustavo
          </a>
        </div>
      </Container>
    </footer>
  )
}
