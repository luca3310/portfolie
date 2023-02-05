import "../styles/About.css";
import Card from "./Card";
import { useInView } from "react-intersection-observer";
import TextShpere from "./TextShpere";

const About = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    threshold: 0.5,
  });
  const { ref: myRef2, inView: myElementIsVisible2 } = useInView({
    threshold: 0.5,
  });
  const { ref: myRef3, inView: myElementIsVisible3 } = useInView({
    threshold: 0.5,
  });

  return (
    <section id="aboutSection" className="aboutSection">
      <div className={`aboutContainer`}>
        <div ref={myRef} className={`col ${myElementIsVisible ? "show" : ""}`}>
          <h1>Omkring</h1>
          <img className="image" src="images/image.jpg" alt="selfimage" />
          <p>
            Hej mit navn er Lucas Agerskov Kragh, jeg er fra næstved. Jeg er en
            selvlært Front-end Udvikler. UX og UI designer.
          </p>
        </div>
        <TextShpere />
        <div
          ref={myRef3}
          className={`col fokuspunkter ${myElementIsVisible3 ? "show" : ""}`}
        >
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
