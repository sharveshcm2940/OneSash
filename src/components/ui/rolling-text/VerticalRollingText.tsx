import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

interface VerticalRollingTextProps {
  phrases?: string[]
  intervalMs?: number
  className?: string
  textClassName?: string
}

const DEFAULT_PHRASES = [
  "Built with precision.",
  "Designed for people.",
  "Engineered for growth.",
  "Created for what's next.",
]

export const VerticalRollingText = ({
  phrases = DEFAULT_PHRASES,
  intervalMs = 3200,
  className = "",
  textClassName = "text-[#1D1D1F]",
}: VerticalRollingTextProps) => {
  const [index, setIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) return

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length)
    }, intervalMs)

    return () => clearInterval(timer)
  }, [phrases.length, intervalMs, shouldReduceMotion])

  if (shouldReduceMotion) {
    return (
      <span className={`inline-block ${className} ${textClassName}`}>
        {phrases[0]}
      </span>
    )
  }

  return (
    <div
      className={`relative h-[1.35em] overflow-hidden inline-flex items-center justify-center align-middle ${className}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={index}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block whitespace-nowrap will-change-transform ${textClassName}`}
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
