import "../styles/Navbar.css";

const Navbar = function () {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="https://www.google.dk/">Hero</a>
        </li>
        <li>
          <a href="https://www.google.dk/">About</a>
        </li>
        <li>
          <a href="https://www.google.dk/">Projects</a>
        </li>
        <li>
          <a href="https://www.google.dk/">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
