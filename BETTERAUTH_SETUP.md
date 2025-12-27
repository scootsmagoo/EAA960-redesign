# BetterAuth Setup Guide

This guide will help you complete the BetterAuth setup for EAA 690.

## Prerequisites

1. **Database**: You'll need a PostgreSQL database. Options include:
   - **Vercel Postgres** (recommended if deploying to Vercel)
   - **Supabase** (free tier available)
   - **Railway** (free tier available)
   - **Neon** (free tier available)
   - Local PostgreSQL instance for development

## Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```env
# Database Configuration
DATABASE_URL=postgresql://user:password@host:5432/database_name

# BetterAuth Configuration
BETTER_AUTH_SECRET=your-secret-key-here-generate-with-openssl-rand-base64-32
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

# For production, update these URLs:
# BETTER_AUTH_SECRET=your-production-secret-key
# BETTER_AUTH_URL=https://eaa690.org
# NEXT_PUBLIC_BETTER_AUTH_URL=https://eaa690.org
```

## Database Setup

BetterAuth will automatically create the necessary tables when you first run the application. The tables include:
- `user` - User accounts
- `session` - User sessions
- `account` - OAuth accounts (if using OAuth providers)
- `verification` - Email verification tokens
- `two_factor` - MFA settings

## Running Database Migrations

BetterAuth uses Prisma under the hood. To initialize the database schema:

1. Install Prisma CLI (if not already installed):
   ```bash
   npm install -D prisma
   ```

2. Generate Prisma client:
   ```bash
   npx prisma generate
   ```

3. Push the schema to your database:
   ```bash
   npx prisma db push
   ```

Alternatively, BetterAuth will auto-create tables on first run if the database is empty.

## Email Configuration (Optional but Recommended)

For email verification and password reset, configure an email provider. BetterAuth supports:

- **SMTP** (Gmail, SendGrid, etc.)
- **Resend** (recommended, easy setup)
- **SendGrid**
- **AWS SES**

Example SMTP configuration in `lib/better-auth.ts`:

```typescript
email: {
  sendVerificationEmail: async ({ user, url }) => {
    // Use your email service here
  },
  sendPasswordResetEmail: async ({ user, url }) => {
    // Use your email service here
  },
}
```

## Features Enabled

✅ Email/Password authentication
✅ Email verification (required for new accounts)
✅ Two-Factor Authentication (MFA/TOTP)
✅ Session management (7-day expiration)
✅ Password reset (when email is configured)

## Testing the Setup

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/signup` to create a test account
3. Check your email for verification (if email is configured)
4. Navigate to `/login` to sign in
5. Access `/members` to test protected routes

## Migration from Squarespace Auth

To migrate existing Squarespace members:

1. Export member data from Squarespace
2. Import into your PostgreSQL database using the `user` table schema
3. Users will need to set new passwords (use password reset flow)

## Production Deployment

### Vercel

1. Add your database connection string to Vercel environment variables (`DATABASE_URL`)
2. **REQUIRED:** Generate and set `BETTER_AUTH_SECRET`:
   ```bash
   openssl rand -base64 32
   ```
   Add this to Vercel environment variables
3. Optionally set `BETTER_AUTH_URL` and `NEXT_PUBLIC_BETTER_AUTH_URL` to your production domain (will auto-detect if not set)
4. Deploy!

### Database Options on Vercel

- **Vercel Postgres**: Built-in, easy integration
- **Supabase**: Free tier, great for small projects
- **Neon**: Serverless PostgreSQL, free tier available

## Troubleshooting

### "DATABASE_URL is required in production"
- Make sure you've set the `DATABASE_URL` environment variable in your hosting platform

### "Cannot connect to database"
- Verify your database connection string
- Check if your database allows connections from your hosting IP
- For local development, ensure PostgreSQL is running

### Email verification not working
- Email configuration is optional but recommended
- Users can still sign up without email verification, but it's enabled by default
- Configure an email provider to enable verification emails

## Creating an Admin Account

After setting up your database, you'll need to create an admin account for testing and administration.

### Option 1: Admin Setup Page (Recommended for First Setup)

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/admin/setup` in your browser

3. Fill in the admin account details:
   - Name: Your full name
   - Email: Your admin email (e.g., admin@eaa690.org)
   - Password: A secure password (at least 8 characters)

4. Click "Create Admin Account"

5. **Important:** After creating the first admin account, you should:
   - Remove the `/admin/setup` page, OR
   - Protect it so only existing admins can access it

### Option 2: Command Line Script

```bash
# Create admin account via script
npx tsx scripts/create-admin.ts admin@eaa690.org your-password "Admin Name"
```

### Using Admin Features

Once you have an admin account:

1. **Protect Admin Pages**: Wrap admin pages with `AdminGuard`:
   ```tsx
   import AdminGuard from '@/components/AdminGuard'
   
   export default function AdminPage() {
     return (
       <AdminGuard>
         <div>Admin content here</div>
       </AdminGuard>
     )
   }
   ```

2. **Check Admin Status**: Use the `useIsAdmin()` hook:
   ```tsx
   import { useIsAdmin } from '@/lib/auth-utils'
   
   function MyComponent() {
     const isAdmin = useIsAdmin()
     // ...
   }
   ```

3. **Access Admin Dashboard**: Navigate to `/admin` (protected by AdminGuard)

## Next Steps

- [ ] Set up a PostgreSQL database
- [ ] Configure environment variables
- [ ] Run database migrations
- [ ] Create first admin account
- [ ] Test signup/login flow
- [ ] Configure email provider (optional)
- [ ] Set up MFA for admin accounts
- [ ] Migrate existing Squarespace members (if needed)

