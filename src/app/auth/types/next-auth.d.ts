import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      firstName: string;
      lastName: string;
      email: string;
      jwt: string;
    } & DefaultSession["user"];
  }
}
