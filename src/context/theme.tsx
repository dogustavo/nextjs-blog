import { createContext, ReactNode, useEffect, useState } from 'react'

interface ITheme {
  theme: string
  toogleTheme: () => void
}

export const ThemeContext = createContext({} as ITheme)

export default function ThemeProvider({
  children,
  cookieTheme
}: {
  children: ReactNode
  cookieTheme: string
}) {
  const [theme, setTheme] = useState(cookieTheme)

  const toogleTheme = () => {
    const thems = theme === 'dark' ? 'light' : 'dark'

    setTheme(thems)
    document.cookie = `theme-color=${thems}; path=/; max-age=31536000; secure; sameSite=Strict`
    document.body.setAttribute('data-theme', thems)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toogleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
