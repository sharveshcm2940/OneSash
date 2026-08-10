import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft, Home } from "lucide-react"

export const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | Saash Technocrafts</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-2000" />
        <div className="text-center relative z-10">
          <motion.div
            className="text-[10rem] md:text-[15rem] font-heading font-black leading-none text-gradient select-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            404
          </motion.div>
          <motion.h1
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Oops! Page Not Found
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg mb-10 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            The page you're looking for has either been moved, deleted, or never existed. Let's get you back on track.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(80,70,229,0.3)]"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-border font-semibold hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </motion.div>
        </div>
      </div>
    </>
  )
}
