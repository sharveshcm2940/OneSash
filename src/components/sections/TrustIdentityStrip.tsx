export const TrustIdentityStrip = () => {
  const items = [
    "EST. 2026",
    "SOFTWARE DEVELOPMENT",
    "WEB APPLICATIONS",
    "BUSINESS SYSTEMS",
    "PRODUCT DEVELOPMENT"
  ]

  return (
    <div className="w-full border-b border-border bg-card/40 py-5 text-foreground overflow-x-auto no-scrollbar">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between min-w-max gap-8 font-mono text-xs tracking-widest uppercase text-muted-foreground">
          {items.map((item, idx) => (
            <div key={item} className="flex items-center gap-8">
              <span className="text-foreground font-medium">{item}</span>
              {idx < items.length - 1 && (
                <span className="text-border text-sm font-light">/</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
