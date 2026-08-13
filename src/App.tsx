import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { ThemeProvider } from "./components/providers/ThemeProvider"
import { SmoothScrollProvider } from "./components/providers/SmoothScrollProvider"
import { CustomCursor } from "./components/ui/CustomCursor"
import { MainLayout } from "./layouts/MainLayout"
import { ScrollProgressBar } from "./components/ui/ScrollProgressBar"
import { BackToTop } from "./components/ui/BackToTop"
import { CommandPalette } from "./components/ui/CommandPalette"
import { CookieBanner } from "./components/ui/CookieBanner"
import { ScrollToTop } from "./components/layout/ScrollToTop"

// Lazy load pages for code splitting
const HomePage = lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })))
const AboutPage = lazy(() => import("./pages/AboutPage").then(m => ({ default: m.AboutPage })))
const ServicesPage = lazy(() => import("./pages/ServicesPage").then(m => ({ default: m.ServicesPage })))
const PortfolioPage = lazy(() => import("./pages/PortfolioPage").then(m => ({ default: m.PortfolioPage })))
const ContactPage = lazy(() => import("./pages/ContactPage").then(m => ({ default: m.ContactPage })))
const TechnologiesPage = lazy(() => import("./pages/TechnologiesPage").then(m => ({ default: m.TechnologiesPage })))
const CalculatorPage = lazy(() => import("./pages/CalculatorPage").then(m => ({ default: m.CalculatorPage })))
const BookingPage = lazy(() => import("./pages/BookingPage").then(m => ({ default: m.BookingPage })))
const BlogPage = lazy(() => import("./pages/BlogPage").then(m => ({ default: m.BlogPage })))
const CareersPage = lazy(() => import("./pages/CareersPage").then(m => ({ default: m.CareersPage })))
const ResourcesPage = lazy(() => import("./pages/ResourcesPage").then(m => ({ default: m.ResourcesPage })))
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage").then(m => ({ default: m.CaseStudiesPage })))
const WebDevPage = lazy(() => import("./pages/services/WebDevPage").then(m => ({ default: m.WebDevPage })))
const MobileAppPage = lazy(() => import("./pages/services/MobileAppPage").then(m => ({ default: m.MobileAppPage })))
const DesignPage = lazy(() => import("./pages/services/DesignPage").then(m => ({ default: m.DesignPage })))
const CustomSoftwarePage = lazy(() => import("./pages/services/CustomSoftwarePage").then(m => ({ default: m.CustomSoftwarePage })))
const CloudPage = lazy(() => import("./pages/services/CloudPage").then(m => ({ default: m.CloudPage })))
const AIPage = lazy(() => import("./pages/services/AIPage").then(m => ({ default: m.AIPage })))
const AIGlossaryPage = lazy(() => import("./pages/AIGlossaryPage").then(m => ({ default: m.AIGlossaryPage })))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then(m => ({ default: m.NotFoundPage })))

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-10 h-10 border-2 border-border border-t-primary rounded-full animate-spin" />
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="saash-theme">
        <SmoothScrollProvider>
          <BrowserRouter>
            <ScrollToTop />
            <CustomCursor />
            <ScrollProgressBar />
            <BackToTop />
            <CommandPalette />
            <CookieBanner />
            <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white cursor-none md:cursor-none">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/quote" element={<ContactPage />} />
                    
                    {/* Services Dropdown Pages */}
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/services/web-development" element={<WebDevPage />} />
                    <Route path="/services/mobile-apps" element={<MobileAppPage />} />
                    <Route path="/services/ui-ux-design" element={<DesignPage />} />
                    <Route path="/services/custom-software" element={<CustomSoftwarePage />} />
                    <Route path="/services/cloud-solutions" element={<CloudPage />} />
                    <Route path="/services/ai-integration" element={<AIPage />} />

                    <Route path="/technologies" element={<TechnologiesPage />} />
                    <Route path="/calculator" element={<CalculatorPage />} />
                    <Route path="/booking" element={<BookingPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/resources" element={<ResourcesPage />} />
                    <Route path="/ai-glossary" element={<AIGlossaryPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Route>
                </Routes>
              </Suspense>
            </div>
          </BrowserRouter>
        </SmoothScrollProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
