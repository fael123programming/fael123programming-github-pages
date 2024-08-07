import React from "react";
import "./Carousel.css";

export default function Carousel({
  imgHeader,
  title,
  text,
  imgTech,
  githubLink,
}) {
  return (
    <div className="carousel">
      <div className="inner-content"></div>
      <div className="elements-bar"></div>
    </div>
  );
}
