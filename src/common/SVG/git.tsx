import { SVGProps } from 'react'

import styled from './styles.module.scss'

const GitSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 15.668c.45.054.783.26 1 .618.326.537 1.537 2.526 2.913 2.526H9.5M10.37 15.391c-.58.637-.869 1.24-.869 1.813V21"
      className={styled['logo-accent']}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.172 15.299c1.202-.25 2.293-.682 3.14-1.316 1.448-1.084 2.188-2.758 2.188-4.411 0-1.16-.44-2.243-1.204-3.16-.425-.511.819-3.872-.286-3.359-1.105.514-2.725 1.198-3.574.947-.909-.268-1.9-.416-2.936-.416-.9 0-1.766.111-2.574.317-1.174.298-2.296-.363-3.426-.848-1.13-.484-.513 3.008-.849 3.422C4.921 7.38 4.5 8.44 4.5 9.572c0 1.653.895 3.327 2.343 4.41.965.722 2.174 1.183 3.527 1.41M15.172 15.299c.549.718.823 1.364.823 1.936V21"
      className={styled['logo-accent']}
    />
  </svg>
)
export default GitSvg
