// Gallery.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper-bundle.min.css";
import "./Gallery.scss";
import imagesData from "../data/gallery";

export default function Gallery() {
  const [showSwiper, setShowSwiper] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

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

      {showSwiper && (
        <div className="modal">
          <i className="fas fa-times closeBtn" onClick={closeModal} />
          <i className="fas fa-angle-right nextBtn" onClick={nextImage} />
          <i className="fas fa-angle-left prevBtn" onClick={prevImage} />
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
          >
            <SwiperSlide key={currentImage}>
              <img
                src={imagesData[currentImage]}
                alt={`Slide ${currentImage + 1}`}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </div>
  );
}
