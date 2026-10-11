const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const OUT_DIR = path.join(__dirname, 'screenshots');

async function testSite() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });

  console.log('1. Checking Homepage...');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUT_DIR, 'home_page_clean.png') });

  console.log('2. Checking Footer...');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUT_DIR, 'footer_clean.png') });

  console.log('3. Checking About Page (No Team / Crew details)...');
  await page.goto('http://localhost:3000/about', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUT_DIR, 'about_page_clean.png') });

  console.log('4. Checking Services Page...');
  await page.goto('http://localhost:3000/services', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUT_DIR, 'services_page_clean.png') });

  console.log('5. Checking Contact Page...');
  await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUT_DIR, 'contact_page_clean.png') });

  console.log('6. Checking Security Page...');
  await page.goto('http://localhost:3000/security', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUT_DIR, 'security_page_clean.png') });

  console.log('7. Testing Redirect: /portfolio -> /services...');
  await page.goto('http://localhost:3000/portfolio', { waitUntil: 'networkidle2', timeout: 30000 });
  console.log('   Result URL:', page.url());

  console.log('8. Testing Redirect: /calculator -> /contact...');
  await page.goto('http://localhost:3000/calculator', { waitUntil: 'networkidle2', timeout: 30000 });
  console.log('   Result URL:', page.url());

  console.log('9. Testing Redirect: /case-studies -> /...');
  await page.goto('http://localhost:3000/case-studies', { waitUntil: 'networkidle2', timeout: 30000 });
  console.log('   Result URL:', page.url());

  await browser.close();
  console.log('All tests & screenshots completed successfully!');
}

testSite().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
