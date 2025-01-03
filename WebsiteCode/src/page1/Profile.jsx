import React, { useState, useEffect } from "react";
import assets from "../assets/datas/assets.json"; // Import the JSON data

import "./Profile.css";

const Profile = () => {
  // State to manage the current image
  const [image, setImage] = useState("");

  // Set the initial image when the component mounts
  useEffect(() => {
    setImage(assets.images.img1); // Set the default image to img1
  }, []);

  // Function to change the image when clicked
  const changeImage = () => {
    setImage((prevImage) =>
      prevImage === assets.images.img1 ? assets.images.img2 : assets.images.img1
    );
  };

  return (
    <div className="profile-box" onClick={changeImage}>
      <img src={image} alt="Profile" />
    </div>
  );
};

export default Profile;
