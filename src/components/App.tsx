import { RouterProvider } from "react-router-dom"
import { router } from "../router"
import { themes } from "./CommonStyles"
import { createContext, useContext, useState } from "react";
import AppWrapper from "./AppWrapper";
import Header from "./Header";
import Footer from "./Footer";
import ThemeSwitchButton from "./ThemeSwitchButton";
export type ThemeContextType = {};

export const ThemeContext = createContext<ThemeContextType>(themes.light);

const App = () => {
  const theme = useContext(ThemeContext);
  let [currentTheme, setTheme] = useState(theme);

  const changeTheme = () => {
    return currentTheme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
  }

  console.log('app', currentTheme)
  return (

    <ThemeContext.Provider value={currentTheme}>

      <div style={currentTheme}>
        <ThemeSwitchButton sign={currentTheme === themes.light ? 'sun' : 'moon'} isOpen={false} onClick={(e) => {
          e.preventDefault()
          changeTheme()
        }
        } />
        <RouterProvider router={router} />
      </div>

    </ThemeContext.Provider >

  )

}
export default App