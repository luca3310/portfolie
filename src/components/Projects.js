import "../styles/Projects.css";
import Project from "./Project";

function Projects() {
  return (
    <section className="projectsSection">
      <h1>Projects</h1>
      <div className="projectsContainer">
        <Project
          tekst="det her er en lang tekst"
          titel="project1"
          ider={["JavaScript", "css", "html"]}
        />
        <Project
          tekst="det her er en lang tekst"
          titel="project1"
          ider={["JavaScript", "css", "html"]}
        />
        <Project
          tekst="det her er en lang tekst"
          titel="project1"
          ider={["JavaScript", "css", "html"]}
        />
        <Project
          tekst="det her er en lang tekst"
          titel="project1"
          ider={["JavaScript", "css", "html"]}
        />
      </div>
    </section>
  );
}

export default Projects;
