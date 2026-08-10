export const PhilosophySection = () => {
  return (
    <section className="py-24 md:py-36 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-12 text-center md:text-left">
          
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block">
            OUR PHILOSOPHY
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif leading-[1.05] text-foreground">
            Solve the problem.<br />
            Build the product.<br />
            Refine the details.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-border text-left">
            <div className="space-y-3">
              <span className="font-mono text-xs text-accent uppercase tracking-widest">01 / FIRST PRINCIPLES</span>
              <h3 className="text-lg font-serif text-foreground">Solve the problem</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Before writing code, we analyze the operational bottleneck. We don’t sell unnecessary technical stack complexity when a clean, straightforward system does the job better.
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs text-accent uppercase tracking-widest">02 / EXECUTIONS</span>
              <h3 className="text-lg font-serif text-foreground">Build the product</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We engineer full-stack software with strict type definitions, responsive layouts, and robust database models. From apartment portals to legal CRMs, we ship functional software.
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs text-accent uppercase tracking-widest">03 / PRECISION</span>
              <h3 className="text-lg font-serif text-foreground">Refine the details</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Craft shows in micro-interactions, dark mode support, fluid canvas animations, and clean error states. We polish every detail until the software feels effortlessly responsive.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
