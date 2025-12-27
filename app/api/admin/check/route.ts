import { NextRequest, NextResponse } from 'next/server'
import { Pool } from 'pg'

/**
 * Diagnostic route to check if admin account exists
 * This is a temporary route for debugging - remove in production
 */
export async function GET(request: NextRequest) {
  let pool: Pool | null = null
  
  try {
    // Check if DATABASE_URL is set
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: 'DATABASE_URL environment variable is not set' },
        { status: 500 }
      )
    }

    // Get database connection
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_URL?.includes("localhost") 
        ? false 
        : { rejectUnauthorized: false },
    })

    // Get email from query params
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email') || 'falonya@gmail.com'

    // Check user table structure
    const columnCheck = await pool.query(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'user' 
      AND table_schema = 'public'
    `)
    
    // Query user by email
    const userResult = await pool.query(
      'SELECT * FROM "user" WHERE email = $1',
      [email.toLowerCase()]
    )
    
    // Check admin table if it exists
    let adminCheck = null
    try {
      const adminTableCheck = await pool.query(`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'admin'
      `)
      
      if (adminTableCheck.rows.length > 0 && userResult.rows.length > 0) {
        const adminResult = await pool.query(
          'SELECT * FROM admin WHERE user_id = $1',
          [userResult.rows[0].id]
        )
        adminCheck = adminResult.rows
      }
    } catch (e) {
      // Admin table might not exist
    }
    
    // Get all users (limited to 10 for privacy)
    const allUsersResult = await pool.query(
      'SELECT id, email, name, "emailVerified", "email_verified", role, created_at FROM "user" ORDER BY created_at DESC LIMIT 10'
    )

    return NextResponse.json({
      success: true,
      email: email.toLowerCase(),
      userFound: userResult.rows.length > 0,
      user: userResult.rows[0] || null,
      isAdmin: adminCheck && adminCheck.length > 0,
      adminRecord: adminCheck || null,
      userTableColumns: columnCheck.rows.map(r => r.column_name),
      recentUsers: allUsersResult.rows,
    })
  } catch (error) {
    console.error('Database check error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorCode = (error as any)?.code
    const errorDetails = {
      message: errorMessage,
      code: errorCode,
      hasDatabaseUrl: !!process.env.DATABASE_URL,
      databaseUrlPrefix: process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 50) + '...' : 'Not set',
    }
    
    // Log full error for debugging
    console.error('Full error details:', {
      error,
      errorMessage,
      errorCode,
      stack: error instanceof Error ? error.stack : undefined,
    })
    
    return NextResponse.json(
      { 
        error: 'Failed to check database',
        details: errorMessage,
        errorCode: errorCode,
        ...(process.env.NODE_ENV === 'development' && errorDetails),
      },
      { status: 500 }
    )
  } finally {
    if (pool) {
      await pool.end().catch(console.error)
    }
  }
}

