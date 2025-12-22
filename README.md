# Roofing Company Website

A professional roofing company website built with React, TypeScript, and Tailwind CSS. Features include service pages, portfolio showcase, testimonials, and an admin panel for easy content management.

## Features

- Modern, responsive design
- Service pages for all roofing services
- Portfolio gallery with case studies
- Client testimonials
- Contact form
- Admin panel for content editing (via Decap CMS)
- SEO-friendly structure

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Decap CMS (NetlifyCMS)
- Supabase (for data storage)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <your-repo-name>
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your Supabase credentials:
```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

```bash
npm run build
```

The production build will be created in the `dist` folder.

## Admin Panel

Access the admin panel at `/admin/` to edit:
- Company information
- Services
- Portfolio projects
- Testimonials

You'll need a GitHub account to log in and make changes.

## Deployment

This site is configured for Netlify deployment. The `netlify.toml` file contains all necessary build settings.

## License

All rights reserved.
