import { NextRequest, NextResponse } from 'next/server'
import { Pool } from 'pg'

/**
 * Simple database connection test endpoint
 * This will help us diagnose the exact connection issue
 */
export async function GET(request: NextRequest) {
  const dbUrl = process.env.DATABASE_URL
  
  // Show connection string info (without exposing password)
  const urlInfo = dbUrl 
    ? {
        hasUrl: true,
        prefix: dbUrl.substring(0, 50) + '...',
        length: dbUrl.length,
        includesPooler: dbUrl.includes('pooler'),
        includesPostgres: dbUrl.includes('postgres'),
        port: dbUrl.match(/:\d+\//)?.[0] || 'not found',
      }
    : { hasUrl: false }
  
  if (!dbUrl) {
    return NextResponse.json({
      error: 'DATABASE_URL not set',
      urlInfo,
    }, { status: 500 })
  }
  
  let pool: Pool | null = null
  
  try {
    // Try both pooler and direct connection formats
    // Sometimes Supabase pooler has issues, so let's try direct connection
    let connectionString = dbUrl
    
    // If using pooler and it fails, try direct connection (port 5432)
    if (dbUrl.includes('pooler') && dbUrl.includes(':6543/')) {
      // Try direct connection as fallback
      connectionString = dbUrl.replace(':6543/', ':5432/').replace('.pooler', '')
    }
    
    // Create connection pool
    pool = new Pool({
      connectionString: connectionString,
      ssl: connectionString.includes("localhost") 
        ? false 
        : { rejectUnauthorized: false },
      connectionTimeoutMillis: 10000,
    })
    
    // Test basic connection
    const result = await pool.query('SELECT NOW() as current_time, version() as pg_version')
    
    // Try to check if user table exists
    let userTableExists = false
    let tableError = null
    try {
      const tableCheck = await pool.query(`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = 'user'
        )
      `)
      userTableExists = tableCheck.rows[0]?.exists || false
    } catch (e) {
      tableError = e instanceof Error ? e.message : 'Unknown error'
    }
    
    return NextResponse.json({
      success: true,
      message: 'Database connection successful!',
      urlInfo,
      database: {
        currentTime: result.rows[0]?.current_time,
        pgVersion: result.rows[0]?.pg_version?.substring(0, 50),
        userTableExists,
        tableError,
      },
    })
  } catch (error) {
    const errorDetails = {
      message: error instanceof Error ? error.message : 'Unknown error',
      code: (error as any)?.code,
      detail: (error as any)?.detail,
      hint: (error as any)?.hint,
      name: error instanceof Error ? error.name : undefined,
    }
    
    console.error('Database connection test failed:', errorDetails)
    
    // If pooler failed, try direct connection
    if (dbUrl.includes('pooler') && dbUrl.includes(':6543/')) {
      try {
        const directConnectionString = dbUrl.replace(':6543/', ':5432/').replace('.pooler', '')
        console.log('Trying direct connection as fallback...')
        
        const directPool = new Pool({
          connectionString: directConnectionString,
          ssl: { rejectUnauthorized: false },
          connectionTimeoutMillis: 10000,
        })
        
        const directResult = await directPool.query('SELECT NOW() as current_time')
        await directPool.end()
        
        return NextResponse.json({
          success: true,
          message: 'Direct connection works! Pooler connection failed.',
          urlInfo: {
            ...urlInfo,
            triedDirectConnection: true,
            directConnectionPrefix: directConnectionString.substring(0, 50) + '...',
          },
          database: {
            currentTime: directResult.rows[0]?.current_time,
          },
          note: 'Consider using direct connection (port 5432) instead of pooler (port 6543)',
        })
      } catch (directError) {
        return NextResponse.json({
          success: false,
          error: 'Both pooler and direct connections failed',
          urlInfo,
          errorDetails,
          directConnectionError: {
            message: directError instanceof Error ? directError.message : 'Unknown error',
            code: (directError as any)?.code,
          },
          suggestion: 'Verify the password in Supabase matches the password in the connection string. Reset password in Supabase and update Vercel DATABASE_URL.',
        }, { status: 500 })
      }
    }
    
    return NextResponse.json({
      success: false,
      error: 'Database connection failed',
      urlInfo,
      errorDetails,
      suggestion: 'Verify the password in Supabase matches the password in the connection string. Reset password in Supabase and update Vercel DATABASE_URL.',
    }, { status: 500 })
  } finally {
    if (pool) {
      await pool.end().catch(console.error)
    }
  }
}

