import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import withAuth from "./Middleware/withAuth"

export function MainMiddleware(request: NextRequest) {
  const res = NextResponse.next()
  return res
}

export default withAuth(MainMiddleware, ["/profile", "/admin", "/editor"])

export const config = {
   matcher: [
   "/((?!api/auth|_next/static|_next/image|favicon.ico|images).*)",
   ]
}