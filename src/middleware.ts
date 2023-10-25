import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req: NextRequestWithAuth) {
    // Only "getToken" worked !
    const session = await getToken({ req });

    const urlStartsWithAuthLogin =
      req.nextUrl.pathname.startsWith("/auth/login");

    const urlStartsWithAuthSignUp =
      req.nextUrl.pathname.startsWith("/auth/signup");

    if ((urlStartsWithAuthLogin || urlStartsWithAuthSignUp) && session) {
      return NextResponse.redirect(new URL("/send-email", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ req, token: session }) => {
        const urlStartsWithSendEmail =
          req.nextUrl.pathname.startsWith("/send-email");

        if (urlStartsWithSendEmail && !session) {
          return false;
        }

        return true;
      },
    },
  },
);

export const config = {
  matcher: ["/auth/login", "/auth/signup", "/send-email"],
};
