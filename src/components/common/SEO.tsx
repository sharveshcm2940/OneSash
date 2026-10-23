import site from "../../data/site.json"
import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router-dom"

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

const DEFAULT_SITE_NAME = site.name
const DEFAULT_TITLE = site.title
const DEFAULT_DESCRIPTION = site.description
const DEFAULT_KEYWORDS = "OneSash, custom software, web applications, mobile apps, business automation"
const DEFAULT_OG_IMAGE = `${site.origin}${site.image}`
const DEFAULT_SITE_URL = site.origin

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

  const currentOrigin = DEFAULT_SITE_URL

  const { pathname: path } = useLocation()
  const canonical = canonicalUrl || `${currentOrigin}${path === "/" ? "/" : path.replace(/\/+$/, "")}`
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${currentOrigin}${ogImage}`

  // 1. Organization & ProfessionalService JSON-LD Schema
  const defaultOrgSchema = site.organization

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
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="bingbot" content={noindex ? "noindex, nofollow" : "index, follow"} />

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
