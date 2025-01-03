import React, { useState } from "react";
import "./Card.css";

function Card({ title, description, image }) {
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
          <tr
            onMouseEnter={(e) => handleMouseEnter(image, e)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <td>
              <strong>{title}</strong>
              <p>{description}</p>
            </td>
          </tr>
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
