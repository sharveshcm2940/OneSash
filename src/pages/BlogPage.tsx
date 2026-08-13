import { useState } from "react"
import { SEO } from "../components/common/SEO"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Clock, User } from "lucide-react"
import { CTABannerSection } from "../components/sections/CTABannerSection"

const posts = [
  {
    id: 1,
    title: "The Future of React: Server Components, Suspense & What's Coming in 2027",
    excerpt: "React 19 is here. We dive deep into server components, concurrent features, and how the ecosystem is shifting for teams building at scale.",
    topic: "React",
    date: "Jun 25, 2026",
    readTime: "7 min read",
    author: "Sharvesh CM",
    featured: true,
  },
  {
    id: 2,
    title: "Building Production AI Pipelines with Python & LangChain",
    excerpt: "Learn how to architect robust LLM-powered pipelines that handle millions of requests per day — from prompt engineering to vector databases.",
    topic: "AI",
    date: "Jun 18, 2026",
    readTime: "10 min read",
    author: "Siddharth SK",
    featured: false,
  },
  {
    id: 3,
    title: "AWS vs Google Cloud vs Azure: Which Cloud in 2026?",
    excerpt: "An honest, hands-on comparison of the three major cloud providers for startups and enterprise teams — pricing, DX, and ecosystem.",
    topic: "Cloud",
    date: "Jun 14, 2026",
    readTime: "8 min read",
    author: "Sarveshwaran A",
    featured: false,
  },
  {
    id: 4,
    title: "Node.js 22: What Every Backend Developer Needs to Know",
    excerpt: "The major LTS release brings native TypeScript support, improved performance, and a revamped module system. Here's what changes for your codebase.",
    topic: "Node.js",
    date: "Jun 10, 2026",
    readTime: "6 min read",
    author: "Sarveshwaran A",
    featured: false,
  },
  {
    id: 5,
    title: "The OWASP Top 10 in 2026: What Developers Must Audit",
    excerpt: "Cyber threats evolve fast. Walk through the updated OWASP Top 10 vulnerabilities and the exact code patterns that introduce them.",
    topic: "Cyber Security",
    date: "Jun 05, 2026",
    readTime: "9 min read",
    author: "Sarveshwaran A",
    featured: false,
  },
  {
    id: 6,
    title: "10 VS Code Extensions That Will Double Your Productivity",
    excerpt: "From AI copilots to git superpowers, these are the 10 extensions every serious developer should have installed — tried and tested by our team.",
    topic: "Software Tips",
    date: "May 30, 2026",
    readTime: "4 min read",
    author: "Sharvesh CM",
    featured: false,
  },
  {
    id: 7,
    title: "Full-Stack Web Development in 2026: The Definitive Roadmap",
    excerpt: "From HTML to deployment pipelines — the exact learning path, tools, and frameworks you need to become a hireable full-stack developer this year.",
    topic: "Web Development",
    date: "May 25, 2026",
    readTime: "12 min read",
    author: "Sarveshwaran A",
    featured: false,
  },
  {
    id: 8,
    title: "Prompt Engineering Mastery: Getting the Best Out of GPT-4o",
    excerpt: "The difference between average and excellent AI output is almost always the prompt. Learn the patterns, frameworks, and secrets that make LLMs perform.",
    topic: "AI",
    date: "May 20, 2026",
    readTime: "8 min read",
    author: "Siddharth SK",
    featured: false,
  },
]

// Topic color map
const topicColors: Record<string, string> = {
  "Web Development": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "AI": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  "Cloud": "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  "React": "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  "Node.js": "bg-green-500/10 text-green-600 dark:text-green-400",
  "Cyber Security": "bg-red-500/10 text-red-600 dark:text-red-400",
  "Software Tips": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
}

