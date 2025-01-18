import "./ThirdPage.css";
import React, { forwardRef } from "react";

// Wrap the component with forwardRef
const ThirdPage = forwardRef((props, ref) => {
  return (
    <>
      <div className="data" ref={ref}>
        <h1> Projects</h1>
      </div>
    </>
  );
});

export default ThirdPage;
