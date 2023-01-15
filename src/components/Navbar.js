import "../styles/Navbar.css";

const Navbar = function () {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a>Hero</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
