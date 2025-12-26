# EAA 690 Website

A modern rebuild of the EAA 690 (Experimental Aircraft Association Chapter 690) website, built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** PT Serif (free Google Font, alternative to Freight Text Pro)
- **Authentication:** Squarespace Member Areas integration
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
- ✅ **Squarespace authentication integration** - preserves existing member accounts
- ✅ Protected member-only pages

## Authentication

This site integrates with Squarespace Member Areas to preserve all existing member accounts. 

### How It Works

1. **Login Flow:** Users click "Login" → redirected to Squarespace login → after authentication, redirected back to the Next.js site
2. **Session Detection:** The site checks for Squarespace authentication cookies to determine if a user is logged in
3. **Protected Routes:** Use the `AuthGuard` component to protect member-only content

### Important Domain Requirements

**For authentication to work properly, your Next.js site must be hosted on:**
- The same domain as Squarespace (`eaa690.org`), OR
- A subdomain (`app.eaa690.org`, `members.eaa690.org`, etc.)

Cookies are domain-specific, so if you host on a different domain, authentication won't work automatically.

### Usage Example

```tsx
import AuthGuard from '@/components/AuthGuard'

export default function MembersPage() {
  return (
    <AuthGuard requireAuth={true}>
      <div>Protected content here</div>
    </AuthGuard>
  )
}
```

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
EAA690/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── login/             # Login page (redirects to Squarespace)
│   ├── members/           # Example protected members page
│   ├── chapter/           # Chapter section pages
│   ├── programs/          # Programs section pages
│   ├── contact/           # Contact page
│   ├── calendar/          # Calendar/Events page
│   └── news/              # News page
├── components/            # React components
│   ├── Navigation.tsx     # Main navigation component
│   ├── Footer.tsx         # Footer component
│   └── AuthGuard.tsx     # Authentication guard for protected routes
├── lib/                   # Utility functions
│   └── auth.ts           # Squarespace authentication helpers
├── public/                # Static assets
│   └── logo.png          # Site logo
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

### Authentication

This site uses **BetterAuth** for authentication with the following features:
- Email/password authentication
- Email verification
- Two-factor authentication (MFA/TOTP)
- Admin role management
- Session management

#### Creating an Admin Account

**Option 1: Using the Admin Setup Page (Development Only)**
1. Navigate to `/admin/setup` in your browser
2. Fill in the admin account details
3. Click "Create Admin Account"
4. **Important:** Remove or protect this page in production!

**Option 2: Using the Script**
```bash
# Install tsx if not already installed
npm install -D tsx

# Create admin account
npx tsx scripts/create-admin.ts admin@eaa690.org password123 "Admin User"
```

#### Admin Features

- Use `AdminGuard` component to protect admin-only pages
- Use `useIsAdmin()` hook to check admin status in components
- Admin users have access to user management and site administration

See `BETTERAUTH_SETUP.md` for detailed setup instructions.

## Deployment

This project is ready to deploy on:
- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://netlify.com)
- Any Node.js hosting platform

### Database Setup

BetterAuth requires a PostgreSQL database. See `BETTERAUTH_SETUP.md` for:
- Database setup options (Vercel Postgres, Supabase, etc.)
- Environment variable configuration
- Database migration instructions

## License

This project is for EAA 690 chapter use.
