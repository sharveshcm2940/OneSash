import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"
import { ConversionTracking } from "../components/layout/ConversionTracking"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ConversionTracking />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
