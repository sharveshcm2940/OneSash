import React, { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { SashLogo } from "../SashLogo"

interface CounterCycle {
  badge: string
  word: string
  subtitlePrefix: string
  subtitleEmphasis: string
  subtitleSuffix: string
}

const CYCLES: CounterCycle[] = [
  {
    badge: "NO. 001 / 006",
    word: "ONESASH",
    subtitlePrefix: "Software engineered around how your business ",
    subtitleEmphasis: "actually works",
    subtitleSuffix: "."
  },
  {
    badge: "NO. 002 / 006",
    word: "PRODUCT",
    subtitlePrefix: "Custom applications and digital platforms for ",
    subtitleEmphasis: "real operations",
    subtitleSuffix: "."
  },
  {
    badge: "NO. 003 / 006",
    word: "SYSTEMS",
    subtitlePrefix: "High-performance architectures, zero ",
    subtitleEmphasis: "agency bloat",
    subtitleSuffix: "."
  },
  {
    badge: "NO. 004 / 006",
    word: "DIGITAL",
    subtitlePrefix: "Modern web platforms and cloud engines ",
    subtitleEmphasis: "built to scale",
    subtitleSuffix: "."
  },
  {
    badge: "NO. 005 / 006",
    word: "CRAFTED",
    subtitlePrefix: "100% intellectual property ownership, ",
    subtitleEmphasis: "engineered by hand",
    subtitleSuffix: "."
  },
  {
    badge: "NO. 006 / 006",
    word: "SHIPPED",
    subtitlePrefix: "Production releases delivered on regular cycles with ",
    subtitleEmphasis: "zero friction",
    subtitleSuffix: "."
  }
]

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")

interface ReelProps {
  char: string
  cycleCount: number
  reelIndex: number
}

const MechanicalReel: React.FC<ReelProps> = ({
  char,
  cycleCount,
  reelIndex
}) => {
  const shouldReduceMotion = useReducedMotion()

  // Build a strip of characters ending at target character, with 1 trailing character
  const { strip, targetIndex } = useMemo(() => {
    const items: string[] = []
    // Preceding characters to simulate physical tumbler roll
    const stepCount = 6 + (reelIndex % 3) * 2

    // Item 0: start character
    items.push(ALPHABET[(reelIndex * 5 + cycleCount) % ALPHABET.length])

    for (let i = 1; i <= stepCount; i++) {
      const r = ALPHABET[(reelIndex * 7 + i * 4 + cycleCount * 3) % ALPHABET.length]
      items.push(r)
    }

    // Target landed character
    const targetIdx = items.length
    items.push(char.toUpperCase())

    // Trailing item so bottom curve has a character partially visible
    const nextChar = ALPHABET[(ALPHABET.indexOf(char.toUpperCase()) + 1) % ALPHABET.length]
    items.push(nextChar)

    return { strip: items, targetIndex: targetIdx }
  }, [char, cycleCount, reelIndex])

  // Mathematical centering for cylindrical aperture:
  // Aperture height (~84px) / Row height (~52px) ratio is ~1.61.
  // Centering offset fraction is (1.61 - 1) / 2 = ~0.30 row heights.
  // Translating by -( (targetIndex - 0.30) / totalItems ) * 100% centers the target row precisely
  // regardless of screen resolution or scale.
  const totalItems = strip.length
  const targetOffsetPercent = -((targetIndex - 0.30) / totalItems) * 100

  if (shouldReduceMotion) {
    return (
      <div className="relative w-8 sm:w-11 md:w-[52px] h-16 sm:h-20 md:h-[84px] bg-[#F4F4F0] border-r border-black/15 flex items-center justify-center font-heading font-black text-2xl sm:text-3xl md:text-4xl text-[#111111] select-none">
        {char}
      </div>
    )
  }

  return (
    <div className="relative w-8 sm:w-11 md:w-[52px] h-16 sm:h-20 md:h-[84px] bg-[#F4F4F0] border-r border-black/15 overflow-hidden select-none">
      {/* 3D Cylindrical Curvature Shading (deep top/bottom shadows for cylinder tumbler depth) */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.25) 18%, rgba(0,0,0,0.02) 34%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.02) 66%, rgba(0,0,0,0.25) 82%, rgba(0,0,0,0.68) 100%)"
        }}
      />

      {/* Specular apex reflection line */}
      <div className="absolute top-[49%] left-0 right-0 h-[1.5px] bg-white/50 pointer-events-none z-10" />

      {/* Moving Drum Strip */}
      <motion.div
        key={`${char}-${cycleCount}-${reelIndex}`}
        className="w-full flex flex-col items-center"
        initial={{ y: "0%" }}
        animate={{ y: `${targetOffsetPercent}%` }}
        transition={{
          duration: 1.18 + reelIndex * 0.08,
          ease: [0.14, 0.98, 0.28, 1], // snappy mechanical deceleration
          delay: reelIndex * 0.04
        }}
      >
        {strip.map((c, idx) => (
          <div
            key={idx}
            className="w-full h-10 sm:h-12 md:h-[52px] flex items-center justify-center font-heading font-black text-2xl sm:text-3xl md:text-4xl text-[#111111] tracking-tight shrink-0"
          >
            {c}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export const MechanicalRollingCounter: React.FC<{ 
  className?: string
  align?: "left" | "center" 
}> = ({
  className = "",
  align = "left"
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0)
  const [cycleCount, setCycleCount] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)

  const active = CYCLES[currentIdx]
  const targetChars = active.word.split("")

  const advanceCycle = () => {
    setCurrentIdx(prev => (prev + 1) % CYCLES.length)
    setCycleCount(prev => prev + 1)
  }

  // Automatic gentle rotation every 4.6 seconds
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      advanceCycle()
    }, 4600)
    return () => clearInterval(timer)
  }, [isPaused])

  const alignClass = align === "left" 
    ? "items-start text-left" 
    : "items-center text-center"

  return (
    <div 
      className={`flex flex-col ${alignClass} my-3 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Top Recessed Badge (NO. 001 / 006) */}
      <div className="mb-2.5">
        <span className="inline-block px-3 py-1 rounded-md bg-[#171717] text-[#FAFAF8] font-mono text-[10px] sm:text-[11px] font-bold tracking-widest uppercase border border-black/30 shadow-xs">
          {active.badge}
        </span>
      </div>

      {/* 2. Central Mechanical Counter Aperture Frame & Bearing Pin */}
      <div className="inline-flex flex-col items-center">
        <button
          type="button"
          onClick={advanceCycle}
          title="Click to spin counter"
          className="group relative cursor-pointer focus:outline-none transition-transform active:scale-[0.99] text-left"
          aria-label="Mechanical rolling counter. Click to advance."
        >
          {/* Outer Industrial Housing Frame - Enlarged with refined shadows */}
          <div className="relative inline-flex items-center bg-[#171717] p-2.5 sm:p-3 md:p-3.5 rounded-xl sm:rounded-2xl border border-black/40 shadow-[0_12px_28px_rgba(0,0,0,0.22),inset_0_1px_1px_rgba(255,255,255,0.18)]">
            
            {/* Inner Recessed Bezel Window */}
            <div className="flex items-center overflow-hidden rounded-lg sm:rounded-xl border border-black/50 shadow-[inset_0_5px_12px_rgba(0,0,0,0.6),inset_0_-5px_12px_rgba(0,0,0,0.6)] bg-[#E6E6E2]">
              
              {/* Mechanical Cylinders */}
              <div className="flex items-center">
                {targetChars.map((char, idx) => (
                  <MechanicalReel
                    key={idx}
                    char={char}
                    cycleCount={cycleCount}
                    reelIndex={idx}
                  />
                ))}
              </div>

              {/* Right Side: Studio Chip Card with OneSash Logo Badge */}
              <div className="h-16 sm:h-20 md:h-[84px] w-14 sm:w-18 md:w-22 bg-gradient-to-br from-[#1C1C1E] to-[#111113] border-l border-black/40 p-2 sm:p-2.5 flex flex-col justify-between shrink-0 relative overflow-hidden select-none">
                {/* Header row: Gold chip + Mini OneSash Icon */}
                <div className="flex items-center justify-between w-full">
                  <div className="w-5 h-3.5 sm:w-6 sm:h-4.5 rounded-xs sm:rounded bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-400 border border-neutral-100/80 shadow-xs flex items-center justify-center">
                    <div className="w-full h-[0.5px] bg-neutral-600/60" />
                  </div>
                  <SashLogo className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-80" />
                </div>
                
                {/* Studio labels */}
                <div className="text-right">
                  <span className="block font-heading font-black text-[9px] sm:text-[10px] md:text-[11px] text-white tracking-wider leading-none">
                    ONESASH
                  </span>
                  <span className="block font-mono text-[7px] sm:text-[8px] text-white/50 tracking-tight mt-0.5">
                    STUDIO · 2026
                  </span>
                </div>
              </div>

            </div>

          </div>
        </button>

        {/* 3. Center Analog Bearing Pin / Knob Directly Centered Below Window */}
        <div className="mt-3 flex items-center justify-center">
          <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 rounded-full bg-[radial-gradient(circle_at_32%_32%,#777777_0%,#262626_50%,#0d0d0d_100%)] border border-black/40 shadow-[0_3px_5px_rgba(0,0,0,0.3)]" />
        </div>
      </div>

      {/* 4. Synchronized Editorial Subtitle Typography */}
      <div className={`min-h-[2.5rem] mt-1.5 flex items-center ${align === "left" ? "justify-start text-left" : "justify-center text-center"} max-w-lg`}>
        <AnimatePresence mode="wait">
          <motion.p
            key={active.word}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="text-xs sm:text-sm md:text-base font-normal text-[#444444] leading-relaxed"
          >
            {active.subtitlePrefix}
            <span className="font-heading font-semibold italic text-[#171717]">
              {active.subtitleEmphasis}
            </span>
            {active.subtitleSuffix}
          </motion.p>
        </AnimatePresence>
      </div>

    </div>
  )
}
