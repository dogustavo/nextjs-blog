import { createContext, ReactNode, useState } from 'react'

interface IOverlay {
  isOpen: boolean
  setIsOverlayOpen: (prop: boolean) => void
}

export const OverlayContext = createContext({} as IOverlay)

export default function OverlayProvider({
  children
}: {
  children: ReactNode
}) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  return (
    <OverlayContext.Provider
      value={{
        isOpen: isOverlayOpen,
        setIsOverlayOpen
      }}
    >
      {children}
    </OverlayContext.Provider>
  )
}
