# iPortfolio — React Version

This is a React (Vite) conversion of the **iPortfolio** Bootstrap HTML template, split into
a **4-page multi-page site** using `react-router-dom`:

| Route | Page | Sections included |
|---|---|---|
| `/` | Home | Hero, Stats, Services |
| `/about` | About | About, Skills, Testimonials |
| `/resume` | Resume | Resume |
| `/contact` | Contact | Contact form + map |

The sidebar nav (Home / About / Resume / Contact) now uses real routes instead
of scrolling to anchors on one long page — clicking a link swaps pages via React Router,
and the active link is highlighted automatically based on the current route.

Every vendor script behavior has been reimplemented with its React/npm equivalent:

| Original (vanilla JS) | React version |
|---|---|
| AOS (animate on scroll) | `aos` npm package, initialized in `App.jsx` |
| Typed.js (hero text) | `typed.js` npm package, used in `Hero.jsx` |
| PureCounter (stats numbers) | Custom `useCounter` hook (IntersectionObserver) |
| Waypoints (skill bar reveal) | IntersectionObserver in `Skills.jsx` |
| Swiper (testimonials slider) | `swiper/react` in `Testimonials.jsx` |
| Header toggle / mobile nav / dropdown | React state in `Header.jsx` |
| Scrollspy / scroll-to-top / preloader | React hooks in `Header.jsx`, `ScrollTop.jsx`, `Preloader.jsx` |
| PHP contact form (`contact.php`) | Controlled React form in `Contact.jsx`, posts to `/api/contact` (placeholder — wire up your own backend/email service) |

## Project structure

```
src/
  assets/
    css/main.css        # original template styles (unchanged)
    img/                 # all original images
  components/
    Header.jsx           # sidebar nav, now route-aware (NavLink)
    Hero.jsx
    About.jsx
    Stats.jsx
    Skills.jsx
    Resume.jsx
    Services.jsx
    Testimonials.jsx
    Contact.jsx
    Footer.jsx
    ScrollTop.jsx
    Preloader.jsx
    ScrollToTopOnNavigate.jsx  # scrolls to top + refreshes AOS on page change
  pages/
    Home.jsx              # "/"        → Hero + Stats + Services
    AboutPage.jsx          # "/about"   → About + Skills + Testimonials
    ResumePage.jsx         # "/resume"  → Resume
    ContactPage.jsx        # "/contact" → Contact
  data/
    skills.js
    services.js
    testimonials.js
  hooks/
    useCounter.js
  App.jsx                 # sets up BrowserRouter + Routes
  main.jsx
```

Content (name, bio, resume entries, skills, services, testimonials, portfolio items) lives
in `src/data/*.js` and in the JSX of `About.jsx` / `Resume.jsx` — edit those to personalize.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Note on image file extensions

Vite's asset handling is case-sensitive. If you replace any image (e.g. your profile photo) with
your own file and it has an uppercase extension (`.JPG`, `.PNG`, etc.), either:

1. Rename the file to lowercase (`.jpg`, `.png`) to match the `import` statements in the components, **or**
2. Keep it uppercase — `vite.config.js` already includes `assetsInclude` entries for uppercase
   extensions, so this now works too. Just make sure the case in the `import` path exactly
   matches the actual filename on disk.

## Notes

- The contact form currently `fetch`es `POST /api/contact`. Point this at your own
  serverless function, form service (e.g. Formspree, EmailJS), or backend endpoint.
- `portfolio-details.html` and `service-details.html` links are left as-is (`<a href="...">`);
  wire these up to real routes (e.g. with `react-router-dom`) if you need those pages too.
- Social links in `Header.jsx` are placeholders (`href="#"`) — replace with your real profiles.
