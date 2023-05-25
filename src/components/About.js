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
          <h1>About</h1>
          <img className="image" src="images/image.jpg" alt="selfimage" />
          <p>
            Hello, my name is Lucas Agerskov Kragh, and I'm from Denmark. I'm a
            self-taught web developer, as well as a UX and UI designer.
          </p>
        </div>
        <TextShpere />
        <div
          ref={myRef3}
          className={`col fokuspunkter ${myElementIsVisible3 ? "show" : ""}`}
        >
          <h1>Skills</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind</li>
            <li>React</li>
            <li>GIT</li>
            <li>Nextjs</li>
            <li>Firebase</li>
            <li>Astro</li>
          </ul>
        </div>
      </div>
      <section
        ref={myRef2}
        className={`card-list ${myElementIsVisible2 ? "show" : ""}`}
      >
        <Card
          titel="User experience (UX)"
          tekst="Refers to creating an intuitive and satisfying user experience on a website or application."
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-badge"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
            </svg>
          }
        />
        <Card
          titel="Design"
          tekst="Refers to the visual expression on a website or application, including colors, typography, and graphics"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
          }
        />
        <Card
          titel="SEO"
          tekst="Refers to improving the visibility of a website or application in search engine results."
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          }
        />
      </section>
    </section>
  );
};

export default About;
