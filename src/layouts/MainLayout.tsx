import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
