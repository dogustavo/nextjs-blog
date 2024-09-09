import { getAllTags } from 'services'
import { headers } from 'next/headers'
import Filter from './filter'

import styled from './styles.module.scss'

import { isMobile } from 'utils/isMobile'

export default async function Aside() {
  const tags = await getAllTags()
  const userAgent = headers().get('user-agent') || ''
  const mobileCheck = isMobile(userAgent)

  if ('hasError' in tags) return ''

  return (
    <aside className={styled['filter-aside']}>
      <Filter tags={tags.data} isMobile={mobileCheck} />
    </aside>
  )
}
