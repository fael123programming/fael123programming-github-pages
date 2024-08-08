import React from "react";
import { AiFillCode } from "react-icons/ai";
import "./Projects.css";
import { useAppState } from "../../state/AppStateContext";
import Carousel from "../../utils/carousel/Carousel";

export default function Projects() {
  const { dict } = useAppState();

  return (
    <div id="projects">
      <div className="projects-headline">
        <AiFillCode className="projects-icon" />
        <h1 className="projects-title">{dict.projectsProjects}</h1>
      </div>
      <Carousel/>
      <img
        src={require("../../assets/mingcute_code-fill.png")}
        className="img-proj-background"
        alt="Background Code Symbol"
      />
    </div>
  );
}
