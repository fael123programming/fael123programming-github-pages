import React, { createContext, useState, useContext } from "react";
import { Values, Lang } from "../utils/Constants";

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [state, setState] = useState({
    lang: Values.ENGLISH,
    theme: Values.DARK,
    menuOpen: false,
    dict: Lang[Values.ENGLISH],
    menuActive: Values.HOME,
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

  const isDark = () => state.theme === Values.DARK;

  const atHome = () => state.menuActive === Values.HOME;

  const atAboutMe = () => state.menuActive === Values.ABOUT_ME;

  const atProjects = () => state.menuActive === Values.PROJECTS;

  const toHome = (scroll = true) => {
    setState((prevState) => ({
      ...prevState,
      menuActive: Values.HOME,
    }));
    if (scroll) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toAboutMe = (scroll = true) => {
    setState((prevState) => ({
      ...prevState,
      menuActive: Values.ABOUT_ME,
    }));
    if (scroll) {
      window.scrollTo({
        top: window.innerHeight * 1.5,
        behavior: "smooth",
      });
    }
  };

  const toProjects = (scroll = true) => {
    setState((prevState) => ({
      ...prevState,
      menuActive: Values.PROJECTS,
    }));
    if (scroll) {
      window.scrollTo({
        top: window.innerHeight * 3.5,
        behavior: "smooth",
      });
    }
  };

  return (
    <AppStateContext.Provider
      value={{
        ...state,
        switchLang,
        switchTheme,
        toggleMenu,
        isDark,
        atHome,
        atAboutMe,
        atProjects,
        toHome,
        toAboutMe,
        toProjects,
      }}
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
