'use client'

import Link from 'next/link'
import styled from './styles.module.scss'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

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
          onClick={() => console.log('Click')}
        >
          <Image
            alt="Imagem trocar de tema"
            src="/static/light_mode.svg"
            width={28}
            height={28}
          />
        </button>
      </li>
    </ul>
  )
}
