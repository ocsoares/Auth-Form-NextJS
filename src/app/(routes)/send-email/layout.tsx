import { NavBar } from "@/shared/components/NavBar";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Send email",
  description: "Página para efetuar envio de emails",
};

export default function SendEmailLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <NavBar>{children}</NavBar>
    </div>
  );
}
