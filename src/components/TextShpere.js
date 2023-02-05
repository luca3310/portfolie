import "../styles/TextShpere.css";
import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import { useInView } from "react-intersection-observer";

const TextShpere = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    threshold: 0.5,
  });
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "Tailwind",
        "JavaScript",
        "React",
        "ES6",
        "Git",
        "Github",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div
        ref={myRef}
        className={`text-shpere ${myElementIsVisible ? "show" : ""}`}
      >
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextShpere;
