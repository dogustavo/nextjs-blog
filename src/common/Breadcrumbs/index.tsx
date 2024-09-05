import Link from 'next/link'
import styled from './styles.module.scss'

type IBreadcrumbProp = {
  breadcrumbs: {
    path: string
    name: string
  }[]
}

export default function Breadcrumb({ breadcrumbs }: IBreadcrumbProp) {
  return (
    <ul className={styled.breadcrumb}>
      {breadcrumbs.map(({ name, path }, key) => (
        <li key={key}>
          {key + 1 === breadcrumbs.length ? (
            <span>{name}</span>
          ) : (
            <Link href={path}>{name}</Link>
          )}
        </li>
      ))}
    </ul>
  )
}
