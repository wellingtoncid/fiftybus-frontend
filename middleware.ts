import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value || request.headers.get("authorization")

  const isAuth = Boolean(token)
  const isDashboard = request.nextUrl.pathname.startsWith("/dashboard")
  const isLoginPage = request.nextUrl.pathname === "/login"

  if (isDashboard && !isAuth) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if (isLoginPage && isAuth) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

// Aplica só em rotas específicas
export const config = {
  matcher: ["/dashboard/:path*", "/login"],
}
