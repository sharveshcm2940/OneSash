import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Brain, Database, Cpu, HelpCircle, ArrowRight, BookOpen, Layers, GitFork, Compass } from "lucide-react"
import { CTABannerSection } from "../components/sections/CTABannerSection"

interface GlossaryItem {
  term: string
  category: "Architecture" | "Model Training" | "Retrieval" | "Agentic"
  shortDesc: string
  longDesc: string
  keyIcon: any
  impact: string
  example: string
}

const glossaryItems: GlossaryItem[] = [
  {
    term: "RAG (Retrieval-Augmented Generation)",
    category: "Retrieval",
    shortDesc: "Feeding external, trusted documents to an LLM alongside your prompt to generate factual, grounded responses.",
    longDesc: "RAG solves the limitation of LLMs having a static training cut-off date and lacking proprietary context. By retrieving relevant document snippets from a Vector Database first, and appending them to the prompt, the model is able to respond accurately using the retrieved source material.",
    keyIcon: Database,
    impact: "Reduces hallucinations to virtually zero and allows chat with company archives.",
    example: "A customer service bot searching through a 500-page internal product manual before drafting its response."
  },
  {
    term: "AI Agents (Agentic AI)",
    category: "Agentic",
    shortDesc: "Autonomous systems designed to perform multi-step planning, search the web, and call external tools to solve high-level tasks.",
    longDesc: "AI Agents do not just respond to single prompts; they execute loops of thought, observation, planning, and action. They are given tools (e.g., database access, email APIs, calculators) and can autonomously decide which tool to use, parse the results, and repeat until the objective is completed.",
    keyIcon: Cpu,
    impact: "Transitions software from simple workflows to fully autonomous digital employees.",
    example: "An agent instructed to 'find the top 5 competitors, write a summary report, and email it to the product lead'."
  },
  {
    term: "Vector Embeddings",
    category: "Retrieval",
    shortDesc: "Representing text, images, or concepts as high-dimensional math arrays (vectors) where semantically similar items sit closer together.",
    longDesc: "Embeddings translate the meaning of words into lists of numbers (e.g. 1536 dimensions). This allows computer algorithms to perform mathematical operations to find relationships. Instead of matching exact keywords, search systems can find conceptual matches (e.g., searching for 'canine' retrieves results containing 'dog').",
    keyIcon: Layers,
    impact: "Enables semantic search, semantic recommendations, and clustering of complex unstructured data.",
    example: "'King' minus 'Man' plus 'Woman' mathematically clusters closest to 'Queen' in semantic space."
  },
  {
    term: "Vector Databases",
    category: "Retrieval",
    shortDesc: "Specialized storage engines optimized to search through millions of high-dimensional embeddings in milliseconds.",
    longDesc: "Traditional relational databases excel at matching exact strings or columns. Vector Databases (like Pinecone, Qdrant, or pgvector) excel at finding nearest neighbors in multi-dimensional space. They utilize algorithms like HNSW to serve semantic retrieval requests at extreme velocities.",
    keyIcon: Database,
    impact: "The backbone of high-performance RAG architectures and long-term memory systems for AI.",
    example: "Scanning 10,000,000 document segments to find the three most relevant paragraphs in 15ms."
  },
  {
    term: "Large Language Model (LLM)",
    category: "Architecture",
    shortDesc: "Neural networks trained on vast corpora of textual data, capable of complex context processing, translation, and reasoning.",
    longDesc: "Underneath the hood, LLMs are statistical engines built with the Transformer architecture. By calculating probabilities over trillions of tokens, they generate text, write code, and synthesize abstract explanations. They can capture nuanced relationships between words to perform reasoning.",
    keyIcon: Brain,
    impact: "The foundational cognitive processing engine powering the entire modern AI ecosystem.",
    example: "Gemini 1.5 Pro, GPT-4o, Claude 3.5 Sonnet, or open-source Llama-3."
  },
  {
    term: "Prompt Engineering",
    category: "Architecture",
    shortDesc: "The strategic design, formatting, and structural framing of model inputs to get the most accurate, secure, and helpful output.",
    longDesc: "Prompting is more than writing questions. It involves systematic styling like Few-Shot Prompting (providing examples), Chain-of-Thought (forcing step-by-step reasoning), and System Instructions (defining safety guardrails, personas, formatting, and task boundaries).",
    keyIcon: GitFork,
    impact: "Unlocks the model's highest level of performance without requiring expensive model training.",
    example: "Using 'Let's think step by step' or providing 3 sample input-output pairs inside the prompt instructions."
  },
  {
    term: "Fine-Tuning",
    category: "Model Training",
    shortDesc: "Taking a general pre-trained LLM and training it on a specific, smaller dataset to optimize it for a particular style, language, or task.",
    longDesc: "While RAG supplies context at runtime, Fine-Tuning updates the internal brain (weights) of the model itself. It is best used for teaching a model a highly specific formatting style, specialized industry jargon, or an agency's unique brand voice.",
    keyIcon: Layers,
    impact: "Reduces token cost by compiling complex rules directly into the model weights, achieving specialized expertise.",
    example: "Updating a model on 50,000 legal contracts to make it write standard non-disclosure agreements natively."
  },
  {
    term: "Context Window",
    category: "Architecture",
    shortDesc: "The total size of the input and output buffer a model can actively maintain in its short-term memory at any single moment.",
    longDesc: "Measured in tokens, the context window dictates how much material you can paste into a single session. Early models had a window of 4,000 tokens. Modern models feature windows ranging from 128,000 up to 2,000,000 tokens, enabling processing of entire codebases, audio files, or full-length books.",
    keyIcon: Compass,
    impact: "Dictates the volume of background information and source documentation that can be fed into a single AI prompt.",
    example: "A 1-million token context window allows an AI to analyze 3 entire seasons of financial spreadsheets in one prompt."
  }
]

