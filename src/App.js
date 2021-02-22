// Styling
import { GlobalStyle, ThemeButton } from "./styles";
import React, { useState } from "react";

// Components
import CookieList from "./components/ProductList";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";


const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme,setCurrentTheme]= useState("light");

  const toggleCurrentTheme = () => {
    if (currentTheme==="light") return setCurrentTheme("dark");
    else return setCurrentTheme("light");
  }
  return (
    <ThemeProvider theme={theme.currentTheme}>
      <GlobalStyle />
      <ThemeButton onClick={toggleCurrentTheme} >
        Dark Theme
      </ThemeButton>
      
      <Home />
      <CookieList />
    </ThemeProvider>
  );
}

export default App;
