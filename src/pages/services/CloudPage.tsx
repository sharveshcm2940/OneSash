import { Link } from "react-router-dom"
import { SEO } from "../../components/common/SEO"
import { CTABannerSection } from "../../components/sections/CTABannerSection"
import { ShieldCheck, Server, Database, ArrowDown, CheckCircle2 } from "lucide-react"

export const CloudPage = () => {
  return (
    <>
      <SEO
        title="Cloud Deployment & Maintenance — High Uptime Infrastructure | OneSash"
        description="We containerize applications using Docker, configure automated CI/CD pipelines, point-in-time database snapshots, and 24/7 uptime monitoring. Built by OneSash."
        keywords="cloud deployment, DevOps Chennai, Docker containers, PostgreSQL backups, high uptime hosting, AWS infrastructure India"
      />

      <main className="bg-[#FAFAF8]">
        
        {/* Service Hero */}
        <section className="pt-24 pb-16 md:pt-28 md:pb-20 border-b border-[#E4E4E0]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold tracking-tight text-[#171717] leading-[1.1]">
                  Resilient cloud infrastructure with zero downtime.
                </h1>

                <p className="text-base sm:text-lg text-[#646464] leading-relaxed max-w-2xl">
                  A software application is only as good as its uptime and disaster recovery. We containerize your systems using Docker, establish automated GitHub Actions deployment pipelines, configure point-in-time database snapshots, and monitor server health 24/7.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    to="/contact"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#171717] hover:bg-[#2c2c2c] rounded-md transition-colors"
                  >
                    Discuss Cloud Deployment & Hosting
                  </Link>
                  <Link
                    to="/services"
                    className="px-5 py-2.5 text-xs font-semibold text-[#171717] bg-white hover:bg-[#F1F1EE] rounded-md border border-[#E4E4E0] transition-colors"
                  >
                    Inspect All Disciplines
                  </Link>
                </div>
              </div>

              {/* Infrastructure Architecture Diagram Card */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-xl border border-[#E4E4E0] p-6 shadow-studio-card space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E4E4E0]">
                    <span className="text-[11px] font-semibold uppercase text-[#171717]">
                      Production Cloud Topology
                    </span>
                    <span className="px-2 py-0.5 bg-[#E6F4EA] text-[#137333] rounded text-[10px] font-medium">
                      Hardened Linux
                    </span>
                  </div>

                  {/* Level 1: Edge & CDN */}
                  <div className="p-3 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#1459D9]" />
                      <div>
                        <strong className="text-[#171717] block">Cloudflare Edge & Reverse Proxy</strong>
                        <span className="text-[10px] text-[#646464]">TLS 1.3, DDoS Shield & Automated WAF</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-[#0D7A5F] font-medium">Sub-10ms</span>
                  </div>

                  <div className="flex justify-center py-0.5">
                    <ArrowDown className="w-3.5 h-3.5 text-[#646464]" />
                  </div>

                  {/* Level 2: App Containers */}
                  <div className="p-3 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Server className="w-4 h-4 text-[#1459D9]" />
                      <div>
                        <strong className="text-[#171717] block">Dockerized Application Cluster</strong>
                        <span className="text-[10px] text-[#646464]">Node.js & Python Services with Nginx Gateway</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-[#1459D9] font-medium">Auto-Restart</span>
                  </div>

                  <div className="flex justify-center py-0.5">
                    <ArrowDown className="w-3.5 h-3.5 text-[#646464]" />
                  </div>

                  {/* Level 3: Database & Backup */}
                  <div className="p-3 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Database className="w-4 h-4 text-[#1459D9]" />
                      <div>
                        <strong className="text-[#171717] block">PostgreSQL (ACID) & Encrypted S3</strong>
                        <span className="text-[10px] text-[#646464]">Automated 6-Hour Encrypted WAL Backups</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-[#1459D9] font-medium">Point-in-Time</span>
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
                  What happens when hosting is an afterthought.
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-[#646464] leading-relaxed">
                  <p>
                    <strong className="text-[#171717]">No Automated Disaster Recovery: </strong>
                    If a server's disk corrupts and backups were manual, weeks of customer orders, invoices, and user records are permanently destroyed.
                  </p>
                  <p>
                    <strong className="text-[#171717]">Downtime During Updates: </strong>
                    Developers SSHing into production machines to run manual commands often cause unintended downtime, broken dependencies, and 502 errors.
                  </p>
                  <p>
                    <strong className="text-[#171717]">Security Vulnerabilities: </strong>
                    Outdated Linux kernels, unpatched OpenSSL packages, and open database ports expose customer data to automated credential-stuffing attacks.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                  How OneSash keeps your systems running.
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-[#171717]">
                  <div className="flex items-start gap-2.5 p-3.5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#1459D9] shrink-0 mt-0.5" />
                    <div>
                      <strong>Automated Daily Encrypted Backups: </strong>
                      Daily full snapshots and continuous write-ahead logs (WAL) stored in encrypted, air-gapped object storage for point-in-time recovery.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#1459D9] shrink-0 mt-0.5" />
                    <div>
                      <strong>Zero-Downtime CI/CD: </strong>
                      Pull requests trigger automated tests, build immutable Docker containers, and deploy to live servers without dropping active user connections.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#1459D9] shrink-0 mt-0.5" />
                    <div>
                      <strong>24/7 Telemetry & Health Monitoring: </strong>
                      Real-time alerts sent to our on-call engineering channel if CPU load, memory exhaustion, or HTTP 5xx errors spike.
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
                What our cloud deployment packages include.
              </h2>
              <p className="text-sm text-[#646464]">
                Complete infrastructure specifications and operations documentation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Docker Compose / Container Topology", desc: "Clean Dockerfiles with multi-stage builds, non-root users, and minimal Alpine Linux base images." },
                { title: "GitHub Actions CI/CD Workflows", desc: "Automated linting, unit test execution, image building, and production deployment scripts." },
                { title: "PostgreSQL Automated Snapshot Cron", desc: "Automated daily pg_dump scripts with AES-256 encryption pushed to AWS S3 or DigitalOcean Spaces." },
                { title: "Nginx / Cloudflare SSL Hardening", desc: "Strict HSTS headers, TLS 1.3 enforcement, brute-force rate-limiting, and CORS configurations." },
                { title: "Server Health Telemetry", desc: "Configured Grafana/Prometheus or Uptime Kuma monitoring with instant Slack/WhatsApp alerts." },
                { title: "Disaster Recovery Runbook", desc: "Step-by-step verified recovery manual explaining how to restore the entire stack from scratch in under 45 minutes." },
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
