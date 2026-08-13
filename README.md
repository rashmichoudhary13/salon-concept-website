# Salon Demo

A polished, responsive concept website for a luxury hair salon. It showcases salon services, hair transformations, a visual portfolio, contact details, and an appointment-selection experience.

## Highlights

- Editorial-style landing page with salon imagery and a looping feature video
- Service menu with interactive category tabs
- Before-and-after gallery and client testimonials carousel
- Portfolio gallery
- Contact and opening-hours page
- Appointment-selection interface with service durations and prices
- Responsive layout built with Next.js and React

## Routes

| Route | Description |
| --- | --- |
| `/` | Homepage, services preview, Aqua Therapy feature, transformations, and testimonials |
| `/services` | Categorised service and pricing menu |
| `/portfolio` | Hair and salon image gallery |
| `/contact` | Salon location, hours, and contact information |
| `/book-appointment` | Appointment service-selection interface |

## Tech stack

- [Next.js](https://nextjs.org/) 16
- React 19
- TypeScript
- CSS modules/global styles in `src/app/globals.css`
- Next.js `Image` component for optimized image rendering

## Run locally

Prerequisite: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available commands

```bash
npm run dev    # Start the development server
npm run lint   # Run ESLint
npm run build  # Create a production build
npm run start  # Serve the production build
```

## Project structure

```text
src/
  app/                 # App Router pages and global styling
    services/           # Service menu
    portfolio/          # Gallery page
    contact/            # Contact page
    book-appointment/   # Appointment selection page
  components/           # Shared header and footer
public/
  assets/               # Salon photography and logo
  salon_video.mp4       # Homepage feature video
```

## Note

This is a front-end concept. The appointment buttons demonstrate the booking flow visually; they do not currently submit appointments or connect to a backend.
