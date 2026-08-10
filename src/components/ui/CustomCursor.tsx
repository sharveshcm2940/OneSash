import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Hide cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-accent rounded-full pointer-events-none z-[9999] shadow-sm"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
          mass: 0.3,
        }}
      />
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border border-accent/60 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          scale: isHovering ? 1.4 : 1,
          opacity: isHovering ? 0.3 : 0.8,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 22,
          mass: 0.5,
        }}
      />
    </>
  )
}
