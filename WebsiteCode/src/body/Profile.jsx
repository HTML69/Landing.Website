import React, { useState } from "react";
import "./Profile.css";

// Import the images
// hello
import download from "../assets/profile/download.jpg";

// import image2 from "./assets/images/image2.jpg";

const Profile = () => {
  // State to manage the current image
  // fot he stacks
  const [image, setImage] = useState("download"); // Default image

  // Function to change the image when clicked
  const changeImage = () => {
    setImage((prevImage) =>
      prevImage === "download" ? "image2.jpg" : "download.jpg"
    );
  }; //dying rn

  return (
    <div className="profile-box" onClick={changeImage}>
      <img src={image} alt="Profile" />
    </div>
  );
};

export default Profile;
