import React, { useState } from "react";
import "./BurgerMenu.css";

function BurgerMenu({ homeRef, educationRef, projectRef }) {
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
            <li>
              <button>Instagram</button>
            </li>
            <li>
              <button>LinkedIn</button>
            </li>
            <li>
              <button>GitHub</button>
            </li>
            <li>
              <button>Resume</button>
            </li>
          </ul>
          <div className="divider"></div>
          <ul className="menu2">
            <li>
              <button onClick={() => scrollToSection(homeRef)}>Home</button>
            </li>

            <li>
              <button onClick={() => scrollToSection(educationRef)}>
                Education
              </button>
            </li>

            <li>
              <button onClick={() => scrollToSection(projectRef)}>
                My Projects
              </button>
            </li>
            <li>
              <button>About Me</button>
            </li>
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
