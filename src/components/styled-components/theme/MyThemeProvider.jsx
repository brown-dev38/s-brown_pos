import { createContext, useContext } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";

const ThemeContext = createContext(theme);
export const useTheme = () => useContext(ThemeContext);

const MyThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default MyThemeProvider;
