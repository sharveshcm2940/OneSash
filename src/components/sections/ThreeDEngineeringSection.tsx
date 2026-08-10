import { Architecture3DCanvas } from "../ui/Architecture3DCanvas"
import { Cpu, Layers, ShieldCheck, Terminal } from "lucide-react"

export const ThreeDEngineeringSection = () => {
  return (
    <section className="py-24 md:py-36 bg-background border-b border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                3D ENGINEERING ARCHITECTURE
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-foreground">
                Built from the inside out.
              </h2>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed">
              Software shouldn’t just look good on the surface—it must be engineered for speed, clean state management, modularity, and long-term durability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border">
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
                  <Terminal className="w-4 h-4 text-accent" />
                  <span>Typed Precision</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Strict TypeScript interfaces across frontend components and backend endpoints eliminate runtime edge cases.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
                  <Layers className="w-4 h-4 text-accent" />
                  <span>Modular State</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Decoupled client state and lightweight API routes ensure rapid page loads and zero bloat.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
                  <Cpu className="w-4 h-4 text-accent" />
                  <span>Low Latency</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Optimized WebGL, Canvas, and API response cycles tailored for instant user feedback.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Production Ready</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Every project is deployed with clear environment management, automated builds, and maintainable codebases.
                </p>
              </div>
            </div>
          </div>

          {/* Right Interactive 3D Canvas Column (6 cols) */}
          <div className="lg:col-span-6 border border-border rounded-lg bg-card/30 p-4 relative">
            <Architecture3DCanvas />
          </div>

        </div>
      </div>
    </section>
  )
}