export const BlogPage = () => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>(["All"])
  const [searchQuery, setSearchQuery] = useState("")

  // Generate dynamic topics with counts from the posts array
  const dynamicTopics = ["All", ...Array.from(new Set(posts.map(p => p.topic)))]

  const getTopicCount = (topic: string) => {
    if (topic === "All") return posts.length
    return posts.filter(p => p.topic === topic).length
  }

  const handleTopicToggle = (topic: string) => {
    if (topic === "All") {
      setSelectedTopics(["All"])
      return
    }

    let updated = [...selectedTopics]
    if (updated.includes("All")) {
      updated = [topic]
    } else if (updated.includes(topic)) {
      updated = updated.filter(t => t !== topic)
      if (updated.length === 0) {
        updated = ["All"]
      }
    } else {
      updated.push(topic)
    }
    setSelectedTopics(updated)
  }

  // Filter posts based on selected topics AND search query
  const filtered = posts.filter(post => {
    const matchesTopic = selectedTopics.includes("All") || selectedTopics.includes(post.topic)
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.topic.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTopic && matchesSearch
  })

  const featured = posts.find(p => p.featured)!
  const rest = filtered.filter(p => !p.featured || !selectedTopics.includes("All") || searchQuery !== "")

  return (
    <>
      <SEO
        title="Engineering Blog — Web Dev, AI, Cloud & Software Insights"
        description="Engineering insights, tutorials, and deep-dives on Web Development, AI, Cloud, React, Node.js, and Software Architecture from the 1Sash engineering team."
        keywords="web development blog, AI blog, React Vite tutorials, TypeScript insights, cloud infrastructure, software engineering tips, 1Sash blog"
        ogType="article"
      />

      {/* Hero */}
      <section className="pt-36 pb-16 px-4 md:px-6 bg-background border-b border-border">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Our Insights</p>
            <h1 className="text-6xl md:text-7xl font-heading font-bold tracking-tighter mb-6">The Engineering<br />Blog.</h1>
            <p className="text-muted-foreground max-w-lg leading-relaxed">
              Tutorials, deep-dives, and honest opinions on Web Development, AI, Cloud infrastructure, Cyber Security, and the tools we love.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Topic & Search filter bar */}
      <section className="py-8 px-4 md:px-6 border-b border-border bg-muted/30 sticky top-[57px] z-40 backdrop-blur-md">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            {/* Tag List */}
            <div className="flex flex-wrap gap-2 max-w-3xl">
              {dynamicTopics.map(topic => {
                const isActive = selectedTopics.includes(topic)
                return (
                  <button
                    key={topic}
                    onClick={() => handleTopicToggle(topic)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? "bg-foreground text-background border-foreground"
                        : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                    }`}
                  >
                    <span>{topic}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${isActive ? "bg-background/25 text-background" : "bg-muted text-muted-foreground"}`}>
                      {getTopicCount(topic)}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[200px] md:w-64">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background border border-border rounded-full py-1.5 pl-4 pr-10 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary text-foreground transition-all"
              />
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Featured post (only when showing All and no search) */}
      {selectedTopics.includes("All") && searchQuery === "" && (
        <section className="py-16 px-4 md:px-6 bg-background border-b border-border">
          <div className="container mx-auto max-w-5xl">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6">Featured</p>
            <motion.article
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border rounded-2xl overflow-hidden hover:border-foreground/20 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Left dark thumbnail */}
              <div className="relative bg-[#080812] min-h-[260px] flex items-end p-10 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                <div className="relative z-10">
                  <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ${topicColors[featured.topic]}`}>
                    {featured.topic}
                  </span>
                  <h2 className="text-2xl font-heading font-bold text-white tracking-tight leading-snug">{featured.title}</h2>
                </div>
              </div>
              {/* Right content */}
              <div className="p-10 bg-card flex flex-col justify-between border-l border-border">
                <p className="text-muted-foreground leading-relaxed text-sm mb-8">{featured.excerpt}</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{featured.author}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                    <span>{featured.date}</span>
                  </div>
                  <button className="inline-flex items-center gap-2 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Posts grid */}
      <section className="py-16 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          {(!selectedTopics.includes("All") || searchQuery !== "") && (
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">
              {filtered.length} article{filtered.length !== 1 ? "s" : ""} found {searchQuery && `for "${searchQuery}"`} {!selectedTopics.includes("All") && `in ${selectedTopics.join(", ")}`}
            </p>
          )}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTopics.join(",") + searchQuery}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {rest.map((post, i) => (
                <motion.article
                  key={post.id}
                  className="group border border-border rounded-2xl overflow-hidden bg-card hover:border-foreground/20 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3 }}
                >
                  {/* Dark thumbnail */}
                  <div className="bg-[#080812] h-36 relative overflow-hidden flex items-end p-6">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                    <span className={`relative z-10 inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${topicColors[post.topic]}`}>
                      {post.topic}
                    </span>
                  </div>
                  <div className="p-6">
                    <h2 className="font-heading font-bold text-sm leading-snug mb-3 tracking-tight line-clamp-2 group-hover:text-muted-foreground transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-[10px] text-muted-foreground border-t border-border pt-4">
                      <span>{post.author} · {post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg font-medium mb-2">No articles yet in this topic.</p>
              <p className="text-sm">Check back soon — we publish weekly.</p>
            </div>
          )}
        </div>
      </section>

      <CTABannerSection />
    </>
  )
}
