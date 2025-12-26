/**
 * Initialize BetterAuth Database Schema
 * 
 * This script creates all necessary database tables for BetterAuth
 * 
 * Usage:
 *   npx tsx scripts/init-db.ts
 */

import { config } from 'dotenv'
import { Pool } from 'pg'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
config({ path: path.join(__dirname, '../.env.local') })

async function initDatabase() {
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL environment variable is not set')
    console.error('Make sure .env.local exists in the project root')
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

    console.log('📄 Reading SQL schema file...')
    const sqlFile = path.join(__dirname, 'drop-and-recreate-tables.sql')
    const sql = fs.readFileSync(sqlFile, 'utf-8')

    console.log('🔨 Creating database tables...')
    await pool.query(sql)
    console.log('✅ Database tables created successfully!')
    
    console.log('\n🎉 Database initialization complete!')
    console.log('You can now try creating an admin account at /admin/setup')
    
  } catch (error) {
    console.error('❌ Failed to initialize database:', error)
    if (error instanceof Error) {
      console.error('Error message:', error.message)
    }
    process.exit(1)
  } finally {
    await pool.end()
  }
}

initDatabase()
