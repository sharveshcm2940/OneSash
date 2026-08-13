import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "../providers/ThemeProvider"

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { resolvedTheme } = useTheme()

  const isDark = resolvedTheme === "dark"

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
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseDown = () => setIsMouseDown(true)
    const handleMouseUp = () => setIsMouseDown(false)

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  if (!isVisible) return null

  // Light color cursor for dark theme, dark color cursor for light theme
  const dotClass = isDark
    ? "bg-white text-black shadow-[0_0_12px_rgba(255,255,255,0.9)]"
    : "bg-[#141412] text-white shadow-[0_0_12px_rgba(0,0,0,0.35)]"

  const ringClass = isDark
    ? "border border-white/90 bg-white/10"
    : "border border-[#141412]/80 bg-black/10"

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className={`fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] transition-colors duration-300 ${dotClass}`}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isMouseDown ? 0.6 : isHovering ? 1.75 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 35,
          mass: 0.2,
        }}
      />
      {/* Outer Ring */}
      <motion.div
        className={`fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[9998] transition-colors duration-300 ${ringClass}`}
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          scale: isMouseDown ? 0.75 : isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.9 : 0.7,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 25,
          mass: 0.4,
        }}
      />
    </>
  )
}

