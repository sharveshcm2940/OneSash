import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return }
    let id: string
    try { id = decodeURIComponent(hash.slice(1)) } catch { return }
    const scroll = () => {
      const element = document.getElementById(id)
      if (!element) return false
      element.scrollIntoView({ block: "start" })
      return true
    }
    if (scroll()) return
    // Lazy routes may not have mounted yet. Stop once the target exists.
    const observer = new MutationObserver(() => { if (scroll()) observer.disconnect() })
    observer.observe(document.body, { childList: true, subtree: true })
    const timeout = window.setTimeout(() => observer.disconnect(), 10000)
    return () => { observer.disconnect(); window.clearTimeout(timeout) }
  }, [pathname, hash])
  return null
}
