import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, ExternalLink, X } from "lucide-react"

export const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const defaultMessage = encodeURIComponent(
    "Hi onesash team! I'm interested in discussing a software project with you."
  )

  const contacts = [
    { label: "Primary Support", phone: "918903467843", formatted: "+91 89034 67843" },
    { label: "Secondary Line", phone: "919980399557", formatted: "+91 99803 99557" },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mb-3 p-3 rounded-2xl bg-card border border-border shadow-2xl backdrop-blur-md w-64 space-y-2"
          >
            <div className="flex items-center justify-between px-1 pb-1 border-b border-border">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                Connect on WhatsApp
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            {contacts.map((c) => (
              <a
                key={c.phone}
                href={`https://wa.me/${c.phone}?text=${defaultMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-foreground transition-all group"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase font-semibold text-[#25D366]">
                    {c.label}
                  </div>
                  <div className="text-xs font-mono font-bold text-foreground">
                    {c.formatted}
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#25D366] group-hover:translate-x-0.5 transition-transform" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp with onesash"
        className="whatsapp-button flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)] border border-white/20 transition-all font-sans cursor-pointer"
      >
        <span className="relative flex items-center justify-center">
          <MessageCircle className="w-5 h-5 fill-white/10 stroke-white stroke-[2.2]" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping opacity-75" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full" />
        </span>

        <div className="flex flex-col text-left leading-none">
          <span className="text-[11px] font-bold uppercase tracking-wider text-white/90">
            WhatsApp Us
          </span>
          <span className="text-[10px] font-mono font-semibold text-white/80 tracking-tight">
            +91 89034 / +91 99803
          </span>
        </div>
      </motion.button>
    </div>
  )
}

