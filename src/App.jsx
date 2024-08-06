import React, { useEffect } from "react";
import Header from "./components/header/Header";
import "./App.css";
import { Style } from "./utils/Constants";
import { useAppState } from "./state/AppStateContext";
// import useCurrentComponent from "./hooks/useCurrentComponent";
import Home from "./components/home/Home";
import AboutMe from "./components/aboutMe/AboutMe";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveOut,
  Sticky,
} from "react-scroll-motion";
import AboutMeAnimated from "./components/aboutMeAnimated/AboutMeAnimated";

export default function App() {
  const { theme, toHome, toAboutMe } = useAppState();

  // const current = useCurrentComponent();

  // If theme changes, change CSS variables within App.css
  useEffect(() => {
    const keys = [
      "backgroundColor",
      "textColor",
      "textColorOut",
      "hireMeHover",
      "colorProgLangBrand",
      "codeBoxBackground",
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
      if (scrollY <= windowHeight / 2) {
        toHome(false);
        console.log('HOME')
      } else if (scrollY <= windowHeight) {
        toAboutMe(false);
        console.log('ABOUT');
      }
    };
    window.addEventListener('scroll', updateMenuActive);
    return () => window.removeEventListener('scroll', updateMenuActive);
  }, [toHome, toAboutMe]);

  return (
    <>
      <Header />
      <ScrollContainer snap="proximity" >
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <Home />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <AboutMe />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <AboutMeAnimated />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
}
