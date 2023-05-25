import "../styles/Navbar.css";
import BurgerMenu from "./BurgerMenu";

const Navbar = function () {
  return (
    <div className="navbar">
      <ul className="navbarDesktop">
        <li>
          <a href="#heroSection">Top</a>
        </li>
        <li>
          <a href="#aboutSection">About</a>
        </li>
        <li>
          <a href="#projectsSection">Projects</a>
        </li>
        <li>
          <a href="#kontaktSection">Contact</a>
        </li>
      </ul>
      <BurgerMenu />
    </div>
  );
};

export default Navbar;
