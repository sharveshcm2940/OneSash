import { SEO } from "../components/common/SEO"
import { Link } from "react-router-dom"
import { Home, Mail } from "lucide-react"

export const NotFoundPage = () => {
  return (
    <>
      <SEO
        title="404 — Page Not Found | OneSash"
        description="The requested page could not be found."
        noindex={true}
      />
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-32 bg-[#FAFAF8]">
        <div className="max-w-md text-center space-y-6">
          <div className="inline-block">
            <span className="text-[11px] font-semibold tracking-wider text-[#646464] uppercase px-3 py-1 bg-[#F1F1EE] rounded-sm border border-[#E4E4E0]">
              404 — Page Not Found
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-semibold tracking-tight text-[#171717]">
            Page Not Found
          </h1>

          <p className="text-xs sm:text-sm text-[#646464] leading-relaxed">
            The page you are looking for has been moved, archived, or does not exist. Return to our work overview or connect directly with our engineering team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-2.5 bg-[#171717] hover:bg-[#2c2c2c] text-white text-xs font-semibold rounded-full shadow-studio-subtle transition-all inline-flex items-center justify-center gap-2"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return to Home</span>
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-2.5 bg-[#F1F1EE] hover:bg-[#EAEAE5] text-[#171717] text-xs font-semibold rounded-full border border-[#E4E4E0] transition-all inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Studio</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
