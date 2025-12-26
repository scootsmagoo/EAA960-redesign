/**
 * Test BetterAuth signup to see exact error
 */
import 'dotenv/config'
import { auth } from '../lib/better-auth'

async function testSignup() {
  try {
    console.log('Testing BetterAuth signup...')
    const result = await auth.api.signUpEmail({
      body: {
        email: 'test@example.com',
        password: 'Test123!',
        name: 'Test User',
      },
    })
    
    if (result.error) {
      console.error('Error:', result.error)
    } else {
      console.log('Success:', result.data)
    }
  } catch (error) {
    console.error('Exception:', error)
    if (error instanceof Error) {
      console.error('Message:', error.message)
      console.error('Stack:', error.stack)
    }
  }
}

testSignup()

