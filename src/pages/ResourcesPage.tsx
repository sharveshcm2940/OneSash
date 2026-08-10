import { useState, useMemo } from "react"
import { Helmet } from "react-helmet-async"
import { motion, AnimatePresence } from "framer-motion"
import { Download, CheckSquare, FileText, Layout, BookOpen, Shield, Cpu, Search, Sparkles } from "lucide-react"
import { CTABannerSection } from "../components/sections/CTABannerSection"

const resources = [
  {
    id: 1,
    title: "Website Planning Checklist",
    desc: "The exact checklist we give every client before a project kickoff. Covers goals, audiences, sitemap, technical requirements, integrations, and launch criteria.",
    icon: CheckSquare,
    format: "MD",
    size: "4 KB",
    category: "Planning",
    items: ["Goals & KPIs", "User personas", "Sitemap structure", "Technical stack", "Launch criteria"],
    color: "#080820",
    content: `# WEBSITE PLANNING CHECKLIST
Sash Technocrafts — Engineering Excellence

## Phase 1: Project Discovery & Goals
- [ ] Define Primary Objectives (Lead Gen, Sales, Branding, App Interface)
- [ ] Establish 3 Core KPIs (e.g., Conversion rates, speed scores, page load time < 1.5s)
- [ ] Define Target Audience Personas (Age, Technical level, Device preferences)
- [ ] Competitive Analysis (List 3 direct competitors & their tech drawbacks)

## Phase 2: Site Architecture & UX Scopes
- [ ] Design complete visual Sitemap (Home, Service, Features, Resources, Contact)
- [ ] Map high-level User Flow (Visitor to conversion funnel steps)
- [ ] Draft low-fidelity wireframes for Key conversion nodes
- [ ] Outline assets & copy checklist (Logo, Product Photos, Brand color palettes)

## Phase 3: Technical Integrity & Stack Setup
- [ ] Define host & container limits (Vercel, AWS S3, Cloud Run)
- [ ] Choose primary rendering pipeline (React, Next.js SPA/SSR)
- [ ] Design central Database/CMS schema (PostgreSQL, Firestore, or headless CMS)
- [ ] List required 3rd party APIs (Stripe, Twilio, Google Auth, CRM webhooks)

## Phase 4: Quality Check & Release Preparation
- [ ] Test Mobile Responsiveness across 5 device viewport breakpoints
- [ ] Verify SEO Metadata tags (H1, H2 tags, Alt images attributes)
- [ ] Enforce SSL/HTTPS & basic security headers (HSTS, CSP)
- [ ] Speed testing (Verify Lighthouse Performance score > 90/100)
`
  },
  {
    id: 2,
    title: "Software Requirement Template",
    desc: "The comprehensive SRS (Software Requirement Specification) template our team uses with enterprise clients. Saves weeks of back-and-forth.",
    icon: FileText,
    format: "MD",
    size: "6 KB",
    category: "Planning",
    items: ["Functional requirements", "Non-functional requirements", "User stories", "API contract", "Acceptance criteria"],
    color: "#200820",
    content: `# SOFTWARE REQUIREMENT SPECIFICATION (SRS) TEMPLATE
Sash Technocrafts Technical Document

## 1. Introduction
### 1.1 Purpose
This document defines the technical and behavioral scope for the proposed software system, establishing a baseline specification for engineering sprints.

### 1.2 Scope of System
- Admin Panel: Real-time user metrics, billing gates, platform configurations.
- Client App: Core interactive dashboard, account settings, authentication, offline storage.
- Backend APIs: Secure endpoints, Row Level Security, webhooks handler.

## 2. General Description
### 2.1 Product Perspective
A secure, multi-tenant cloud-hosted full-stack application binding to high availability CDN structures.

### 2.2 System Functions
- Users must authenticate via Multi-Factor OAuth protocols.
- Tenants must have absolute database row isolation.
- Analytics engines must aggregate daily transactional histories.

## 3. Functional Requirements & User Stories
### 3.1 User Authentication Module
- **Story**: As a tenant admin, I want to sign up using email and enable MFA so that my project records are secured.
- **Story**: As a client user, I want to reset my passcode securely via SMS or email confirmation links.

### 3.2 Dynamic Invoicing
- **Story**: As a subscriber, I want to select standard tiers and get bills dispatched automatically via Stripe.

## 4. Non-Functional Requirements
- **Performance**: Standard API queries must resolve in < 180ms.
- **Availability**: System must support 99.9% uptime verified via Grafana.
- **Security**: Data in transit encrypted via SSL/TLS 1.3. Row Level Security on database tables.
`
  },
  {
    id: 3,
    title: "SaaS UI Wireframe Kit",
    desc: "A production-ready wireframe kit for SaaS dashboards, onboarding flows, settings pages, and data tables — built entirely in Figma.",
    icon: Layout,
    format: "TXT",
    size: "3 KB",
    category: "Design",
    items: ["Dashboard layouts", "Onboarding flows", "Data tables", "Settings pages", "Auth screens"],
    color: "#082010",
    content: `SAAS UI FIGMA WIREFRAME KIT INSTRUCTIONS
Sash Technocrafts Design Assets

Welcome to our premium SaaS Dashboard Wireframing Kit.

Your Figma UI resources are structured as follows:

1. Frame Foundations:
   - Left Sidebar Layout (Adaptive Responsive widths: 240px, 80px collapsed)
   - Header Controls (Custom Command Palette trigger, Avatar triggers, Notification bells)
   - Content Stage (12-column Grid alignment, 24px margins, fluid density)

2. Component Libraries:
   - Cards: Bento grids, KPI indicators with up/down arrows.
   - Forms: Outlined inputs, floating labels, toggle fields, validation errors.
   - Buttons: Premium rounded-xl buttons, icons-only, loading state ripples.

3. Onboarding Flow Blocks:
   - Tenant Registration layout
   - Plan Selector (Tiers card comparison)
   - MFA setup step wizard

Figma Shared File Workspace:
To copy our layouts directly into your drafts:
1. Open Figma and navigate to File -> Import
2. Drag/drop the generated workspace components or replicate the grid blueprints.
`
  },
  {
    id: 4,
    title: "Startup Launch Guide",
    desc: "From idea to MVP launch in 90 days. A technical and strategic e-book for founders building their first digital product.",
    icon: BookOpen,
    format: "MD",
    size: "8 KB",
    category: "Strategy",
    items: ["Idea validation", "Tech stack selection", "MVP scoping", "Launch strategy", "Growth loops"],
    color: "#201408",
    content: `# STARTUP MVP LAUNCH GUIDE (90 DAYS ROUTE)
Sash Technocrafts Strategy Playbook

## Weeks 1 - 2: Concept Scope & Radical Pruning
- Define the ONE primary core value proposition.
- Eliminate 80% of secondary features (e.g. no fancy profiles, no complex forums).
- Target a closed beta group (10-20 passionate power-users).

## Weeks 3 - 4: Blueprinting & Styling Direction
- Generate low-fi sketches to validate flows in minutes.
- Select stable framework combos (Next.js client + Cloud Database) avoiding bleeding-edge architectures.
- Create static mock-ups to collect upfront validation feedback.

## Weeks 5 - 9: Fast Sprints Development
- Build in focused 2-week cycles.
- Cycle 1: Auth + core DB model.
- Cycle 2: Primary feature operations (The "Wow" element).
- Cycle 3: Billing integration, basic notification webhooks.

## Weeks 10 - 11: Tight QA & Hardening
- Rigorous manual tests of all buttons, forms, and routes.
- Validate email delivery, billing webhooks, and boundary conditions.
- Test responsive viewing on multiple smart devices.

## Week 12: Production Launch
- Setup CI/CD pipelines.
- Redirect domains, verify DNS records, and spin SSL rules.
- Open gates and monitor error tracking software (Sentry/Grafana).
`
  },
  {
    id: 5,
    title: "Web Security Audit Checklist",
    desc: "The security checklist our engineers run on every project before release — covering OWASP Top 10, headers, auth, and deployment hardening.",
    icon: Shield,
    format: "MD",
    size: "5 KB",
    category: "Security",
    items: ["OWASP Top 10", "Auth & session security", "HTTP security headers", "Dependency audit", "Deployment checklist"],
    color: "#200808",
    content: `# WEB SECURITY AUDIT CHECKLIST
Sash Technocrafts Compliance Document

## OWASP Top 10 Protections
- [ ] SQL Injection: Bind inputs via raw ORM param bindings (Drizzle/Prisma).
- [ ] Broken Auth: Restrict login attempts to prevent brute force. Enforce password complexity.
- [ ] Sensitive Data Exposure: Enforce TLS 1.3. Encrypt passwords with salt hashing (bcrypt/argon2).
- [ ] XML External Entities (XXE): Disable custom XML parsing parameters on endpoints.
- [ ] Broken Access Control: Enforce Row-Level Security policies in PostgreSQL/Firestore.

## HTTP Security Headers
- [ ] Strict-Transport-Security: "max-age=63072000; includeSubDomains; preload"
- [ ] Content-Security-Policy: Disallow unauthorized script loading and injection.
- [ ] X-Content-Type-Options: "nosniff"
- [ ] X-Frame-Options: "DENY" or "SAMEORIGIN"
- [ ] Referrer-Policy: "strict-origin-when-cross-origin"

## Auth & Session Safety
- [ ] Store Session keys in secure, HTTP-only, SameSite=Strict cookies.
- [ ] Set absolute token expirations (e.g., Access Tokens < 15 mins, Refresh Tokens < 7 days).
- [ ] Block multi-device concurrent administrative sessions.
- [ ] Protect password recovery routes with temporary single-use random hash links.
`
  },
  {
    id: 6,
    title: "AI Integration Starter Kit",
    desc: "Everything you need to integrate OpenAI, LangChain, or custom LLMs into your product — prompts, patterns, and code snippets.",
    icon: Cpu,
    format: "MD",
    size: "7 KB",
    category: "AI",
    items: ["Prompt templates", "LangChain setup", "RAG patterns", "Streaming responses", "Token cost estimator"],
    color: "#140820",
    content: `# AI INTEGRATION STARTER KIT
Sash Technocrafts AI Systems Guide

## 1. System Prompt Template (RAG-focused)
\`\`\`typescript
const SYSTEM_INSTRUCTIONS = \`
You are an intelligent administrative copilot for Sash Platforms.
Your responses must follow strict compliance rules:
- Only answer queries using the provided metadata context.
- If context is insufficient, respond: "I cannot confidently verify this data."
- Do not make up facts or extrapolate beyond direct information.
\`;
\`\`\`

## 2. Gemini @google/genai Streaming Middleware Pattern
\`\`\`typescript
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function executeStreamResponse(userPrompt: string, context: string) {
  const stream = await ai.models.generateContentStream({
    model: "gemini-2.5-flash",
    contents: [
      { role: "system", parts: [{ text: SYSTEM_INSTRUCTIONS }] },
      { role: "user", parts: [{ text: \`Context: \${context}\\n\\nQuery: \${userPrompt}\` }] }
    ]
  });

  for await (const chunk of stream) {
    process.stdout.write(chunk.text);
  }
}
\`\`\`

## 3. Vector Search Retrieval Scopes
\`\`\`sql
-- Simple semantic match query using pgvector
SELECT id, document_chunk, 1 - (embedding <=> :user_query_embedding) AS similarity_score
FROM platform_embeddings
WHERE 1 - (embedding <=> :user_query_embedding) > 0.72
ORDER BY embedding <=> :user_query_embedding
LIMIT 5;
\`\`\`
`
  }
]

