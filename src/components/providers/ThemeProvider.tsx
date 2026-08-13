import { createContext, useContext, useEffect, useState } from "react"

export type Theme = "dark" | "light"

type ThemeProviderState = {
  theme: "dark" | "light"
  resolvedTheme: "dark" | "light"
}

const getTimeBasedTheme = (): "dark" | "light" => {
  const hours = new Date().getHours()
  // Daytime (6:00 AM to 5:59 PM) -> light theme
  // Nighttime (6:00 PM to 5:59 AM) -> dark theme
  return hours >= 6 && hours < 18 ? "light" : "dark"
}

const initialState: ThemeProviderState = {
  theme: getTimeBasedTheme(),
  resolvedTheme: getTimeBasedTheme(),
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">(getTimeBasedTheme)

  useEffect(() => {
    const root = window.document.documentElement

    const applyTheme = () => {
      const activeTheme = getTimeBasedTheme()
      root.classList.remove("light", "dark")
      root.classList.add(activeTheme)
      setResolvedTheme(activeTheme)
    }

    applyTheme()
    // Re-evaluate every 5 seconds to automatically react to system time updates
    const interval = setInterval(applyTheme, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <ThemeProviderContext.Provider value={{ theme: resolvedTheme, resolvedTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeProviderContext)

