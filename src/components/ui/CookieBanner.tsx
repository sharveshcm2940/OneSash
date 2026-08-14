import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie, X } from "lucide-react"

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted/declined
    const consent = localStorage.getItem("onesash-cookie-consent")
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("onesash-cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("onesash-cookie-consent", "declined")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          <div className="container mx-auto max-w-4xl pointer-events-auto">
            <div className="bg-card border border-border rounded-2xl shadow-2xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-start gap-4 relative z-10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Cookie className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base mb-1">We value your privacy</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto relative z-10">
                <button
                  onClick={handleDecline}
                  className="flex-1 md:flex-none px-5 py-2.5 rounded-xl border border-border text-sm font-semibold hover:bg-muted transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 md:flex-none px-5 py-2.5 rounded-xl bg-foreground text-background text-sm font-semibold hover:scale-105 transition-transform"
                >
                  Accept All
                </button>
              </div>

              {/* Close button for absolute top right */}
              <button 
                onClick={handleDecline}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="Close cookie banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
