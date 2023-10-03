import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Sign up form",
};

export default function SignUpLayout({ children }: PropsWithChildren) {
  return <section>{children}</section>;
}
