'use client'

import { ThemeProvider as ColorThemeProvider } from "next-themes"

const Provider = ({ children }) => {
  return (
    <ColorThemeProvider>
      {children}
    </ColorThemeProvider>
  )
}

export default Provider