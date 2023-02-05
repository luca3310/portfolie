import "../styles/Projects.css";
import Project from "./Project";

function Projects() {
  return (
    <section id="projectsSection" className="projectsSection">
      <div className="projectsContainer">
        <Project
          tekst="en hjemmeside der vil anbefale en aktie ved hjælp af en API"
          titel="Aktie Hjemmeside"
          ider={["html", "css", "JavaScript"]}
          link="https://deluxe-youtiao-1c74e9.netlify.app"
          billede="images/aktieHjemmeside.PNG"
        />
        <Project
          tekst="en hjemmeside af en kaffe cafe"
          titel="kaffe hjemmeside"
          ider={["react", "tailwind", "html"]}
          billede="images/kaffeHjemmeside.PNG"
          link="https://steady-lamington-946951.netlify.app"
        />
        <Project
          tekst="en hjemmeside der lader dig skrive noter, færdiggøre dem og slette dem"
          titel="note hjemmeside"
          ider={["JavaScript", "css", "html"]}
          billede="images/noteHjemmeside.PNG"
          link="https://fancy-elf-e951fc.netlify.app"
        />
        <Project
          tekst="en hjemmeside af et flyselskab"
          titel="flyselskab hjemmeside"
          ider={["react", "tailwind", "html"]}
          billede="images/rejseHjemmeside.PNG"
          link="https://playful-liger-dc705c.netlify.app"
        />
      </div>
    </section>
  );
}

export default Projects;
