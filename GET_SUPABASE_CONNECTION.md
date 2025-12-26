# How to Get Your Supabase Database Connection String

## You have a Supabase project! Now get the DATABASE_URL:

1. **Go to your Supabase Dashboard**: https://supabase.com/dashboard

2. **Select your project** (the one with that API key)

3. **Go to Project Settings**:
   - Click the **gear icon** (⚙️) in the left sidebar
   - Or go to: Settings → Database

4. **Find the Connection String**:
   - Scroll down to the **"Connection string"** section
   - You'll see tabs: "URI", "JDBC", "Golang", etc.
   - Click the **"URI"** tab

5. **Copy the Connection String**:
   - It will look like this:
     ```
     postgresql://postgres.xxxxx:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres
     ```
   - **Important**: You need to replace `[YOUR-PASSWORD]` with your actual database password
   - This is the password you set when creating the project (NOT your Supabase account password)

6. **If you forgot your database password**:
   - In the same Database settings page
   - Look for "Database password" section
   - Click "Reset database password" if needed
   - Save the new password!

7. **Update your `.env.local` file**:
   - Replace the `DATABASE_URL` line with your complete connection string
   - Make sure the password is included (replace `[YOUR-PASSWORD]`)

## Example:

If your connection string shows:
```
postgresql://postgres.abcdefghijklmnop:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres
```

And your database password is `MySecurePass123`, then your `.env.local` should have:
```
DATABASE_URL=postgresql://postgres.abcdefghijklmnop:MySecurePass123@aws-0-us-east-1.pooler.supabase.com:6543/postgres
```

## Quick Link:

If you're already logged in, go directly to:
**Settings → Database → Connection string → URI tab**

