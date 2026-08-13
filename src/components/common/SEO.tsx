import { Helmet } from "react-helmet-async"

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: "website" | "article" | "profile"
  author?: string
  publishedDate?: string
  schema?: Record<string, unknown> | Array<Record<string, unknown>>
  noindex?: boolean
}

const DEFAULT_SITE_NAME = "1Sash — Software Development Studio"
const DEFAULT_TITLE = "1Sash — Full-Stack Software Engineering & Freelance Studio"
const DEFAULT_DESCRIPTION =
  "1Sash Technocrafts is a top-tier software engineering studio in Chennai, India. Founded by Saraveshvaran A, Sharvesh CM, Siddharth Santhosh Kumar, and Vivek A. We engineer custom web systems, mobile apps, enterprise AI solutions, and cloud DevOps."
const DEFAULT_KEYWORDS =
  "1Sash, 1Sash Technocrafts, software development studio, full stack web development, React Vite TypeScript, Chennai software company, custom software development, mobile app development, AI solutions, cloud devops, software freelancing company, Saraveshvaran A, Sharvesh CM, Siddharth Santhosh Kumar, Vivek A"
const DEFAULT_OG_IMAGE = "https://onesash.co.in/onesash-logo.jpg"
const DEFAULT_SITE_URL = "https://onesash.co.in"

export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  author = "1Sash Engineering Team",
  publishedDate,
  schema,
  noindex = false,
}: SEOProps) => {
  const fullTitle = title
    ? `${title} | 1Sash Technocrafts`
    : DEFAULT_TITLE

  const currentOrigin = typeof window !== "undefined" && window.location.origin && !window.location.origin.includes("localhost")
    ? window.location.origin
    : DEFAULT_SITE_URL

  const path = typeof window !== "undefined" ? window.location.pathname : ""
  const canonical = canonicalUrl || `${currentOrigin}${path}`

  // Default Organization JSON-LD Schema
  const defaultOrgSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "1Sash",
    "legalName": "1Sash Technocrafts",
    "alternateName": ["1Sash Studio", "1Sash Software Studio"],
    "url": currentOrigin,
    "logo": `${currentOrigin}/onesash-logo.jpg`,
    "image": ogImage.startsWith("http") ? ogImage : `${currentOrigin}${ogImage}`,
    "description": DEFAULT_DESCRIPTION,
    "email": "onesash.contact@gmail.com",
    "telephone": ["+918903467843", "+919980399557"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "founders": [
      {
        "@type": "Person",
        "name": "Saraveshvaran A",
        "jobTitle": "Co-founder & Principal Architect",
        "sameAs": "https://www.linkedin.com/in/sarvesh-arun-8b1904337/"
      },
      {
        "@type": "Person",
        "name": "Sharvesh CM",
        "jobTitle": "Co-founder & Head of Interactive UI Engineering",
        "sameAs": "https://www.linkedin.com/in/c-m-sharvesh-847066332/"
      },
      {
        "@type": "Person",
        "name": "Siddharth Santhosh Kumar",
        "jobTitle": "Co-founder & Chief Product Strategist",
        "sameAs": "https://www.linkedin.com/in/siddharthsanthoshkumar/"
      },
      {
        "@type": "Person",
        "name": "Vivek A",
        "jobTitle": "Co-founder & Marketing Head",
        "sameAs": "https://www.linkedin.com/in/vivek-arumugam-a01303328/"
      }
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://www.linkedin.com/company/onesash",
      "https://github.com/onesash"
    ]
  }

  // WebSite Schema for Sitelinks Search
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "1Sash Technocrafts",
    "alternateName": "1Sash",
    "url": currentOrigin,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${currentOrigin}/resources?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  // Generate Automatic BreadcrumbList Schema based on route path
  const pathSegments = path.split("/").filter(Boolean)
  const breadcrumbElements = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": currentOrigin
    }
  ]

  let accumulatedPath = ""
  pathSegments.forEach((segment, index) => {
    accumulatedPath += `/${segment}`
    const formattedName = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase())

    breadcrumbElements.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": formattedName,
      "item": `${currentOrigin}${accumulatedPath}`
    })
  })

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbElements
  }

  const combinedSchema = schema
    ? Array.isArray(schema)
      ? [defaultOrgSchema, websiteSchema, breadcrumbSchema, ...schema]
      : [defaultOrgSchema, websiteSchema, breadcrumbSchema, schema]
    : [defaultOrgSchema, websiteSchema, breadcrumbSchema]

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Canonical Link */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content={DEFAULT_SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* Article Publication Date if available */}
      {publishedDate && <meta property="article:published_time" content={publishedDate} />}

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(combinedSchema)}
      </script>
    </Helmet>
  )
}
