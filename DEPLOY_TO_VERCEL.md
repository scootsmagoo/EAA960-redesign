# Deploy to Vercel - Quick Guide

## Option 1: Push to GitHub (Recommended - Auto-deploys)

1. **Push your code to GitHub:**
   ```bash
   git push origin main
   ```
   (You'll need to authenticate with GitHub)

2. **Vercel will automatically deploy** once the push completes (if connected to GitHub)

3. **Set Environment Variables in Vercel:**
   - Go to: https://vercel.com/dashboard
   - Select your project: `EAA690-redesign` or `eaa-960-redesign`
   - Go to **Settings** → **Environment Variables**
   - Add these variables:
     - `DATABASE_URL` = Your Supabase PostgreSQL connection string
     - `BETTER_AUTH_SECRET` = Generate using: `openssl rand -base64 32` (REQUIRED!)
     - `BETTER_AUTH_URL` = `https://eaa-960-redesign.vercel.app` (optional, will use current domain if not set)
     - `NEXT_PUBLIC_BETTER_AUTH_URL` = `https://eaa-960-redesign.vercel.app` (optional, will use current domain if not set)
   - Make sure to select **Production**, **Preview**, and **Development** environments
   - Click **Save**
   
   **Important:** `BETTER_AUTH_SECRET` is required for authentication to work. Generate a secure secret:
   ```bash
   openssl rand -base64 32
   ```

4. **Redeploy** (if needed):
   - Go to **Deployments** tab
   - Click the **⋯** menu on the latest deployment
   - Click **Redeploy**

## Option 2: Deploy via Vercel CLI

1. **Login to Vercel:**
   ```bash
   vercel login
   ```

2. **Deploy to production:**
   ```bash
   vercel --prod
   ```

3. **Set Environment Variables** (same as Option 1, step 3)

## Current Status

- ✅ Code is committed locally (commit: `27f656b`)
- ❌ Code is NOT pushed to GitHub yet
- ❌ Vercel deployment is outdated (still using old Squarespace auth)

## What Changed

The BetterAuth implementation replaces the old Squarespace authentication:
- Login now goes to `/login` instead of `https://www.eaa690.org/account/login`
- Uses BetterAuth with MFA support
- New admin functionality

Once deployed with the environment variables set, the login link will work correctly.

