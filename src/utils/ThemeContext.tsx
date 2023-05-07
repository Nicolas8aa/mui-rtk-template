import React, { createContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getDesignTokens } from "./theme";
import { PaletteMode } from "@mui/material";

type ThemeContextType = {
  toggleColorMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  toggleColorMode: () => {},
});

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
