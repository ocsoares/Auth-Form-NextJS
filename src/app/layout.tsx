import { PropsWithChildren } from "react";
import { Metadata } from "next";
import { CssBaseline } from "@mui/material";
import { AppThemeProvider } from "@/shared/providers/AppThemeProvider";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AuthProvider } from "@/shared/providers/AuthProvider";
import { Copyright } from "@/shared/components/Copyright";

export const metadata: Metadata = {
  title: "Auth Form",
  description: "App auth form",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <body style={{ position: "relative", minHeight: "97vh" }}>
        <AuthProvider>
          <AppThemeProvider>
            <CssBaseline />
            {children}
            <Copyright />
          </AppThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
