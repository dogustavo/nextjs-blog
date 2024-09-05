'use client'
import ThemeProvider from 'context/theme'

export default function ProviderTheme({
  children,
  cookieTheme
}: {
  children: React.ReactNode
  cookieTheme: string
}) {
  return (
    <ThemeProvider cookieTheme={cookieTheme}>
      {children}
    </ThemeProvider>
  )
}
