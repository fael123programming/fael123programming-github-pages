import React, { createContext, useState, useContext } from "react";
import { Values, Lang } from "../utils/Constants";

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [state, setState] = useState({
    lang: Values.ENGLISH,
    theme: Values.DARK,
    menuOpen: false,
    dict: Lang[Values.ENGLISH]
  });

  const switchLang = () => {
    setState((prevState) => ({
      ...prevState,
      lang:
        prevState.lang === Values.ENGLISH ? Values.PORTUGUESE : Values.ENGLISH,
      dict:
        prevState.lang === Values.ENGLISH
          ? Lang[Values.PORTUGUESE]
          : Lang[Values.ENGLISH],
    }));
  };

  const switchTheme = () => {
    setState((prevState) => ({
      ...prevState,
      theme: prevState.theme === Values.DARK ? Values.LIGHT : Values.DARK,
    }));
  };

  const toggleMenu = () => {
    setState((prevState) => ({
      ...prevState,
      menuOpen: prevState.menuOpen ? false : true,
    }));
  };

  const isDark = () => {
    return state.theme === Values.DARK;
  };

  return (
    <AppStateContext.Provider
      value={{ ...state, switchLang, switchTheme, toggleMenu, isDark }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within an AppStateProvider");
  }
  return context;
};
