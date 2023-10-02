import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Registration",
  description: "Registration form",
};

export default function RegistrationLayout({ children }: PropsWithChildren) {
  return <section>{children}</section>;
}
