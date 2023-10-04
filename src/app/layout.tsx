import { PropsWithChildren } from "react";
import { Metadata } from "next";
import { CssBaseline, Typography } from "@mui/material";
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
        <body style={{ position: "relative" }}>
          {children}
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              marginBottom: "40px",
            }}
          >
            Copyright © {new Date().getFullYear()} Cauã Soares.
          </Typography>
        </body>
      </AppThemeProvider>
    </html>
  );
}
