import "../styles/Project.css";
import { useInView } from "react-intersection-observer";
function Project(prompt) {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    threshold: 0.8,
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
          <div className="hover-tekst">
            <p>{prompt.tekst}</p>
            <a rel="noreferrer" target="_blank" href={prompt.link}>
              Visit here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
