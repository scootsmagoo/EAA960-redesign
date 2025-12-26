# Quick Database Setup - Supabase (5 minutes)

## Step 1: Create Supabase Account & Project

1. Go to **https://supabase.com**
2. Click **"Start your project"** (or Sign Up if you don't have an account)
3. Sign up with GitHub (easiest) or email
4. Click **"New Project"**
5. Fill in:
   - **Name**: `eaa690` (or any name)
   - **Database Password**: **SAVE THIS PASSWORD!** You'll need it
   - **Region**: Choose closest to you (e.g., US East)
6. Click **"Create new project"**
7. Wait 2-3 minutes for setup

## Step 2: Get Your Connection String

1. Once project is ready, go to **Project Settings** (gear icon in left sidebar)
2. Click **"Database"** in the settings menu
3. Scroll down to **"Connection string"** section
4. Click the **"URI"** tab
5. You'll see something like:
   ```
   postgresql://postgres.xxxxx:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres
   ```
6. **Copy this entire string**

## Step 3: Create .env.local File

1. In your project root (`/Users/amfalony1/Documents/projects/EAA960/`), create a file named `.env.local`
2. Add this content (replace with your actual connection string):

```env
# Database Configuration
DATABASE_URL=postgresql://postgres.xxxxx:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres

# BetterAuth Configuration  
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
```

**Important**: Replace `[YOUR-PASSWORD]` with the password you saved in Step 1!

## Step 4: Test It

1. Restart your dev server:
   ```bash
   npm run dev
   ```

2. Go to `/admin/setup` and try creating your admin account

3. BetterAuth will automatically create all the necessary tables on first use!

## That's It! 🎉

Your database is now set up. BetterAuth will create all the tables automatically when you first use it.

---

## Alternative: Local PostgreSQL (if you prefer)

If you have PostgreSQL installed locally:

```bash
# Create database
createdb eaa690

# Add to .env.local
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/eaa690
```

