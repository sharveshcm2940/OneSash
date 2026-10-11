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
  await new Promise((r) => setTimeout(r, 1000));

  // 1. Hero Section Top + Headline + Rolling text
  console.log('1. Hero Top...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUT_DIR, 'no_ai_hero_top.png') });

  // 2. Hero Section 4-Pillar Matrix
  console.log('2. Hero 4-Pillar Matrix...');
  await page.evaluate(() => window.scrollTo(0, 360));
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUT_DIR, 'no_ai_hero_matrix.png') });

  // 3. Company Intro & Philosophy
  console.log('3. Company Intro...');
  await page.evaluate(() => window.scrollTo(0, 950));
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUT_DIR, 'no_ai_company_intro.png') });

  // 4. Services Section (Custom Software)
  console.log('4. Services (Custom Software)...');
  await page.evaluate(() => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUT_DIR, 'no_ai_services_custom_software.png') });

  // 5. Services Section (AI & Automation)
  console.log('5. Services (Automation)...');
  await page.evaluate(() => window.scrollBy(0, 750));
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUT_DIR, 'no_ai_services_automation.png') });

  // 6. Why OneSash Principles
  console.log('6. Why OneSash...');
  await page.evaluate(() => {
    const el = document.getElementById('why');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUT_DIR, 'no_ai_why_onesash.png') });

  // 7. Process Timeline Section
  console.log('7. Process Timeline...');
  await page.evaluate(() => {
    const el = document.getElementById('process');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUT_DIR, 'no_ai_process.png') });

  // 8. About Page
  console.log('8. About Page...');
  await page.goto('http://localhost:3000/about', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUT_DIR, 'no_ai_about_page.png') });

  // 9. Services Page
  console.log('9. Services Page...');
  await page.goto('http://localhost:3000/services', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUT_DIR, 'no_ai_services_page.png') });

  await browser.close();
  console.log('All screenshots captured successfully!');
}

capture().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
