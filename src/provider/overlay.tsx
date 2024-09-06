'use client'

import OverlayProvider from 'context/overlay'

export default function ProviderOverlay({
  children
}: {
  children: React.ReactNode
}) {
  return <OverlayProvider>{children}</OverlayProvider>
}
