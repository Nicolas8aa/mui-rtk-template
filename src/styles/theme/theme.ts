import { createTheme, PaletteMode, ThemeOptions } from "@mui/material";
import { deepOrange, grey, indigo } from "@mui/material/colors";
import { Inter } from "next/font/google";

const mainColor = indigo[500];

export const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // ? palette values for light mode
          primary: {
            main: mainColor,
            contrastText: "#fff",
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
          background: {
            default: "#fff",
            paper: "#f5f5f5",
          },
        }
      : {
          // ? palette values for dark mode
          primary: {
            main: mainColor,
            contrastText: "#fff",
          },
          divider: deepOrange[700],
          background: {
            default: grey[700],
            paper: grey[800],
          },
          text: {
            primary: "#fff",
            secondary: "#fff",
          },
        }),
    ...{
      // ? common palette values
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: "textPrimary",
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "none",
          letterSpacing: 0.5,
          fontWeight: "normal",
          textTransform: "none",
          transition:
            "box-shadow 0.3s ease-in-out borderColor 0.3s ease-in-out  color 0.3s ease-in-out",
        },
      },
    },
  },
});
