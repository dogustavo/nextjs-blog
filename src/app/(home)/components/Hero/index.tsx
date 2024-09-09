import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from 'common'
import { GitSvg, InstaSvg, LinkedinSvg } from 'common/SVG/icons'

import styled from './styles.module.scss'

const iconMap: Record<string, FC> = {
  github: GitSvg,
  linkedin: LinkedinSvg,
  instagram: InstaSvg
}

const socials = [
  {
    path: 'https://github.com/dogustavo',
    id: 'github',
    label: 'dogustavo'
  },
  {
    path: 'https://www.linkedin.com/in/oliveiragust/',
    id: 'linkedin',
    label: 'oliveiragust'
  },
  {
    path: 'https://www.instagram.com/_dogustavo/',
    id: 'instagram',
    label: '_dogustavo'
  }
]

const SocialLink = ({
  href,
  label,
  icon
}: {
  href: string
  label: string
  icon: keyof typeof iconMap
}) => {
  const SvgIcon = iconMap[icon]

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={styled['social-item']}
    >
      <SvgIcon />
      <span>{label}</span>
    </Link>
  )
}
export default function Hero() {
  return (
    <section className={styled['hero-section']}>
      <Container>
        <div className={styled['hero-wrapper']}>
          <div className={styled.card}>
            <div className={styled['card-image']}>
              <Image
                src="/static/me.png"
                alt="Minha foto de perfil"
                sizes="100%"
                fill
              />
            </div>

            <div className={styled['card-info']}>
              <p>Gustavo Oliveira</p>
              <p>Frontend | React | Next </p>
            </div>

            <div className={styled['card-social-media']}>
              {socials.map((social) => (
                <SocialLink
                  icon={social.id}
                  key={social.id}
                  href={social.path}
                  label={social.label}
                />
              ))}
            </div>
          </div>
          <div className={styled['hero-info-wrapper']}>
            <div className={styled['hero-title']}>
              <h1>Hello there!</h1>
              <span>✌</span>
            </div>
            <p>
              I’m Gustavo Oliveira, a passionate frontend developer
              crafting web experiences.
            </p>

            <ul>
              <li>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit
                </span>
              </li>
              <li>
                <span>
                  Curabitur ac vehicula dui, iaculis varius est. Nulla
                  facilisi
                </span>
              </li>
              <li>
                <span>
                  Donec urna eros, ultrices a diam sit amet, molestie
                  fringilla justo
                </span>
              </li>
              <li>
                <span>
                  Fusce ultricies, massa non scelerisque hendrerit
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
