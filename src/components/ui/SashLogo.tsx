import React from "react"

interface SashLogoProps {
  className?: string
  showWordmark?: boolean
  wordmarkClassName?: string
}

export const SashLogo: React.FC<SashLogoProps> = ({
  className = "w-9 h-9",
  showWordmark = false,
  wordmarkClassName = ""
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${wordmarkClassName}`}>
      {/* Handcrafted Architectural OneSash Emblem */}
      <div className={`relative ${className} flex-shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 48 48"
          className="w-full h-full drop-shadow-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="OneSash Brand Emblem"
        >
          <defs>
            {/* Chassis background: Matte volcanic obsidian with subtle radial crest */}
            <radialGradient
              id="onesashChassisGlow"
              cx="35%"
              cy="30%"
              r="75%"
            >
              <stop offset="0%" stopColor="#2A2A32" />
              <stop offset="60%" stopColor="#151518" />
              <stop offset="100%" stopColor="#0B0B0D" />
            </radialGradient>

            {/* Vibrant Signature Studio Blue Sash Band */}
            <linearGradient id="onesashRoyalSash" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#1D4ED8" />
              <stop offset="35%" stopColor="#2563EB" />
              <stop offset="70%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#93C5FD" />
            </linearGradient>

            {/* Precision Horology 18K Gold Pivot Jewel */}
            <linearGradient id="onesashGoldRivet" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="45%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>

          {/* 1. Machined Obsidian Squircle Chassis with Dual Bezel */}
          <rect
            x="2"
            y="2"
            width="44"
            height="44"
            rx="12"
            fill="url(#onesashChassisGlow)"
            stroke="#383842"
            strokeWidth="1.4"
          />
          <rect
            x="3.6"
            y="3.6"
            width="40.8"
            height="40.8"
            rx="10.4"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="0.8"
          />

          {/* Watchmaker Cardinal Caliper Marks (12, 3, 6, 9 o'clock) */}
          <line x1="24" y1="4.5" x2="24" y2="7.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeLinecap="round" />
          <line x1="24" y1="40.5" x2="24" y2="43.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeLinecap="round" />
          <line x1="4.5" y1="24" x2="7.5" y2="24" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeLinecap="round" />
          <line x1="40.5" y1="24" x2="43.5" y2="24" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeLinecap="round" />

          {/* Corner Draftsman Alignment Crosshairs */}
          <path d="M8 12H10 M9 11V13" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
          <path d="M38 12H40 M39 11V13" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
          <path d="M8 36H10 M9 35V37" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
          <path d="M38 36H40 M39 35V37" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />

          {/* 2. Architectural "1" Structural Pillar Monolith (Pure Titanium White) */}
          {/* Ambient Shadow onto chassis */}
          <path
            d="M15.5 17L20.5 12H25.5V36H20.5V17.5L15.5 21V17Z"
            fill="#000000"
            opacity="0.6"
            transform="translate(0, 1.8)"
          />
          {/* Main White Titanium Pillar Face */}
          <path
            d="M15.5 17L20.5 12H25.5V36H20.5V17.5L15.5 21V17Z"
            fill="#FFFFFF"
          />
          {/* Polished Chamfer Flank */}
          <path
            d="M25.5 12H27.5V36H25.5V12Z"
            fill="#C4C4CC"
          />

          {/* 3. The Signature Cobalt Sash Ribbon (42° Architectural Cross-Brace) */}
          {/* Cast Contact Shadow onto pillar & background */}
          <path
            d="M9 36.5L34 11.5H39L14 36.5H9Z"
            fill="#000000"
            opacity="0.75"
            transform="translate(0, 2)"
          />
          {/* Main Sash Face in Royal Cobalt to Azure */}
          <path
            d="M9 36.5L34 11.5H39L14 36.5H9Z"
            fill="url(#onesashRoyalSash)"
          />
          {/* Razor Bevel Upper Gleam Edge */}
          <path
            d="M9 36.5L34 11.5H35.5L10.5 36.5H9Z"
            fill="#BFDBFE"
          />
          {/* 3D Material Thickness Return Flanks */}
          <path
            d="M9 36.5L14 36.5L15 39L10 39L9 36.5Z"
            fill="#1E3A8A"
          />
          <path
            d="M14 36.5L39 11.5V13.5L15 39L14 36.5Z"
            fill="#1D4ED8"
          />

          {/* 4. Watchmaker Center Optical Pivot & Registration Jewel */}
          <circle
            cx="24"
            cy="24"
            r="3.6"
            fill="url(#onesashGoldRivet)"
            stroke="#FFFFFF"
            strokeWidth="0.8"
          />
          {/* Specular Light Reflection */}
          <circle
            cx="23"
            cy="23"
            r="1.1"
            fill="#FFFFFF"
            opacity="0.95"
          />
          {/* Optical Axis Lens Bore */}
          <circle
            cx="24"
            cy="24"
            r="0.85"
            fill="#78350F"
          />
        </svg>
      </div>

      {/* Refined Handcrafted Studio Wordmark */}
      {showWordmark && (
        <div className="flex items-center gap-2 text-left">
          <span className="font-heading font-bold text-[20px] sm:text-[21px] text-[#171717] tracking-tight leading-none">
            One<span className="text-[#1459D9]">Sash</span>
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-xs" title="Studio Available" />
        </div>
      )}
    </div>
  )
}
