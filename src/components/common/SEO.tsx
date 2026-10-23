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

const DEFAULT_SITE_NAME = "OneSash"
const DEFAULT_TITLE = "OneSash — Custom Software, Web Apps & Business Automation | Chennai & Bangalore"
const DEFAULT_DESCRIPTION =
  "OneSash is an independent software development studio based in Chennai, India and Bangalore, India. We engineer custom web applications, mobile platforms, and business automation systems."
const DEFAULT_KEYWORDS =
  "OneSash, onesash, One Sash, custom software development Chennai, web application engineering Bangalore, mobile apps, business automation, software development studio India, React TypeScript developers, Apar Crown, Law Throne"
const DEFAULT_OG_IMAGE = "https://onesash.co.in/onesash-logo.jpg"
const DEFAULT_SITE_URL = "https://onesash.co.in"

export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  author = "OneSash Engineering Team",
  publishedDate,
  schema,
  noindex = false,
}: SEOProps) => {
  // Prevent duplicate "| OneSash" suffix if already in title
  const fullTitle = title
    ? (title.includes("OneSash") ? title : `${title} | OneSash`)
    : DEFAULT_TITLE

  const currentOrigin = typeof window !== "undefined" && window.location.origin && !window.location.origin.includes("localhost")
    ? window.location.origin
    : DEFAULT_SITE_URL

  const path = typeof window !== "undefined" ? window.location.pathname : ""
  const canonical = canonicalUrl || `${currentOrigin}${path}`
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${currentOrigin}${ogImage}`

  // 1. Organization & ProfessionalService JSON-LD Schema
  const defaultOrgSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${currentOrigin}/#organization`,
    "name": "OneSash",
    "legalName": "OneSash",
    "alternateName": [
      "One Sash",
      "onesash",
      "one sash",
      "OneSash Studio",
      "One Sash Studio",
      "OneSash India",
      "OneSash Chennai",
      "OneSash Bangalore"
    ],
    "disambiguatingDescription": "OneSash (officially spelled OneSash, also written as One Sash) is an independent software development studio based in Chennai and Bangalore, India, specializing in custom software engineering, web application development, and business automation.",
    "url": currentOrigin,
    "logo": {
      "@type": "ImageObject",
      "url": `${currentOrigin}/onesash-logo.jpg`,
      "caption": "OneSash Logo"
    },
    "image": `${currentOrigin}/onesash-logo.jpg`,
    "description": DEFAULT_DESCRIPTION,
    "email": "onesash.contact@gmail.com",
    "telephone": ["+919980399557", "+918903467843"],
    "priceRange": "$$",
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Global"
      }
    ],
    "knowsAbout": [
      "Custom Software Engineering",
      "Web Application Development",
      "Mobile Application Development",
      "Business Process Automation",
      "Cloud Infrastructure & DevOps",
      "Full-Stack TypeScript",
      "React",
      "Node.js",
      "PostgreSQL"
    ],
    "sameAs": [
      "https://github.com/onesash"
    ]
  }

  // 2. WebSite Schema (Crucial for Google to recognize official Site Name "OneSash")
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${currentOrigin}/#website`,
    "url": currentOrigin,
    "name": "OneSash",
    "alternateName": ["onesash", "One Sash", "OneSash Studio"],
    "publisher": {
      "@id": `${currentOrigin}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${currentOrigin}/services?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  // 3. Automated BreadcrumbList Schema based on route path
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

  // Combine schemas cleanly
  const baseSchemas = [defaultOrgSchema, websiteSchema, breadcrumbSchema]
  const combinedSchema = schema
    ? Array.isArray(schema)
      ? [...baseSchemas, ...schema]
      : [...baseSchemas, schema]
    : baseSchemas

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content="OneSash" />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Canonical Link */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content={DEFAULT_SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@onesash" />
      <meta name="twitter:creator" content="@onesash" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {publishedDate && <meta property="article:published_time" content={publishedDate} />}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(combinedSchema)}
      </script>
    </Helmet>
  )
}
