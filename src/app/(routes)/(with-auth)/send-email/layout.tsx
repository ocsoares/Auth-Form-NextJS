import { AppBar } from "@/shared/components/AppBar";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Send email",
  description: "Página para efetuar envio de emails",
};

export default function SendEmailLayout({ children }: PropsWithChildren) {
  return <AppBar>{children}</AppBar>;
}
