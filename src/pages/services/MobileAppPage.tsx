import { Link } from "react-router-dom"
import { SEO } from "../../components/common/SEO"
import { CTABannerSection } from "../../components/sections/CTABannerSection"
import { WifiOff, Bell, ShieldCheck } from "lucide-react"

export const MobileAppPage = () => {
  return (
    <>
      <SEO
        title="Mobile Application Development — iOS & Android Engineering | OneSash"
        description="We build fluid iOS and Android mobile applications with offline-first SQLite synchronization, 60fps performance, and push notifications. Built by OneSash."
        keywords="mobile app development, iOS developers Chennai, Android developers India, React Native studio, offline-first mobile apps"
      />

      <main className="bg-[#FAFAF8]">
        
        {/* Service Hero */}
        <section className="pt-24 pb-16 md:pt-28 md:pb-20 border-b border-[#E4E4E0]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold tracking-tight text-[#171717] leading-[1.1]">
                  Fluid mobile apps engineered for field and consumer use.
                </h1>

                <p className="text-base sm:text-lg text-[#646464] leading-relaxed max-w-2xl">
                  Whether your staff needs an offline-first inspection app in basements without cell signal or your customers expect an instant 60fps mobile checkout, we build dependable iOS and Android apps with zero bloat.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    to="/contact?service=mobile-apps"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#171717] hover:bg-[#2c2c2c] rounded-md transition-colors"
                  >
                    Discuss Your Mobile App Scope
                  </Link>
                  <Link
                    to="/portfolio"
                    className="px-5 py-2.5 text-xs font-semibold text-[#171717] bg-white hover:bg-[#F1F1EE] rounded-md border border-[#E4E4E0] transition-colors"
                  >
                    Explore Field & Security Apps
                  </Link>
                </div>
              </div>

              {/* Clean Mobile Screen Surface */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-[300px] bg-white rounded-xl p-4 shadow-studio-card border border-[#E4E4E0] text-xs space-y-3">
                  <div className="flex justify-between items-center text-[10px] text-[#646464] pb-2 border-b border-[#E4E4E0]">
                    <span className="font-semibold text-[#171717]">Security Gate Console</span>
                    <span className="text-[#171717] font-semibold">Online Sync</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] text-[#646464] font-medium">Apar Crown Gateway</span>
                    <h4 className="font-semibold text-sm text-[#171717]">Visitor Entry Log</h4>
                  </div>

                  {/* Quick Action Card */}
                  <div className="p-3 bg-[#F1F1EE] rounded-lg border border-[#E4E4E0] space-y-1">
                    <span className="text-[10px] text-[#171717] font-bold block">INCOMING VISITOR</span>
                    <div className="font-semibold text-[#171717] text-xs">TN-09-CB-4819 (Amazon Delivery)</div>
                    <span className="text-[10px] text-[#646464] block">Destination: Tower B - 402</span>
                  </div>

                  <div className="p-3 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0] space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-[#171717] text-[11px]">Resident Authorization</span>
                      <span className="px-1.5 py-0.5 bg-[#171717] text-white rounded text-[9px] font-bold">Approved</span>
                    </div>
                    <p className="text-[10px] text-[#646464]">R. Sundaram verified via resident app notification at 09:39 AM.</p>
                  </div>

                  <button type="button" className="w-full py-2 bg-[#171717] text-white rounded-md font-semibold text-[11px] text-center">
                    Print Gate Pass Badge
                  </button>
                </div>
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
                  Why low-quality mobile apps get abandoned.
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-[#646464] leading-relaxed">
                  <p>
                    <strong className="text-[#171717]">Clunky WebView Wrappers: </strong>
                    Packaging a slow website in a native shell leads to unresponsive scrolling, delayed taps, and negative App Store ratings.
                  </p>
                  <p>
                    <strong className="text-[#171717]">Crashing in Zero-Signal Zones: </strong>
                    Field staff in basements, warehouses, or transit lose connection and the app completely freezes, destroying entered data.
                  </p>
                  <p>
                    <strong className="text-[#171717]">Battery Drain & Memory Leaks: </strong>
                    Unoptimized background polling drains user phones and leads to rapid uninstalls.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                  Engineered for real-world dependability.
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-[#171717]">
                  <div className="flex items-start gap-2.5 p-3.5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
                    <WifiOff className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                    <div>
                      <strong>Offline-First SQLite Architecture: </strong>
                      Local SQLite caching ensures field operations run smoothly offline, synchronizing automatically once signal is restored.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
                    <Bell className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                    <div>
                      <strong>Native Push Pipelines (APNs & FCM): </strong>
                      Sub-second transactional notifications for urgent approvals, order updates, and security alerts.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
                    <ShieldCheck className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                    <div>
                      <strong>Biometric Hardware Integration: </strong>
                      Face ID, Touch ID, and fingerprint authentication with secure keychain storage for sensitive client credentials.
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
                What our mobile delivery packages include.
              </h2>
              <p className="text-sm text-[#646464]">
                Everything required for store deployment and continuous release cycles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "iOS App Store Binary & Build", desc: "Signed IPA build configured for Apple TestFlight testing and production App Store submission." },
                { title: "Android Google Play Bundle (AAB)", desc: "Optimized Android App Bundle compliant with Google Play target API requirements." },
                { title: "Offline Sync Engine", desc: "SQLite transactional queue ensuring zero data loss during network dropouts." },
                { title: "Push Notification Gateway", desc: "Configured Apple Push Notification service (APNs) and Firebase Cloud Messaging (FCM) hooks." },
                { title: "Complete Source Code", desc: "100% intellectual property ownership with full React Native / Flutter repository transfer." },
                { title: "Store Submission Support", desc: "We handle privacy policy disclosures, screenshots, and review feedback until your app is live." },
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
