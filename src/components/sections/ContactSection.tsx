import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Send, Mail, Phone, MapPin, MessageCircle, Terminal, Monitor } from "lucide-react"
import { cn } from "../../utils/cn"

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  budget: z.string().min(1, "Please select a budget"),
  message: z.string().min(20, "Message must be at least 20 characters"),
})

type FormData = z.infer<typeof schema>

const budgets = ["< $500", "$500 - $1,500", "$1,500 - $5,000", "$5,000 - $15,000", "$15,000+", "Not sure yet"]

const contactDetails = [
  { icon: Mail, label: "Email Us", value: "onesash.contact@gmail.com", href: "mailto:onesash.contact@gmail.com" },
  { icon: Phone, label: "Call Us (Primary)", value: "+91 89034 67843", href: "tel:+918903467843" },
  { icon: Phone, label: "Call Us (Secondary)", value: "+91 99803 99557", href: "tel:+919980399557" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 89034 67843 / +91 99803 99557", href: "https://wa.me/918903467843" },
  { icon: MapPin, label: "Location", value: "Chennai, Tamil Nadu, India", href: "#" },
]

interface TerminalHistoryLine {
  text: string
  type: "system" | "input" | "error" | "success" | "prompt" | "info"
}

export const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  // Mode Selection: "cli" by default, toggles to "gui"
  const [formMode, setFormMode] = useState<"cli" | "gui">("cli")

  // --- Traditional GUI Form ---
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1500))
    console.log("GUI Form submitted data:", data)
    reset()
  }

  // --- Interactive Terminal CLI Form ---
  const [currentStep, setCurrentStep] = useState<"name" | "email" | "company" | "budget" | "message" | "confirm" | "completed">("name")
  const [terminalInput, setTerminalInput] = useState("")
  const [terminalHistory, setTerminalHistory] = useState<TerminalHistoryLine[]>([])
  const [terminalValues, setTerminalValues] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: ""
  })
  const [isTerminalSubmitting, setIsTerminalSubmitting] = useState(false)
  const terminalBodyRef = useRef<HTMLDivElement>(null)
  const terminalInputRef = useRef<HTMLInputElement>(null)

  // Auto-scrolling on terminal history or step change
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTo({
        top: terminalBodyRef.current.scrollHeight,
        behavior: "smooth"
      })
    }
  }, [terminalHistory, currentStep])

  // Click on terminal container focuses hidden input
  const focusTerminalInput = () => {
    if (terminalInputRef.current) {
      terminalInputRef.current.focus()
    }
  }

  // Initial welcome logs
  useEffect(() => {
    if (terminalHistory.length === 0) {
      setTerminalHistory([
        { text: "Microsoft Windows [Version 10.0.22631.3807]", type: "system" },
        { text: "(c) Microsoft Corporation. All rights reserved.", type: "system" },
        { text: "", type: "system" },
        { text: "C:\\Users\\onesash> onesash-contact.exe", type: "input" },
        { text: "Establishing secure pipeline connection to onesash core server...", type: "system" },
        { text: "[OK] Connection online. Encryption standard TLS 1.3 active.", type: "success" },
        { text: "Type 'help' for Windows command options, or 'gui' for traditional form.", type: "info" },
        { text: "========================================================================", type: "system" },
        { text: "INITIALIZING TRANSACTION BRIEF SPECIFICATION...", type: "success" },
        { text: "", type: "system" },
      ])
    }
  }, [terminalHistory])

  const resetTerminal = () => {
    setTerminalValues({ name: "", email: "", company: "", budget: "", message: "" })
    setCurrentStep("name")
    setTerminalInput("")
    setTerminalHistory([
      { text: "Microsoft Windows [Version 10.0.22631.3807]", type: "system" },
      { text: "(c) Microsoft Corporation. All rights reserved.", type: "system" },
      { text: "", type: "system" },
      { text: "C:\\Users\\onesash> onesash-contact.exe --reset", type: "input" },
      { text: "Establishing secure pipeline connection to onesash core server...", type: "system" },
      { text: "[OK] Connection online. Encryption standard TLS 1.3 active.", type: "success" },
      { text: "Type 'help' for Windows command options, or 'gui' for traditional form.", type: "info" },
      { text: "========================================================================", type: "system" },
      { text: "INITIALIZING TRANSACTION BRIEF SPECIFICATION...", type: "success" },
      { text: "", type: "system" },
    ])
  }

  const handleTerminalSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isTerminalSubmitting) return

    const trimmed = terminalInput.trim()
    
    // Allow empty enter only if step is company (optional)
    if (!trimmed && currentStep !== "company") {
      return
    }

    // Add user typed line to history log
    setTerminalHistory((prev) => [...prev, { text: `C:\\Users\\onesash> ${terminalInput}`, type: "input" }])
    setTerminalInput("")

    const lowercaseInput = trimmed.toLowerCase()

    // Global command controls
    if (lowercaseInput === "help") {
      setTerminalHistory((prev) => [
        ...prev,
        { text: "Available System Commands:", type: "info" },
        { text: "  help    - Display this information guide", type: "info" },
        { text: "  status  - Print currently gathered form fields state", type: "info" },
        { text: "  reset   - Restart terminal questionnaire from scratch", type: "info" },
        { text: "  clear   - Clear current terminal screen logs", type: "info" },
        { text: "  gui     - Switch to standard graphic user interface form", type: "info" },
        { text: "", type: "system" }
      ])
      return
    }

    if (lowercaseInput === "clear") {
      setTerminalHistory([
        { text: "Terminal history cleared.", type: "system" },
        { text: "Type 'help' for instructions or 'gui' to swap layouts.", type: "system" },
        { text: "", type: "system" }
      ])
      return
    }

    if (lowercaseInput === "gui") {
      setFormMode("gui")
      return
    }

    if (lowercaseInput === "reset") {
      resetTerminal()
      return
    }

    if (lowercaseInput === "status") {
      setTerminalHistory((prev) => [
        ...prev,
        { text: "--- CAPTURED TRANSACTIONS ---", type: "info" },
        { text: `  Name:     ${terminalValues.name || "<Waiting for Input>"}`, type: "info" },
        { text: `  Email:    ${terminalValues.email || "<Waiting for Input>"}`, type: "info" },
        { text: `  Company:  ${terminalValues.company || "<Not Specified>"}`, type: "info" },
        { text: `  Budget:   ${terminalValues.budget || "<Waiting for Input>"}`, type: "info" },
        { text: `  Details:  ${terminalValues.message ? `${terminalValues.message.substring(0, 30)}...` : "<Waiting for Input>"}`, type: "info" },
        { text: "", type: "system" }
      ])
      return
    }

    // Step Processing
    if (currentStep === "name") {
      if (trimmed.length < 2) {
        setTerminalHistory((prev) => [
          ...prev,
          { text: "✗ PARSE ERROR: Name must be at least 2 characters.", type: "error" },
          { text: "", type: "system" }
        ])
        return
      }
      setTerminalValues((prev) => ({ ...prev, name: trimmed }))
      setTerminalHistory((prev) => [
        ...prev,
        { text: `✓ Name validated & saved: "${trimmed}"`, type: "success" },
        { text: "", type: "system" }
      ])
      setCurrentStep("email")
      return
    }

    if (currentStep === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(trimmed)) {
        setTerminalHistory((prev) => [
          ...prev,
          { text: "✗ PROTOCOL ERROR: Please enter a valid email address.", type: "error" },
          { text: "", type: "system" }
        ])
        return
      }
      setTerminalValues((prev) => ({ ...prev, email: trimmed }))
      setTerminalHistory((prev) => [
        ...prev,
        { text: `✓ Email validated & saved: "${trimmed}"`, type: "success" },
        { text: "", type: "system" }
      ])
      setCurrentStep("company")
      return
    }

    if (currentStep === "company") {
      const companyVal = trimmed || "Not specified"
      setTerminalValues((prev) => ({ ...prev, company: companyVal }))
      
      const budgetPromptLines: TerminalHistoryLine[] = [
        { text: `✓ Company registered: "${companyVal}"`, type: "success" },
        { text: "", type: "system" },
        { text: "System generated budget ranges. Choose index [1-6]:", type: "system" },
        { text: "  [1] < $500", type: "info" },
        { text: "  [2] $500 - $1,500", type: "info" },
        { text: "  [3] $1,500 - $5,000", type: "info" },
        { text: "  [4] $5,000 - $15,000", type: "info" },
        { text: "  [5] $15,000+", type: "info" },
        { text: "  [6] Not sure yet", type: "info" },
        { text: "", type: "system" }
      ]

      setTerminalHistory((prev) => [...prev, ...budgetPromptLines])
      setCurrentStep("budget")
      return
    }

    if (currentStep === "budget") {
      const optionIndex = parseInt(trimmed)
      if (isNaN(optionIndex) || optionIndex < 1 || optionIndex > 6) {
        setTerminalHistory((prev) => [
          ...prev,
          { text: "✗ RANGE ERROR: Choose a selection index between 1 and 6.", type: "error" },
          { text: "", type: "system" }
        ])
        return
      }
      const selectedBudget = budgets[optionIndex - 1]
      setTerminalValues((prev) => ({ ...prev, budget: selectedBudget }))
      setTerminalHistory((prev) => [
        ...prev,
        { text: `✓ Budget validated & saved: "${selectedBudget}"`, type: "success" },
        { text: "", type: "system" }
      ])
      setCurrentStep("message")
      return
    }

    if (currentStep === "message") {
      if (trimmed.length < 20) {
        setTerminalHistory((prev) => [
          ...prev,
          { text: `✗ BUFFER ERROR: Project details must be >= 20 characters. (Current length: ${trimmed.length})`, type: "error" },
          { text: "", type: "system" }
        ])
        return
      }
      setTerminalValues((prev) => {
        const nextState = { ...prev, message: trimmed }
        
        // Print transaction preview immediately
        setTerminalHistory((nextPrev) => [
          ...nextPrev,
          { text: `✓ Details validated & saved.`, type: "success" },
          { text: "", type: "system" },
          { text: "========================================================", type: "system" },
          { text: "TRANSACTION PREVIEW PROTOCOL", type: "info" },
          { text: "========================================================", type: "system" },
          { text: `  Name:     ${nextState.name}`, type: "info" },
          { text: `  Email:    ${nextState.email}`, type: "info" },
          { text: `  Company:  ${nextState.company || "Not specified"}`, type: "info" },
          { text: `  Budget:   ${nextState.budget}`, type: "info" },
          { text: `  Details:  ${trimmed}`, type: "info" },
          { text: "========================================================", type: "system" },
          { text: "Proceed with secure package submission? [Y/N]:", type: "success" },
          { text: "", type: "system" }
        ])
        
        return nextState
      })
      setCurrentStep("confirm")
      return
    }

    if (currentStep === "confirm") {
      if (lowercaseInput === "y" || lowercaseInput === "yes" || lowercaseInput === "submit") {
        setTerminalHistory((prev) => [
          ...prev,
          { text: "Initiating remote procedure call transmission...", type: "system" },
        ])
        setIsTerminalSubmitting(true)
        
        // Simulate networking transmission latency
        await new Promise((r) => setTimeout(r, 1800))
        
        setIsTerminalSubmitting(false)
        setTerminalHistory((prev) => [
          ...prev,
          { text: "STDOUT: HTTP/1.1 200 OK", type: "success" },
          { text: "STDOUT: Handshake completed. System data packets serialized.", type: "success" },
          { text: "STDOUT: Lead specification successfully catalogued.", type: "success" },
          { text: "========================================================", type: "success" },
          { text: "✓ PROTOCOL COMPLETE. PACKET TRANSMITTED SUCCESSFULLY!", type: "success" },
          { text: "Our engineering operations team will respond within 24h.", type: "success" },
          { text: "Type 'reset' if you want to file a new session brief.", type: "system" },
          { text: "", type: "system" }
        ])
        setCurrentStep("completed")
      } else if (lowercaseInput === "n" || lowercaseInput === "no" || lowercaseInput === "cancel") {
        setTerminalHistory((prev) => [
          ...prev,
          { text: "✗ WARNING: Transmission aborted by operator.", type: "error" },
          { text: "Type 'reset' to clear cache and start over.", type: "system" },
          { text: "", type: "system" }
        ])
      } else {
        setTerminalHistory((prev) => [
          ...prev,
          { text: "Please enter [Y] to confirm, or [N] to abort.", type: "error" },
          { text: "", type: "system" }
        ])
      }
      return
    }

    if (currentStep === "completed") {
      if (lowercaseInput === "reset") {
        resetTerminal()
      } else {
        setTerminalHistory((prev) => [
          ...prev,
          { text: "Session closed. Type 'reset' to begin a new form transaction.", type: "system" },
          { text: "", type: "system" }
        ])
      }
      return
    }
  }

  // Get active instruction text based on current phase
  const getTerminalPromptLabel = () => {
    if (isTerminalSubmitting) {
      return "[TRANSMITTING...]"
    }
    switch (currentStep) {
      case "name":
        return "C:\\Users\\onesash> Enter your name: "
      case "email":
        return "C:\\Users\\onesash> Enter email address: "
      case "company":
        return "C:\\Users\\onesash> Enter company (optional, hit Enter to skip): "
      case "budget":
        return "C:\\Users\\onesash> Select budget range index [1-6]: "
      case "message":
        return "C:\\Users\\onesash> Enter project details (min 20 chars): "
      case "confirm":
        return "C:\\Users\\onesash> Confirm submission? [Y/N]: "
      case "completed":
        return "C:\\Users\\onesash> session closed. "
      default:
        return "C:\\Users\\onesash> "
    }
  }

  return (
    <section id="contact" className="py-32 px-4 md:px-6 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          className="text-left max-w-3xl mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            START A PROJECT
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-foreground">
            Have something to build?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Tell us what you're working on. Use our interactive CLI brief terminal or the standard inquiry form below to get in touch directly with the founders.
          </p>
        </motion.div>

        {/* Dual Mode Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-muted p-1 rounded-xl border border-border">
            <button
              onClick={() => setFormMode("cli")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer",
                formMode === "cli"
                  ? "bg-foreground text-background shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Terminal className="w-3.5 h-3.5" />
              Terminal Console (Interactive)
            </button>
            <button
              onClick={() => setFormMode("gui")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer",
                formMode === "gui"
                  ? "bg-foreground text-background shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Monitor className="w-3.5 h-3.5" />
              Traditional GUI Form
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {contactDetails.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:-translate-y-1 transition-all group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-medium">{item.label}</div>
                    <div className="font-semibold text-sm">{item.value}</div>
                  </div>
                </motion.a>
              )
            })}

            {/* Quick summary card */}
            <motion.div
              className="p-5 rounded-2xl border border-border bg-primary/5 mt-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="text-sm font-semibold mb-2">⚡ What happens next?</div>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li>1. We review your enquiry within 24h</li>
                <li>2. Schedule a free discovery call</li>
                <li>3. Receive a custom project proposal</li>
              </ol>
            </motion.div>
          </motion.div>

          {/* Interactive Form Display Stage */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {formMode === "cli" ? (
                /* --- TERMINAL CLI MODE (WINDOWS COMMAND PROMPT STYLE) --- */
                <motion.div
                  key="cli-terminal"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-lg border border-[#333333] bg-[#0C0C0C] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden relative cursor-text group font-mono selection:bg-white/20 selection:text-white"
                  onClick={focusTerminalInput}
                >
                  {/* Header Titlebar (Windows Command Prompt) */}
                  <div className="flex items-center justify-between px-3 py-1.5 bg-[#1F1F24] border-b border-[#2D2D35] select-none">
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 bg-[#333333] rounded-[2px] flex items-center justify-center text-[8px] font-bold text-[#E0E0E0] border border-[#555555]">
                        c:\
                      </div>
                      <span className="text-xs text-[#CCCCCC] font-normal tracking-wide">
                        Command Prompt - C:\WINDOWS\system32\cmd.exe
                      </span>
                    </div>

                    {/* Windows Control Buttons */}
                    <div className="flex items-center">
                      <button type="button" className="w-8 h-6 flex items-center justify-center text-[#CCCCCC] hover:bg-white/10 text-xs transition-colors cursor-pointer">
                        &#x2014;
                      </button>
                      <button type="button" className="w-8 h-6 flex items-center justify-center text-[#CCCCCC] hover:bg-white/10 text-xs transition-colors cursor-pointer">
                        &#x25A2;
                      </button>
                      <button type="button" className="w-8 h-6 flex items-center justify-center text-[#CCCCCC] hover:bg-[#E81123] hover:text-white text-xs transition-colors cursor-pointer">
                        &#x2715;
                      </button>
                    </div>
                  </div>

                  {/* Terminal Screen Body */}
                  <div
                    ref={terminalBodyRef}
                    className="p-5 h-[420px] overflow-y-auto flex flex-col space-y-1 text-xs sm:text-sm text-[#CCCCCC] bg-[#0C0C0C] font-mono scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-800"
                  >
                    {terminalHistory.map((line, idx) => (
                      <div
                        key={idx}
                        className={cn(
                          "leading-relaxed break-words font-mono",
                          line.type === "system" && "text-[#A0A0A0]",
                          line.type === "input" && "text-[#FFFFFF] font-bold",
                          line.type === "error" && "text-[#FF6B6B] font-semibold",
                          line.type === "success" && "text-[#00FF66] font-semibold",
                          line.type === "info" && "text-[#F1FA8C]"
                        )}
                      >
                        {line.text}
                      </div>
                    ))}

                    {/* Active Prompt Row */}
                    {currentStep !== "completed" && (
                      <form onSubmit={handleTerminalSubmit} className="flex items-center gap-1 pt-1">
                        <label className="text-[#CCCCCC] font-bold shrink-0">
                          {getTerminalPromptLabel()}
                        </label>
                        <div className="flex-1 relative flex items-center">
                          <input
                            ref={terminalInputRef}
                            type="text"
                            value={terminalInput}
                            onChange={(e) => setTerminalInput(e.target.value)}
                            disabled={isTerminalSubmitting}
                            className="w-full bg-transparent border-none outline-none focus:ring-0 p-0 m-0 text-[#FFFFFF] font-mono text-xs sm:text-sm caret-[#FFFFFF] placeholder:text-[#555555]"
                            placeholder={currentStep === "company" ? "[Optional - Hit Enter to Skip]" : ""}
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                          />
                          {/* Blinking Block Cursor */}
                          {terminalInput === "" && (
                            <motion.span
                              animate={{ opacity: [1, 0] }}
                              transition={{ repeat: Infinity, duration: 0.6 }}
                              className="absolute left-0 w-2 h-4 bg-[#CCCCCC] pointer-events-none"
                            />
                          )}
                        </div>
                      </form>
                    )}
                  </div>

                  {/* Footer Console Status Bar */}
                  <div className="px-4 py-2 border-t border-[#222222] bg-[#141414] flex items-center justify-between text-[10px] text-[#888888] font-mono">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5 text-[#00FF66] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
                        CMD ONLINE
                      </span>
                      <span>STATUS: {currentStep.toUpperCase()}</span>
                    </div>
                    <div className="text-[#888888]">
                      Windows Command Prompt (cmd.exe) • Press 'Enter' to submit
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* --- TRADITIONAL GUI MODE --- */
                <motion.div
                  key="gui-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {isSubmitSuccessful ? (
                    <motion.div
                      className="h-[500px] flex flex-col items-center justify-center text-center p-12 rounded-3xl border border-emerald-500/30 bg-emerald-500/5"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="text-6xl mb-4">🎉</div>
                      <h3 className="text-2xl font-heading font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">Thanks for reaching out. We'll be in touch within 24 hours.</p>
                      <button
                        onClick={() => {
                          reset()
                        }}
                        className="mt-6 px-4 py-2 border border-border hover:border-foreground/30 rounded-xl text-xs font-semibold cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5 p-8 rounded-3xl border border-border bg-card"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium mb-2">Your Name *</label>
                          <input
                            {...register("name")}
                            placeholder="Sharvesh CM"
                            className={cn(
                              "w-full px-4 py-3 rounded-xl border bg-background text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20",
                              errors.name ? "border-rose-500" : "border-border"
                            )}
                          />
                          {errors.name && <p className="text-rose-500 text-xs mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email Address *</label>
                          <input
                            {...register("email")}
                            type="email"
                            placeholder="hello@company.com"
                            className={cn(
                              "w-full px-4 py-3 rounded-xl border bg-background text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20",
                              errors.email ? "border-rose-500" : "border-border"
                            )}
                          />
                          {errors.email && <p className="text-rose-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Company (Optional)</label>
                        <input
                          {...register("company")}
                          placeholder="e.g. Nexus Global Technologies"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Budget Range *</label>
                        <select
                          {...register("budget")}
                          className={cn(
                            "w-full px-4 py-3 rounded-xl border bg-background text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20",
                            errors.budget ? "border-rose-500" : "border-border"
                          )}
                        >
                          <option value="">Select your budget...</option>
                          {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                        </select>
                        {errors.budget && <p className="text-rose-500 text-xs mt-1">{errors.budget.message}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Project Details *</label>
                        <textarea
                          {...register("message")}
                          rows={5}
                          placeholder="Tell us about your project, goals, timeline..."
                          className={cn(
                            "w-full px-4 py-3 rounded-xl border bg-background text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none",
                            errors.message ? "border-rose-500" : "border-border"
                          )}
                        />
                        {errors.message && <p className="text-rose-500 text-xs mt-1">{errors.message.message}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 disabled:opacity-60 transition-all shadow-[0_0_20px_rgba(80,70,229,0.3)] hover:shadow-[0_0_30px_rgba(80,70,229,0.5)] cursor-pointer"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

