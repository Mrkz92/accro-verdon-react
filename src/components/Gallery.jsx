// Gallery.jsx
import React, { useState } from "react";
import "./Gallery.scss";
import imagesData from "../data/gallery";

export default function Gallery() {
  const handleImageClick = (index) => {
    setCurrentImage(index);
    setShowSwiper(true);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % imagesData.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + imagesData.length) % imagesData.length);
  };

  const closeModal = () => {
    setShowSwiper(false);
  };

  return (
    <div className="Gallery">
      {imagesData.map((image, index) => (
        <div className="Gallery__item" key={index}>
          <img
            src={image}
            alt={`Gallery Image ${index + 1}`}
            onClick={() => handleImageClick(index)}
          />
        </div>
      ))}
    </div>
  );
}
