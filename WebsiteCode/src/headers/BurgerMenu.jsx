import React, { useState } from "react";
import "./BurgerMenu.css";

function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  return (
    <>
      <button
        className="hamburger-button"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {hamburger()}
      </button>

      {open && boxidea()}
    </>
  );
}

export default BurgerMenu;

const hamburger = () => (
  <div className="hamburger">
    <div></div>
    <div></div>
    <div></div>
  </div>
);

const boxidea = () => (
  <div className={`boxidea ${open ? "active" : ""}`}>
    <div className="main">
      <div className="menu-container">
        <ul className="menu1">
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>GitHub</li>
          <li>Resume</li>
        </ul>
        <div className="divider"></div>
        <ul className="menu2">
          <li>Home</li>
          <li>Education</li>
          <li>My Projects</li>
          <li>About Me</li>
        </ul>
      </div>
    </div>
  </div>
);
