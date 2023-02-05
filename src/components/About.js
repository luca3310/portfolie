import "../styles/About.css";
import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import Card from "./Card";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    threshold: 0.5,
  });
  const { ref: myRef2, inView: myElementIsVisible2 } = useInView({
    threshold: 0.5,
  });
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
        "GIT",
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
    <section id="aboutSection" className="aboutSection">
      <div
        ref={myRef}
        className={`aboutContainer ${myElementIsVisible ? "show" : ""}`}
      >
        <div className="col">
          <h1>Omkring</h1>
          <img className="image" src="images/image.jpg" alt="selfimage" />
          <p>
            Hej mit navn er Lucas Agerskov Kragh, jeg er fra næstved. Jeg er en
            selvlært Front-end Udvikler. UX og UI designer.
          </p>
        </div>
        <div className="text-shpere">
          <span className="tagcloud"></span>
        </div>
        <div className="col fokuspunkter">
          <h1>Evner</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind</li>
            <li>React</li>
            <li>ES6</li>
            <li>GIT</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
      <section
        ref={myRef2}
        className={`card-list ${myElementIsVisible2 ? "show" : ""}`}
      >
        <Card
          titel="Semantic HTML"
          tekst="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          billede="images/image.jpg"
        />
        <Card
          titel="Responsive design"
          tekst="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          billede="images/image.jpg"
        />
        <Card
          titel="Lærenem"
          tekst="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          billede="images/image.jpg"
        />
      </section>
    </section>
  );
};

export default About;