const categories = ["All", "Planning", "Design", "Strategy", "Security", "AI"]

export const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [downloadSuccessMessage, setDownloadSuccessMessage] = useState<string | null>(null)

  // Filtering Logic
  const filteredResources = useMemo(() => {
    return resources.filter((res) => {
      const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            res.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            res.items.some(it => it.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = activeCategory === "All" || res.category === activeCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory])

  // Custom in-browser file builder and download trigger
  const triggerDownload = (res: typeof resources[0]) => {
    try {
      const blob = new Blob([res.content], { type: "text/plain;charset=utf-8" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      // Give appropriate extension based on resource type
      const ext = res.format.toLowerCase()
      link.download = `${res.title.replace(/\s+/g, "_")}.${ext}`
      
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      // Notify user visually
      setDownloadSuccessMessage(`Successfully downloaded ${res.title}!`)
      setTimeout(() => setDownloadSuccessMessage(null), 4000)
    } catch (err) {
      console.error("Resource download failed:", err)
    }
  }

  return (
    <>
      <Helmet>
        <title>Free Resources — Sash Technocrafts | Templates, Checklists & Guides</title>
        <meta name="description" content="Download free templates and checklists from Sash Technocrafts: website planning checklist, software requirement template, SaaS UI wireframes, and startup guides." />
        <meta property="og:title" content="Free Resources — Sash Technocrafts" />
        <meta name="keywords" content="free website planning checklist, software requirement template, SaaS wireframe kit, startup launch guide, web security checklist" />
      </Helmet>

      {/* Hero */}
      <section className="pt-36 pb-16 px-4 md:px-6 bg-background border-b border-border relative overflow-hidden">
        <div className="absolute top-24 left-1/3 w-80 h-80 bg-primary/2 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Free Downloads</p>
            <h1 className="text-6xl md:text-7xl font-heading font-bold tracking-tighter mb-6">Tools &<br />Resources.</h1>
            <p className="text-muted-foreground max-w-lg leading-relaxed text-sm md:text-base">
              Templates, checklists, wireframes, and architectural specs completely written and optimized by our engineering team — fully customizable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Bar Section (User Request) */}
      <section className="py-8 bg-muted/20 dark:bg-card/10 border-b border-border px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex flex-wrap gap-1.5 order-2 md:order-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    activeCategory === cat
                      ? "bg-foreground text-background border-foreground shadow-sm"
                      : "border-border hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64 order-1 md:order-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background border border-border rounded-xl pl-9 pr-4 py-2 text-xs outline-none focus:border-foreground/40 transition-colors placeholder:text-muted-foreground/80 font-medium"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Resources grid */}
      <section className="py-16 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-5xl">

          {/* Visual Toast Notification on successful download */}
          <AnimatePresence>
            {downloadSuccessMessage && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className="mb-8 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between gap-4 text-xs font-semibold text-foreground"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  <span>{downloadSuccessMessage}</span>
                </div>
                <button 
                  onClick={() => setDownloadSuccessMessage(null)}
                  className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Grid display */}
          {filteredResources.length === 0 ? (
            <div className="text-center py-20 border border-border border-dashed rounded-2xl p-8 bg-muted/10">
              <p className="text-sm font-semibold text-muted-foreground">No resources found matching "{searchQuery}"</p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="mt-3 text-xs font-bold text-foreground underline hover:opacity-85"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredResources.map((res, i) => {
                const Icon = res.icon
                return (
                  <motion.div
                    key={res.id}
                    className="group border border-border rounded-2xl overflow-hidden bg-card hover:border-foreground/20 transition-colors flex flex-col glow-border"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -3 }}
                  >
                    {/* Dark top area */}
                    <div
                      className="relative flex items-end justify-between p-6 min-h-[120px] overflow-hidden"
                      style={{ backgroundColor: res.color }}
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                      <div className="relative z-10">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-2">{res.category}</span>
                        <Icon className="w-8 h-8 text-white/60" strokeWidth={1.5} />
                      </div>
                      <div className="relative z-10 text-right">
                        <span className="text-[10px] font-mono font-bold text-white/30 block">{res.format}</span>
                        <span className="text-[10px] font-mono text-white/20">{res.size}</span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-1 border-t border-border">
                      <h3 className="font-heading font-bold text-sm mb-2 tracking-tight text-foreground">{res.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-5 flex-1">{res.desc}</p>

                      {/* Checklist preview */}
                      <ul className="space-y-1.5 mb-6">
                        {res.items.map(item => (
                          <li key={item} className="flex items-center gap-2 text-[10px] text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-foreground/20 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <motion.button
                        onClick={() => triggerDownload(res)}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-border text-xs font-semibold hover:bg-foreground hover:text-background hover:border-foreground transition-all group cursor-pointer"
                        whileTap={{ scale: 0.97 }}
                      >
                        <Download className="w-3.5 h-3.5 group-hover:animate-bounce" />
                        Download Free
                      </motion.button>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}

          {/* Newsletter capture */}
          <motion.div
            className="mt-16 border border-border rounded-2xl p-10 bg-card flex flex-col md:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="font-heading font-bold text-xl tracking-tight mb-2 text-foreground">Get New Resources First</h3>
              <p className="text-sm text-muted-foreground max-w-sm">We release new templates and guides monthly. Subscribe to get them directly to your inbox — no spam, ever.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 md:w-64 px-4 py-3 rounded-xl border border-border bg-background text-sm outline-none focus:border-foreground/40 transition-colors placeholder:text-muted-foreground/60"
              />
              <button className="px-5 py-3 rounded-xl bg-foreground text-background text-sm font-semibold hover:scale-[1.02] transition-transform flex-shrink-0 cursor-pointer">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABannerSection />
    </>
  )
}
