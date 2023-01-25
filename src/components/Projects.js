import "../styles/Projects.css";
import Project from "./Project";

function Projects() {
  return (
    <section className="projectsSection">
      <h1>Projects</h1>
      <div className="projectsContainer">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
}

export default Projects;
