import Home from "../components/home/Home";
import AboutMe from "../components/aboutMe/AboutMe";
import AboutMeAnimated from "../components/aboutMeAnimated/AboutMeAnimated";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/Footer";

export default function useComponents() {
  return [<Home />, <AboutMe />, <AboutMeAnimated />, <Projects />, <Footer />];
}
