import React, { useState } from "react"
import {
  Building2,
  Scale,
  ChefHat,
  Home,
  Clock,
  FileText
} from "lucide-react"

export interface ProductInterfaceMockupProps {
  type: "apartment-management" | "legal-crm" | "qr-food" | "pg-management"
  interactive?: boolean
  className?: string
}

export const ProductInterfaceMockup: React.FC<ProductInterfaceMockupProps> = ({
  type,
  interactive = true,
  className = ""
}) => {
  const [activeTab, setActiveTab] = useState<string>("overview")

  if (type === "apartment-management") {
    return (
      <div className={`bg-white rounded-xl border border-[#E4E4E0] shadow-studio-card overflow-hidden text-xs text-[#171717] ${className}`}>
        {/* Clean Application Header Bar */}
        <div className="bg-[#F1F1EE] border-b border-[#E4E4E0] px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#171717]" />
            <span className="font-semibold text-xs text-[#171717]">Apar Crown</span>
            <span className="text-[11px] text-[#646464] hidden sm:inline">· Apartment Operations Platform</span>
          </div>
          <span className="text-[10px] font-medium text-white bg-[#171717] px-2 py-0.5 rounded">
            Active Deployment
          </span>
        </div>

        {/* Dashboard Navigation Strip */}
        <div className="border-b border-[#E4E4E0] px-5 py-2.5 bg-[#FAFAF8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#171717] text-xs">Royal Palm Residency (320 Units)</span>
            <span className="px-2 py-0.5 rounded bg-[#F1F1EE] text-[#171717] border border-[#E4E4E0] font-medium text-[10px]">Active Society</span>
          </div>
          {interactive && (
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setActiveTab("overview")}
                className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                  activeTab === "overview" ? "bg-[#171717] text-white" : "text-[#646464] hover:text-[#171717]"
                }`}
              >
                Maintenance Ledger
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("tickets")}
                className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                  activeTab === "tickets" ? "bg-[#171717] text-white" : "text-[#646464] hover:text-[#171717]"
                }`}
              >
                Helpdesk Tickets (4 Open)
              </button>
            </div>
          )}
        </div>

        {/* Interface Content */}
        <div className="p-5 space-y-4">
          {/* Key Metric Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
              <span className="text-[10px] text-[#646464] uppercase tracking-wider block font-medium">October Collections</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-base font-semibold text-[#171717]">₹12,48,000</span>
                <span className="text-[10px] text-[#171717] font-medium">94.2%</span>
              </div>
              <span className="text-[10px] text-[#646464] block mt-0.5">302 of 320 units paid</span>
            </div>
            <div className="p-3 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
              <span className="text-[10px] text-[#646464] uppercase tracking-wider block font-medium">Pending Dues</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-base font-semibold text-[#171717]">₹72,000</span>
                <span className="text-[10px] text-[#646464]">18 units</span>
              </div>
              <span className="text-[10px] text-[#646464] block mt-0.5">Automated reminders sent</span>
            </div>
            <div className="p-3 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
              <span className="text-[10px] text-[#646464] uppercase tracking-wider block font-medium">Active Gate Passes</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-base font-semibold text-[#171717]">42 Today</span>
                <span className="text-[10px] text-[#646464]">14 visitors</span>
              </div>
              <span className="text-[10px] text-[#646464] block mt-0.5">28 scheduled deliveries</span>
            </div>
          </div>

          {/* Data Table with Horizontal Scroll on Mobile */}
          {activeTab === "overview" ? (
            <div className="border border-[#E4E4E0] rounded-lg overflow-x-auto">
              <div className="min-w-[540px]">
                <div className="bg-[#F1F1EE] px-3 py-2 text-[10px] font-semibold text-[#646464] uppercase tracking-wider grid grid-cols-5">
                  <span>Unit ID & Owner</span>
                  <span>Category</span>
                  <span>Amount</span>
                  <span>Payment Mode</span>
                  <span className="text-right">Ledger Status</span>
                </div>
                <div className="divide-y divide-[#E4E4E0] bg-white text-[11px]">
                  <div className="px-3 py-2 grid grid-cols-5 items-center">
                    <span className="font-medium text-[#171717]">Tower B - 402 (R. Sundaram)</span>
                    <span className="text-[#646464]">Regular Monthly Dues</span>
                    <span className="font-medium">₹4,200</span>
                    <span className="text-[#646464]">UPI Auto-reconciled</span>
                    <span className="text-right"><span className="px-1.5 py-0.5 bg-[#F1F1EE] text-[#171717] border border-[#E4E4E0] rounded text-[10px] font-medium">Settled</span></span>
                  </div>
                  <div className="px-3 py-2 grid grid-cols-5 items-center">
                    <span className="font-medium text-[#171717]">Tower A - 108 (K. Meenakshi)</span>
                    <span className="text-[#646464]">Corpus & Maintenance</span>
                    <span className="font-medium">₹5,100</span>
                    <span className="text-[#646464]">NEFT Transfer</span>
                    <span className="text-right"><span className="px-1.5 py-0.5 bg-[#F1F1EE] text-[#171717] border border-[#E4E4E0] rounded text-[10px] font-medium">Settled</span></span>
                  </div>
                  <div className="px-3 py-2 grid grid-cols-5 items-center">
                    <span className="font-medium text-[#171717]">Tower C - 201 (P. Varma)</span>
                    <span className="text-[#646464]">Clubhouse Booking</span>
                    <span className="font-medium">₹3,000</span>
                    <span className="text-[#646464]">Card Gateway</span>
                    <span className="text-right"><span className="px-1.5 py-0.5 bg-[#171717] text-white rounded text-[10px] font-medium">Pending 2d</span></span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="border border-[#E4E4E0] rounded-lg overflow-hidden divide-y divide-[#E4E4E0] bg-white">
              <div className="p-3 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#171717]">#T-1094: Lift 2 Power Inverter Sensor Alert</span>
                    <span className="px-2 py-0.5 bg-[#171717] text-white rounded text-[10px] font-medium">High SLA</span>
                  </div>
                  <span className="text-[10px] text-[#646464]">Reported by Tower B Facilities Lead • Technician Otis Dispatched (ETA: 45m)</span>
                </div>
                <span className="text-[10px] text-[#646464]">18 min ago</span>
              </div>
              <div className="p-3 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#171717]">#T-1093: Basement 1 Drainage Pump Service</span>
                    <span className="px-2 py-0.5 bg-[#F1F1EE] text-[#171717] border border-[#E4E4E0] rounded text-[10px] font-medium">In Progress</span>
                  </div>
                  <span className="text-[10px] text-[#646464]">Quarterly preventive inspection assigned to Vendor Sri Sai Motors</span>
                </div>
                <span className="text-[10px] text-[#646464]">2 hours ago</span>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  if (type === "legal-crm") {
    return (
      <div className={`bg-white rounded-xl border border-[#E4E4E0] shadow-studio-card overflow-hidden text-xs text-[#171717] ${className}`}>
        {/* Clean Application Header Bar */}
        <div className="bg-[#171717] text-white px-4 py-2.5 flex items-center justify-between border-b border-[#262626]">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-white" />
            <span className="font-semibold text-xs text-white">Law Throne</span>
            <span className="text-[11px] text-[#A0A0A0] hidden sm:inline">· Advocate Chambers CRM</span>
          </div>
          <span className="text-[10px] font-medium text-white bg-white/10 px-2 py-0.5 rounded border border-white/20">
            High Court Registry Sync
          </span>
        </div>

        {/* Case Header Strip */}
        <div className="border-b border-[#E4E4E0] px-5 py-3 bg-[#FAFAF8] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#171717] text-sm">W.P. No. 18492 / 2024</span>
              <span className="px-2 py-0.5 rounded bg-[#F1F1EE] text-[#171717] border border-[#E4E4E0] font-medium text-[10px]">Madras High Court - Court No. 14</span>
            </div>
            <p className="text-[11px] text-[#646464] mt-0.5">Petitioner: Apex Infra Tech Ltd. vs. Assistant Commissioner of GST</p>
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase tracking-wider text-[#646464] block font-semibold">Next Hearing</span>
            <span className="text-xs font-bold text-[#171717]">16 Oct 2026 • Item #12 (Final Arguments)</span>
          </div>
        </div>

        {/* Case Workspace Body */}
        <div className="p-5 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
              <span className="text-[10px] text-[#646464] uppercase tracking-wider block font-medium">Assigned Senior Counsel</span>
              <span className="text-xs font-semibold text-[#171717] mt-1 block">Adv. R. Raghuraman, Senior Bar</span>
              <span className="text-[10px] text-[#646464] block">Lead Associate: N. Priyadharshini</span>
            </div>
            <div className="p-3 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
              <span className="text-[10px] text-[#646464] uppercase tracking-wider block font-medium">Docket Evidence Status</span>
              <span className="text-xs font-semibold text-[#171717] mt-1 block">8 Filings Verified & E-Sealed</span>
              <span className="text-[10px] text-[#646464] block">Counter-affidavit indexed</span>
            </div>
            <div className="p-3 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
              <span className="text-[10px] text-[#646464] uppercase tracking-wider block font-medium">Retainer & Fee Ledger</span>
              <span className="text-xs font-semibold text-[#171717] mt-1 block">₹2,50,000 Billed</span>
              <span className="text-[10px] text-[#171717] block font-medium">Advance Cleared</span>
            </div>
          </div>

          {/* Case Chronology */}
          <div className="border border-[#E4E4E0] rounded-lg p-3.5 bg-white space-y-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#646464] block">Recent Case Milestones & Orders</span>
            <div className="space-y-2 text-[11px]">
              <div className="flex items-start gap-2.5 pb-2 border-b border-[#EFEFEA]">
                <Clock className="w-3.5 h-3.5 text-[#171717] mt-0.5 shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#171717]">Interim Stay Granted on SCN Demand</span>
                    <span className="text-[10px] text-[#646464]">04 Sep 2026</span>
                  </div>
                  <span className="text-[10px] text-[#646464]">Hon'ble Bench directed department to submit typed set within 3 weeks.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <FileText className="w-3.5 h-3.5 text-[#171717] mt-0.5 shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#171717]">Rejoinder Affidavit E-Filed</span>
                    <span className="text-[10px] text-[#646464]">28 Aug 2026</span>
                  </div>
                  <span className="text-[10px] text-[#646464]">Indexed docket uploaded to High Court digital registry.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === "qr-food") {
    return (
      <div className={`bg-white rounded-xl border border-[#E4E4E0] shadow-studio-card overflow-hidden text-xs text-[#171717] ${className}`}>
        {/* Clean Application Header Bar */}
        <div className="bg-[#171717] text-white px-4 py-2.5 flex items-center justify-between border-b border-[#262626]">
          <div className="flex items-center gap-2">
            <ChefHat className="w-4 h-4 text-white" />
            <span className="font-semibold text-xs text-white">QR Food Processing</span>
            <span className="text-[11px] text-[#A0A0A0] hidden sm:inline">· Kitchen Display Engine</span>
          </div>
          <span className="text-[10px] font-medium text-white bg-white/10 px-2 py-0.5 rounded border border-white/20 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            Live Sync
          </span>
        </div>

        {/* Live Service Ribbon */}
        <div className="bg-[#FAFAF8] border-b border-[#E4E4E0] px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#171717]">Rush Hour Service (18 Active Tables)</span>
            <span className="flex items-center gap-1 text-[10px] text-[#171717] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#171717] animate-pulse" />
              Kitchen Live (Avg Prep: 8m 40s)
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#646464]">Total Today: 142 Orders • ₹86,400</span>
        </div>

        {/* Kitchen Display Cards */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#F1F1EE]">
          {/* Card 1 */}
          <div className="bg-white rounded-lg border-2 border-[#171717] p-3 space-y-2 shadow-xs">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#E4E4E0]">
              <span className="font-bold text-[#171717]">Table 04 • #K-182</span>
              <span className="px-1.5 py-0.5 bg-[#171717] text-white font-mono text-[10px] font-bold rounded">04:12 min</span>
            </div>
            <div className="space-y-1 text-[11px]">
              <div className="flex justify-between font-medium">
                <span>2x Paneer Ghee Roast</span>
                <span className="text-[#646464]">Station A</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>1x Malabar Parotta Basket (4pc)</span>
                <span className="text-[#646464]">Tandoor</span>
              </div>
              <div className="flex justify-between text-[#646464]">
                <span>2x Filter Cold Brew</span>
                <span className="text-[#646464]">Beverages</span>
              </div>
            </div>
            <div className="pt-2 border-t border-[#EFEFEA] flex justify-between items-center text-[10px]">
              <span className="text-[#171717] font-semibold">UPI Paid (₹680)</span>
              <span className="bg-[#171717] text-white px-2 py-0.5 rounded text-[10px] font-medium">Mark Ready</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg border border-[#E4E4E0] p-3 space-y-2 shadow-xs">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#E4E4E0]">
              <span className="font-bold text-[#171717]">Table 11 • #K-183</span>
              <span className="px-1.5 py-0.5 bg-[#F1F1EE] text-[#171717] border border-[#E4E4E0] font-mono text-[10px] font-bold rounded">01:45 min</span>
            </div>
            <div className="space-y-1 text-[11px]">
              <div className="flex justify-between font-medium">
                <span>1x Chettinad Mushroom Biryani</span>
                <span className="text-[#646464]">Station B</span>
              </div>
              <div className="flex justify-between text-[#646464]">
                <span>1x Onion Raitha (Extra Spicy)</span>
                <span className="text-[#646464]">Station B</span>
              </div>
            </div>
            <div className="pt-2 border-t border-[#EFEFEA] flex justify-between items-center text-[10px]">
              <span className="text-[#171717] font-semibold">UPI Paid (₹340)</span>
              <span className="bg-[#FAFAF8] border border-[#E4E4E0] text-[#646464] px-2 py-0.5 rounded text-[10px] font-medium">Cooking</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg border border-[#E4E4E0] p-3 space-y-2 shadow-xs">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#E4E4E0]">
              <span className="font-bold text-[#171717]">Takeaway • #K-184</span>
              <span className="px-1.5 py-0.5 bg-[#171717] text-white font-mono text-[10px] font-bold rounded">Ready</span>
            </div>
            <div className="space-y-1 text-[11px]">
              <div className="flex justify-between font-medium">
                <span>2x Masala Dosa (Ghee)</span>
                <span className="text-[#646464]">Station A</span>
              </div>
              <div className="flex justify-between text-[#646464]">
                <span>1x Filter Coffee Flask (500ml)</span>
                <span className="text-[#646464]">Beverages</span>
              </div>
            </div>
            <div className="pt-2 border-t border-[#EFEFEA] flex justify-between items-center text-[10px]">
              <span className="text-[#171717] font-semibold">Packed</span>
              <span className="bg-[#171717] text-white px-2 py-0.5 rounded text-[10px] font-medium">Handed Over</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // PG Management System
  return (
    <div className={`bg-white rounded-xl border border-[#E4E4E0] shadow-studio-card overflow-hidden text-xs text-[#171717] ${className}`}>
      {/* Clean Application Header Bar */}
      <div className="bg-[#F1F1EE] border-b border-[#E4E4E0] px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Home className="w-4 h-4 text-[#171717]" />
          <span className="font-semibold text-xs text-[#171717]">PG Ops Suite</span>
          <span className="text-[11px] text-[#646464] hidden sm:inline">· Multi-Property Facility Operations</span>
        </div>
        <span className="text-[10px] font-medium text-[#171717] bg-[#F1F1EE] border border-[#E4E4E0] px-2 py-0.5 rounded">
          OMR Branch (84 Beds)
        </span>
      </div>

      <div className="p-4 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 bg-[#FAFAF8] border border-[#E4E4E0] rounded">
            <span className="text-[10px] text-[#646464] uppercase font-semibold">Occupancy Rate</span>
            <div className="text-sm font-bold text-[#171717] mt-0.5">78 / 84 Beds (92.8%)</div>
          </div>
          <div className="p-2.5 bg-[#FAFAF8] border border-[#E4E4E0] rounded">
            <span className="text-[10px] text-[#646464] uppercase font-semibold">Month Rent Collected</span>
            <div className="text-sm font-bold text-[#171717] mt-0.5">₹6,84,000 (94%)</div>
          </div>
          <div className="p-2.5 bg-[#FAFAF8] border border-[#E4E4E0] rounded">
            <span className="text-[10px] text-[#646464] uppercase font-semibold">Vacant Beds</span>
            <div className="text-sm font-bold text-[#171717] mt-0.5">6 Beds Available</div>
          </div>
        </div>

        {/* Visual Bed Grid Snippet */}
        <div className="border border-[#E4E4E0] rounded-lg p-3 bg-[#FAFAF8]">
          <span className="text-[10px] font-semibold text-[#646464] uppercase block mb-2">Floor 2 - Triple Sharing Rooms</span>
          <div className="grid grid-cols-4 gap-2">
            <div className="p-2 bg-white rounded border border-[#E4E4E0]">
              <span className="font-bold text-[11px] block">Room 201</span>
              <div className="flex gap-1 mt-1 text-[9px]">
                <span className="px-1 py-0.5 bg-[#171717] text-white rounded">Bed A: Occ</span>
                <span className="px-1 py-0.5 bg-[#171717] text-white rounded">Bed B: Occ</span>
                <span className="px-1 py-0.5 bg-[#F1F1EE] text-[#171717] border border-[#E4E4E0] rounded">Bed C: Vacant</span>
              </div>
            </div>
            <div className="p-2 bg-white rounded border border-[#E4E4E0]">
              <span className="font-bold text-[11px] block">Room 202</span>
              <div className="flex gap-1 mt-1 text-[9px]">
                <span className="px-1 py-0.5 bg-[#171717] text-white rounded">Bed A: Occ</span>
                <span className="px-1 py-0.5 bg-[#171717] text-white rounded">Bed B: Occ</span>
                <span className="px-1 py-0.5 bg-[#171717] text-white rounded">Bed C: Occ</span>
              </div>
            </div>
            <div className="p-2 bg-white rounded border border-[#E4E4E0]">
              <span className="font-bold text-[11px] block">Room 203</span>
              <div className="flex gap-1 mt-1 text-[9px]">
                <span className="px-1 py-0.5 bg-[#171717] text-white rounded">Bed A: Occ</span>
                <span className="px-1 py-0.5 bg-[#F1F1EE] text-[#171717] border border-[#E4E4E0] rounded">Bed B: Vacant</span>
                <span className="px-1 py-0.5 bg-[#171717] text-white rounded">Bed C: Occ</span>
              </div>
            </div>
            <div className="p-2 bg-white rounded border border-[#E4E4E0]">
              <span className="font-bold text-[11px] block">Room 204</span>
              <div className="flex gap-1 mt-1 text-[9px]">
                <span className="px-1 py-0.5 bg-[#171717] text-white rounded">Bed A: Occ</span>
                <span className="px-1 py-0.5 bg-[#171717] text-white rounded">Bed B: Occ</span>
                <span className="px-1 py-0.5 bg-[#171717] text-white rounded">Bed C: Occ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
