"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import SwiperCore from "swiper";
import  { Navigation } from "swiper/modules";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const ImageSlider = ({ images }) => {
  return (
    <div className="container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        
        }}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
              className=""
            />
          </SwiperSlide>
        ))}
        {/* <div className="swiper-button-prev photo-swiper-button-prev"></div>
      <div className="swiper-button-next photo-swiper-button-next"></div> */}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
