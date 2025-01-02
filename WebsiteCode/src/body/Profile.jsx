import React, { useState } from "react";
import "./Profile.css";

// Import the images
import download from "../assets/profile/download.jpg";
import image2 from "../assets/profile/download.jpg"; // Make sure this file exists

const Profile = () => {
  // State to manage the current image
  const [image, setImage] = useState(download); // Default image

  // Function to change the image when clicked
  const changeImage = () => {
    setImage((prevImage) => (prevImage === download ? image2 : download));
  };

  return (
    <div className="profile-box" onClick={changeImage}>
      <img src={image} alt="Profile" />
    </div>
  );
};

export default Profile;
