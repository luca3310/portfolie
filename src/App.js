import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Kontankt from "./components/Kontakt";

import "./App.css";

function App() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classlist.toggle("show", entry.isIntersecting);
      });
    },
    {
      threshold: 1,
    }
  );
  return (
    <div className="App">
      <Navbar />
      <Hero observer={observer} />
      <About />
      <Projects />
      <Kontankt />
    </div>
  );
}

export default App;
