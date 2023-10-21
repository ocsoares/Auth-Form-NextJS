import { loginUserService } from "@/app/auth/login/services/loginUserService";
import { ILoginData } from "@/app/auth/login/types/ILoginData";
import { ISessionUserJWT } from "@/app/auth/types/ISessionUserJWT";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

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
      },
      // Arrumar depois esse "Promise<any>" !!!
      // -----------------------------------------
      // TALVEZ em "next-auth.d.ts" usar:
      // declare module "next-auth" {
      //   interface User {
      //     user: IUser;
      //     jwt: string;
      //   }

      //   interface Session {
      //     user: User;
      //   }
      // }
      // ou algo do tipo Arruma esse problema !!!
      async authorize(credentials): Promise<any> {
        const response = await loginUserService(<ILoginData>{
          email: credentials?.email,
          password: credentials?.password,
        });

        if (response.statusCode !== 401) {
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
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as ISessionUserJWT;

      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
};
