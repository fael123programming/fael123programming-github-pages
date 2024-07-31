import React, { useState, useEffect } from "react";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import "./App.css";
import { Style } from "./utils/Constants";
import { useAppState } from "./state/AppStateContext";

export default function App() {
  const { theme } = useAppState();
  const [scrollDown, setScrollDown] = useState(false);

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
    const handleOnWheel = (event) =>
      setScrollDown(event.deltaY < 0 ? true : false);
    window.addEventListener("wheel", handleOnWheel);
    return () => window.removeEventListener("wheel", handleOnWheel);
  }, []);


  return (
    <>
      <Header />
      <Home />
    </>
  );
}
