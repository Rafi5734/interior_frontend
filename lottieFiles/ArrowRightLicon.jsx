import React from "react";
import Lottie from "lottie-react";
import arrowRight from "../src/assets/animations/arrow_right_lottie_icon.json";

export default function ArrowRightLicon() {
  return (
    <div className="w-[70px]">
      <Lottie  animationData={arrowRight} loop={true} className="w-[50px] ms-4" />
    </div>
  );
}
