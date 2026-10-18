export interface ProductProject {
  id: string
  name: string
  subtitle: string
  category: string
  clientType: string
  status: "In Production" | "Active Deployment" | "Production Pilot" | "In Active Development"
  year: string
  summary: string
  businessProblem: string
  solution: string
  keyFeatures: string[]
  techStack: string[]
  deliverables: string[]
  interfaceType: "apartment-management" | "legal-crm" | "qr-food" | "pg-management"
  demoAvailable: boolean
  accentColor: string
}

export const realProducts: ProductProject[] = [
  {
    id: "apar-crown",
    name: "Apar Crown",
    subtitle: "Apartment & Facility Management Platform",
    category: "Custom Software Development",
    clientType: "Residential Communities & Property Associations",
    status: "Active Deployment",
    year: "2024",
    summary: "A unified operations platform for gated residential complexes that consolidates maintenance fee billing, resident ticketing, gate pass tracking, and facility bookings into a single, intuitive system.",
    businessProblem: "Residential welfare associations struggled with fragmented WhatsApp groups, manual paper receipt books for maintenance collection, and zero transparency into vendor expenditures.",
    solution: "We designed and developed an integrated web and mobile management system with an automated ledger, instant payment reconciliations, and ticket escalation trees.",
    keyFeatures: [
      "Automated monthly maintenance ledger & automated receipt generation",
      "Resident complaint tracking with SLA resolution timers",
      "Visitor and delivery vehicle log with gate security notification",
      "Clubhouse and facility calendar reservation with access rules",
      "Auditable committee accounting with expense categorization"
    ],
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Redis"],
    deliverables: ["Admin Management Web Portal", "Resident Self-Service Mobile Web", "Automated Billing Engine", "PDF Receipt Generator"],
    interfaceType: "apartment-management",
    demoAvailable: true,
    accentColor: "#000000"
  },
  {
    id: "law-throne",
    name: "Law Throne",
    subtitle: "Legal Practice CRM & Case Lifecycle Platform",
    category: "Custom Software Development",
    clientType: "Advocate Chambers & Independent Law Practices",
    status: "Active Deployment",
    year: "2024",
    summary: "A secure case management and client relation platform engineered specifically for legal practitioners in India, synchronizing court hearing schedules, evidence dossiers, and fee retainers.",
    businessProblem: "Litigation lawyers lose billable hours manually cross-referencing daily court causelists across High Courts and District Courts while managing paper case dockets across multiple associates.",
    solution: "OneSash built Law Throne to automate court diary synchronization, securely store confidential case filings with role-based access, and provide instant case timeline tracking.",
    keyFeatures: [
      "Daily causelist and court hearing schedule synchronization",
      "Encrypted client case repository with role-scoped associate access",
      "Customizable retainer billing, court fee tracker, and expense reports",
      "Client milestone updates with automated hearing reminders",
      "Conflict-of-interest check database across existing and prior matters"
    ],
    techStack: ["React", "TypeScript", "Python / FastAPI", "PostgreSQL", "Docker", "S3 Storage"],
    deliverables: ["Chamber Admin Web Dashboard", "Advocate Hearing Diary", "Client Document Safe", "Billing & Retainer Module"],
    interfaceType: "legal-crm",
    demoAvailable: true,
    accentColor: "#000000"
  },
  {
    id: "qr-food-processing",
    name: "QR Food Processing System",
    subtitle: "Contactless Table Ordering & Kitchen Display Engine",
    category: "Web & POS Engineering",
    clientType: "High-Volume Cafes & Multi-Outlet Food Courts",
    status: "Active Deployment",
    year: "2024",
    summary: "A latency-critical ordering and kitchen workflow platform that allows restaurant patrons to scan table QR codes, customize orders, and pay instantly while tickets route dynamically to kitchen display units.",
    businessProblem: "Peak-hour restaurant bottlenecks caused order errors, table turn delays, and high staff overhead during rush hours with traditional paper order tickets.",
    solution: "We built an offline-tolerant QR ordering web app that needs zero app installation, paired with a real-time Kitchen Display System (KDS) running on WebSockets for sub-second ticket routing.",
    keyFeatures: [
      "Zero-install dynamic QR menu with live 86'd item availability",
      "Multi-station Kitchen Display System (KDS) with cook-time countdowns",
      "Table-level split billing and instant UPI / card checkout integration",
      "Live sales metrics, recipe inventory deduction, and peak-hour analysis",
      "Offline sync fallback if local restaurant broadband drops intermittently"
    ],
    techStack: ["React", "TypeScript", "Node.js", "WebSockets", "MongoDB", "Tailwind CSS"],
    deliverables: ["Customer PWA Ordering App", "Kitchen Display Unit Screen", "Manager Inventory Console", "UPI Payment Hook"],
    interfaceType: "qr-food",
    demoAvailable: true,
    accentColor: "#000000"
  },
  {
    id: "pg-management",
    name: "PG Management System",
    subtitle: "Hostel & Paying Guest Operations Platform",
    category: "Business Process Automation",
    clientType: "Hostel Operators & Student Accommodation Providers",
    status: "In Active Development",
    year: "2025",
    summary: "A purpose-built occupancy, rent collection, and resident onboarding platform designed for multi-branch paying guest accommodations and student hostels across Chennai, India and Bangalore, India.",
    businessProblem: "Hostel operators manage hundreds of beds across multiple buildings using messy paper registers, resulting in uncollected monthly rent, vacant bed oversights, and chaotic deposit refunds.",
    solution: "A centralized cloud operations suite tracking room bed inventories in real-time, sending automated WhatsApp payment links, and managing tenant KYC documentation.",
    keyFeatures: [
      "Visual floor-by-floor bed matrix showing vacant, occupied, and reserved beds",
      "Automated monthly rent invoice dispatch with payment link generation",
      "Digital KYC document verification and lease agreement storage",
      "Resident food preferences and meal tally management",
      "Deposit refund reconciliation and room inspection checklist"
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    deliverables: ["Branch Manager Dashboard", "Owner Multi-Property Overview", "Tenant Verification Portal"],
    interfaceType: "pg-management",
    demoAvailable: true,
    accentColor: "#000000"
  }
]
