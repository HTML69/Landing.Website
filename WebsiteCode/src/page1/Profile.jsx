import React, { useState } from "react";
import "./Profile.css";

// Import the images
import image1 from "../assets/profile/2.jpg";
import image2 from "../assets/profile/1.jpg"; // Make sure this file exists

const Profile = () => {
  // State to manage the current image
  const [image, setImage] = useState(image1); // Default image

  // Function to change the image when clicked
  const changeImage = () => {
    setImage((prevImage) => (prevImage === image1 ? image2 : image1));
  };

  return (
    <div className="profile-box" onClick={changeImage}>
      <img src={image} alt="Profile" />
    </div>
  );
};

export default Profile;
