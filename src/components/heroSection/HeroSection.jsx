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
import ArrowRightLicon from "../../../lottieFiles/ArrowRightLicon";
import { useGetAllSLidersQuery } from "../../redux/sliderSlice";

export default function HeroSection() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const { data: getAllSlidersData, isLoading } = useGetAllSLidersQuery();

  // console.log("getAllSlidersData", getAllSlidersData);
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
        {getAllSlidersData?.map((slider) => (
          <SwiperSlide key={slider?._id}>
            <div className="relative flex flex-col">
              <Image
                alt={slider?.sliderImage}
                src={slider?.sliderImage}
                width="100%"
                radius="none"
              />
              <div className="absolute inset-0 flex items-center flex-col justify-center text-white font-bold bg-black bg-opacity-20 inter text-7xl z-50">
                <p className="text-center">{slider?.sliderName} </p>
                <p className="text-center mt-3">MADE INTERIORS,</p>
                <p className="text-center mt-3">DEFINING LIFESTYLES</p>
                <div className="mt-60">
                  <p className="text-center w-[40px] me-4 tracking-wider cursor-pointer flex flex-row items-center justify-center text-lg z-50 text-white">
                    Discover More <ArrowRightLicon />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

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
