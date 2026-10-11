import React, { createContext, useContext } from "react"

export type Theme = "light"

type ThemeProviderState = {
  theme: "light"
  resolvedTheme: "light"
}

const initialState: ThemeProviderState = {
  theme: "light",
  resolvedTheme: "light",
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("dark")
    root.classList.add("light")
  }, [])

  return (
    <ThemeProviderContext.Provider value={{ theme: "light", resolvedTheme: "light" }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeProviderContext)
