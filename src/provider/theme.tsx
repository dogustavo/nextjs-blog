'use client'
import { useContext } from 'react'
import ThemeProvider, { ThemeContext } from 'context/theme'

// const Wrapper = ({ children }: { children: React.ReactNode }) => {
//   const { theme } = useContext(ThemeContext)
//   return
// }

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
