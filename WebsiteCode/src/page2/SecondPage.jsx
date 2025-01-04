import "./SecondPage.css";
import Card from "./Card";
import assets from "../assets/datas/assets.json";
import React, { forwardRef } from "react";

// Wrap the component with forwardRef
const SecondPage = forwardRef((props, ref) => {
  return (
    <>
      <hr />
      <div className="project-list" ref={ref}>
        {assets.projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </>
  );
});

export default SecondPage;
