# Missing content checklist

The site does not make up reviews, credentials or business facts. Everything below is still needed. While
`SHOW_MISSING_CONTENT_NOTES` is `true` in `src/data/site.ts`, each item shows on the site as a yellow
**"Content needed"** note so it is easy to spot. Turn the notes off once they are filled in, or hide them before launch.

## Required before launch

- [ ] **Oregon CCB license number.** Oregon requires it in all advertising, including websites. → `ccbLicense` in `src/data/site.ts`
- [ ] **Certified Master Installer details:** who issued the certification, installer name(s), certificate/ID
      number, and year → `CERT` in `src/components/CertifiedSection.astro`. Optionally add a scan or photo of the
      certificate as `src/assets/photos/certificate.jpg`.
- [ ] **Company story** for the About page: founder, year founded, experience. Use only true details. → `src/pages/about.astro`

## Strongly recommended

- [ ] **Photos** (natural daylight, your own work). Placeholders show the exact filename to use. Main ones:
  - ~~`hero.jpg` for the home page hero~~ done: `hero-living-room.jpg` is the home page background
  - `about-team.jpg` for the owner/crew
  - `gallery-1.jpg` … `gallery-9.jpg` for real project photos (edit captions in `src/pages/gallery.astro`)
  - `windows-hero.jpg`, `doors-hero.jpg`, `services-hero.jpg`, `energy.jpg`
  - `service-<slug>.jpg` for each service page (e.g. `service-dry-rot-repair.jpg`)
  - `windows-<slug>.jpg` / `doors-<slug>.jpg` for each style page (e.g. `windows-casement.jpg`)
  - `location-<slug>.jpg` for each location page (e.g. `location-salem-or.jpg`)
- [x] **Brand logos** added for all seven suppliers. Alpine and Cascade were only available as small white images,
      so they were recolored navy and upscaled. Ask those manufacturers (or your rep) for official high-resolution
      versions, ideally SVG, and drop them into `src/assets/brands/` as `alpine.svg` and `cascade.svg`. A file in
      the folder replaces the old one automatically; delete the old `.png`.
- [ ] **Business hours** → `businessHours` in `src/data/site.ts`
- [ ] **Business/showroom address**, if you want it public → `streetAddress` in `src/data/site.ts`
- [ ] **Customer reviews.** Add real ones only, with permission (for example from your Google Business Profile).
      The home page has a placeholder section.
- [ ] **Insurance/bonding statement** you want shown on the About page.
- [ ] **Social media links**, if any → `socialLinks` in `src/data/site.ts`

## Branches

- [ ] **Portland:** opening date, address, local phone (if different), hours. Then set `status: 'active'` in `src/data/locations.ts`.
- [ ] **Sacramento & Roseville:** California CSLB license number, opening dates, addresses. Keep `coming-soon`
      until licensed. The pages currently say no work is being offered in California yet.

## Please review

- [ ] The process steps (`src/components/ProcessSteps.astro`) and service descriptions (`src/data/services.ts`)
      describe a typical project. Edit anything that doesn't match how you actually work, such as written estimates,
      trim painting, or the services you offer.
- [ ] The energy and tax credit guide (`src/pages/energy-tax-credits.astro`) was last checked in **October 2026**.
      Re-check it at least once a year.
- [ ] The Salem service-area list (`src/data/locations.ts`) uses approximate straight-line distances. Add or remove
      cities to match where you actually want to work.
