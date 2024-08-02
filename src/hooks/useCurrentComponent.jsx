import { useState, useEffect } from "react";
import useComponents from "./useComponents";

export default function useCurrentComponent() {
  const components = useComponents().slice(0, 2);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [lastScrollTop, setLastScrollTop] = useState(0);
  const [current, setCurrent] = useState(components[0]);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      function () {
        var scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
          var lastScrollTop = 0;
        if (scrollTop > lastScrollTop) {
          if (currentIndex < components.length - 1) {
            // if (document.getElementById("current")) {
            //   document.getElementById("current").classList.add("slide-out");
            // }
            setCurrentIndex(currentIndex + 1);
            setCurrent(components[currentIndex + 1]);
          }
        } else if (scrollTop <= lastScrollTop) {
          if (currentIndex > 0) {
            // if (document.getElementById("current")) {
            //   document.getElementById("current").classList.add("slide-out");
            // }
            setCurrentIndex(currentIndex - 1);
            setCurrent(components[currentIndex - 1]);
          }
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        console.log(`scrollTop: ${scrollTop}, lastScrollTop: ${lastScrollTop}`)
      },
      false
    );
  }, []);

  return (
    <div id="current" className="slide-in">
      {current}
    </div>
  );
}
