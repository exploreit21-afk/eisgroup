# Seva Services — Government & Skill Development Website

A clean, modern, fully responsive static website built with **Next.js 16** (App Router) and **Tailwind CSS v4** for a government services and skill development provider based in Rajasthan, India.

## Pages

- **Home** — Hero section, services overview, why choose us, CTA
- **About Us** — Company story, mission & vision, core values
- **Services** — E-Mitra, RSLDC, Vehicle Fitness, PMKVY with detailed cards
- **Contact** — Contact form, info cards, map placeholder

## Tech Stack

- Next.js 16 (App Router, static export)
- Tailwind CSS v4
- TypeScript
- Framer Motion (animations)
- Google Fonts (DM Serif Display + Plus Jakarta Sans)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
# Generate static export
npm run build

# Output is in the `out/` directory — ready to deploy
```

## Deploy

The static `out/` folder can be deployed to any hosting platform:

- **Vercel** — `npx vercel`
- **Netlify** — drag-and-drop the `out/` folder
- **GitHub Pages** — push `out/` to `gh-pages` branch
- **Any static host** — upload the `out/` directory

## Project Structure

```
seva-services/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (fonts, Navbar, Footer)
│   │   ├── globals.css         # Tailwind + custom design tokens
│   │   ├── page.tsx            # Home page
│   │   ├── about/
│   │   │   ├── layout.tsx      # About metadata
│   │   │   └── page.tsx        # About page
│   │   ├── services/
│   │   │   ├── layout.tsx      # Services metadata
│   │   │   └── page.tsx        # Services page
│   │   └── contact/
│   │       ├── layout.tsx      # Contact metadata
│   │       └── page.tsx        # Contact page
│   └── components/
│       ├── Navbar.tsx           # Sticky responsive navbar
│       ├── Footer.tsx           # Footer with links and info
│       ├── ServiceCard.tsx      # Reusable service card
│       ├── SectionHeading.tsx   # Reusable section header
│       └── ContactForm.tsx      # Contact form with validation
├── postcss.config.mjs
├── tsconfig.json
├── next.config.ts
└── package.json
```
