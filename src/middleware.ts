import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib/api/session";
import { verifySession } from "./lib/api/session";

const protectedRoutes = ["/admin"];
const excludedRoutes = ["/sign-in", "/sign-up"];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isExcludedRoute = excludedRoutes.includes(path);

  await updateSession(request);
  const session = await verifySession();

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL("/sign-in", request.nextUrl));
  }

  if (isExcludedRoute && session) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
