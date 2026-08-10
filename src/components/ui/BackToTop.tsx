import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_20px_rgba(80,70,229,0.4)] hover:shadow-[0_0_30px_rgba(80,70,229,0.6)] hover:-translate-y-1 transition-all"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: "spring" }}
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
