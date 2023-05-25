import React, { useEffect } from "react";
import "../styles/TextShpere.css";
import { useInView } from "react-intersection-observer";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    threshold: 0.5,
  });
  // Animation settings for Text Cloud
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "HTML",
      "CSS",
      "React",
      "ES6",
      "GIT",
      "Vite",
      "Astro",
      "Nextjs",
      "Firebase",
      "Tailwind",
    ];

    const options = {
      radius: 250,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    TagCloud(container, texts, options);
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
