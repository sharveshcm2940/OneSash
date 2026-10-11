import { Link } from "react-router-dom"
import { SEO } from "../../components/common/SEO"
import { CTABannerSection } from "../../components/sections/CTABannerSection"
import { ProductInterfaceMockup } from "../../components/ui/ProductInterfaceMockup"
import { CheckCircle2 } from "lucide-react"

export const ProcessAutomationPage = () => {
  return (
    <>
      <SEO
        title="Business Process Automation — Workflow Synchronization | OneSash"
        description="We build automated system workflows that synchronize billing, messaging, and database operations. Built by OneSash."
        keywords="process automation, business workflows, WhatsApp automation Chennai, webhook integration India, automated billing engines"
      />

      <main className="bg-[#FAFAF8]">
        
        {/* Service Hero */}
        <section className="pt-24 pb-16 md:pt-28 md:pb-20 border-b border-[#E4E4E0]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold tracking-tight text-[#171717] leading-[1.1]">
                  Automate the clerical handoffs slowing your team down.
                </h1>

                <p className="text-base sm:text-lg text-[#646464] leading-relaxed max-w-2xl">
                  When a payment arrives, an invoice should generate automatically, customer records should update, and delivery teams should be notified without a human having to send three emails. We build automated event pipelines that run 24/7.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    to="/contact"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#171717] hover:bg-[#2c2c2c] rounded-md transition-colors"
                  >
                    Discuss Workflow Automation
                  </Link>
                  <Link
                    to="/portfolio"
                    className="px-5 py-2.5 text-xs font-semibold text-[#171717] bg-white hover:bg-[#F1F1EE] rounded-md border border-[#E4E4E0] transition-colors"
                  >
                    Inspect PG Management Suite
                  </Link>
                </div>
              </div>

              {/* Right: Application Interface */}
              <div className="lg:col-span-5 space-y-2">
                <div className="border border-[#E4E4E0] rounded-xl overflow-hidden bg-white shadow-studio-card">
                  <ProductInterfaceMockup type="pg-management" className="w-full border-0 rounded-none shadow-none" />
                </div>
                <p className="text-[11px] text-[#646464] text-center">
                  PG Management Suite — Automated bed occupancy tracking and WhatsApp rent billing
                </p>
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
                  Where operational hours actually disappear.
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-[#646464] leading-relaxed">
                  <p>
                    <strong className="text-[#171717]">Chasing Unpaid Dues Manually: </strong>
                    Employees spending days manually messaging residents or clients to collect monthly dues, leading to awkward interactions and missed revenue.
                  </p>
                  <p>
                    <strong className="text-[#171717]">Manual PDF & Receipt Creation: </strong>
                    Copy-pasting invoice line items into Word or Canva templates to generate tax receipts one by one.
                  </p>
                  <p>
                    <strong className="text-[#171717]">Disconnected Software Tools: </strong>
                    Having leads in one tool, invoices in another, and accounting in a third, requiring endless manual re-entry.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                  Reliable event-driven business workflows.
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-[#171717]">
                  <div className="flex items-start gap-2.5 p-3.5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#1459D9] shrink-0 mt-0.5" />
                    <div>
                      <strong>Automated Dues & Payment Links: </strong>
                      Scheduled monthly crons calculate dues, generate secure UPI payment links, and dispatch personalized WhatsApp alerts.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#1459D9] shrink-0 mt-0.5" />
                    <div>
                      <strong>Dynamic PDF Contract & Receipt Engine: </strong>
                      Serverless PDF engines compile customized agreements and tax receipts with digital signatures in milliseconds.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#1459D9] shrink-0 mt-0.5" />
                    <div>
                      <strong>Bi-directional Webhook Reconciliation: </strong>
                      Payment webhooks instantly reconcile ledger rows, send receipt notifications, and update accounting records.
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
                What our process automation packages include.
              </h2>
              <p className="text-sm text-[#646464]">
                Everything required for automated background execution and auditability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Automated Billing & WhatsApp Crons", desc: "Reliable scheduled background workers that run billing runs and deliver messages via official WhatsApp Business API." },
                { title: "Dynamic PDF Engine", desc: "Headless Chromium or PDFKit pipeline rendering branded receipts, invoices, and lease contracts." },
                { title: "Webhook Broker & Queue", desc: "Idempotent event dispatcher with automatic retries and dead-letter monitoring." },
                { title: "Inventory & Bed Matrix Sync", desc: "Real-time state reconcilers preventing double-booking or inventory stock desynchronization." },
                { title: "Escalation & SLA Triggers", desc: "Automated alert trees notifying team leads when customer tickets or maintenance tasks exceed target SLA." },
                { title: "Audit & Execution Logs", desc: "Searchable event history allowing management to verify exactly when each webhook or email was dispatched." },
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
