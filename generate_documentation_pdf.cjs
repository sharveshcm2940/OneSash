const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const BASE_URL = 'http://localhost:3000';
const SCREENSHOT_DIR = path.join(__dirname, 'screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function captureAllScreenshots() {
  console.log('--- Launching Edge for Screenshot Captures ---');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--hide-scrollbars'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });

  // Helper to stabilize and capture
  const capture = async (url, filename, scrollOffset = 0, customWait = 1500) => {
    console.log(`Navigating to ${url}...`);
    await page.goto(`${BASE_URL}${url}`, { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Inject CSS to hide custom cursor, remove scrollbars, and ensure text is crisp
    await page.addStyleTag({
      content: `
        * { cursor: auto !important; }
        div[class*="fixed pointer-events-none z-50"] { display: none !important; }
        ::-webkit-scrollbar { display: none !important; }
      `
    });

    if (scrollOffset > 0) {
      await page.evaluate((y) => window.scrollTo(0, y), scrollOffset);
    }
    await sleep(customWait);

    const outPath = path.join(SCREENSHOT_DIR, filename);
    await page.screenshot({ path: outPath });
    console.log(`Saved screenshot: ${filename}`);
    return outPath;
  };

  const screenshots = {};

  try {
    // 1. Home - Hero
    screenshots.home_hero = await capture('/', '01_home_hero.png', 0, 2000);

    // 2. Home - Services Section
    screenshots.home_services = await capture('/', '02_home_services.png', 900, 1500);

    // 3. Home - Selected Work
    screenshots.home_work = await capture('/', '03_home_work.png', 2100, 1500);

    // 4. Home - Founders / About Section
    screenshots.home_team = await capture('/', '04_home_team.png', 4600, 1500);

    // 5. About Page
    screenshots.about_page = await capture('/about', '05_about_page.png', 0, 1500);

    // 6. Services Page
    screenshots.services_page = await capture('/services', '06_services_page.png', 0, 1500);

    // 7. Web Development Service Detail
    screenshots.webdev_page = await capture('/services/web-development', '07_service_webdev.png', 0, 1500);

    // 8. AI Integration Service Detail
    screenshots.ai_page = await capture('/services/ai-integration', '08_service_ai.png', 0, 1500);

    // 9. Case Studies Page
    screenshots.case_studies = await capture('/case-studies', '09_case_studies.png', 0, 1500);

    // 10. Cost Calculator Page
    screenshots.calculator = await capture('/calculator', '10_calculator.png', 0, 1500);

    // 11. Booking Page
    screenshots.booking = await capture('/booking', '11_booking.png', 0, 1500);

    // 12. Contact Page
    screenshots.contact = await capture('/contact', '12_contact.png', 0, 1500);

    // 13. Careers Page
    screenshots.careers = await capture('/careers', '13_careers.png', 0, 1500);

  } catch (err) {
    console.error('Error during screenshot capture:', err);
  } finally {
    await browser.close();
  }

  return screenshots;
}

function getBase64Image(filePath) {
  if (!fs.existsSync(filePath)) return '';
  const buffer = fs.readFileSync(filePath);
  return `data:image/png;base64,${buffer.toString('base64')}`;
}

async function generatePdf() {
  const screenshots = await captureAllScreenshots();

  console.log('--- Generating PDF Documentation HTML ---');
  const b64 = {};
  for (const [key, filePath] of Object.entries(screenshots)) {
    b64[key] = getBase64Image(filePath);
  }

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OneSash Website Documentation</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');

    @page {
      size: A4;
      margin: 18mm 16mm 18mm 16mm;
      @bottom-right {
        content: counter(page);
      }
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      background: #ffffff;
      line-height: 1.55;
      font-size: 13px;
      -webkit-font-smoothing: antialiased;
    }

    .page-break {
      page-break-after: always;
      break-after: page;
    }

    /* Cover Page */
    .cover-page {
      height: 980px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 40px 10px 30px 10px;
      border-bottom: 2px solid #e2e8f0;
    }

    .cover-badge {
      display: inline-block;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      padding: 6px 14px;
      background: #0f172a;
      color: #ffffff;
      border-radius: 4px;
      margin-bottom: 24px;
    }

    .cover-title {
      font-size: 38px;
      font-weight: 800;
      color: #0f172a;
      line-height: 1.15;
      letter-spacing: -1px;
      margin-bottom: 12px;
    }

    .cover-subtitle {
      font-size: 18px;
      color: #475569;
      font-weight: 400;
      line-height: 1.5;
      margin-bottom: 30px;
      max-w: 600px;
    }

    .cover-meta-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 20px;
      margin-top: 40px;
    }

    .meta-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .meta-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #64748b;
    }

    .meta-value {
      font-size: 13px;
      font-weight: 600;
      color: #0f172a;
    }

    .cover-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #e2e8f0;
      padding-top: 20px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: #64748b;
    }

    /* Headings */
    h1.section-title {
      font-size: 24px;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.5px;
      border-bottom: 2px solid #0f172a;
      padding-bottom: 8px;
      margin-bottom: 20px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    h2.subsection-title {
      font-size: 16px;
      font-weight: 700;
      color: #1e293b;
      margin-top: 22px;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 14px;
      font-weight: 600;
      color: #334155;
      margin-bottom: 6px;
    }

    p {
      color: #334155;
      margin-bottom: 12px;
      font-size: 12.5px;
    }

    /* Cards and Grids */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 16px;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-bottom: 16px;
    }

    .card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 14px 16px;
    }

    .card.dark {
      background: #0f172a;
      color: #f8fafc;
      border-color: #1e293b;
    }

    .card.dark h3 {
      color: #ffffff;
    }

    .card.dark p {
      color: #94a3b8;
    }

    /* Screenshots styling */
    .screenshot-container {
      margin: 16px 0 20px 0;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      overflow: hidden;
      background: #0f172a;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .browser-header {
      background: #1e293b;
      padding: 7px 12px;
      display: flex;
      align-items: center;
      gap: 6px;
      border-bottom: 1px solid #334155;
    }

    .dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
    }
    .dot.red { background: #ef4444; }
    .dot.yellow { background: #f59e0b; }
    .dot.green { background: #10b981; }

    .browser-url {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: #94a3b8;
      background: #0f172a;
      padding: 2px 10px;
      border-radius: 4px;
      margin-left: 10px;
      flex-grow: 1;
      max-width: 380px;
    }

    .screenshot-img {
      width: 100%;
      height: auto;
      display: block;
    }

    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 18px;
      font-size: 12px;
    }

    th {
      background: #f1f5f9;
      color: #0f172a;
      font-weight: 700;
      text-align: left;
      padding: 8px 12px;
      border: 1px solid #cbd5e1;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
    }

    td {
      padding: 8px 12px;
      border: 1px solid #e2e8f0;
      color: #334155;
    }

    tr:nth-child(even) td {
      background: #f8fafc;
    }

    .badge {
      display: inline-block;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 600;
      padding: 2px 7px;
      border-radius: 4px;
      background: #e2e8f0;
      color: #1e293b;
    }

    .badge.blue {
      background: #dbeafe;
      color: #1e40af;
    }

    .badge.green {
      background: #dcfce7;
      color: #166534;
    }

    .badge.purple {
      background: #f3e8ff;
      color: #6b21a8;
    }

    .badge.amber {
      background: #fef3c7;
      color: #92400e;
    }

    ul, ol {
      margin-left: 18px;
      margin-bottom: 14px;
    }

    li {
      margin-bottom: 5px;
      color: #334155;
      font-size: 12.5px;
    }

    .callout {
      border-left: 4px solid #0f172a;
      background: #f1f5f9;
      padding: 12px 16px;
      border-radius: 0 6px 6px 0;
      margin: 14px 0;
      font-size: 12px;
    }

    .callout.alert {
      border-left-color: #2563eb;
      background: #eff6ff;
    }

    .footer-note {
      font-size: 10.5px;
      color: #94a3b8;
      font-family: 'JetBrains Mono', monospace;
      margin-top: 8px;
    }
  </style>
</head>
<body>

  <!-- ==================== COVER PAGE ==================== -->
  <div class="cover-page">
    <div>
      <div class="cover-badge">SYSTEM ARCHITECTURE & PRODUCT DOCUMENTATION</div>
      <div class="cover-title">OneSash Technocrafts</div>
      <div class="cover-subtitle">
        Official Website Documentation, UI Interface Specifications, Interactive Engine Catalog & Modernization Blueprint.
      </div>
    </div>

    <div class="cover-meta-grid">
      <div class="meta-item">
        <span class="meta-label">Client / Entity</span>
        <span class="meta-value">OneSash Technocrafts (Chennai, India)</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Primary Framework</span>
        <span class="meta-value">React 19 + TypeScript + Vite 8</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Styling & 3D Layer</span>
        <span class="meta-value">Tailwind CSS v4 + Three.js + Framer Motion</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Documentation Version</span>
        <span class="meta-value">Release 2.0 (Full Technical Audit & UI Capture)</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Document Date</span>
        <span class="meta-value">October 2026</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Status & Scope</span>
        <span class="meta-value">Active Production Website & Modernization Guide</span>
      </div>
    </div>

    <div class="cover-footer">
      <span>CONFIDENTIAL & PROPRIETARY — ONESASH</span>
      <span>AUTOMATED HIGH-RESOLUTION REPORT</span>
    </div>
  </div>

  <div class="page-break"></div>

  <!-- ==================== EXECUTIVE SUMMARY & ARCHITECTURE ==================== -->
  <h1 class="section-title">1. Executive Summary & Tech Architecture</h1>

  <p>
    <strong>OneSash</strong> (also referred to as <em>onesash Technocrafts</em>) is a high-performance digital product and software engineering web application. Engineered on top of modern frontend and graphics paradigms, the web platform serves as the central digital touchpoint for prospective enterprise clients, startup founders, and technical partners seeking custom web engineering, AI integrations, mobile application development, and cloud systems.
  </p>

  <h2 class="subsection-title">1.1 Core Technology Stack</h2>
  <table>
    <thead>
      <tr>
        <th>Layer</th>
        <th>Technology</th>
        <th>Purpose & Technical Justification</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Core Library</strong></td>
        <td>React 19.2.7</td>
        <td>Concurrent rendering, server component readiness, clean component abstractions.</td>
      </tr>
      <tr>
        <td><strong>Type System</strong></td>
        <td>TypeScript 6.0+</td>
        <td>Strict end-to-end typing across models, section props, and API payloads.</td>
      </tr>
      <tr>
        <td><strong>Build Engine</strong></td>
        <td>Vite 8.1 / 8.3 + HMR</td>
        <td>Sub-second module bundling, code splitting, and zero-latency development.</td>
      </tr>
      <tr>
        <td><strong>Styling Architecture</strong></td>
        <td>Tailwind CSS v4.3</td>
        <td>Utility-first zero-runtime CSS with modern CSS-native theme variables.</td>
      </tr>
      <tr>
        <td><strong>3D Graphics</strong></td>
        <td>Three.js 0.185 + R3F + Drei</td>
        <td>GPU-accelerated interactive 3D hero canvas, rotating wireframe globe, and visual tech metaphors.</td>
      </tr>
      <tr>
        <td><strong>Motion & Transitions</strong></td>
        <td>Framer Motion 12.4</td>
        <td>Spring physics, view-triggered entrance animations, and card tilt interactions.</td>
      </tr>
      <tr>
        <td><strong>Kinetic Scrolling</strong></td>
        <td>Lenis Smooth Scroll 1.3</td>
        <td>Subtle inertia momentum scrolling for a high-end luxury editorial experience.</td>
      </tr>
      <tr>
        <td><strong>SEO & Meta Architecture</strong></td>
        <td>React Helmet Async</td>
        <td>JSON-LD schema markup, OpenGraph tagging, and dynamic titles per route.</td>
      </tr>
    </tbody>
  </table>

  <h2 class="subsection-title">1.2 High-Level Architecture Diagram</h2>
  <div class="card">
    <p><strong>Frontend App Hierarchy:</strong></p>
    <p style="font-family: 'JetBrains Mono', monospace; font-size: 11px; line-height: 1.6; color: #0f172a;">
      Index.html<br/>
      └── main.tsx<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;└── App.tsx<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── HelmetProvider (SEO & Schema Meta)<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── ThemeProvider (Dark/Light Palette Engine)<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── SmoothScrollProvider (Lenis Momentum)<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── BrowserRouter (React Router DOM v7)<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Global Overlays (CustomCursor, ProgressBar, CommandPalette, CookieBanner)<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── MainLayout (Sticky Navbar, Main Viewport, Dynamic Footer)<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [Lazy-Loaded Route Components]
    </p>
  </div>

  <div class="page-break"></div>

  <!-- ==================== INFORMATION ARCHITECTURE & ROUTES ==================== -->
  <h1 class="section-title">2. Information Architecture & Route Directory</h1>

  <p>The OneSash web application is engineered with lazy-loaded code-splitting for all pages, minimizing initial bundle download size while providing snappy client-side navigation.</p>

  <table>
    <thead>
      <tr>
        <th>Route Path</th>
        <th>Page Component</th>
        <th>Primary Objective & User Flow</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>/</code></td>
        <td><code>HomePage.tsx</code></td>
        <td>High-impact hero, proof of expertise, service overview, selected work, engineering team, philosophy, and primary conversion triggers.</td>
      </tr>
      <tr>
        <td><code>/about</code></td>
        <td><code>AboutPage.tsx</code></td>
        <td>Founding story, engineering principles, leadership profiles, 3D interactive globe, and team pedigree.</td>
      </tr>
      <tr>
        <td><code>/services</code></td>
        <td><code>ServicesPage.tsx</code></td>
        <td>Comprehensive overview of the 6 engineering disciplines, delivery process, and technical SLAs.</td>
      </tr>
      <tr>
        <td><code>/services/web-development</code></td>
        <td><code>WebDevPage.tsx</code></td>
        <td>Detailed breakdown of full-stack web platforms, multi-tenant portals, SaaS architecture, and tech stacks.</td>
      </tr>
      <tr>
        <td><code>/services/ai-integration</code></td>
        <td><code>AIPage.tsx</code></td>
        <td>Deep-dive into LLM workflows, RAG pipelines, model fine-tuning, and automated cognitive agents.</td>
      </tr>
      <tr>
        <td><code>/services/mobile-apps</code></td>
        <td><code>MobileAppPage.tsx</code></td>
        <td>Native & cross-platform iOS/Android development (React Native, Flutter) specifications.</td>
      </tr>
      <tr>
        <td><code>/services/cloud-solutions</code></td>
        <td><code>CloudPage.tsx</code></td>
        <td>AWS / GCP cloud infrastructure, Docker, Kubernetes containerization, and automated CI/CD pipelines.</td>
      </tr>
      <tr>
        <td><code>/portfolio</code></td>
        <td><code>PortfolioPage.tsx</code></td>
        <td>Case studies showcase with industry filters, tech badges, and deployed product demonstrations.</td>
      </tr>
      <tr>
        <td><code>/case-studies</code></td>
        <td><code>CaseStudiesPage.tsx</code></td>
        <td>In-depth enterprise case studies (MediTrack Pro, UrbanRide, InsightAI) with metrics and architecture breakdown.</td>
      </tr>
      <tr>
        <td><code>/calculator</code></td>
        <td><code>CalculatorPage.tsx</code></td>
        <td>Interactive software development cost & timeline estimator with scope configuration tools.</td>
      </tr>
      <tr>
        <td><code>/booking</code></td>
        <td><code>BookingPage.tsx</code></td>
        <td>Technical consultation discovery scheduler with requirements pre-qualification form.</td>
      </tr>
      <tr>
        <td><code>/careers</code></td>
        <td><code>CareersPage.tsx</code></td>
        <td>Talent acquisition portal featuring engineering openings, internships, and culture benefits.</td>
      </tr>
      <tr>
        <td><code>/contact</code></td>
        <td><code>ContactPage.tsx</code></td>
        <td>Multi-channel inquiry portal (interactive form, direct telephone, email, WhatsApp, and RFP requests).</td>
      </tr>
    </tbody>
  </table>

  <div class="page-break"></div>

  <!-- ==================== UI SCREENSHOT WALKTHROUGH: HOMEPAGE ==================== -->
  <h1 class="section-title">3. UI Walkthrough: Homepage (Root Route)</h1>

  <h2 class="subsection-title">3.1 Hero Section & Interactive 3D Canvas</h2>
  <p>The landing view introduces the visitor to OneSash with an assertive, modern layout. The left column presents the value proposition, live availability badge, and primary calls-to-action. The right column renders a GPU-accelerated interactive 3D canvas that responds to cursor rotation and ambient light.</p>

  <div class="screenshot-container">
    <div class="browser-header">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="browser-url">https://onesash.com/ (Viewport Top)</span>
    </div>
    <img src="${b64.home_hero}" class="screenshot-img" alt="Homepage Hero" />
  </div>

  <div class="grid-2">
    <div class="card">
      <h3>Key Interactive Elements</h3>
      <ul>
        <li><strong>Status Indicator:</strong> Pulse green badge displaying studio operational readiness.</li>
        <li><strong>Primary CTA:</strong> "View Our Work" button smoothly auto-scrolling to project showcases.</li>
        <li><strong>Secondary CTA:</strong> "Start a Project" navigating directly to high-intent inquiry portal.</li>
      </ul>
    </div>
    <div class="card">
      <h3>Visual Hierarchy Analysis</h3>
      <ul>
        <li><strong>Typography:</strong> Serif headline with ultra-bold weight contrasting with mono badges.</li>
        <li><strong>3D Canvas:</strong> Real-time wireframe torus mesh rendered with Three.js / R3F.</li>
        <li><strong>Aesthetic:</strong> Strict editorial minimalist palette honoring high-contrast luxury tech design.</li>
      </ul>
    </div>
  </div>

  <div class="page-break"></div>

  <!-- ==================== UI SCREENSHOT WALKTHROUGH: SERVICES & WORK ==================== -->
  <h1 class="section-title">4. UI Walkthrough: Core Capabilities & Work</h1>

  <h2 class="subsection-title">4.1 Disciplines & Services Catalog</h2>
  <p>The service section breaks down technical disciplines into structured catalog items with numbered codes, deliverables list, tech stack badges, and referenced case studies.</p>

  <div class="screenshot-container">
    <div class="browser-header">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="browser-url">https://onesash.com/#services</span>
    </div>
    <img src="${b64.home_services}" class="screenshot-img" alt="Homepage Services" />
  </div>

  <h2 class="subsection-title">4.2 Selected Work & Architectural Showcase</h2>
  <p>Featuring custom-built platforms such as <em>APAR CROWN</em> (Facility Management), <em>THE LAW</em> (Legal CRM), and Enterprise Workflow Portals.</p>

  <div class="screenshot-container">
    <div class="browser-header">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="browser-url">https://onesash.com/#work</span>
    </div>
    <img src="${b64.home_work}" class="screenshot-img" alt="Homepage Selected Work" />
  </div>

  <div class="page-break"></div>

  <!-- ==================== UI SCREENSHOT WALKTHROUGH: ABOUT & TEAM ==================== -->
  <h1 class="section-title">5. UI Walkthrough: Engineering Leadership & About</h1>

  <h2 class="subsection-title">5.1 Founding Story & Interactive 3D Globe</h2>
  <p>The About section pairs the founding story with an interactive 3D Globe canvas depicting global reach, complemented by individual 3D tilt cards for leadership team members.</p>

  <div class="screenshot-container">
    <div class="browser-header">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="browser-url">https://onesash.com/about</span>
    </div>
    <img src="${b64.about_page}" class="screenshot-img" alt="About Page" />
  </div>

  <h2 class="subsection-title">5.2 Team Bios & Technical Specializations</h2>
  <div class="screenshot-container">
    <div class="browser-header">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="browser-url">https://onesash.com/#team</span>
    </div>
    <img src="${b64.home_team}" class="screenshot-img" alt="Team Bios Section" />
  </div>

  <div class="callout alert">
    <strong>Leadership Profile Summary:</strong>
    Profiles highlight specialized capabilities in Full-Stack Distributed Systems (Saraveshvaran A), Frontend & Interactive UI Engineering (Sharvesh CM), AI & Workflow Logic (Siddharth Santhosh Kumar), Brand & Strategic Growth (Vivek A), and Performance Digital Marketing (Naren Annamalai).
  </div>

  <div class="page-break"></div>

  <!-- ==================== UI SCREENSHOT WALKTHROUGH: SPECIALIZED SERVICES ==================== -->
  <h1 class="section-title">6. UI Walkthrough: Specialized Service Deep-Dives</h1>

  <h2 class="subsection-title">6.1 Full-Stack Web Application Development</h2>
  <p>Dedicated landing page detailing frontend architecture, backend RESTful and GraphQL routing, microservices, and database clustering.</p>

  <div class="screenshot-container">
    <div class="browser-header">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="browser-url">https://onesash.com/services/web-development</span>
    </div>
    <img src="${b64.webdev_page}" class="screenshot-img" alt="Web Development Service" />
  </div>

  <h2 class="subsection-title">6.2 AI Systems & Model Integration</h2>
  <p>Details on machine learning, LangChain workflows, OpenAI/Gemini API integration, pgvector semantic search, and autonomous business automation.</p>

  <div class="screenshot-container">
    <div class="browser-header">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="browser-url">https://onesash.com/services/ai-integration</span>
    </div>
    <img src="${b64.ai_page}" class="screenshot-img" alt="AI Integration Service" />
  </div>

  <div class="page-break"></div>

  <!-- ==================== UI SCREENSHOT WALKTHROUGH: CASE STUDIES & CALCULATOR ==================== -->
  <h1 class="section-title">7. UI Walkthrough: Case Studies & Interactive Tools</h1>

  <h2 class="subsection-title">7.1 Enterprise Case Studies & Quantitative Outcomes</h2>
  <p>Detailed client case studies illustrating problem, solution, architecture, and verified metrics (e.g. 200+ clinics scaled, 50k downloads in month 1, 80% reporting time saved).</p>

  <div class="screenshot-container">
    <div class="browser-header">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="browser-url">https://onesash.com/case-studies</span>
    </div>
    <img src="${b64.case_studies}" class="screenshot-img" alt="Case Studies Page" />
  </div>

  <h2 class="subsection-title">7.2 Interactive Software Cost & Scope Calculator</h2>
  <p>Self-service scoping tool allowing prospective clients to estimate budgets, timelines, and technical requirements before initial consultation.</p>

  <div class="screenshot-container">
    <div class="browser-header">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="browser-url">https://onesash.com/calculator</span>
    </div>
    <img src="${b64.calculator}" class="screenshot-img" alt="Software Calculator" />
  </div>

  <div class="page-break"></div>

  <!-- ==================== UI SCREENSHOT WALKTHROUGH: BOOKING & CONTACT ==================== -->
  <h1 class="section-title">8. UI Walkthrough: Conversion & Inbound Lead Funnel</h1>

  <h2 class="subsection-title">8.1 Technical Discovery Booking Scheduler</h2>
  <p>Allows qualified leads to book technical consultations, specify project objectives, and select convenient appointment windows.</p>

  <div class="screenshot-container">
    <div class="browser-header">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="browser-url">https://onesash.com/booking</span>
    </div>
    <img src="${b64.booking}" class="screenshot-img" alt="Booking Scheduler" />
  </div>

  <h2 class="subsection-title">8.2 Direct Contact & Project RFP Portal</h2>
  <p>Comprehensive contact channels with direct executive telephone lines, WhatsApp instant chat, and structured inquiry form.</p>

  <div class="screenshot-container">
    <div class="browser-header">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="browser-url">https://onesash.com/contact</span>
    </div>
    <img src="${b64.contact}" class="screenshot-img" alt="Contact Portal" />
  </div>

  <div class="page-break"></div>

  <!-- ==================== STRATEGIC MODERNIZATION ROADMAP ==================== -->
  <h1 class="section-title">9. Strategic Modernization: Enterprise Company Blueprint</h1>

  <p>To scale OneSash into a complete professional software company, execute the following technical and brand transformations:</p>

  <div class="grid-2">
    <div class="card">
      <h3>Phase 1: Brand & Copy Transformation</h3>
      <p>Eliminate student/freelance references across the platform:</p>
      <ul>
        <li>Update <code>HeroSection.tsx</code>: Change tag from "Software Freelancing Studio" to "Enterprise Software Engineering & AI Solutions".</li>
        <li>Update <code>AboutSection.tsx</code>: Position the team as seasoned technical partners rather than student founders.</li>
        <li>Update <code>Footer.tsx</code>: Change tagline to corporate registration and enterprise standards.</li>
      </ul>
    </div>
    <div class="card">
      <h3>Phase 2: Navigation & Mega-Menu Architecture</h3>
      <p>Elevate the main navbar from a 4-link menu to a tiered enterprise navigation:</p>
      <ul>
        <li><strong>Services Dropdown:</strong> Direct links to all 6 specialized discipline pages.</li>
        <li><strong>Industries:</strong> Healthcare, FinTech, PropTech, LegalTech.</li>
        <li><strong>Case Studies:</strong> Dedicated primary link with client ROI metrics.</li>
        <li><strong>RFP Button:</strong> Dedicated "Request a Proposal" button.</li>
      </ul>
    </div>
  </div>

  <div class="grid-2">
    <div class="card">
      <h3>Phase 3: B2B Enterprise Risk-Mitigation Seals</h3>
      <p>Integrate institutional trust markers:</p>
      <ul>
        <li><strong>Security Badges:</strong> SOC 2 Type II readiness, HIPAA compliance, GDPR conformity.</li>
        <li><strong>Guaranteed IP Transfer:</strong> Legal guarantee of 100% intellectual property ownership upon milestone release.</li>
        <li><strong>Mutual NDA Guarantee:</strong> Automated mutual non-disclosure agreement before scoping.</li>
      </ul>
    </div>
    <div class="card">
      <h3>Phase 4: Sales Funnel & Legal Framework</h3>
      <p>Establish legal and commercial transparency:</p>
      <ul>
        <li><strong>Engagement Models:</strong> Dedicated Engineering Pods, Fixed-Price Turnkey SOW, Technical Code Audits.</li>
        <li><strong>Legal Pages:</strong> Deploy dedicated <code>/privacy</code>, <code>/terms</code>, and <code>/security</code> policy routes.</li>
        <li><strong>Live Calendar Embed:</strong> Connect Cal.com or Calendly directly into <code>BookingPage.tsx</code>.</li>
      </ul>
    </div>
  </div>

  <div class="callout">
    <strong>Conclusion:</strong>
    OneSash possesses an exceptional modern technical foundation (React 19, Vite, Three.js, Tailwind v4). Executing the positioning and navigation upgrades outlined in this documentation will position the firm to win high-ticket B2B software engineering contracts globally.
  </div>

  <div class="footer-note">
    Document Generated Automatically by Antigravity AI Engine • Confidential • © 2026 OneSash Technocrafts
  </div>

</body>
</html>
  `;

  const htmlPath = path.join(__dirname, 'documentation.html');
  fs.writeFileSync(htmlPath, htmlContent, 'utf8');
  console.log('Saved documentation HTML to:', htmlPath);

  console.log('--- Rendering HTML to PDF via Edge Headless ---');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: 'networkidle0', timeout: 60000 });

  const pdfPath = path.join(__dirname, 'OneSash_Website_Documentation.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '12mm',
      bottom: '12mm',
      left: '12mm',
      right: '12mm'
    },
    displayHeaderFooter: true,
    headerTemplate: '<div style="font-size: 8px; font-family: monospace; color: #94a3b8; width: 100%; text-align: right; padding-right: 20px;">OneSash Technocrafts • Website & Architecture Documentation</div>',
    footerTemplate: '<div style="font-size: 8px; font-family: monospace; color: #94a3b8; width: 100%; text-align: center;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>'
  });

  await browser.close();
  console.log('=== PDF SUCCESS: Generated OneSash_Website_Documentation.pdf ===');
  console.log('File Path:', pdfPath);
}

generatePdf().catch((err) => {
  console.error('Failed to generate PDF:', err);
  process.exit(1);
});
