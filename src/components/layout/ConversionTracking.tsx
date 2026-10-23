import { useEffect } from "react"
import { track } from "../../utils/analytics"

export function ConversionTracking() {
  useEffect(() => {
    const clicked = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a") : null
      if (!link) return
      const href = link.getAttribute("href") || ""
      const channel = href.startsWith("https://wa.me/") ? "whatsapp" : href.startsWith("mailto:") ? "email" : href.startsWith("tel:") ? "phone" : href.startsWith("/contact") ? "contact" : ""
      if (channel) track("cta_click", { channel, placement: link.closest("header") ? "navigation" : link.closest("footer") ? "footer" : "page", path: window.location.pathname })
    }
    document.addEventListener("click", clicked)
    return () => document.removeEventListener("click", clicked)
  }, [])
  return null
}
