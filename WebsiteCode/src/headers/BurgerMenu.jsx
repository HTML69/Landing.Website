import React, { useState } from "react";
import "./BurgerMenu.css";

function BurgerMenu({ homeRef, aboutRef }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  // Scroll to the target section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Box idea with open state passed
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
            <li>
              <button onClick={() => scrollToSection(homeRef)}>Home</button>
            </li>
            <li>Education</li>
            <li>
              <button onClick={() => scrollToSection(aboutRef)}>
                My Projects
              </button>
            </li>
            <li>About Me</li>
          </ul>
        </div>
      </div>
    </div>
  );

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

// Hamburger icon
const hamburger = () => (
  <div className="hamburger">
    <div></div>
    <div></div>
    <div></div>
  </div>
);
