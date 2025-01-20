import "./FirstPage.css";
import ButtonCool from "./ButtonCool";
import Profile from "./Profile";
import React, { forwardRef } from "react";
import Marquee from "./Marquee";

// Wrap the component with forwardRef
const FirstPage = forwardRef((props, ref) => {
  const icons = [
    { icon: "🌐", name: "HTML" },
    { icon: "🎨", name: "CSS" },
    { icon: "💻", name: "JavaScript" },
    { icon: "🐍", name: "Python" },
    { icon: "☕", name: "Java" },
  ];
  return (
    <>
      <div className="data" ref={ref}>
        <span className="web">
          <Profile />
          WEB
        </span>
        <span className="designer">DESIGNER </span>
        <span className="and">
          &<ButtonCool />
        </span>
        <span className="developer">DEVELOPER</span>
      </div>
      <div className="languages">
        <Marquee icons={icons} speed={50} />
      </div>
    </>
  );
});

export default FirstPage;
