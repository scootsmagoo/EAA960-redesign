# Finding Your Supabase Connection String

The connection string might be in a different section. Here's where to look:

## Option 1: Look for "Connection string" section
- In the Database settings page, scroll up or down
- Look for a section titled **"Connection string"** or **"Connection info"**
- It might be above the "Connection pooling configuration" section
- Click the **"URI"** tab if you see tabs

## Option 2: Check the Connection Pooling section
- In the "Connection pooling configuration" section you see
- There might be a link or button to show connection details
- Look for "Connection string" or "Show connection string"

## Option 3: Get it from Project Settings → API
- Go to **Settings → API** (instead of Database)
- Look for **"Connection string"** or **"Database URL"**
- Sometimes it's shown there

## Option 4: Construct it manually
If you can find your project reference ID, you can construct it:

1. **Find your Project Reference ID**:
   - Look at your Supabase project URL: `https://supabase.com/dashboard/project/[PROJECT-REF]`
   - Or check Settings → General → Reference ID

2. **Get your database password** (you can see "Reset database password" button)

3. **The format is**:
   ```
   postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres
   ```

   Example:
   ```
   postgresql://postgres.abcdefghijklmnop:MyPassword123@aws-0-us-east-1.pooler.supabase.com:6543/postgres
   ```

## Quick Check:
- Look at the top of the Database settings page
- Or try Settings → API page
- The connection string section is usually prominently displayed

