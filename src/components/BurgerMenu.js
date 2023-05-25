import "../styles/BurgerMenu.css";
import React, { useState } from "react";
function BurgerMenu() {
  const [Open, setOpen] = useState(false);
  return (
    <>
      {Open ? (
        <svg
          onClick={() => setOpen(!Open)}
          className="burgerClosed"
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          fill="white"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      ) : (
        <svg
          onClick={() => setOpen(!Open)}
          className="burgerClosed"
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          fill="white"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      )}
      <div className={`mobileNavbar ${Open ? "hide" : ""}`}>
        <ul>
          <li>
            <a onClick={() => setOpen(!Open)} href="#heroSection">
              Top
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(!Open)} href="#aboutSection">
              About
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(!Open)} href="#projectsSection">
              Projects
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(!Open)} href="#kontaktSection">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BurgerMenu;
