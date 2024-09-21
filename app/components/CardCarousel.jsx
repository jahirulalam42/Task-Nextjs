"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import styles from "./CardCarousel.module.css"; // Import the CSS module

const CardCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(null);

  const slides = [
    {
      id: 1,
      title: "Slide 1",
      description: "Description 1",
      color: "bg-red-700", // Tailwind CSS color class
    },
    {
      id: 2,
      title: "Slide 2",
      description: "Description 2",
      color: "bg-green-700",
    },
    {
      id: 3,
      title: "Slide 3",
      description: "Description 3",
      color: "bg-blue-700",
    },
    {
      id: 4,
      title: "Slide 4",
      description: "Description 4",
      color: "bg-yellow-700",
    },
    {
      id: 5,
      title: "Slide 5",
      description: "Description 5",
      color: "bg-purple-700",
    },
  ];

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={40}
      centeredSlides={true}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className={styles.mySwiper}
      dir="ltr"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id} onClick={() => setActiveSlide(index)}>
          <div
            className={`relative ${styles.card} cursor-pointer ${
              activeSlide === index ? "scale-125" : "scale-100"
            }`}
          >
            <div
              className={`h-96 w-72 ${
                slide.color
              } flex items-center justify-center transition-transform duration-300 ease-in-out ${
                activeSlide === index ? "scale-100" : "scale-120"
              }`}
            >
              <span className="text-white text-2xl">{slide.id}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardCarousel;
