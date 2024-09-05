'use client'
import { useContext } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import { ThemeContext } from 'context/theme'

import styled from './styles.module.scss'

const menuItems = [
  {
    label: 'Home',
    slug: '',
    link: '/'
  },
  {
    label: 'Posts',
    slug: 'blog',
    link: '/blog'
  },
  {
    label: 'Tags',
    slug: 'tags',
    link: '/tags'
  },
  {
    label: 'About',
    slug: 'about',
    link: '/about'
  }
]

export default function Menu() {
  const pathname = usePathname()

  const { toogleTheme, theme } = useContext(ThemeContext)

  const checkActivePage = (page: string): boolean => {
    if (!pathname) {
      return false
    }

    const path = pathname.split('/')[1]
    return path === page
  }

  return (
    <ul className={styled['menu-items']}>
      {menuItems.map((item) => (
        <li key={item.label.toLocaleLowerCase()}>
          <Link
            className={`${styled['menu-item']} ${
              checkActivePage(item.slug) ? styled['active-page'] : ''
            }`}
            href={item.link}
          >
            {item.label}
          </Link>
        </li>
      ))}
      <li>
        <button
          className={styled['button-theme']}
          type="button"
          onClick={toogleTheme}
        >
          <Image
            alt={`Icone no centro do botão que representa a troca para o tema ${theme}`}
            src={`/static/${theme}_mode.svg`}
            width={28}
            height={28}
          />
        </button>
      </li>
    </ul>
  )
}
