'use client'

import styled from './styles.module.scss'

interface IOverlay {
  isOpen: boolean
  setIsOverlayOpen: (prop: boolean) => void
}

export default function Overlay({
  isOpen,
  setIsOverlayOpen
}: IOverlay) {
  return (
    <div
      className={`${styled.overlay} ${
        isOpen ? styled['is-open'] : ''
      }`}
      onClick={() => setIsOverlayOpen(false)}
    />
  )
}
