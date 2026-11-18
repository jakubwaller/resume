# Walkthrough brief

Input for the exploratory walkthrough skill: an agent with a headless browser uses the live site
as a visitor would and reports what gets in the way. Keep the by-design list current, or the
walk re-reports the same intentional behaviour every time.

## Site

- Live: https://www.jakubwaller.eu (canonical host; `https://jakubwaller.eu` and `http://` redirect there with a 301).
- Language: English. The one legal page, `/datenschutz`, is German. No language switch.
- What it is: Jakub Waller's personal resume and portfolio, a static Next.js site on Netlify behind
  Cloudflare. No login, no forms, no backend, no cookies.
- Pages: the one-page home `/` with sections Hero, Portfolio (`#portfolio`), Press (`#press`), About
  (`#about`), Resume (`#resume`: Experience, Education, Skills, Certificates) and Contact (`#contact`);
  `/datenschutz`; the CV as a PDF at `/assets/jakubwaller_resume.pdf`; anything else answers 404.

## Personas

1. **Recruiter, desktop.** A climate-tech company is hiring a data lead; she found the name on LinkedIn.
   She wants the current role and how long he has held it, the earlier employers, education and skills,
   then downloads the CV and checks that it tells the same story as the page. She ends on the way to get
   in touch and stops before writing (see out of bounds).
2. **Journalist, phone.** He read the NDR piece about PapaMap and wants to know who is behind it, what
   else he built, what other outlets already wrote, and how to reach him. He reads the press list, opens
   one article one hop, and stops at the contact links.
3. **Fellow maker, phone.** Saw a post on Mastodon and wants to look through the side projects: open each
   card one hop, see whether a project is a live site or a repo, and check the privacy page for tracking
   before following any link.

## Key flows

- Navigation: the desktop pill nav (JW. · portfolio · press · about · resume · contact) and its current-section
  highlight; on a phone the menu button top right and its overlay; the hero "Scroll" chip; the footer's
  back-to-top button. Deep links `/#press`, `/#resume`, `/#contact` opened cold.
- Hero: status pill, the inline links in the intro (employer, GitHub, Strava, Telegram bot, Bürgerwecker,
  PapaMap, Goodreads, Spotify), the social icons, "Resume" (opens the PDF) and "Contact" (jumps to `#contact`).
- Portfolio: six cards (PapaMap, Bundesschnitt, Bürgerwecker, Zapfkompass, Wattif, Probable Futures Bot),
  each an animated GIF, a description and an outbound link.
- Press: six rows (outlet, date, kind, project pill, paywall mark, headline, note), each an outbound link.
- About: photo with credit, the story, the fact tiles (Location, Age, Nationality, Interests, Study, Employment).
- Resume: Experience and Education timelines, skill bars, Certificates with their links.
- The PDF CV: open it, read it, compare roles, dates and side projects with the page.
- Contact: the cards (Email, LinkedIn, GitHub, Instagram, Mastodon, Location). Open each link one hop
  except Email (see out of bounds).
- Footer: Datenschutz, then "← Back to home". A 404 path (`/gibtsnicht`, `/impressum`).

App-only flows: none. The site has no app; the apps of the linked projects are outside this walk.

## By design — do not report

- **No Impressum.** The site follows the private-page model (no ads, no forms, nothing sold), so it has
  no Impressum and publishes no address; the Datenschutz page says so. `/impressum` answers 404.
- **No contact form.** Contact is by link only, as the Datenschutz page says.
- **No cookies, no tracking, no analytics, no third-party scripts**; the web fonts are self-hosted.
  Netlify and Cloudflare see visitor IPs, which the Datenschutz page discloses.
- **The hero pill says "On parental leave — building PapaMap", the PDF CV does not mention parental
  leave.** The leave is on the website only, on purpose.
- **The two shipzero roles overlap** (Data Consultant until March 2025, Lead Data Scientist from February
  2025); the dates match LinkedIn.
- **Titles and dates are settled:** Lead Data Scientist at shipzero (the hero and About say so too),
  Data Scientist/Engineer at Qimia, Bioinformatics Analyst from July 2013, confirmed by the owner.
- **One contact address** (the one on the Contact card and in the PDF) is also the one on the Datenschutz page.
- **The PDF's career break runs 12/2022 – 12/2023**, confirmed by the owner; the site's Experience list has
  no entry for the gap.
- **Portfolio order:** PapaMap first as the flagship, then Bundesschnitt, then the rest. Probable Futures
  Bot stays although it is old, Telegram-only and links to a GitHub repo rather than a site: it is the
  climate project.
- **Press order is newest first, with one exception:** the Abendblatt commentary (11 Sep) sits right after
  the Abendblatt article it comments on (10 Sep). Headlines stay in their original language (mostly
  German), bylines are left off, and the two Abendblatt pieces carry a "Paywall" mark because they are
  paywalled. The press list is on the site only, not in the PDF.
- **A hidden "Mastodon" link** sits in the header for Mastodon's ownership check (`rel="me"`); screen
  readers announce it. Mastodon is in the hero icons, contact cards and footer, not in the nav menu.

Not a site defect: LinkedIn answers headless browsers with a sign-in wall or an error status; a LinkedIn
link that does not load for the walker is not a finding.

## Out of bounds

The walk must never send anything on anyone's behalf or change anything anywhere.

- **No mail.** Do not follow the Email contact card or the address on the Datenschutz page into a mail
  client, and send nothing to any address on the site or in the PDF. Note that the link exists and where
  it points; stop there.
- **Social and profile links** (LinkedIn, GitHub, Stack Overflow, Instagram, Mastodon, Strava, Goodreads,
  Spotify): open the page read-only. No login, follow, connect, message, star, like or comment.
- **Telegram bot** (`t.me/ProbableFuturesBot`): open the web preview only; never press Start or send it
  anything, it answers with real API calls.
- **Project sites** (papamap.de, bundesschnitt.de, buergerwecker.de, zapfkompass.de,
  wattif.jakubwaller.eu): one hop to the landing page and stop. They have their own walks. No sign-up,
  no OpenStreetMap sign-in, no edits, no submissions, no app installs.
- **Press articles:** open the page, read what shows without an account; no paywall login or subscription;
  dismiss a cookie banner by rejecting.
- **Certificate links and the Google Maps location link:** open only, no sign-in.
- No writes to Netlify, Cloudflare or GitHub; the Netlify deploy previews
  (`deploy-preview-<n>--dazzling-griffin-5ed266.netlify.app`) are not the product.
- Move like a person: a page every few seconds, no crawl, no load testing. Never use a real name or e-mail
  address anywhere; `@example.com` only.
