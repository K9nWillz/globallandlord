# FindHouses — React Clone

A React + Tailwind rebuild of the original static HTML real-estate template. Same
layout, same overall visual rhythm (dark hero, red/pink accent, card-based
listings), but componentized so you can gut and rebuild any section without
touching the rest.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Structure

```
src/
  data/listings.js       ← all mock content: properties, agents, testimonials, etc.
  components/
    Navbar.jsx            ← sticky nav, mobile menu, login trigger
    Hero.jsx               ← dark hero + For Sale/For Rent search form
    PopularPlaces.jsx      ← city grid
    PropertyCard.jsx       ← shared card used by both listing sections
    FeaturedProperties.jsx
    WhyChooseUs.jsx
    DiscoverProperties.jsx ← horizontal-scroll listing row (replaces jQuery slick)
    Agents.jsx
    Testimonials.jsx       ← simple prev/next carousel, no dependency
    Partners.jsx
    Footer.jsx
    LoginModal.jsx
  App.jsx                 ← wires all sections together
  index.css               ← Tailwind + a few shared classes (.btn-brand, .section-title)
tailwind.config.js         ← brand color scale, fonts (Lato/Montserrat)
```

## What changed from the original

- No jQuery, no Bootstrap, no external plugin CSS (slick, owl-carousel,
  magnific-popup, etc.) — everything is native React state or CSS.
- No real image assets were included in what you sent, so every image is a
  placeholder from picsum.photos, seeded so they stay consistent across
  reloads. Swap the `img` fields in `src/data/listings.js` for your real
  photos.
- Styling is Tailwind utility classes instead of the original's ~20 CSS files.
  The accent color (`brand.500` = `#e63950`) approximates the original
  "pink.css" theme — change it in `tailwind.config.js` if it's off.
- Content (property details, agent names, testimonial quotes) is placeholder
  copy in `src/data/listings.js` — edit that one file to change what shows up
  across the whole site.

## Where to edit things

- **Colors/fonts** → `tailwind.config.js`
- **Copy/content** → `src/data/listings.js`
- **Layout of a section** → the matching file in `src/components/`
- **Page order** → `src/App.jsx`
