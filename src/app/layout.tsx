import { PropsWithChildren } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth Form",
  description: "App auth form",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <h1>Root Layout aplicado !</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
