import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Home, Info, Briefcase, Phone, LayoutGrid, FileText, Code2, Users, Calculator as CalculatorIcon, Calendar as CalendarIcon, Download, X } from "lucide-react"
import { useNavigate } from "react-router-dom"

const routes = [
  { name: "Home", path: "/", icon: Home },
  { name: "About Us", path: "/about", icon: Info },
  { name: "Services", path: "/services", icon: Briefcase },
  { name: "Portfolio", path: "/portfolio", icon: LayoutGrid },
  { name: "Technologies", path: "/technologies", icon: Code2 },
  { name: "Contact", path: "/contact", icon: Phone },
  { name: "Project Calculator", path: "/calculator", icon: CalculatorIcon },
  { name: "Book Consultation", path: "/booking", icon: CalendarIcon },
  { name: "Blog", path: "/blog", icon: FileText },
  { name: "Careers", path: "/careers", icon: Users },
  { name: "Resources", path: "/resources", icon: Download },
]

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((open) => !open)
      }
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const filteredRoutes = routes.filter((route) =>
    route.name.toLowerCase().includes(query.toLowerCase())
  )

  const handleSelect = (path: string) => {
    navigate(path)
    setIsOpen(false)
    setQuery("")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[15vh] sm:pt-[20vh] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.2)] dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                autoFocus
                type="text"
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground font-medium"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {filteredRoutes.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground text-sm">
                  No results found for "{query}"
                </div>
              ) : (
                <div className="space-y-1">
                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Navigation
                  </div>
                  {filteredRoutes.map((route) => {
                    const Icon = route.icon
                    return (
                      <button
                        key={route.path}
                        onClick={() => handleSelect(route.path)}
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        {route.name}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
            
            <div className="bg-muted px-4 py-3 text-xs text-muted-foreground border-t border-border flex items-center justify-between">
              <span>Use <kbd className="px-1.5 py-0.5 rounded bg-background border border-border shadow-sm font-mono text-[10px]">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-background border border-border shadow-sm font-mono text-[10px]">↓</kbd> to navigate</span>
              <span><kbd className="px-1.5 py-0.5 rounded bg-background border border-border shadow-sm font-mono text-[10px]">esc</kbd> to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
