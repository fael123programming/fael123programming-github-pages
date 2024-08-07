import React from "react";
import { TbLampOff } from "react-icons/tb";
import { LuLampFloor } from "react-icons/lu";
import { TiThMenu } from "react-icons/ti";
import "./Header.css";
import { useAppState } from "../../state/AppStateContext";
import { Values } from "../../utils/Constants";

export default function Header() {
  const {
    lang,
    dict,
    switchLang,
    switchTheme,
    toggleMenu,
    isDark,
    atHome,
    atAboutMe,
    atProjects,
    toHome,
    toAboutMe,
    toProjects
  } = useAppState();

  function navigate(to) {
    if (to === Values.HOME) {
      toHome();
    } else if (to === Values.ABOUT_ME) {
      toAboutMe();
    } else {
      toProjects();
    }
    toggleMobileMenu();
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
            className={`nav-ul-lis ${atHome() ? "active" : ""}`}
            onClick={() => navigate(Values.HOME)}
          >
            {dict.homeHome}
          </li>
          <li
            id="about-me-li"
            className={`nav-ul-lis ${atAboutMe() ? "active" : ""}`}
            onClick={() => navigate(Values.ABOUT_ME)}
          >
            {dict.homeAboutMe}
          </li>
          <li
            id="projects-li"
            className={`nav-ul-lis ${atProjects() ? "active" : ""}`}
            onClick={() => navigate(Values.PROJECTS)}
          >
            {dict.homeProjects}
          </li>
        </ul>
      </nav>
      <div className="mobile-box">
        <div className="menu">
          <h1
            className="logo"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/rafael-guimar%C3%A3es-9a8b251a9",
                "_new"
              )
            }
          >
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
                className={`nav-ul-lis ${atHome() ? "active" : ""}`}
                onClick={() => navigate(Values.HOME)}
              >
                {dict.homeHome}
              </li>
              <li
                id="about-me-li"
                className={`nav-ul-lis ${atAboutMe() ? "active" : ""}`}
                onClick={() => navigate(Values.ABOUT_ME)}
              >
                {dict.homeAboutMe}
              </li>
              <li
                id="projects-li"
                className={`nav-ul-lis ${atProjects() ? "active" : ""}`}
                onClick={() => navigate(Values.PROJECTS)}
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
