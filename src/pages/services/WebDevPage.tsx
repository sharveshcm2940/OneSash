import { Link } from "react-router-dom"
import { SEO } from "../../components/common/SEO"
import { CTABannerSection } from "../../components/sections/CTABannerSection"
import { ProductInterfaceMockup } from "../../components/ui/ProductInterfaceMockup"
import { CheckCircle2 } from "lucide-react"

export const WebDevPage = () => {
  return (
    <>
      <SEO
        title="Web Application Development — Fast, Scalable Web Systems | OneSash"
        description="We engineer fast, accessible web applications and SaaS platforms using TypeScript, React, and modular APIs. Built by OneSash."
        keywords="web application development, React developers Chennai, SaaS development, full-stack web engineering, TypeScript web apps"
      />

      <main className="bg-[#FAFAF8]">
        
        {/* Service Hero */}
        <section className="pt-24 pb-16 md:pt-28 md:pb-20 border-b border-[#E4E4E0]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold tracking-tight text-[#171717] leading-[1.1]">
                  Fast, accessible web applications built to scale.
                </h1>

                <p className="text-base sm:text-lg text-[#646464] leading-relaxed max-w-2xl">
                  We don't build generic marketing brochures that crumble under traffic. We engineer mission-critical web applications, customer self-service portals, and high-concurrency SaaS dashboards with sub-second page responses and predictable state.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    to="/contact?service=web-development"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#171717] hover:bg-[#2c2c2c] rounded-md transition-colors"
                  >
                    Discuss Your Web Application
                  </Link>
                  <Link
                    to="/portfolio"
                    className="px-5 py-2.5 text-xs font-semibold text-[#171717] bg-white hover:bg-[#F1F1EE] rounded-md border border-[#E4E4E0] transition-colors"
                  >
                    Inspect QR Food KDS & Portals
                  </Link>
                </div>
              </div>

              {/* Real Web Interface Preview */}
              <div className="lg:col-span-5 space-y-2">
                <div className="border border-[#E4E4E0] rounded-xl overflow-hidden bg-white shadow-studio-card">
                  <ProductInterfaceMockup type="qr-food" className="w-full border-0 rounded-none shadow-none" />
                </div>
                <p className="text-[11px] text-[#646464] text-center">
                  QR Food Processing — Sub-second WebSocket order dispatch and KDS display
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Problems Solved & Capabilities */}
        <section className="py-16 md:py-20 border-b border-[#E4E4E0] bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
              
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                  What happens when web development is rushed.
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-[#646464] leading-relaxed">
                  <p>
                    <strong className="text-[#171717]">Heavy WordPress & Template Bloat: </strong>
                    Pre-made themes stuffed with dozens of unmaintained plugins result in 5+ second page load times, security holes, and broken customer checkouts.
                  </p>
                  <p>
                    <strong className="text-[#171717]">Fragile Frontend State: </strong>
                    Web apps that crash or desynchronize when users click back, refresh the browser, or lose internet connectivity for two seconds.
                  </p>
                  <p>
                    <strong className="text-[#171717]">Poor Responsive Behavior: </strong>
                    Desktop interfaces that are simply shrunk down for phones, forcing users to pinch and zoom on tiny buttons and broken tables.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                  How OneSash builds web platforms.
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-[#171717]">
                  <div className="flex items-start gap-2.5 p-3.5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                    <div>
                      <strong>Sub-Second First Contentful Paint: </strong>
                      Optimized asset bundles, code-splitting with Vite, and server-side edge caching ensure instant load speeds.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                    <div>
                      <strong>Strict TypeScript Typing: </strong>
                      End-to-end type safety between backend API responses and frontend components prevents runtime crashes.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                    <div>
                      <strong>Real-Time Data Feeds: </strong>
                      WebSocket channels and server-sent events for sub-second live order queues, chat, and status updates.
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
                What our web application packages include.
              </h2>
              <p className="text-sm text-[#646464]">
                Complete deliverable packages ready for production scale.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Single Page Application (SPA)", desc: "Fluid, client-side routing with React and Vite for zero-refresh page transitions." },
                { title: "RESTful & GraphQL API Endpoints", desc: "Strictly typed Node.js backend controllers with JWT session authentication and rate limiting." },
                { title: "Custom UI Component System", desc: "Bespoke design system with tailored tokens, accessible inputs, and zero third-party UI framework bloat." },
                { title: "Payment & Webhook Integrations", desc: "Secure Razorpay and Stripe checkouts with automated webhook event verification." },
                { title: "Automated Error Telemetry", desc: "Sentry and structured log integration to capture and diagnose exceptions in real time." },
                { title: "Production CDN Hardening", desc: "Global asset distribution, DNS security, and SSL certificates configured on Cloudflare or AWS CloudFront." },
              ].map((d, i) => (
                <div key={i} className="p-6 bg-white rounded-xl border border-[#E4E4E0] shadow-studio-card space-y-2">
                  <h3 className="text-sm font-semibold text-[#171717]">{d.title}</h3>
                  <p className="text-xs text-[#646464] leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach to Delivery */}
        <section className="py-16 md:py-20 border-b border-[#E4E4E0] bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="max-w-2xl mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                Structured delivery with weekly cloud previews.
              </h2>
              <p className="text-sm text-[#646464]">
                Predictable milestones and transparent engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
              <div className="p-6 bg-[#FAFAF8] rounded-xl border border-[#E4E4E0] space-y-2">
                <span className="font-semibold text-xs text-[#171717]">Step 1</span>
                <h3 className="text-sm font-semibold text-[#171717]">UX Architecture & Wireframes</h3>
                <p className="text-[#646464]">Mapping user personas, primary navigation hierarchies, and responsive wireframes in Figma.</p>
              </div>

              <div className="p-6 bg-[#FAFAF8] rounded-xl border border-[#E4E4E0] space-y-2">
                <span className="font-semibold text-xs text-[#171717]">Step 2</span>
                <h3 className="text-sm font-semibold text-[#171717]">API Contracts & Database Modeling</h3>
                <p className="text-[#646464]">Defining OpenAPI specifications and normalized database tables before connecting frontend components.</p>
              </div>

              <div className="p-6 bg-[#FAFAF8] rounded-xl border border-[#E4E4E0] space-y-2">
                <span className="font-semibold text-xs text-[#171717]">Step 3</span>
                <h3 className="text-sm font-semibold text-[#171717]">Sprint Slices & Staging Demos</h3>
                <p className="text-[#646464]">Full-stack implementation in 2-week sprints with working cloud staging demos for stakeholder sign-off.</p>
              </div>

              <div className="p-6 bg-[#FAFAF8] rounded-xl border border-[#E4E4E0] space-y-2">
                <span className="font-semibold text-xs text-[#171717]">Step 4</span>
                <h3 className="text-sm font-semibold text-[#171717]">QA, Security Hardening & Launch</h3>
                <p className="text-[#646464]">Cross-browser testing, penetration audit, production DNS switch, and 100% repository handover.</p>
              </div>
            </div>
          </div>
        </section>

        <CTABannerSection />

      </main>
    </>
  )
}
