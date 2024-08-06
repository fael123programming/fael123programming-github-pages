import React from "react";
import { FaInfo } from "react-icons/fa";
import "./AboutMe.css";
import { useAppState } from "../../state/AppStateContext";

export default function AboutMe() {
  const { dict } = useAppState();

  return (
    <div id="about-me">
      <div className="about-me-col-left">
        <div className="about-me-row">
          <FaInfo className="about-icon" />
          <h1 className="about-me-title">{dict.aboutAboutMe}</h1>
        </div>
        <p className="about-me-para">
          {dict.aboutAboutMeDescription}
        </p>
      </div>
      <div className="float">
        <img
          src={require("../../assets/caricature-1293848 1.png")}
          alt="Caricature"
        />
      </div>
      <img
        src={require("../../assets/code-2858768_1280.png")}
        className="img-background"
        alt="Background Skull of Code"
      />
    </div>
  );
}
