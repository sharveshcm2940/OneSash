import React from "react"

export const SashLogo = ({ className = "w-7 h-7" }: { className?: string }) => {
  return (
    <div className={`relative ${className} flex items-center justify-center flex-shrink-0`}>
      <svg
        viewBox="0 0 40 40"
        className="w-full h-full text-foreground"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Architectural onesash Monogram Icon: Crisp, clean, engineering block */}
        <rect x="2" y="2" width="36" height="36" rx="6" fill="currentColor" className="text-foreground fill-current" />
        <path
          d="M14 12H19V28H14"
          stroke="var(--color-background)"
          strokeWidth="3"
          strokeLinecap="square"
        />
        <path
          d="M26 12H21C18.5 12 18.5 18 21 18C23.5 18 23.5 24 21 24H26"
          stroke="var(--color-background)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

