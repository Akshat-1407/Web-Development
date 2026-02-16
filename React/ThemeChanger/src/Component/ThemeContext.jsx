import { useContext, createContext, useState } from 'react'

const ThemeContext = createContext();


function ThemeWrapper({children}) {
  const [isDark, updateTheme] = useState(false);
  
  function toggleThemeHandler() {
    updateTheme(!isDark);
  }
  return (
    <ThemeContext.Provider value={{isDark, toggleThemeHandler}}>
      {children}
    </ThemeContext.Provider>
  )
}


export function useDarkTheme() {
  return useContext(ThemeContext);
}

export default ThemeWrapper 