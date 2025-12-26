# Database Setup Guide

BetterAuth requires a PostgreSQL database. Here are the easiest ways to set one up:

## Option 1: Supabase (Recommended - Free & Easy)

1. **Sign up for Supabase**
   - Go to https://supabase.com
   - Click "Start your project" and sign up (free)

2. **Create a new project**
   - Click "New Project"
   - Choose an organization (or create one)
   - Enter project details:
     - Name: `eaa690` (or any name)
     - Database Password: **Save this password!** You'll need it
     - Region: Choose closest to you
   - Click "Create new project"
   - Wait 2-3 minutes for setup

3. **Get your connection string**
   - Go to Project Settings (gear icon) → Database
   - Scroll to "Connection string"
   - Select "URI" tab
   - Copy the connection string
   - Replace `[YOUR-PASSWORD]` with the password you saved

4. **Add to .env.local**
   ```bash
   DATABASE_URL=postgresql://postgres.xxxxx:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres
   ```

## Option 2: Local PostgreSQL

If you have PostgreSQL installed locally:

1. **Create a database**
   ```bash
   createdb eaa690
   ```

2. **Add to .env.local**
   ```bash
   DATABASE_URL=postgresql://postgres:password@localhost:5432/eaa690
   ```
   (Replace `postgres` and `password` with your PostgreSQL username and password)

## Option 3: Vercel Postgres (If deploying to Vercel)

1. In your Vercel project dashboard
2. Go to Storage → Create Database → Postgres
3. Copy the connection string
4. Add to `.env.local` for local development
5. Add to Vercel environment variables for production

## After Setting Up Database

1. **Create `.env.local` file** in the project root:
   ```bash
   cp .env.local.example .env.local
   ```

2. **Add your DATABASE_URL** to `.env.local`

3. **Run database migrations** (BetterAuth will auto-create tables on first run, but you can also run):
   ```bash
   # Install Prisma CLI if needed
   npm install -D prisma
   
   # Generate Prisma client
   npx prisma generate
   
   # Push schema (BetterAuth will auto-create tables, but this ensures they're correct)
   npx prisma db push
   ```

4. **Restart your dev server**
   ```bash
   npm run dev
   ```

5. **Try creating admin account again** at `/admin/setup`

## Quick Test

Once your database is set up, you can test the connection:

```bash
# Using psql (if installed)
psql $DATABASE_URL -c "SELECT 1"

# Or test via Node.js
node -e "require('pg').Pool({connectionString: process.env.DATABASE_URL}).query('SELECT 1', (err, res) => {console.log(err || 'Connected!'); process.exit(err ? 1 : 0)})"
```

## Troubleshooting

- **"Connection refused"**: Check your DATABASE_URL and ensure the database is running/accessible
- **"Authentication failed"**: Double-check your password in the connection string
- **"Database does not exist"**: Create the database first (for local PostgreSQL: `createdb eaa690`)
- **SSL errors**: Add `?sslmode=require` to your connection string for cloud databases

