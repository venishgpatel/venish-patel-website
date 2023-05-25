'use client'

import { ThemeProvider as ColorThemeProvider } from 'next-themes'

const Provider = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <ColorThemeProvider>
      {children}
    </ColorThemeProvider>
  )
}

export default Provider