export const AIGlossaryPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [selectedTerm, setSelectedTerm] = useState<GlossaryItem | null>(glossaryItems[0])

  // RAG Visual flow simulation state
  const [ragStep, setRagStep] = useState(0)

  const categories = ["All", "Architecture", "Retrieval", "Agentic", "Model Training"]

  const filteredItems = glossaryItems.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.longDesc.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "All" || item.category === activeCategory
    return matchesSearch && matchesCategory
  })

  const ragSteps = [
    { title: "User Input", desc: "The user asks: 'What is our refund policy on SaaS plans?'", color: "text-blue-400 border-blue-500/30 bg-blue-500/5" },
    { title: "Vector Database Query", desc: "The system converts the question into an Embedding and queries the Vector Database to fetch the refund policy paragraphs.", color: "text-purple-400 border-purple-500/30 bg-purple-500/5" },
    { title: "Grounded Prompt Assembly", desc: "The system dynamically attaches the fetched documents inside a hidden System Prompt for the LLM.", color: "text-amber-400 border-amber-500/30 bg-amber-500/5" },
    { title: "LLM Processing", desc: "The LLM reads only the trusted documents provided in the context window to construct the answer.", color: "text-green-400 border-green-500/30 bg-green-500/5" },
    { title: "Grounded Answer", desc: "The AI outputs a 100% accurate, hallucination-free response matching the internal documentation exactly.", color: "text-sky-400 border-sky-500/30 bg-sky-500/5" }
  ]

  return (
    <>
      <Helmet>
        <title>AI & LLM Technology Glossary — Saash Technocrafts</title>
        <meta name="description" content="An interactive engineering glossary of key AI terminologies, concepts, and architectural models. Learn about RAG, AI Agents, Embeddings, and more." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-36 pb-16 px-4 md:px-6 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] dark:bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto max-w-5xl relative z-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <motion.span 
                className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold mb-6 border border-purple-500/20"
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
              >
                AI Engineering
              </motion.span>
              <motion.h1 
                className="text-5xl md:text-7xl font-heading font-bold tracking-tighter mb-4"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              >
                AI Tech <span className="text-gradient">Glossary</span>
              </motion.h1>
              <motion.p 
                className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              >
                Demystifying the terminology of Large Language Models, autonomous agentic systems, and Retrieval-Augmented Generation architectures.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Workspace */}
      <section className="py-16 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Interactive Sidebar / Search Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Search & Categories Box */}
              <div className="p-6 border border-border rounded-2xl bg-card/50 backdrop-blur-sm space-y-4 shadow-sm">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search terms or concepts..."
                    className="w-full bg-background border border-border rounded-xl pl-9 pr-4 py-2.5 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary text-foreground transition-all"
                  />
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3 py-1 rounded-full text-[10px] font-bold border transition-colors ${
                        activeCategory === cat 
                          ? "bg-foreground text-background border-foreground"
                          : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Term list */}
              <div className="border border-border rounded-2xl bg-card overflow-hidden divide-y divide-border max-h-[500px] overflow-y-auto custom-scrollbar shadow-sm">
                <AnimatePresence mode="popLayout">
                  {filteredItems.map((item, idx) => {
                    const Icon = item.keyIcon
                    const isSelected = selectedTerm?.term === item.term
                    return (
                      <motion.button
                        key={item.term}
                        onClick={() => setSelectedTerm(item)}
                        className={`w-full flex items-center gap-4 px-6 py-5 text-left transition-all duration-200 ${
                          isSelected 
                            ? "bg-muted" 
                            : "hover:bg-muted/40 bg-transparent"
                        }`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ delay: idx * 0.03, duration: 0.2 }}
                      >
                        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${
                          isSelected ? "bg-primary border-primary text-primary-foreground" : "bg-background border-border text-muted-foreground"
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <h3 className={`font-heading font-semibold text-xs transition-colors ${isSelected ? "text-foreground" : "text-foreground/80"}`}>
                            {item.term}
                          </h3>
                          <span className="text-[9px] font-mono tracking-wider uppercase opacity-60">
                            {item.category}
                          </span>
                        </div>
                      </motion.button>
                    )
                  })}
                </AnimatePresence>
                {filteredItems.length === 0 && (
                  <div className="p-8 text-center text-muted-foreground text-xs">
                    No terms found matching your criteria.
                  </div>
                )}
              </div>
            </div>

            {/* Right Term Details Card */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatePresence mode="wait">
                {selectedTerm ? (
                  <motion.div
                    key={selectedTerm.term}
                    className="border border-border rounded-2xl bg-card p-8 shadow-md relative overflow-hidden"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/2 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="flex items-center gap-3 mb-6">
                      <div className="px-2.5 py-1 rounded bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono tracking-wider uppercase">
                        {selectedTerm.category}
                      </div>
                    </div>

                    <h2 className="text-3xl font-heading font-bold mb-4 tracking-tight text-foreground">
                      {selectedTerm.term}
                    </h2>
                    
                    <p className="text-sm font-medium leading-relaxed text-foreground/90 border-l-2 border-primary/40 pl-4 mb-6">
                      {selectedTerm.shortDesc}
                    </p>

                    <div className="space-y-6 text-xs text-muted-foreground border-t border-border pt-6">
                      <div>
                        <h4 className="font-bold text-foreground mb-2 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" /> Technical Explanation
                        </h4>
                        <p className="leading-relaxed">{selectedTerm.longDesc}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border border-border bg-muted/20 rounded-xl">
                          <h4 className="font-bold text-foreground mb-1.5 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-primary" /> Engineering Impact
                          </h4>
                          <p className="leading-relaxed text-[11px]">{selectedTerm.impact}</p>
                        </div>
                        <div className="p-4 border border-border bg-muted/20 rounded-xl">
                          <h4 className="font-bold text-foreground mb-1.5 flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5 text-primary" /> Real-World Example
                          </h4>
                          <p className="leading-relaxed text-[11px] italic">"{selectedTerm.example}"</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="border border-dashed border-border rounded-2xl bg-card/30 p-16 text-center text-muted-foreground flex flex-col items-center gap-3">
                    <HelpCircle className="w-8 h-8 opacity-40" />
                    <p className="text-xs">Select a term on the left to read detailed engineering documentation.</p>
                  </div>
                )}
              </AnimatePresence>

              {/* RAG Visual Simulator Component */}
              <div className="border border-border rounded-2xl bg-[#09090b] dark:bg-card p-8 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-heading font-bold text-base text-white">RAG Flow Simulator</h3>
                    <p className="text-[10px] text-zinc-400">Interactive live simulation of the RAG pipeline</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {ragSteps.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setRagStep(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          ragStep === i ? "bg-purple-500 scale-125" : "bg-zinc-700 hover:bg-zinc-600"
                        }`}
                        title={`Step ${i+1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Step Card */}
                  <div className="md:col-span-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={ragStep}
                        className={`border rounded-xl p-5 ${ragSteps[ragStep].color}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                      >
                        <span className="text-[9px] font-mono uppercase tracking-widest opacity-60">Step {ragStep + 1} of 5</span>
                        <h4 className="font-heading font-bold text-sm mt-1 mb-2 text-white">{ragSteps[ragStep].title}</h4>
                        <p className="text-xs leading-relaxed text-zinc-300">{ragSteps[ragStep].desc}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Flow Controls */}
                  <div className="md:col-span-4 flex md:flex-col gap-2 justify-end w-full">
                    <button
                      onClick={() => setRagStep((prev) => (prev > 0 ? prev - 1 : 4))}
                      className="flex-1 py-2 px-3 border border-zinc-800 rounded-lg text-[10px] text-zinc-400 font-semibold hover:bg-zinc-900 transition-colors"
                    >
                      Prev Step
                    </button>
                    <button
                      onClick={() => setRagStep((prev) => (prev < 4 ? prev + 1 : 0))}
                      className="flex-1 py-2 px-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-[10px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      Next Step <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTABannerSection />
    </>
  )
}
