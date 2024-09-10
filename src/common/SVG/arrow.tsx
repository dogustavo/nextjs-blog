import { SVGProps } from 'react'

import styled from './styles.module.scss'

const ArrowSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={12}
    fill="none"
    {...props}
  >
    <path
      className={styled['svg-fill']}
      d="M.295 10.59 4.875 6 .295 1.41 1.705 0l6 6-6 6-1.41-1.41Z"
    />
  </svg>
)

export default ArrowSvg
