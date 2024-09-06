'use client'

import { useContext } from 'react'
import styled from './styles.module.scss'
import { OverlayContext } from 'context/overlay'

export default function Overlay() {
  const { isOpen, setIsOverlayOpen } = useContext(OverlayContext)
  return (
    <div
      className={`${styled.overlay} ${
        isOpen ? styled['is-open'] : ''
      }`}
      // onClick={() => setIsOverlayOpen(false)}
    />
  )
}
