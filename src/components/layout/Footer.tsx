import { Link } from "react-router-dom"
import { SashLogo } from "../ui/SashLogo"

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-16 text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-border">
          {/* Left: Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <SashLogo className="w-7 h-7" />
              <span className="font-heading font-bold text-2xl tracking-tight">onesash</span>
            </Link>
            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
              EST. 2026 • SOFTWARE ENGINEERING STUDIO
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Software engineering studio engineering high-performance web applications, enterprise AI systems, and cloud infrastructure for real-world problems.
            </p>
          </div>

          {/* Center: Team & Leadership */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Team & Leadership</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/sarvesh-arun-8b1904337/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-[#0A66C2] dark:hover:text-[#3882FF] transition-colors font-semibold flex items-center gap-1 group"
                >
                  <span>Saraveshvaran A</span>
                  <span className="text-[10px] font-mono font-normal text-[#0A66C2] dark:text-[#3882FF] opacity-80 group-hover:opacity-100">(LinkedIn)</span>
                </a>
                <span className="text-xs font-mono text-muted-foreground">— Founder</span>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/c-m-sharvesh-847066332/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-[#0A66C2] dark:hover:text-[#3882FF] transition-colors font-semibold flex items-center gap-1 group"
                >
                  <span>Sharvesh CM</span>
                  <span className="text-[10px] font-mono font-normal text-[#0A66C2] dark:text-[#3882FF] opacity-80 group-hover:opacity-100">(LinkedIn)</span>
                </a>
                <span className="text-xs font-mono text-muted-foreground">— Founder</span>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/siddharthsanthoshkumar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-[#0A66C2] dark:hover:text-[#3882FF] transition-colors font-semibold flex items-center gap-1 group"
                >
                  <span>Siddharth Santhosh Kumar</span>
                  <span className="text-[10px] font-mono font-normal text-[#0A66C2] dark:text-[#3882FF] opacity-80 group-hover:opacity-100">(LinkedIn)</span>
                </a>
                <span className="text-xs font-mono text-muted-foreground">— Cofounder</span>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/vivek-arumugam-a01303328/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-[#0A66C2] dark:hover:text-[#3882FF] transition-colors font-semibold flex items-center gap-1 group"
                >
                  <span>Vivek A</span>
                  <span className="text-[10px] font-mono font-normal text-[#0A66C2] dark:text-[#3882FF] opacity-80 group-hover:opacity-100">(LinkedIn)</span>
                </a>
                <span className="text-xs font-mono text-muted-foreground">— Marketing Head</span>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-[#0A66C2] dark:hover:text-[#3882FF] transition-colors font-semibold flex items-center gap-1 group"
                >
                  <span>Naren Annamalai</span>
                  <span className="text-[10px] font-mono font-normal text-[#0A66C2] dark:text-[#3882FF] opacity-80 group-hover:opacity-100">(LinkedIn)</span>
                </a>
                <span className="text-xs font-mono text-muted-foreground">— Head of Digital Marketing</span>
              </li>
            </ul>
          </div>

          {/* Right: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Navigation</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link to="/#work" className="text-muted-foreground hover:text-foreground transition-colors">Work</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <p>© 2026 onesash. All rights reserved.</p>
          <p>Handcrafted by engineering students in India.</p>
        </div>
      </div>
    </footer>
  )
}

