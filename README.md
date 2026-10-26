# Fomin Windows & Doors — website

Static website for **Fomin Windows & Doors** (fominwindowsdoors.com), built with [Astro](https://astro.build) and
designed for Cloudflare Pages. There is no server-side code: `npm run build` creates a plain HTML/CSS site in `dist/`.

> **Before launch, read [`MISSING_CONTENT.md`](./MISSING_CONTENT.md).** It lists the real business details and
> photos still needed, including the Oregon CCB license number, which Oregon law requires in advertising.

## Quick start

Requires **Node.js 24** (Astro 7 needs Node 22.23.4 or newer; `.nvmrc` pins 24).

```bash
npm install
npm run dev       # local preview at http://localhost:4321
npm run build     # production build into ./dist
npm run preview   # serve the built ./dist locally
```

## Deploying to Cloudflare Pages

### 1. Create the Pages project (one time)

1. Push this repository to GitHub (already done if you are reading this on GitHub).
2. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** →
   **Pages** tab → **Connect to Git**.
3. Authorize GitHub and select the `fomin-windows-doors` repository.
4. Use these build settings:

   | Setting                  | Value            |
   | ------------------------ | ---------------- |
   | Production branch        | `main`           |
   | Framework preset         | `Astro`          |
   | Build command            | `npm run build`  |
   | Build output directory   | `dist`           |
   | Root directory           | *(leave blank)*  |

5. Under **Environment variables (advanced)** add `NODE_VERSION` = `24` (Production and Preview).
   Cloudflare also reads `.nvmrc`, but setting it explicitly avoids surprises.
6. Click **Save and Deploy**. The first build takes a minute or two and gives you a
   `*.pages.dev` address to check the site.

From then on every push to `main` deploys automatically, and every pull request gets its own preview URL.

### 2. Connect the domain fominwindowsdoors.com

1. In the Pages project open **Custom domains** → **Set up a custom domain**.
2. Enter `fominwindowsdoors.com` and follow the prompts. If the domain's DNS is already on Cloudflare the record is
   created for you; otherwise Cloudflare shows the CNAME record to add at your registrar (or you can move the
   domain's nameservers to Cloudflare).
3. Repeat for `www.fominwindowsdoors.com`, then (optional) add a redirect rule from `www` to the bare domain under
   **Rules → Redirect Rules** so there is only one address.
4. HTTPS certificates are issued automatically.

### 3. After the first deploy

- Submit `https://fominwindowsdoors.com/sitemap-index.xml` in [Google Search Console](https://search.google.com/search-console).
- Set up a free [Google Business Profile](https://www.google.com/business/) for the Salem branch — it is the best
  source of real customer reviews you can later show on the site.

## Editing content

| What                                              | Where                                   |
| ------------------------------------------------- | --------------------------------------- |
| Phone, email, CCB #, address, hours               | `src/data/site.ts`                      |
| Hide/show the yellow "Content needed" notes       | `SHOW_MISSING_CONTENT_NOTES` in `src/data/site.ts` |
| Window & door styles (pages + menu)               | `src/data/products.ts`                  |
| Services (dry rot, waterproofing, trim, …)        | `src/data/services.ts`                  |
| Locations, branch status, service-area cities     | `src/data/locations.ts`                 |
| Supplier brands                                   | `src/data/brands.ts`                    |
| Certified Master Installer details                | `src/components/CertifiedSection.astro` |
| Energy / tax credit guide                         | `src/pages/energy-tax-credits.astro`    |

### Photos

Drop JPG/PNG/WebP files into `src/assets/photos/` using the names shown on each placeholder (for example
`hero.jpg`, `gallery-1.jpg`, `windows-casement.jpg`). At build time they are resized to several widths, converted
to WebP and lazy-loaded automatically. Use photos 1600px wide or larger, in natural daylight, and only photos you
own or have permission to use.

### Brand logos

Save each manufacturer's official logo in `src/assets/brands/` named after its slug: `milgard`, `alpine`,
`andersen`, `ply-gem`, `jeld-wen`, `cascade`, `marvin` (`.svg` preferred, or `.png`/`.webp`). Get the files from the
manufacturer's dealer portal or your sales rep rather than copying them from other websites, and don't recolor or
alter them — manufacturers' brand guidelines generally forbid that. The site shows them on clean, uniform white cards.
Until a logo file exists, a neutral name card is shown.

### Opening a new branch

In `src/data/locations.ts` change the branch's `status` from `'coming-soon'` to `'active'` and update its text.
**California branches:** California requires a CSLB contractor license before advertising or offering
construction work there, so keep Sacramento and Roseville as `coming-soon` until that license is in place, then add
the license number to the page.

## Contact form

Version 1 deliberately has **no web form**. The Call and Email buttons use real `tel:` and `mailto:` links, and the
Contact page says plainly that there is no online form. When you are ready to add one, connect a real
submission service (for example Formspree, Web3Forms, or a Cloudflare Pages Function that sends email) and test it
end-to-end before you publish it.

## Project structure

```
public/            favicon, robots.txt, social image, Cloudflare _headers
scripts/           make-og-image.mjs (regenerates public/og-image.png)
src/assets/        photos/ and brands/ (optimized at build time)
src/components/    Header (mega menus), Footer, mobile action bar, icons, sections
src/data/          all business content
src/layouts/       Base layout (SEO meta, structured data)
src/pages/         one file per page; [slug].astro files generate style, service and location pages
```

## Design notes

- Colors: navy `#15324F`, white `#FFFFFF`, soft gray `#F4F6F8`, button blue `#2563EB`. Font: Inter (self-hosted).
- The window/door icons in the menus are original artwork (`src/components/Icon.astro`).
- No automatic slideshows, pop-ups or distracting animations; motion is turned off for visitors who prefer
  reduced motion.
- On phones a sticky bar keeps **Call** and **Free Estimate** within thumb reach.
- The navigation structure was inspired by large window brands' sites, but all text, icons and layout are original.
  The footer notes that Fomin Windows & Doors is independent and not affiliated with Renewal by Andersen.
