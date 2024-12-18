import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./heroSection.css";

import { Image } from "@nextui-org/image";
import ArrowRightLicon from "../../../lottieFiles/ArrowRightLicon"

export default function HeroSection() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative flex flex-col">
            <Image
              alt="NextUI hero Image"
              src="https://interior.sg/images/default/default-section-one-banner-one.webp"
              width="100%"
              radius="none"
            />
            <div className="absolute inset-0 flex items-center flex-col justify-center text-white font-bold bg-black bg-opacity-20 inter text-7xl z-50">
              <p className="text-center">DESIGN CUSTOM - </p>
              <p className="text-center mt-3">MADE INTERIORS,</p>
              <p className="text-center mt-3">DEFINING LIFESTYLES</p>
              <div className="mt-60">
                <p className="text-center tracking-wider cursor-pointer flex flex-row items-center justify-center text-lg z-50 text-white">
                  Discover More <ArrowRightLicon  />
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="relative flex flex-col">
            <Image
              alt="NextUI hero Image"
              src="https://interior.sg/images/default/default-section-one-banner-four.webp"
              width="100%"
              radius="none"
            />
            <div className="absolute inset-0 flex items-center flex-col justify-center text-white font-bold bg-black bg-opacity-20 inter text-7xl z-50">
              {/* <p className="text-center">DESIGN CUSTOM - </p> */}
              <p className="text-center mt-4">DESIGNING SPACES,</p>
              <p className="text-center mt-4">DEFINING LIFESTYLES</p>
              <div className="mt-60">
                <p className="text-center tracking-wider cursor-pointer flex flex-row items-center justify-center text-lg z-50 text-white">
                  Discover More <ArrowRightLicon  />
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative flex flex-col">
            <Image
              alt="NextUI hero Image"
              src="https://interior.sg/images/default/default-section-one-banner-three.webp"
              width="100%"
              radius="none"
            />
            <div className="absolute inset-0 flex items-center flex-col justify-center text-white font-bold bg-black bg-opacity-50 inter text-7xl z-50">
              <p className="text-center">DESIGN CUSTOM - </p>
              <p className="text-center mt-3">MADE INTERIORS,</p>
              <p className="text-center mt-3">DEFINING LIFESTYLES</p>
              <div className="mt-60">
                <p className="text-center tracking-wider cursor-pointer flex flex-row items-center justify-center text-lg z-50 text-white">
                  Discover More <ArrowRightLicon  />
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
