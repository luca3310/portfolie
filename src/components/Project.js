import "../styles/Project.css";
import { useInView } from "react-intersection-observer";
function Project(prompt) {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    threshold: 1,
  });
  return (
    <div ref={myRef} className={`project ${myElementIsVisible ? "show" : ""}`}>
      <div className="imgbx">
        <img src={prompt.billede} alt="projectImage" />
      </div>
      <div className="content">
        <div className="details">
          <h1>{prompt.titel}</h1>
          <ul>
            {prompt.ider.map((ider, index) => {
              return <li key={index}>{ider}</li>;
            })}
          </ul>
          <p>
            {prompt.tekst}{" "}
            <a target="_blank" href={prompt.link}>
              besøg her
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
