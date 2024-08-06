import React, { useState, useEffect } from "react";
import { FaInfo } from "react-icons/fa";
import "./AboutMeAnimated.css";
import { useAppState } from "../../state/AppStateContext";

const images = [
  {
    resource: require('../../assets/portugal-1758845_1280.png'),
    alt: 'Portugal Map'
  },
  {
    resource: require('../../assets/portugal-971599_1280.jpg'),
    alt: 'Castle of Bragança, Portugal'
  },
  {
    resource: require('../../assets/buildings-4251977_1280.jpg'),
    alt: 'Portugal Buildings'
  },
  {
    resource: require('../../assets/castle-1644732_1280.jpg'),
    alt: 'Portugal Castle'
  },
  {
    resource: require('../../assets/city-4820579_1280.jpg'),
    alt: 'Portugal City'
  },
  {
    resource: require('../../assets/porto-343487_1280.jpg'),
    alt: 'Porto, Portugal'
  }
];

export default function AboutMeAnimated() {
  const { dict } = useAppState();

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tout = setTimeout(() => {
      if (index < images.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 3000);
    return () => clearTimeout(tout);
  }, [index]);

  return (
    <div id="about-me-anim">
      <div className="about-me-anim-col-left">
        <div className="about-me-anim-row">
          <FaInfo className="about-anim-icon" />
          <h1 className="about-me-anim-title">{dict.aboutAboutMe}</h1>
        </div>
        <p className="about-me-anim-para">
          {dict.aboutAboutMePortugal}
        </p>
      </div>
      <div className="float-anim">
        <img
          src={images[index].resource}
          alt={images[index].alt}
          className="anim-img"
        />
      </div>
      <img
        src={require("../../assets/earth-11595.jpg")}
        className="img-background-anim"
        alt="Background World Map"
      />
    </div>
  );
}
