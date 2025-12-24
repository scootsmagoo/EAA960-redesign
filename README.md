# EAA 690 Website

A modern rebuild of the EAA 690 (Experimental Aircraft Association Chapter 690) website, built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Ready for Vercel, Netlify, or any Node.js hosting

## Features

- ✅ Responsive design with mobile-first approach
- ✅ Modern navigation with dropdown menus
- ✅ Contact form
- ✅ Calendar/Events page
- ✅ Programs section with multiple subpages
- ✅ Chapter information pages
- ✅ News section
- ✅ Cookie consent banner
- ✅ SEO-friendly structure

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
EAA960/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── chapter/           # Chapter section pages
│   ├── programs/          # Programs section pages
│   ├── contact/           # Contact page
│   ├── calendar/          # Calendar/Events page
│   └── news/              # News page
├── components/            # React components
│   ├── Navigation.tsx     # Main navigation component
│   └── Footer.tsx         # Footer component
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

The EAA brand colors are defined in `tailwind.config.ts`:
- `eaa-blue`: #003366
- `eaa-yellow`: #FFD700
- `eaa-light-blue`: #0066CC

### Content

Update content in the respective page files in the `app/` directory.

## Deployment

This project is ready to deploy on:
- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://netlify.com)
- Any Node.js hosting platform

## License

This project is for EAA 690 chapter use.

