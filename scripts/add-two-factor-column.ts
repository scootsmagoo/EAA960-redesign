/**
 * Add missing twoFactorEnabled column to user table
 */
import 'dotenv/config'
import { Pool } from 'pg'

async function addColumn() {
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL environment variable is not set')
    process.exit(1)
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL?.includes("localhost") 
      ? false 
      : { rejectUnauthorized: false },
  })

  try {
    console.log('📦 Connecting to database...')
    await pool.query('SELECT 1')
    console.log('✅ Connected to database')

    console.log('🔨 Adding missing columns...')
    await pool.query(`
      ALTER TABLE "user" 
      ADD COLUMN IF NOT EXISTS "twoFactorEnabled" BOOLEAN DEFAULT FALSE;
    `)
    await pool.query(`
      ALTER TABLE "user" 
      ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'user';
    `)
    await pool.query(`
      ALTER TABLE "user" 
      ADD COLUMN IF NOT EXISTS banned BOOLEAN DEFAULT FALSE;
    `)
    console.log('✅ Columns added successfully!')
    
  } catch (error) {
    console.error('❌ Failed to add column:', error)
    if (error instanceof Error) {
      console.error('Error message:', error.message)
    }
    process.exit(1)
  } finally {
    await pool.end()
  }
}

addColumn()

