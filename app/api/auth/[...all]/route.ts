import { auth } from "@/lib/better-auth"
import { toNextJsHandler } from "better-auth/next-js"
import { NextRequest } from "next/server"

const { GET: authGET, POST: authPOST } = toNextJsHandler(auth.handler)

// Handle OPTIONS preflight requests for CORS
export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get("origin")
  
  // Allow same-origin and Vercel preview deployments
  if (origin) {
    return new Response(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    })
  }
  
  return new Response(null, { status: 200 })
}

// Better Auth handles CORS automatically, but we ensure OPTIONS is handled
export { authGET as GET, authPOST as POST }

