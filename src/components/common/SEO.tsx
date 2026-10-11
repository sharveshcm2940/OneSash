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

const DEFAULT_SITE_NAME = "OneSash Technocrafts"
const DEFAULT_TITLE = "OneSash Technocrafts — Custom Software Engineering & Development Company"
const DEFAULT_DESCRIPTION =
  "OneSash Technocrafts is an independent software development company based in Chennai, India. We design, build, and maintain custom web applications, mobile platforms, and backend systems for businesses."
const DEFAULT_KEYWORDS =
  "OneSash, OneSash Technocrafts, software development company, custom software engineering, web application development, mobile app development, backend API engineering, cloud systems, Chennai software company"
const DEFAULT_OG_IMAGE = "https://onesash.com/og-image.jpg"
const DEFAULT_SITE_URL = "https://onesash.com"

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
  const fullTitle = title
    ? `${title} | OneSash Technocrafts`
    : DEFAULT_TITLE

  const currentOrigin = typeof window !== "undefined" && window.location.origin && !window.location.origin.includes("localhost")
    ? window.location.origin
    : DEFAULT_SITE_URL

  const path = typeof window !== "undefined" ? window.location.pathname : ""
  const canonical = canonicalUrl || `${currentOrigin}${path}`

  // Default Organization JSON-LD Schema
  const defaultOrgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OneSash Technocrafts",
    "url": currentOrigin,
    "description": DEFAULT_DESCRIPTION,
    "email": "onesash.contact@gmail.com",
    "telephone": ["+918903467843", "+919980399557"],
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
    ]
  }

  const combinedSchema = schema
    ? Array.isArray(schema)
      ? [defaultOrgSchema, ...schema]
      : [defaultOrgSchema, schema]
    : [defaultOrgSchema]

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
        <meta name="robots" content="index, follow" />
      )}

      {/* Canonical Link */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={DEFAULT_SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {publishedDate && <meta property="article:published_time" content={publishedDate} />}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(combinedSchema)}
      </script>
    </Helmet>
  )
}
