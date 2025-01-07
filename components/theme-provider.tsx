"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useThemeStore } from "@/store/use-theme-store"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)
  const { theme } = useThemeStore()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <NextThemesProvider 
      {...props} 
      defaultTheme={theme}
      enableSystem
      attribute="class"
      disableTransitionOnChange
    >
      {mounted ? children : null}
    </NextThemesProvider>
  )
}
