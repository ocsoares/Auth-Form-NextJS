"use client";

import { ThemeProvider } from "@mui/material/styles";
import { PropsWithChildren } from "react";
import { DarkTheme } from "../themes/DarkTheme";

export function AppThemeProvider({ children }: PropsWithChildren) {
  return <ThemeProvider theme={DarkTheme}>{children}</ThemeProvider>;
}
