"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const slides = [
  {
    id: 1,
    color: "bg-blue-500",
    imageURL:
      "https://ucarecdn.com/c388040a-8181-4f0e-bf84-be563cfaeeb9/-/preview/1000x1000/",
  },
  {
    id: 2,
    color: "bg-green-500",
    imageURL:
      "https://ucarecdn.com/9bc0c218-6d2c-493c-8430-29758f7999f7/-/preview/1000x1000/",
  },
  {
    id: 3,
    color: "bg-red-500",
    imageURL:
      "https://ucarecdn.com/252d250e-b951-438b-bdc0-d15343d0f880/-/preview/1000x1000/",
  },
];

const Banner = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="mt-[20px]">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`h-[332px] md:h-[772px] lg:h-[792px]  `}>
              <Image
                src={slide.imageURL}
                width={1000}
                height={1080}
                quality={100}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-3 mt-[14px]">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`w-[10px] h-[10px] rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-[#0A3556]" : "bg-[#0A35564D]"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
