import { createTheme, PaletteMode, ThemeOptions } from "@mui/material";
import { deepOrange, grey, indigo } from "@mui/material/colors";

const mainColor = indigo[500];
//@ts-ignore
const firaSansFont = ["Fira Sans", "sans-serif"].join(",");
const nunitoFont = ["Nunito", "sans-serif"].join(",");

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
    fontFamily: firaSansFont,
    h1: {
      fontFamily: nunitoFont,
    },
    h2: {
      fontFamily: nunitoFont,
    },
    h3: {
      fontFamily: nunitoFont,
    },
    h4: {
      fontFamily: nunitoFont,
    },
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
