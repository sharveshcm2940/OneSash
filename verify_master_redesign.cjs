const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const OUT_DIR = path.join(__dirname, 'screenshots');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });

  console.log('--- 1. Testing Homepage (Desktop) ---');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1000));

  // Hero
  await page.screenshot({ path: path.join(OUT_DIR, 'redesign_home_hero.png') });
  console.log('Captured redesign_home_hero.png');

  // Switch to Law Throne tab in hero
  const buttons = await page.$$('button');
  for (const b of buttons) {
    const text = await page.evaluate(el => el.innerText, b);
    if (text === 'Law Throne') {
      await b.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUT_DIR, 'redesign_home_hero_law_throne.png') });
  console.log('Captured redesign_home_hero_law_throne.png');

  // Services Section
  await page.evaluate(() => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUT_DIR, 'redesign_home_services.png') });
  console.log('Captured redesign_home_services.png');

  // Selected Work Section
  await page.evaluate(() => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUT_DIR, 'redesign_home_work.png') });
  console.log('Captured redesign_home_work.png');

  // Scroll to Footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUT_DIR, 'redesign_home_footer.png') });
  console.log('Captured redesign_home_footer.png');

  console.log('--- 2. Testing Portfolio Page (/portfolio) ---');
  await page.goto('http://localhost:3000/portfolio', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT_DIR, 'redesign_portfolio_page.png') });
  console.log('Captured redesign_portfolio_page.png');

  console.log('--- 3. Testing About Page (/about) ---');
  await page.goto('http://localhost:3000/about', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT_DIR, 'redesign_about_page_hero.png') });
  console.log('Captured redesign_about_page_hero.png');

  await page.evaluate(() => window.scrollBy(0, 1100));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUT_DIR, 'redesign_about_page_team.png') });
  console.log('Captured redesign_about_page_team.png');

  console.log('--- 4. Testing Contact Page (/contact) ---');
  await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT_DIR, 'redesign_contact_page.png') });
  console.log('Captured redesign_contact_page.png');

  console.log('--- 5. Testing Calculator Page (/calculator) ---');
  await page.goto('http://localhost:3000/calculator', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT_DIR, 'redesign_calculator_page.png') });
  console.log('Captured redesign_calculator_page.png');

  console.log('--- 6. Testing Mobile Viewport (390x844) ---');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT_DIR, 'redesign_mobile_home_hero.png') });
  console.log('Captured redesign_mobile_home_hero.png');

  await browser.close();
  console.log('=== All Master Redesign Visual Verifications Finished! ===');
}

run().catch(err => {
  console.error('Error running test script:', err);
  process.exit(1);
});
