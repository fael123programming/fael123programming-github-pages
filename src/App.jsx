import React, { useEffect } from "react";
import Header from "./components/header/Header";
import "./App.css";
import { Style } from "./utils/Constants";
import { useAppState } from "./state/AppStateContext";
import Home from "./components/home/Home";
import AboutMe from "./components/aboutMe/AboutMe";
import AboutMeAnimated from "./components/aboutMeAnimated/AboutMeAnimated";
import Projects from "./components/projects/Projects";

export default function App() {
  const { theme, toHome, toAboutMe, toProjects } = useAppState();

  useEffect(() => {
    const keys = [
      "backgroundColor",
      "textColor",
      "textColorOut",
      "hireMeHover",
      "colorProgLangBrand",
      "codeBoxBackground",
      "carouselBackground"
    ];
    const properties = {};
    for (let key of keys) {
      properties["--" + key] = Style[theme][key];
    }
    for (let key of Object.keys(properties)) {
      document.documentElement.style.setProperty(key, properties[key]);
    }
  }, [theme]);

  useEffect(() => {
    const updateMenuActive = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      if (scrollY <= windowHeight) {
        toHome(false);
      } else if (scrollY <= windowHeight * 3) {
        toAboutMe(false);
      } else {
        toProjects(false);
      }
    };
    window.addEventListener("scroll", updateMenuActive);
    return () => window.removeEventListener("scroll", updateMenuActive);
  }, [toHome, toAboutMe, toProjects]);

  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <AboutMeAnimated />
      <Projects/>
    </>
  );
}
