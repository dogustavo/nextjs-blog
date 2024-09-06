import type { Metadata } from 'next'
import { Work_Sans, Fugaz_One } from 'next/font/google'
import './globals.scss'
import { cookies } from 'next/headers'
import { Navigator, Footer, Overlay } from 'common'

import ThemeProvider from 'provider/theme'
import OverlayProvider from 'provider/overlay'

const fugaz_one = Fugaz_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-fugaz-one'
})

const work_sans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-work-sans'
})

export const metadata: Metadata = {
  title: 'Gustavo Blog',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = cookies().get('theme-color')?.value || 'dark'

  return (
    <html
      lang="pt-BR"
      className={`${work_sans.variable} ${fugaz_one.variable}`}
    >
      <ThemeProvider cookieTheme={theme}>
        <OverlayProvider>
          <body data-theme={theme}>
            <Navigator />
            {children}
            <Footer />

            <Overlay />
          </body>
        </OverlayProvider>
      </ThemeProvider>
    </html>
  )
}
