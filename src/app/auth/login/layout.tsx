import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Login",
  description: "Login form",
};

export default function LoginLayout({ children }: PropsWithChildren) {
  return <section>{children}</section>;
}
