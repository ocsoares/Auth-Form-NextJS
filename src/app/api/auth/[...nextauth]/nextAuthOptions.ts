import { ILoginResponse } from "@/app/auth/interfaces/ILoginResponse";
import { loginUserService } from "@/app/auth/login/services/loginUserService";
import { ILoginData } from "@/app/auth/login/types/ILoginData";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const nextAuthOptions: NextAuthOptions = {
  providers: [
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

        if (response.data) {
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
      const { data } = token as ILoginResponse;

      session.user = {
        user: data!.user,
        jwt: data!.jwt,
      };

      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
};
