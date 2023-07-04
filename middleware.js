import { NextResponse } from "next/server";

export function middleware(req) {
  const user = JSON.parse(req.cookies.get("user")?.value);

  const jwt = user.accessToken;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
