import { Link } from "react-router-dom"
import { SEO } from "../../components/common/SEO"
import { CTABannerSection } from "../../components/sections/CTABannerSection"
import { FileText, Cpu, Database, ArrowDown, CheckCircle2 } from "lucide-react"

export const AIPage = () => {
  return (
    <>
      <SEO
        title="AI Integration & Automation — Practical Machine Intelligence | OneSash"
        description="We engineer deterministic AI pipelines, document parsing, and database automation without hallucinations or buzzwords. Built by OneSash."
        keywords="AI integration, LLM pipelines Chennai, document OCR automation, business process AI India, practical machine learning"
      />

      <main className="bg-[#FAFAF8]">
        
        {/* Service Hero */}
        <section className="pt-24 pb-16 md:pt-28 md:pb-20 border-b border-[#E4E4E0]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold tracking-tight text-[#171717] leading-[1.1]">
                  Practical AI that solves clerical bottlenecks. Not hype.
                </h1>

                <p className="text-base sm:text-lg text-[#646464] leading-relaxed max-w-2xl">
                  We don't sell speculative chatbot gimmicks or buzzwords. We engineer deterministic AI pipelines that extract structured data from PDF dockets, reconcile messy vendor invoices into ERP databases, and power semantic search across your internal knowledge base.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    to="/contact"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#171717] hover:bg-[#2c2c2c] rounded-md transition-colors"
                  >
                    Discuss Your Automation Pipeline
                  </Link>
                  <Link
                    to="/portfolio"
                    className="px-5 py-2.5 text-xs font-semibold text-[#171717] bg-white hover:bg-[#F1F1EE] rounded-md border border-[#E4E4E0] transition-colors"
                  >
                    Inspect Court Docket Ingestion in Law Throne
                  </Link>
                </div>
              </div>

              {/* Practical Workflow Diagram Card */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-xl border border-[#E4E4E0] p-6 shadow-studio-card space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E4E4E0]">
                    <span className="text-[11px] font-semibold uppercase text-[#171717]">
                      Automation Pipeline Architecture
                    </span>
                    <span className="px-2 py-0.5 bg-[#171717] text-white rounded text-[10px] font-medium">
                      Zero Hallucination
                    </span>
                  </div>

                  {/* Step 1: Ingestion */}
                  <div className="p-3 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-[#171717]" />
                      <div>
                        <strong className="text-[#171717] block">1. Ingestion & Pre-processing</strong>
                        <span className="text-[10px] text-[#646464]">Scanned PDF, court causelist, or vendor invoice</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-[#646464]">Raw OCR</span>
                  </div>

                  <div className="flex justify-center py-0.5">
                    <ArrowDown className="w-3.5 h-3.5 text-[#646464]" />
                  </div>

                  {/* Step 2: Deterministic Extraction */}
                  <div className="p-3 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Cpu className="w-4 h-4 text-[#171717]" />
                      <div>
                        <strong className="text-[#171717] block">2. Deterministic JSON Parser</strong>
                        <span className="text-[10px] text-[#646464]">LLM + Strict schema gate with Zod validation</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-[#171717] font-semibold">Schema Gate</span>
                  </div>

                  <div className="flex justify-center py-0.5">
                    <ArrowDown className="w-3.5 h-3.5 text-[#646464]" />
                  </div>

                  {/* Step 3: Database Insertion */}
                  <div className="p-3 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Database className="w-4 h-4 text-[#171717]" />
                      <div>
                        <strong className="text-[#171717] block">3. ACID Database Insertion</strong>
                        <span className="text-[10px] text-[#646464]">Written directly to PostgreSQL tables & audit logs</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-[#171717] font-semibold">Auto-Commit</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Problems Solved */}
        <section className="py-16 md:py-20 border-b border-[#E4E4E0] bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
              
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                  Hours wasted on clerical transcription.
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-[#646464] leading-relaxed">
                  <p>
                    <strong className="text-[#171717]">Human Transcription Errors: </strong>
                    Manual re-typing of invoice numbers, GST identification numbers, or court hearing dates leads to costly clerical errors.
                  </p>
                  <p>
                    <strong className="text-[#171717]">Unstructured Data Trap: </strong>
                    Valuable contracts, maintenance reports, and vendor agreements remain locked in email attachments where nobody can query or search them.
                  </p>
                  <p>
                    <strong className="text-[#171717]">Fear of AI Hallucinations: </strong>
                    Off-the-shelf consumer chatbots invent facts and numbers. Businesses need verified deterministic extractors with mathematical guarantees.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                  Deterministic guardrails on every output.
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-[#171717]">
                  <div className="flex items-start gap-2.5 p-3.5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                    <div>
                      <strong>Strict Schema Validation: </strong>
                      Every LLM response is parsed through a strict JSON schema gate. If a field fails validation, it flags for immediate human review instead of inserting bogus data.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                    <div>
                      <strong>Private Vector Knowledge Search (RAG): </strong>
                      Semantic search powered by pgvector over your internal documents, returning direct source page references for every answer.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                    <div>
                      <strong>Full Audit Logs: </strong>
                      Every AI-assisted decision records the raw input, model version, temperature, and extraction confidence score for complete compliance.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-16 md:py-20 border-b border-[#E4E4E0] bg-[#F1F1EE]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="max-w-2xl mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                What our AI integration packages include.
              </h2>
              <p className="text-sm text-[#646464]">
                Production-ready pipelines that integrate with your existing databases.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Document Ingestion Pipeline", desc: "Automated OCR extraction service accepting PDF, TIFF, and scanned photos via secure API." },
                { title: "Deterministic Parser Microservice", desc: "Python FastAPI service with Zod schema verification and automated human-in-the-loop fallback." },
                { title: "Vector Knowledge Base (RAG)", desc: "PostgreSQL pgvector database indexing company policies, client files, and contracts." },
                { title: "Database Reconciler Hook", desc: "Direct database write transactions populating your existing PostgreSQL or MySQL tables." },
                { title: "Full Source Code & Weights", desc: "Complete repository, prompt definitions, and infrastructure configuration files transferred to you." },
                { title: "Compliance Audit Console", desc: "Admin review UI allowing team leads to inspect extraction confidence scores and audit histories." },
              ].map((d, i) => (
                <div key={i} className="p-6 bg-white rounded-xl border border-[#E4E4E0] shadow-studio-card space-y-2">
                  <h3 className="text-sm font-semibold text-[#171717]">{d.title}</h3>
                  <p className="text-xs text-[#646464] leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABannerSection />

      </main>
    </>
  )
}
