// Swiper.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper.min.css";
import imagesData from "../data/gallery";

export default function SwiperComponet() {
  return (
    <Swiper spaceBetween={20} slidesPerView={2}>
      {imagesData.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
