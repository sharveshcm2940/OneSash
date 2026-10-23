import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname } from 'node:path'
const site = JSON.parse(await readFile('src/data/site.json', 'utf8'))
const app = await readFile('src/App.tsx', 'utf8')
const template = await readFile('dist/index.html', 'utf8')
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const files = new Map([...app.matchAll(/const (\w+) = lazy\(\(\) => import\("([^"]+)"\)/g)].map(([,name,path]) => [name, `src/${path.replace('./','')}.tsx`]))
let count = 0
for (const [,path,component] of app.matchAll(/<Route path="([^"]+)" element=\{<(\w+) \/>\}/g)) {
  if (path === '*' || !files.has(component)) continue
  const source = await readFile(files.get(component), 'utf8')
  const title = source.match(/<SEO\s+title="([^"]+)"/)?.[1]
  const description = source.match(/<SEO[\s\S]*?description="([^"]+)"/)?.[1]
  if (!title || !description) throw new Error(`Missing SEO declaration: ${component}`)
  const canonical = site.origin + path
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`
  // Remove only tags managed by the shared runtime SEO component.
  let html = template.replace(/<title>[\s\S]*?<\/title>/, '').replace(/<meta\b[^>]*data-rh="true"[^>]*>/g, '').replace(/<link\b[^>]*data-rh="true"[^>]*>/g, '')
  const metadata = `<title>${escape(fullTitle)}</title>\n` +
    `<meta data-rh="true" name="description" content="${escape(description)}">\n` +
    `<meta data-rh="true" name="robots" content="index, follow">\n` +
    `<link data-rh="true" rel="canonical" href="${canonical}">\n` +
    ['og:title','og:description','og:url','og:image','og:site_name','og:type'].map((key,i) => `<meta data-rh="true" property="${key}" content="${escape([fullTitle,description,canonical,site.origin+site.image,site.name,'website'][i])}">`).join('\n') + '\n' +
    ['twitter:card','twitter:title','twitter:description','twitter:url','twitter:image'].map((key,i) => `<meta data-rh="true" name="${key}" content="${escape(['summary_large_image',fullTitle,description,canonical,site.origin+site.image][i])}">`).join('\n')
  html = html.replace('</head>', `${metadata}\n</head>`)
  const target = path === '/' ? 'dist/index.html' : `dist${path}.html`
  await mkdir(dirname(target), { recursive: true })
  await writeFile(target, html)
  count++
}
if (count !== 14) throw new Error(`Expected 14 public pages, generated ${count}; check route inventory`)
console.log(`Generated initial route metadata for ${count} public pages (body remains client rendered).`)
