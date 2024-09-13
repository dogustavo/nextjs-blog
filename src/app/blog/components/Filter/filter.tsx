'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { ITag } from 'types/tag'

import styled from './styles.module.scss'
import { useEffect, useState } from 'react'

import { ArrowSvg } from 'common/SVG'

interface IFilter {
  tags: ITag[]
  isMobile: boolean
}

const FilterHeader = ({
  isMobile,
  isOpen
}: {
  isMobile: boolean
  isOpen: boolean
}) =>
  isMobile ? (
    <h3
      className={`${styled['title-mobile']} ${
        isOpen ? styled['is-open'] : ''
      }`}
    >
      <ArrowSvg />
      Filtros
    </h3>
  ) : (
    <h3>Filtros</h3>
  )

export default function Filter({ tags, isMobile }: IFilter) {
  const params = useSearchParams()
  const selected = params.get('filters[tags][tag][$in]')

  const [filterIsOpen, setFilterIsOpen] = useState(false)

  useEffect(() => {
    setFilterIsOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  const handleClick = () => {
    setFilterIsOpen((prev) => !prev)
  }

  return (
    <>
      <div onClick={isMobile ? handleClick : undefined}>
        <FilterHeader isMobile={isMobile} isOpen={filterIsOpen} />
      </div>

      <div
        className={`${styled['filter-aside-wrapper']} ${
          filterIsOpen ? styled['is-visible'] : ''
        }`}
      >
        <div
          className={`${styled['filter-wrapper']} ${
            filterIsOpen ? styled['is-visible'] : ''
          }`}
        >
          {tags.map((tag) => (
            <Link
              href={`/blog?filters[tags][tag][$in]=${tag.attributes.tag}`}
              className={`${styled['filter-item']} ${
                selected === tag.attributes.tag
                  ? styled['is-selected']
                  : ''
              }`}
              key={tag.id}
            >
              {tag.attributes.tag}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
