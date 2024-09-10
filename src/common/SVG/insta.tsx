import { SVGProps } from 'react'

import styled from './styles.module.scss'

const InstaSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      className={styled['logo-accent']}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.5 3h-9A4.5 4.5 0 0 0 3 7.5v9A4.5 4.5 0 0 0 7.5 21h9a4.5 4.5 0 0 0 4.5-4.5v-9A4.5 4.5 0 0 0 16.5 3Z"
    />
    <path
      className={styled['logo-accent']}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.462 11.487a3.5 3.5 0 1 1-6.925 1.026 3.5 3.5 0 0 1 6.925-1.026ZM17 6.5h.5"
    />
  </svg>
)
export default InstaSvg
