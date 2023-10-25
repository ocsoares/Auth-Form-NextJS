import { AppBar } from "@/shared/components/AppBar";
import { PageWithAuth } from "@/shared/components/auth/PageWithAuth";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Send email",
  description: "Página para efetuar envio de emails",
};

export default function SendEmailLayout({ children }: PropsWithChildren) {
  return (
    <PageWithAuth>
      <AppBar>{children}</AppBar>
    </PageWithAuth>
  );
}
