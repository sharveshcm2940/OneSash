import React from "react"

interface SashLogoProps {
  className?: string
  showWordmark?: boolean
  wordmarkClassName?: string
}

export const SashLogo: React.FC<SashLogoProps> = ({
  className = "w-8 h-8",
  showWordmark = false,
  wordmarkClassName = ""
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${wordmarkClassName}`}>
      {/* 
        OneSash Pure Black & White Keystone Ligature:
        A pristine monochrome mark where the Monolith "1" is pure black,
        the companion Sash wing is rich charcoal, and the optical core is pure white.
      */}
      <div className={`relative ${className} flex-shrink-0 flex items-center justify-center group`}>
        <svg
          viewBox="0 0 32 32"
          className="w-full h-full transition-transform duration-200 ease-out group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="OneSash Logo Mark"
        >
          {/* Wing A: The Monolith Pillar ("1" Anchor - Pure Black) */}
          <path
            d="M6 25.5V16.5L14.5 8H18.5V11.5L11.5 18.5V25.5H6Z"
            fill="#000000"
          />

          {/* Wing B: The Dynamic Kinetic Sash ("S" Counter-Keystone - Crisp Deep Charcoal) */}
          <path
            d="M26 6.5V15.5L17.5 24H13.5V20.5L20.5 13.5V6.5H26Z"
            fill="#404040"
          />

          {/* Optical Axis Joinery Accent (Pristine White Core with Black Ring) */}
          <circle cx="16" cy="16" r="1.5" fill="#FFFFFF" stroke="#000000" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Refined Pure Black & White Wordmark */}
      {showWordmark && (
        <div className="flex items-center gap-2 text-left">
          <span className="font-heading font-bold text-[20px] text-black tracking-tight leading-none">
            One<span className="text-neutral-500">Sash</span>
          </span>
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-black shadow-xs"
            title="Studio Available for Engineering Projects"
          />
        </div>
      )}
    </div>
  )
}
