import { NextResponse } from "next/server";

export function middleware(req) {
  const user = req.cookies.get("user")?.value;
  console.log(user);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
