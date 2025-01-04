import "./FirstPage.css";
import ButtonCool from "./ButtonCool";
import Profile from "./Profile";
import React, { forwardRef } from "react";

// Wrap the component with forwardRef
const FirstPage = forwardRef((props, ref) => {
  return (
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
  );
});

export default FirstPage;
