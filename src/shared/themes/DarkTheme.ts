import { createTheme } from "@mui/material/styles";
import { purple, teal, deepPurple, grey } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#3D1870",
      dark: "#250D46",
      light: purple["500"],
      contrastText: grey["500"],
    },
    secondary: {
      main: grey["300"],
      dark: teal["800"],
      light: teal["500"],
      contrastText: deepPurple["200"],
    },
    background: {
      default: "#1F1032",
      paper: "#2C203B",
    },
  },
  typography: {
    h3: {
      color: "#3D2670",
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          backgroundColor: "#004A24",
        },
      },
    },
  },
});
