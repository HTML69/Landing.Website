import React, { useState } from "react";
import "./Card.css";

function Card({ title, description, image, link }) {
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

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank"); // Open the link in a new tab
    }
  };

  return (
    <div className="table-container">
      <table className="project-table">
        <tbody>
          <tr
            onMouseEnter={(e) => handleMouseEnter(image, e)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onClick={handleClick} // Add click handler here
            style={{ cursor: "pointer" }} // Change cursor to pointer for clickable rows
          >
            <td>
              <strong>{title}</strong>
              <hr />
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
