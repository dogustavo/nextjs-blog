import React, { SVGProps } from 'react'

import styled from './styles.module.scss'

const LogoComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM19.2 5.75994L17.92 5.43994L15.04 7.35994L11.52 9.59994L8.95997 11.8399L7.35997 13.7599L5.43997 16.9599V19.8399L6.07997 22.0799L7.67997 23.6799L9.91997 24.6399L15.68 23.9999L19.2 23.0399L24.32 21.4399L26.56 19.5199L26.88 17.9199L24.64 15.3599L19.84 12.7999L17.6 14.3999L17.92 16.9599L18.56 17.9199L15.36 18.8799L13.12 19.5199H9.59997L12.16 15.9999L15.68 13.1199L21.44 9.91994V7.35994L21.12 7.03994L19.2 6.39994V5.75994Z"
      className={styled['logo-accent']}
    />
  </svg>
)
export default LogoComponent
