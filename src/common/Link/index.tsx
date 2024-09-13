'use client'

import Link, { LinkProps } from 'next/link'

interface ILinkProp extends LinkProps {
  children: React.ReactNode
  className?: string
}

export default function CustomLink({
  children,
  href,
  ...rest
}: ILinkProp) {
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  )
}
