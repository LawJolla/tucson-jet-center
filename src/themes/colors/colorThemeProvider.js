import neutralTheme from "./neutralTheme";
import orangeTheme from "./orangeTheme";

const themeMap = {
  neutralTheme,
  orangeTheme
};

function ThemeProvider(themeString = "neutralTheme") {
  return new themeMap[themeString]();
}

export default ThemeProvider;
