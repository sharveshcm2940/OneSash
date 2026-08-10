import { motion } from "framer-motion"
import { Code2, Database, LayoutTemplate, Smartphone, Server, Cpu, Globe } from "lucide-react"

export const TechOrbit = () => {
  return (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center mx-auto">
      {/* Center Core */}
      <div className="absolute z-10 flex items-center justify-center w-24 h-24 rounded-full bg-card border border-border shadow-[0_0_40px_rgba(255,255,255,0.1)] dark:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
        <Globe className="w-10 h-10 text-primary" />
        <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-primary/50" />
      </div>

      {/* Orbit Ring 1 (Inner) */}
      <div className="absolute w-[240px] h-[240px] border border-border/50 rounded-full">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {/* Node 1 */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-lg">
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
              <Code2 className="w-4 h-4 text-muted-foreground" />
            </motion.div>
          </div>
          {/* Node 2 */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-lg">
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
              <Server className="w-4 h-4 text-muted-foreground" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Orbit Ring 2 (Middle) */}
      <div className="absolute w-[360px] h-[360px] border border-border/40 rounded-full">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {/* Node 3 */}
          <div className="absolute top-1/4 -right-5 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shadow-lg">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
              <Database className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </div>
          {/* Node 4 */}
          <div className="absolute bottom-1/4 -left-5 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shadow-lg">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
              <LayoutTemplate className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Orbit Ring 3 (Outer) */}
      <div className="absolute w-[480px] h-[480px] border border-border/30 rounded-full hidden sm:block">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          {/* Node 5 */}
          <div className="absolute -top-6 left-1/3 w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center shadow-lg">
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }}>
              <Smartphone className="w-6 h-6 text-muted-foreground" />
            </motion.div>
          </div>
          {/* Node 6 */}
          <div className="absolute -bottom-6 right-1/3 w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center shadow-lg">
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }}>
              <Cpu className="w-6 h-6 text-muted-foreground" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
    </div>
  )
}
