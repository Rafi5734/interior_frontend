import React from "react";
import Lottie from "lottie-react";
import arrowRight from "../src/assets/animations/arrow_right_lottie_icon.json";

export default function ArrowRightLicon() {
  return (
    <div className="w-[40px] ms-4">
      <Lottie  animationData={arrowRight} loop={true} className="w-[40px] ms-10" />
    </div>
  );
}
