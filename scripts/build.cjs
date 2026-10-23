const fs = require('node:fs');
const path = require('node:path');
const {execFileSync} = require('node:child_process');
const root = path.resolve(__dirname,'..');
const dist = path.join(root,'dist');
const html = fs.readFileSync(path.join(dist,'index.html'),'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
if(new Set(ids).size!==ids.length)throw Error('Duplicate HTML IDs');
for(const match of html.matchAll(/\b(?:src|href)="([^"]+)"/g)){
 const target=match[1];
 if(target.startsWith('#')){if(!ids.includes(target.slice(1)))throw Error('Broken anchor: '+target)}
 else if(!/^(?:https?:|mailto:|tel:|data:)/.test(target)&&!fs.existsSync(path.join(dist,target)))throw Error('Missing asset: '+target);
}
for(const match of html.matchAll(/\baria-(?:controls|labelledby|describedby)="([^"]+)"/g))for(const id of match[1].split(' '))if(!ids.includes(id))throw Error('Broken accessibility reference: '+id);
for(const name of fs.readdirSync(dist).filter(f=>f.endsWith('.js')))execFileSync(process.execPath,['--check',path.join(dist,name)]);
const config=fs.readFileSync(path.join(dist,'site-config.js'),'utf8');
if(!config.includes('contactEndpoint'))throw Error('Contact configuration missing');
if(fs.existsSync(path.join(dist,'qa.html')))throw Error('Internal QA page must not be deployed');
const manifestPath=path.join(root,'.openai/hosting.json');
if(fs.existsSync(manifestPath)){const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));if(manifest.static.directory!=='dist')throw Error('Unexpected static output directory')}
console.log(`Static production output validated: ${ids.length} unique IDs, assets, anchors, accessibility references, JS syntax.`);
