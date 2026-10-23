# OneSash website

React + TypeScript + Vite studio website with services, product examples and an enquiry flow.

## Run and verify

Use Node 22 or newer. Run `npm ci`, then `npm run dev`. `npm run build` checks TypeScript, bundles the app and generates initial metadata for all 14 public routes. `npm test` tests enquiry validation, receiver acceptance and failure handling. `npm run lint` reports code-quality warnings. `npm run preview` serves the production build locally. After building, `BROWSER_EXECUTABLE=/path/to/chrome npm run test:browser` exercises the main conversion journey using mocked delivery responses; provide an installed Chrome/Chromium executable.

## Enquiry delivery — configuration required before launch

`api/enquiry.js` is a Vercel Node function. A static-only host or Vite development server does not execute this endpoint. Configure these **server-only** environment variables on the deployment:

- `LEAD_WEBHOOK_URL`: HTTPS URL of your CRM or lead receiver.
- `LEAD_WEBHOOK_TOKEN`: shared bearer credential checked by that receiver.
- `ENQUIRY_ALLOWED_ORIGINS`: comma-separated approved site origins; production domains are the default. Add an exact preview origin only when testing previews.

The receiver must validate its bearer credential, enforce persistent rate limits/spam controls, store the lead durably, and notify the team. It must honor the `Idempotency-Key` header to avoid duplicates when a timed-out enquiry is retried, and only return HTTP 2xx with `{ "accepted": true, "id": "durable-record-id" }` after saving. Payload: name, email, optional phone/budget, projectType, projectDescription, service, project, source, requestId and receivedAt. Render submitted text as plain text or escape it in downstream dashboards and emails.

No receiver or third-party account has been provisioned. Missing configuration returns 503; failed or ambiguous delivery returns 502. The browser retains the message and offers a prefilled WhatsApp link. It never generates a fake success/reference. Retry uses the same idempotency key. Do not put credentials in any `VITE_` variable.

Before enabling production traffic, submit a test enquiry, verify the saved record and team notification, and retry the same key to verify only one record exists. Test receiver rejection and timeout. Confirm form values remain available and no success is shown. No real enquiries are sent by the automated tests.

## Content and proof

`src/data/projectsData.ts` owns portfolio IDs and development status. Interface previews use sample data and are labeled accordingly. PG Management remains in active development. Do not present preview figures as measured client results. Approved client screenshots, testimonials, measured outcomes and team profiles still need to be supplied and verified; none are fabricated here.

Service descriptions live in `ServicesSection.tsx`, with details in `src/pages/services/`. Service/project links pass query parameters into Contact. The form also supports the legacy calculator state. Keep delivery promises consistent at 10 business days between staging demos, subject to agreed project scope. The displayed project timeline is illustrative.

## SEO and hosting

`src/data/site.json` is the shared brand, production origin and organization configuration. `SEO.tsx` owns runtime metadata/schema. Public page title/description declarations also feed `scripts/build-route-metadata.mjs`, producing route-specific initial HTML metadata for social crawlers. The body remains client rendered; full SSR/prerendering is a separate improvement. Home FAQs render the same answers used in FAQ schema. There is no site search, so no SearchAction is advertised.

Vercel serves generated `.html` files through `cleanUrls`; API requests are excluded from SPA rewrites. Permanent redirects live in `vercel.json`. `public/_redirects` provides static-host legacy redirects but does not provision an enquiry function on other hosts. Verify host-specific clean URL/static-file precedence before deploying elsewhere. Unknown paths render a noindex page through the SPA; true HTTP 404 handling needs host-level integration.

## Funnel measurement

`track()` emits a local `onesash:analytics` CustomEvent. Connect an approved provider by listening for it; there is no external analytics account configured and no external tracking is introduced by this change. Events: cta_click, enquiry_start, enquiry_attempt, enquiry_accepted, enquiry_failure. Properties contain route, channel and known service/project IDs, never form contents. Acceptance is measured only after receiver acknowledgement. A WhatsApp click is intent, not a received enquiry. Qualified leads and won projects must be measured in the CRM.

## Release checks

Check the homepage and Contact at mobile and desktop widths, keyboard focus, the primary CTA, service/project prefills after refresh, every portfolio hash link, privacy link, and all submission states. Fetch initial HTML for a service page to check its title, canonical and sharing tags. Verify legacy redirects, real lead delivery and notification before merging/deploying. Older `verify_*.cjs` files are manual screenshot helpers; they are not functional delivery tests.
