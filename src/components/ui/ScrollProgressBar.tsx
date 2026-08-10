import { motion, useScroll, useSpring } from "framer-motion"

/** Thin scroll-progress bar at the very top of the viewport */
export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-foreground origin-left z-[100]"
      style={{ scaleX }}
    />
  )
}
