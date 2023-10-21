import { PropsWithChildren } from "react";
import { Metadata } from "next";
import { CssBaseline } from "@mui/material";
import { AppThemeProvider } from "@/shared/providers/AppThemeProvider";
import { AuthProvider } from "@/shared/providers/AuthProvider";
import { Copyright } from "@/shared/components/Copyright";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const metadata: Metadata = {
  title: "Auth Form",
  description: "App auth form",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon-180x180.png",
    },
  ],
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
