import { loginUserService } from "@/app/auth/login/services/loginUserService";
import { ISessionUserJWT } from "@/app/auth/types/ISessionUserJWT";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { TOO_MANY_REQUEST_ERROR_MESSAGE } from "@/shared/constants/tooManyRequestsErrorMessage";
import { generateUserGoogleTokenService } from "@/app/auth/services/generateUserGoogleTokenService";
import { generateUserGitHubTokenService } from "@/app/auth/services/generateUserGitHubTokenService";
import { ILoginRequestBody } from "@/app/auth/login/types/ILoginRequestBody";

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
        remember: { label: "Remember me", type: "checkbox" },
      },

      async authorize(credentials): Promise<any> {
        const response = await loginUserService(<ILoginRequestBody>{
          email: credentials?.email,
          password: credentials?.password,
          remember: credentials?.remember === "true", // Next Auth forces this to be string, but it must be boolean !
        });

        if (response.statusCode === 429) {
          throw new Error(TOO_MANY_REQUEST_ERROR_MESSAGE);
        }

        if (response.email) {
          return response;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },

  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.provider === "google") {
        const jwt = await generateUserGoogleTokenService(
          account.id_token as string,
        );

        token.jwt = jwt;
      }

      if (account?.provider === "github") {
        const jwt = await generateUserGitHubTokenService(
          account.access_token as string,
        );

        token.jwt = jwt;
      }

      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as ISessionUserJWT;

      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
};
