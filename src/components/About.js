import "../styles/About.css";
import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import Card from "./Card";

const About = () => {
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
    <section className="aboutSection">
      <div className="aboutContainer">
        <div className="col">
          <h1>About</h1>
          <img className="image" src="images/image.jpg" alt="selfimage" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque odio velit, congue sagittis commodo et, dapibus
            fermentum ligula. Pellentesque eu varius magna.
          </p>
        </div>
        <div className="text-shpere">
          <span className="tagcloud"></span>
        </div>
      </div>
      <section className="card-list">
        <Card
          titel="Never forget"
          tekst="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          billede="images/image.jpg"
        />
        <Card
          titel="Never forget"
          tekst="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          billede="images/image.jpg"
        />
        <Card
          titel="Never forget"
          tekst="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          billede="images/image.jpg"
        />
        <Card
          titel="Never forget"
          tekst="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          billede="images/image.jpg"
        />
      </section>
    </section>
  );
};

export default About;
