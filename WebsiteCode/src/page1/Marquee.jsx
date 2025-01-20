import React from "react";
import Marquee from "react-marquee-slider";
import "./Marquee.css"; // Optional: Add custom styling

const MarqueeComponent = ({ icons, speed = 15 }) => {
  return (
    <div className="maindivmarquee">
      <Marquee velocity={speed} minScale={0.7} resetAfterTries={100}>
        {icons.map((item, index) => (
          <div
            key={index}
            style={{
              fontSize: "2rem",
              margin: "0 20px",
              textAlign: "center",
              display: "inline-block",
            }}
          >
            <div>{item.icon}</div>
            <div style={{ fontSize: "1rem", marginTop: "5px" }}>
              {item.name}
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
