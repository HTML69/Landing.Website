import "./SecondPage.css";
import Card from "./Card";
import assets from "../assets/datas/assets.json";
import React, { forwardRef } from "react";

// Wrap the component with forwardRef
const SecondPage = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <hr />
      <h1>My Projects</h1>
      <div className="project-list">
        {assets.projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
});

export default SecondPage;
