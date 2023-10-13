import { BlocksPageIfLoggedIn } from "@/shared/components/auth/BlocksPageIfLoggedIn";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Login",
  description: "Login form",
};

export default function LoginLayout({ children }: PropsWithChildren) {
  return <BlocksPageIfLoggedIn>{children}</BlocksPageIfLoggedIn>;
}
