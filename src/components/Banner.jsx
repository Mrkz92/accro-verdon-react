import React from "react";
import "./Banner.scss";

export default function Banner({ image1, image2, context }) {
  return (
    <div className={`Banner Banner--${context}`}>
      <div className="Banner__image">
        <img src={image1} className="Banner__title" alt={image1} />
        <img src={image2} className="Banner__logo" alt={image2} />
      </div>
    </div>
  );
}
