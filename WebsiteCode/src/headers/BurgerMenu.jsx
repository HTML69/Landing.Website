import React, { useState } from "react";
import "./BurgerMenu.css";

function BurgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)}>{hamburger()}</button>
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
  <div className="boxidea">
    <p>Your content here</p>
  </div>
);
