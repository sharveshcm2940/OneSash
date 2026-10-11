const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const OUT_DIR = path.join(__dirname, 'screenshots');

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });

  console.log('Navigating to homepage...');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1200));

  // 1. Hero Top & Headline
  console.log('Capturing Hero Top & Headline...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT_DIR, 'hero_headline_top.png') });

  // 1b. Hero with interactive workstation
  console.log('Capturing Hero Workstation...');
  await page.evaluate(() => window.scrollTo(0, 480));
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT_DIR, 'hero_workstation.png') });

  // 2. Click tab 2 (Type Contracts)
  console.log('Capturing Hero Tab 2 (Contracts)...');
  const tabButtons = await page.$$('button');
  for (const btn of tabButtons) {
    const text = await page.evaluate(el => el.innerText, btn);
    if (text.includes('02. Type Contracts')) {
      await btn.click();
      break;
    }
  }
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUT_DIR, 'hero_contracts_tab.png') });

  // 3. Services Showcase
  console.log('Capturing Services Section...');
  await page.evaluate(() => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT_DIR, 'services_section_custom_software.png') });

  // Scroll down to Service 2 (AI Automation)
  await page.evaluate(() => window.scrollBy(0, 750));
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUT_DIR, 'services_section_automation.png') });

  // Scroll down to Service 3 & 4
  await page.evaluate(() => window.scrollBy(0, 850));
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUT_DIR, 'services_section_platforms.png') });

  // 4. Why OneSash Commitments
  console.log('Capturing Why OneSash commitments...');
  await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h2'));
    const target = headings.find(h => h.innerText.includes('Technology should solve'));
    if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT_DIR, 'why_onesash_commitments.png') });

  // 5. Process Timeline Section
  console.log('Capturing Process Timeline Section...');
  await page.evaluate(() => {
    const el = document.getElementById('process');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise((r) => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(OUT_DIR, 'process_timeline_phase1.png') });

  // 6. Locations Studios
  console.log('Capturing Locations Studios...');
  await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h2'));
    const target = headings.find(h => h.innerText.includes('Rooted in India'));
    if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT_DIR, 'locations_studios.png') });

  // 7. Refined About Page Verification
  console.log('Navigating to About Page (/about)...');
  await page.goto('http://localhost:3000/about', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1200));

  console.log('Capturing About Hero & Origins...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT_DIR, 'about_hero_origins.png') });

  console.log('Capturing About Principles & Framework...');
  await page.evaluate(() => window.scrollTo(0, 1050));
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT_DIR, 'about_principles_standards.png') });

  console.log('Capturing About Studios...');
  await page.evaluate(() => window.scrollTo(0, 2100));
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT_DIR, 'about_studios.png') });

  await browser.close();
  console.log('All verification screenshots captured successfully!');
}

capture().catch(console.error);
