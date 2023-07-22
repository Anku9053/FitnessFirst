import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Toggle from "./Toggle";
import { useDarkMode } from "./useDarkMode";
import {BsMoonStarsFill} from "react-icons/bs"
import {BsEmojiSunglasses} from "react-icons/bs"
const Toggling = () => {
  const [theme, toggleTheme] = useDarkMode("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <div style={{position:"relative",bottom:"10px",border:"2px solid red",display: "flex", justifyContent: "flex-end",alignContent:"end",width:"20px" }}>
          
          <Toggle onToggle={toggleTheme}>Toggle theme</Toggle>
        </div>
        
     
      </div>
    </ThemeProvider>
  );
};

export default Toggling;
