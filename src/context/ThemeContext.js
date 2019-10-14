import { createContext } from 'react';

const themes = {
  light: {
    themeName: ''
  },
  dark: {
    themeName: 'dark-theme'
  },
  toggleTheme: () => {}
};

const ThemeContext = createContext({ theme: themes.light.themeName, toggleTheme: themes.toggleTheme });

const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

export {
  ThemeProvider,
  ThemeConsumer,
  themes
};
