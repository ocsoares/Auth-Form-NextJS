import { PropsWithChildren } from "react";
import { Metadata } from "next";
import { CssBaseline } from "@mui/material";
import { AppThemeProvider } from "@/shared/providers/AppThemeProvider";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const metadata: Metadata = {
  title: "Auth Form",
  description: "App auth form",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <AppThemeProvider>
        <CssBaseline />
        <body>{children}</body>
      </AppThemeProvider>
    </html>
  );
}
