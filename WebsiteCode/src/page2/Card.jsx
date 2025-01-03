import React, { useState } from "react";
import "./Card.css";
import profile1 from "../assets/profile/1.jpg";

const projects = [
  {
    title: "Project One",
    description: "A description of project one.",
    image: profile1,
  },
  {
    title: "Project Two",
    description: "A description of project two.",
    image: "https://via.placeholder.com/200x150?text=Project+Two",
  },
  {
    title: "Project Three",
    description: "A description of project three.",
    image: "https://via.placeholder.com/200x150?text=Project+Three",
  },
];

function Card() {
  const [hoverImage, setHoverImage] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (image, e) => {
    setHoverImage(image);
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoverImage(null);
  };

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="table-container">
      <table className="project-table">
        <tbody>
          {projects.map((project, index) => (
            <tr
              key={index}
              onMouseEnter={(e) => handleMouseEnter(project.image, e)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <td>
                <strong>{project.title}</strong>
                <p>{project.description}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {hoverImage && (
        <div
          className="hover-image"
          style={{ top: position.y + 10, left: position.x + 10 }}
        >
          <img src={hoverImage} alt="Project Preview" />
        </div>
      )}
    </div>
  );
}

export default Card;
