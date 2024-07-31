import React from "react";
import { TbLampOff } from "react-icons/tb";
import { LuLampFloor } from "react-icons/lu";
import { TiThMenu } from "react-icons/ti";
import "./Header.css";
import { useAppState } from "../../state/AppStateContext";

export default function Header() {
  const { lang, dict , switchLang, switchTheme, toggleMenu, isDark } = useAppState();

  function click(target, focus) {
    let lis = document.querySelectorAll(".nav-ul-lis");
    for (let li of lis) {
      if (li.id === target && !li.classList.contains("active")) {
        li.classList.add("active");
      } else if (li.id !== target && li.classList.contains("active")) {
        li.classList.remove("active");
      }
    }
    toggleMobileMenu();
    const element = document.getElementById(focus);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function toggleMobileMenu() {
    let mobileUl = document.querySelector(".mobile-nav-ul");
    if (mobileUl.classList.contains("flex")) {
      mobileUl.classList.remove("flex");
      mobileUl.classList.add("none");
    } else {
      mobileUl.classList.remove("none");
      mobileUl.classList.add("flex");
    }
    toggleMenu();
  }

  return (
    <header id="header">
      <nav className="mobile-nav">
        <ul className="mobile-nav-ul">
          <li className="nav-ul-lis" style={{ width: "100%" }}>
            <div className="mobile-tools">
              {isDark() ? (
                <TbLampOff onClick={switchTheme} className="lamp" />
              ) : (
                <LuLampFloor onClick={switchTheme} className="lamp" />
              )}
              <button onClick={switchLang} className="lang">
                {lang}
              </button>
            </div>
          </li>
          <li
            id="home-li"
            className="nav-ul-lis active"
            onClick={() => click("home-li", "home")}
          >
            {dict.homeHome}
          </li>
          <li
            id="about-me-li"
            className="nav-ul-lis"
            onClick={() => click("about-me-li", "about")}
          >
            {dict.homeAboutMe}
          </li>
          <li
            id="projects-li"
            className="nav-ul-lis"
            onClick={() => click("projects-li", "projects")}
          >
            {dict.homeProjects}
          </li>
        </ul>
      </nav>
      <div className="mobile-box">
        <div className="menu">
          <h1 className="logo">
            <span className="red">fael123</span>
            <span className="blue">programming</span>
          </h1>
          <TiThMenu
            onClick={toggleMobileMenu}
            className="mobile-menu-icon"
            size={50}
          />
          <nav className="nav">
            <ul className="nav-ul">
              <li
                id="home-li"
                className="nav-ul-lis active"
                onClick={() => click("home-li", "home")}
              >
                {dict.homeHome}
              </li>
              <li
                id="about-me-li"
                className="nav-ul-lis"
                onClick={() => click("about-me-li", "about")}
              >
                {dict.homeAboutMe}
              </li>
              <li
                id="projects-li"
                className="nav-ul-lis"
                onClick={() => click("projects-li", "projects")}
              >
                {dict.homeProjects}
              </li>
            </ul>
          </nav>
          <button
            className="hire-me-btn"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/rafael-guimar%C3%A3es-9a8b251a9",
                "_new"
              )
            }
          >
            {dict.homeHireMe}
          </button>
        </div>
        <div className="tools">
          {isDark() ? (
            <LuLampFloor onClick={switchTheme} className="lamp" />
          ) : (
            <TbLampOff onClick={switchTheme} className="lamp" />
          )}
          <button onClick={switchLang} className="lang">
            {lang}
          </button>
        </div>
      </div>
    </header>
  );
}
