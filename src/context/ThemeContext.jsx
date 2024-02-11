import { createContext, useEffect, useState } from 'react';

/**
 * 
  Steps to implement dark mode in a React app using Tailwind CSS: 

  1. Use Context API to store the theme: The React Context API is a great way to store global state like the current theme. This allows any component in your application to easily access and update the theme.

  2. Persist the theme in local storage: By storing the current theme in local storage, you can ensure that the user's theme preference is remembered across page reloads and sessions.

  3. Update the dark class on the HTML element: When using Tailwind CSS, you can enable dark mode styles by adding a dark class to a parent element (usually the <html> tag). You can add or remove this class when the theme changes to enable or disable dark mode.

  4. Use the dark: variant in your Tailwind CSS classes: With the dark class added to your HTML element, any styles prefixed with dark: will be applied when dark mode is enabled.
*/

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
