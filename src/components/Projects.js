import "../styles/Projects.css";
import Project from "./Project";

function Projects() {
  return (
    <section id="projectsSection" className="projectsSection">
      <div className="projectsContainer">
        <Project
          tekst="A website made from reference of another website"
          titel="Landing page"
          ider={["Tailwind", "Astro"]}
          link="https://bright-florentine-e2c19b.netlify.app/"
          billede="images/frisørImage.PNG"
        />
        <Project
          tekst="A Nextjs website that is connected to a Firebase database with authorization."
          titel="Chatapp"
          ider={["NextJS", "Firebase", "Tailwind"]}
          billede="images/chatAppImage.PNG"
          link="https://chatapp-do688udmg-luca3310.vercel.app/"
        />
        <Project
          tekst="A website that receives data from a weather API."
          titel="Weather data"
          ider={["JavaScript", "Css", "Html"]}
          billede="images/APIImage.png"
          link="https://chimerical-melba-232a87.netlify.app/"
        />
      </div>
    </section>
  );
}

export default Projects;
