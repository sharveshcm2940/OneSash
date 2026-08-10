import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_32px_rgba(37,211,102,0.6)] hover:scale-110 transition-all"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-white" />
    </motion.a>
  )
}
