# SHARP – Fashion Photography Portfolio

This project is a full-stack web experience for the fictional fashion photography collective **SHARP**. It is composed of an Express REST API and a React front-end built with Vite, organised under a monorepo using npm workspaces.

## Project structure

```
.
├── client/   # React single-page application (Vite)
├── server/   # Express API server exposing portfolio content
└── package.json  # Root workspace configuration
```

## Getting started

1. **Install dependencies**
   ```bash
   npm install
   ```
   This command installs dependencies for both the `client` and `server` workspaces.

2. **Run the development servers**
   ```bash
   npm run dev
   ```
   - Express API: http://localhost:5000
   - Vite dev server: http://localhost:5173 (proxying `/api` to the Express server)

3. **Production build**
   ```bash
   npm run build
   npm start
   ```
   - Builds the React app into `client/dist` and prepares the Express server.
   - `npm start` launches the Express server, which serves both the API and static assets from the React build.

## Available API routes

- `GET /api/home` – Home page hero, value propositions, process, FAQ, and social links.
- `GET /api/about` – About page copy, process timeline, slider images and team profiles.
- `GET /api/works` – Collection of portfolio entries.
- `GET /api/works/:id` – Detailed information for a single work (supports both `id` and `slug`).
- `POST /api/contact` – Accepts `{ name, email, message }` and logs the payload (placeholder for mail integration).

## Front-end features

- Responsive layout inspired by the SHARP brand aesthetic with bold typography, heavy borders and muted palette.
- Reusable UI components (`HeroSection`, `ValueProps`, `Gallery`, `Timeline`, `FAQ`, `Slider`, `ContactInfo`, `WorkCard`, `Navbar`, `Footer`).
- Smooth-scroll hero call-to-action and IntersectionObserver powered fade-in animations.
- React Router v6 pages for Home, About, Works, Work Detail, Contact and a custom 404 view.
- Contact form that posts to the Express API and displays status messaging.

## Future improvements

- Replace in-memory JSON data with a persistence layer (MongoDB or PostgreSQL).
- Add authentication for managing portfolio content from an admin dashboard.
- Integrate an email delivery service (e.g. SendGrid) for the contact endpoint.
