import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react"

export const CTABannerSection: React.FC = () => {
  return (
    <section id="contact" className="bg-[#171717] text-white py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background ambient grid */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10 space-y-8">
        
        {/* Studio Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-white/90">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>Have an idea or a business problem?</span>
        </div>

        {/* Exact Heading: 4 words */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold tracking-tight text-white leading-[1.1]">
          Have something in mind?
        </h2>

        {/* Exact Supporting Text: 13 words */}
        <p className="text-base sm:text-xl text-[#A0A0A0] font-normal leading-relaxed max-w-xl mx-auto">
          Tell us what you're planning. We'll help you figure out the next step.
        </p>

        {/* Primary CTA: "Talk About Your Idea" & WhatsApp */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-md bg-white hover:bg-[#F1F1EE] text-[#171717] text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-lg"
            >
              <span>Talk About Your Idea</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <a
            href="https://wa.me/918903467843"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-md bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-semibold transition-all inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Secondary Contact Options: Email, Phone & WhatsApp */}
        <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A0A0A0]">
          <a
            href="mailto:onesash.contact@gmail.com"
            className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
          >
            <Mail className="w-4 h-4 text-white" />
            <span className="font-medium">onesash.contact@gmail.com</span>
          </a>

          <span className="text-white/20 hidden sm:inline">|</span>

          <a
            href="tel:+919980399557"
            className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
          >
            <span className="font-medium">Call: +91 99803 99557</span>
          </a>

          <span className="text-white/20 hidden sm:inline">|</span>

          <a
            href="https://wa.me/918903467843"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span className="font-medium">WhatsApp: +91 89034 67843</span>
          </a>
        </div>

        <p className="text-[11px] text-white/40 pt-2">
          Chennai, India & Bangalore, India · We aim to reply within one business day
        </p>

      </div>
    </section>
  )
}
