import React, { useState } from "react";
import "./Gallery.scss";

export default function Gallery({ images }) {
  return (
    <div className="Gallery">
      {images.map((image, index) => (
        <div className="Gallery__item" key={index}>
          <img
            src={`src/assets/pictures/${image}`}
            alt={`Gallery Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}
