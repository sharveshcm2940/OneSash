import React, { useRef, useState } from "react"
import { motion } from "framer-motion"

interface Card3DTiltProps {
  children: React.ReactNode
  className?: string
  maxTilt?: number
  glareOpacity?: number
}

export const Card3DTilt: React.FC<Card3DTiltProps> = ({
  children,
  className = "",
  maxTilt = 12,
  glareOpacity = 0.15,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width
    const yPct = mouseY / height

    const rX = (0.5 - yPct) * maxTilt
    const rY = (xPct - 0.5) * maxTilt

    setRotateX(rX)
    setRotateY(rY)

    setGlarePos({
      x: xPct * 100,
      y: yPct * 100,
      opacity: glareOpacity,
    })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlarePos((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <div className="perspective-1000 w-full" style={{ perspective: "1000px" }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.5,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className={`relative transition-shadow duration-300 ${className}`}
      >
        {/* Specular Glare Effect */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-20"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 70%)`,
            opacity: glarePos.opacity,
          }}
        />
        {children}
      </motion.div>
    </div>
  )
}
