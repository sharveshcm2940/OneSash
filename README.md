# OneSash — current website

The production entry is `dist/index.html`. This branch contains only the current website and its supporting configuration, scripts, assets, and tests.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run check`, `npm test`, and `npm run build` for validation. For static hosting, serve **dist**. Vercel output is configured explicitly. No Site credentials or hosting identity are required.

This website is buildless; `build` validates the tracked HTML, scripts, links and assets. GSAP and Inter are bundled locally.

## Editing
- Content and semantic fallback: `dist/index.html`.
- Responsive design and continuous visual motion: `dist/style.css`.
- Scoped GSAP motion, accessible interactions, validation: `dist/app.js`.
- Verified portfolio, technology names, social links, email, contact endpoint: `dist/site-config.js`.

The supplied service descriptions are editable in the HTML. Contextual visual preview copy is in DATA.services in app.js. Confirm service availability and FAQ policies before public launch.

## Contact integration
Set `contactEndpoint` to a real HTTPS endpoint accepting a JSON POST containing name, email, company, project, budget, message. It must allow the Site origin via CORS if external. Only a successful HTTP response displays success. Leave it empty to explicitly disable transmission. No mail destination is invented. Set `email` to show real email links. Download brief works locally without a backend.

## Portfolio data
Each object in projects: title, category, overview, services (array), technologies (array), image, imageAlt, url. Only add real work with permission. Empty data shows the designed editorial placeholder.
Technologies: verified names as strings or objects with name. Social links: {label,url}.

## Motion
Locally installed GSAP is copied from node_modules/gsap/dist to dist/assets. ScrollTrigger is registered after DOM readiness (defer). gsap.context and matchMedia scope and revert animations, reduced motion removes continuous and triggered motion, and refresh follows font loading and viewport changes. Native scroll; no scroll hijacking. Service and FAQ disclosures work natively without JS.

## V3 refinements
- Inter 400/500/600/700 is self-hosted under assets/fonts with the SIL Open Font License. No commercial fonts are bundled.
- `refinement.css` defines the consistent typography and three bespoke section layouts.
- `refinement.js` owns responsive GSAP contexts, desktop process pinning, reversible stage transitions, editorial demonstrations, technology pane transitions, and section-specific motion.
- `site-config.js` includes `technologyCategories`: id, title, heading, description, technologies. Only fill technology arrays with confirmed tools. No assumed stack is advertised.
- Below 1000px or with reduced motion, process stages are shown sequentially. Reduced motion removes pinning and continuous animations.
- Browser QA covered desktop stage selection/pinning, mobile sequential process/no overflow, technology pane switching, and Inter sizing. The existing validation/download logic remains in app.js.

## V4 audit and repairs

This is a static HTML/CSS/JavaScript site, not a React/TypeScript application. There are no hydration, React key, or TypeScript compilation stages. No lint configuration existed.

### Findings and causes
- Expertise had competing native disclosure, GSAP, hover, and focus states. Changing description heights moved rows beneath the pointer, causing unintended reselection. It now has one explicit selection owner and stable row geometry, a 140ms hover intent, and hover suppression during scrolling.
- Global CSS smooth scrolling affected browser focus/automatic scrolling. It is now limited to explicit anchor actions; focus/selection scrolling is immediate.
- Repeated refreshes while service content changed disturbed the pinned section during testing. Stable preview sizing removes those refreshes; technology layout refreshes use GSAP's safe refresh.
- Global motion setup also depended on layout breakpoints, replaying unrelated entrances. Global and responsive process contexts are now separate. Page-cache restoration refreshes existing contexts instead of duplicating them.
- Hidden previews could retain active sequences and stale animation properties. Demo timelines have one owner per root, cancel on selection/interaction, and pause offscreen or when the document is hidden.
- The mobile preview's overflow viewport let focus scroll its navigation chrome. Its content now scrolls independently of the header and tabs.
- Form error clearing used native validity without the trimmed minimum length used at submission. The two paths now agree.

### Components
`index.html`: service showcase, Discover/Develop/Deliver workspaces, API lifecycle, database table/query/relationship interface.
`app.js`: base navigation, FAQ, contact and trimmed validation.
`refinement.js`: existing scroll/entrance system and responsive process pinning.
`demos.js`: selection and simulation timeline ownership, playback, interruption and visibility.
`demo-data.js`: immutable, linked fictional records and predefined filtering.
`repairs.css`: bounded frames, stable rows, mobile content viewports, monochrome demonstrations.

### Verification
- npm run check: JavaScript syntax checks.
- npm test: four meaningful tests of sample query projection, foreign-key integrity, filtering and immutability.
- npm run build: static production asset/anchor/ID/accessibility-reference and syntax validation. There is no framework compilation step.
- Browser checks included service selection and search/filter results, API replay and completion, database queries/table/relationship controls, process stage controls, responsive/mobile geometry, menu/Escape and form/FAQ regressions.
- Reduced-motion JS and CSS branches were checked through an internal emulation harness; the OS preference itself was not changed. Internal QA files are excluded from deployment.

No runtime dependencies were added or upgraded for V4. Beautiful Soup was used only as an editor-side HTML transformation tool, not by the website.

### Remaining configuration and limits
A direct submission backend remains unconfigured. The site now provides the verified company email and phone links, and prepares an email draft for visitors to review and send in their own email app. All showcased interfaces and API/query/release states are explicitly simulations, with no invented client work or real benchmark claims. Browser checks cover representative desktop and mobile dimensions, not every physical device or browser. No claim is made that every possible codebase defect has been eliminated.


## Contact and Why OneSash update
- Added onesash.contact@gmail.com and clickable +91 phone destinations for 9980399557 and 8903467843 in Contact and the footer. Static markup provides the same details if JavaScript is unavailable.
- The enquiry form validates fields and prepares a mailto draft when no server endpoint is configured. It never reports that the website sent the email.
- Removed full-container masks from Expertise entrances. Interrupting a demo now kills its tweens and restores visible opacity, clipping, and transform defaults, preventing the empty preview shown in the supplied screenshot.
- Why OneSash has four distinct entry/replay timelines with explicit replay buttons, visible content throughout, offscreen pausing, cleanup, and reduced-motion alternatives.
- Checked desktop and 375px-content mobile layouts, contact link destinations, interrupted preview visibility, replay execution, and site console logs. JavaScript checks and the static production validator pass.


## Interactive selected-project previews
The six selected projects each include a domain-specific browser-local workspace, a summary, and an expanded dialog. These interfaces are representative previews with sample records, not verified captures of client production applications. No preview submits client data, processes payments, or calls an AI service. Jyothi's budget review explicitly uses a fixed threshold. Changes last only for the current page session and each workspace can be reset.

QA covers matter search/creation, opportunity advancement, menu/cart/order completion, procurement approval, rent payment, request creation/resolution, and dialog state preservation.
