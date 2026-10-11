import { useState } from "react"
import { Link } from "react-router-dom"
import { ProductInterfaceMockup } from "../ui/ProductInterfaceMockup"

export const HeroSection = () => {
  const [activeProduct, setActiveProduct] = useState<"apar-crown" | "law-throne" | "qr-food">("apar-crown")

  const products = [
    {
      id: "apar-crown" as const,
      name: "Apar Crown",
      type: "apartment-management" as const,
      tag: "Apartment Management Platform",
    },
    {
      id: "law-throne" as const,
      name: "Law Throne",
      type: "legal-crm" as const,
      tag: "Legal Practice CRM",
    },
    {
      id: "qr-food" as const,
      name: "QR Food Processing",
      type: "qr-food" as const,
      tag: "Kitchen Display & Table Ordering",
    }
  ]

  const activeProductData = products.find(p => p.id === activeProduct) || products[0]

  return (
    <section className="relative bg-[#FAFAF8] pt-24 pb-16 md:pt-28 md:pb-20 border-b border-[#E4E4E0]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Direct Headline, Plain Speaking, Standard Buttons */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl font-heading font-semibold tracking-tight text-[#171717] leading-[1.12]">
              We design and build custom software for businesses.
            </h1>

            <p className="text-base sm:text-lg font-normal text-[#646464] max-w-xl leading-relaxed">
              OneSash is an independent software development team based in Chennai. We build operations platforms, web applications, and internal tools that help companies run better.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                to="/portfolio"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#171717] hover:bg-[#2c2c2c] rounded-md transition-colors text-center"
              >
                Explore Our Work
              </Link>

              <Link
                to="/contact"
                className="px-5 py-2.5 text-xs font-semibold text-[#171717] bg-white hover:bg-[#F1F1EE] rounded-md transition-colors border border-[#E4E4E0] text-center"
              >
                Discuss a Project
              </Link>
            </div>

            <p className="text-xs text-[#646464] pt-2">
              Engineering studio based in Chennai and Bangalore. Direct communication with the developers writing your software.
            </p>
          </div>

          {/* Right Column: Clean Product Mockup */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 bg-[#F1F1EE] p-1 rounded-md border border-[#E4E4E0]">
                {products.map((prod) => (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => setActiveProduct(prod.id)}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                      activeProduct === prod.id
                        ? "bg-white text-[#171717] font-semibold shadow-xs"
                        : "text-[#646464] hover:text-[#171717]"
                    }`}
                  >
                    {prod.name}
                  </button>
                ))}
              </div>

              <span className="text-[11px] text-[#646464] hidden sm:inline">
                Live Software
              </span>
            </div>

            <div className="border border-[#E4E4E0] rounded-xl overflow-hidden bg-white shadow-studio-card">
              <ProductInterfaceMockup 
                type={activeProductData.type} 
                interactive={true}
                className="w-full border-0 rounded-none shadow-none"
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#646464] px-1">
              <span>{activeProductData.name} — {activeProductData.tag}</span>
              <Link 
                to="/portfolio" 
                className="text-[#1459D9] hover:underline font-medium"
              >
                View project details
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
