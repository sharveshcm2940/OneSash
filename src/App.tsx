import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { ThemeProvider } from "./components/providers/ThemeProvider"
import { MainLayout } from "./layouts/MainLayout"
import { ScrollToTop } from "./components/layout/ScrollToTop"

// Lazy load core pages for optimal performance & code splitting
const HomePage = lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })))
const AboutPage = lazy(() => import("./pages/AboutPage").then(m => ({ default: m.AboutPage })))
const ServicesPage = lazy(() => import("./pages/ServicesPage").then(m => ({ default: m.ServicesPage })))
const PortfolioPage = lazy(() => import("./pages/PortfolioPage").then(m => ({ default: m.PortfolioPage })))
const ContactPage = lazy(() => import("./pages/ContactPage").then(m => ({ default: m.ContactPage })))
const CalculatorPage = lazy(() => import("./pages/CalculatorPage").then(m => ({ default: m.CalculatorPage })))
const BookingPage = lazy(() => import("./pages/BookingPage").then(m => ({ default: m.BookingPage })))
const CareersPage = lazy(() => import("./pages/CareersPage").then(m => ({ default: m.CareersPage })))

// Service Detail Pages
const CustomSoftwarePage = lazy(() => import("./pages/services/CustomSoftwarePage").then(m => ({ default: m.CustomSoftwarePage })))
const WebDevPage = lazy(() => import("./pages/services/WebDevPage").then(m => ({ default: m.WebDevPage })))
const MobileAppPage = lazy(() => import("./pages/services/MobileAppPage").then(m => ({ default: m.MobileAppPage })))
const AIPage = lazy(() => import("./pages/services/AIPage").then(m => ({ default: m.AIPage })))
const CloudPage = lazy(() => import("./pages/services/CloudPage").then(m => ({ default: m.CloudPage })))
const ProcessAutomationPage = lazy(() => import("./pages/services/ProcessAutomationPage").then(m => ({ default: m.ProcessAutomationPage })))

// Legal & Governance Pages
const PrivacyPage = lazy(() => import("./pages/PrivacyPage").then(m => ({ default: m.PrivacyPage })))
const TermsPage = lazy(() => import("./pages/TermsPage").then(m => ({ default: m.TermsPage })))
const SecurityPage = lazy(() => import("./pages/SecurityPage").then(m => ({ default: m.SecurityPage })))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then(m => ({ default: m.NotFoundPage })))

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-[#FAFAF8]">
    <div className="text-xs font-semibold text-[#646464] uppercase tracking-widest flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-[#1459D9] animate-ping" />
      Loading OneSash...
    </div>
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen bg-[#FAFAF8] text-[#171717] antialiased selection:bg-[#1459D9] selection:text-white">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route element={<MainLayout />}>
                  {/* Primary Studio Routes */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/work" element={<Navigate to="/portfolio" replace />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/quote" element={<Navigate to="/contact" replace />} />
                  <Route path="/calculator" element={<CalculatorPage />} />
                  <Route path="/booking" element={<BookingPage />} />
                  <Route path="/careers" element={<CareersPage />} />

                  {/* Dedicated Service Discipline Pages */}
                  <Route path="/services/custom-software" element={<CustomSoftwarePage />} />
                  <Route path="/services/web-development" element={<WebDevPage />} />
                  <Route path="/services/mobile-apps" element={<MobileAppPage />} />
                  <Route path="/services/ai-integration" element={<AIPage />} />
                  <Route path="/services/cloud-solutions" element={<CloudPage />} />
                  <Route path="/services/process-automation" element={<ProcessAutomationPage />} />

                  {/* Legal & Governance */}
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/security" element={<SecurityPage />} />

                  {/* Clean Redirects for Legacy URLs */}
                  <Route path="/case-studies" element={<Navigate to="/portfolio" replace />} />
                  <Route path="/technologies" element={<Navigate to="/services" replace />} />
                  <Route path="/resources" element={<Navigate to="/services" replace />} />
                  <Route path="/ai-glossary" element={<Navigate to="/services/ai-integration" replace />} />
                  <Route path="/blog" element={<Navigate to="/about" replace />} />

                  {/* 404 Fallback */}
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
