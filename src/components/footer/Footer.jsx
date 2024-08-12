import React from "react";
import "./Footer.css";
import { useAppState } from "../../state/AppStateContext";

export default function Footer() {
  const { dict, toHome, toAboutMe, toProjects } = useAppState();

  return (
    <div id="footer">
      <nav className="nav-footer">
        <ul className="nav-ul-footer">
          <li className="nav-ul-lis-footer" onClick={toHome}>{dict.homeHome}</li>
          <li className="nav-ul-lis-footer" onClick={toAboutMe}>{dict.homeAboutMe}</li>
          <li className="nav-ul-lis-footer" onClick={toProjects}>{dict.homeProjects}</li>
        </ul>
      </nav>
      <p className="copyright">&copy;&nbsp;{dict.copyright}</p>
    </div>
  );
}
