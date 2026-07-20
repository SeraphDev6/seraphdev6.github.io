# seraphdev.com

The SeraphDev marketing site — now a **static, fully server-rendered** site
(plain HTML + one CSS file), deployed via GitHub Pages to `www.seraphdev.com`.

## Why static?

The previous version was a client-side-rendered React SPA. External fetchers —
Google's crawler and AI answer engines (ChatGPT Search, Perplexity, Claude) —
received only the `<title>` tag and an empty `<div id="root">`, so none of the
body copy was crawlable. This rewrite renders **all** content in the raw HTML.

Verify:

```
curl -s https://www.seraphdev.com | grep -i "consultancies"
```

## Structure

```
index.html                        Home (hero, approach, services, portfolio, Decide case study, FAQ teaser, CTA)
faq/index.html                    FAQ page (FAQPage JSON-LD; Tier-3 AEO answers)
case-studies/glasspane/index.html Glasspane / CVE responsible-disclosure write-up
accessibility/index.html          Accessibility statement (WCAG 2.1 AA)
styles.css                        Shared stylesheet
robots.txt, sitemap.xml           SEO plumbing
.nojekyll                         Serve files as-is (no Jekyll processing)
SeraphDevLogo.png                 Logo
assets/DecideScreenshot-*.png     Case-study screenshot
```

No build step. Edit HTML/CSS directly; GitHub Pages serves them.

## SEO / accessibility built in

- Unique `<title>` + meta description + canonical per page
- Open Graph + Twitter card tags
- JSON-LD: `ProfessionalService` + `OfferCatalog` (home), `FAQPage` (faq),
  `Article` (Glasspane) — all include Columbus, OH signals
- Skip link, keyboard nav, visible focus, reduced-motion support, semantic
  headings, contrast-checked palette

## Still open (needs owner input — see handoff doc §2 / §5)

- **34Gigs** portfolio entry is intentionally omitted pending Tyler's sign-off.
- **SOC 2 / HIPAA** claim on Responsible AI Consulting omitted for the same
  reason; replaced with the CVE responsible-disclosure proof point.
- **Decide case study**: needs a real user/founder quote and/or a metric to
  replace the before/after walkthrough placeholder framing.
- **AI Problem Solving**: needs one concrete before→after example.
- **Portfolio links**: VantageCTO and ACRoss have no live URL wired yet.
- **Site agent ("Ask SeraphDev")** and full Lighthouse pass: not in this
  static pass (the agent needs a backend/API key — out of scope for GH Pages).
