'use client'
import { useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import { ThemeContext } from 'context/theme'
import { OverlayContext } from 'context/overlay'

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

const MenuButton = ({
  isMenuOpen,
  setIsMenuOpen
}: {
  isMenuOpen: boolean
  setIsMenuOpen: () => void
}) => (
  <button
    type="button"
    title="Botão menu"
    className={`${styled['menu-mobile']} ${
      isMenuOpen ? styled['is-open'] : ''
    }`}
    onClick={setIsMenuOpen}
  >
    <span />
    <span />
    <span />
  </button>
)

const MenuItem = ({
  label,
  link,
  isActive
}: {
  label: string
  link: string
  isActive: boolean
}) => (
  <Link
    key={label.toLocaleLowerCase()}
    className={`${styled['menu-item']} ${
      isActive ? styled['active-page'] : ''
    }`}
    href={link}
  >
    {label}
  </Link>
)

export default function Menu() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { toogleTheme, theme } = useContext(ThemeContext)
  const { setIsOverlayOpen } = useContext(OverlayContext)

  const checkActivePage = (page: string): boolean => {
    const path = pathname?.split('/')[1]
    return path === page
  }

  useEffect(() => {
    document.body.style.overflowY = isMenuOpen ? 'hidden' : 'auto'
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
    setIsOverlayOpen(!isMenuOpen)
  }

  useEffect(() => {
    setIsMenuOpen(false)
    setIsOverlayOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <div className={styled['menu-wrapper']}>
      <div
        className={`${styled['menu-items']} ${
          isMenuOpen ? styled['is-open'] : ''
        }`}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.label}
            label={item.label}
            link={item.link}
            isActive={checkActivePage(item.slug)}
          />
        ))}
      </div>

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

      <MenuButton
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={toggleMenu}
      />
    </div>
  )
}
