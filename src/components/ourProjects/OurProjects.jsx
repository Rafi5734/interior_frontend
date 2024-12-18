// import React, { useState } from "react";
// import ArrowLeftIcon from "../../assets/ArrowLeftIcon";
// import ArrowRightIcon from "../../assets/ArrowRightIcon";

// export default function OurProjects() {
//   const images = [
//     "https://interior.sg/images/default/default-section-one-banner-one.webp",
//     "https://interior.sg/images/default/default-section-one-banner-two.webp",
//     "https://interior.sg/images/default/default-section-one-banner-three.webp",
//     "https://interior.sg/images/default/default-section-one-banner-four.webp",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className=" bg-[#a89687] pe-3.5">
//       {/* Carousel Container */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
//         {/* Active Carousel Image */}
//         <div className="relative overflow-hidden">
//           <img
//             src={images[currentIndex]}
//             alt={`Slide ${currentIndex + 1}`}
//             className="w-full h-[794px] object-cover shadow-lg"
//           />
//         </div>

//         {/* Thumbnail Carousel with Controls */}
//         <div className="relative">
//           <div className="absolute left-0 bottom-0 flex items-center justify-between gap-2">
//             <button
//               onClick={prevSlide}
//               className="absolute left-0 z-50 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition"
//             >
//               <ArrowLeftIcon />
//             </button>

//             <div className="flex overflow-x-auto gap-2 w-full px-8 bg-green">
//               {images.map((image, index) => (
//                 <div
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`cursor-pointer ${
//                     currentIndex === index
//                       ? "border-4 border-white rounded-lg"
//                       : "opacity-75 hover:opacity-100"
//                   }`}
//                 >
//                   <img
//                     src={image}
//                     alt={`Thumbnail ${index + 1}`}
//                     className="w-72 h-80 object-cover rounded-lg"
//                   />
//                 </div>
//               ))}
//             </div>

//             <button
//               onClick={nextSlide}
//               className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition"
//             >
//               <ArrowRightIcon />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import ArrowLeftIcon from "../../assets/ArrowLeftIcon";
import ArrowRightIcon from "../../assets/ArrowRightIcon";
import { Button } from "@nextui-org/react";

export default function OurProjects() {
  const images = [
    "https://interior.sg/images/default/default-section-one-banner-one.webp",
    "https://interior.sg/images/default/default-section-one-banner-two.webp",
    "https://interior.sg/images/default/default-section-one-banner-three.webp",
    "https://interior.sg/images/default/default-section-one-banner-four.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlideChange = (newIndex) => {
    setIsAnimating(true); // Enable animation
    setTimeout(() => setIsAnimating(false), 300); // Disable animation after duration
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    handleSlideChange(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    handleSlideChange(newIndex);
  };

  return (
    <div className="bg-[#a89687] pe-3">
      {/* Carousel Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Active Carousel Image */}
        <div className="relative overflow-hidden">
          <div
            className={`w-full h-[794px] transition-transform duration-500 ease-in-out transform ${
              isAnimating ? "scale-110 opacity-90" : ""
            }`}
          >
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Thumbnail Carousel with Controls */}
        <div className="relative flex flex-col pt-[570px]">
          <div className="absolute left-0 bottom-0 flex items-center justify-between gap-2">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-50 top-1/3 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition"
            >
              <ArrowLeftIcon />
            </button>

            {/* Thumbnails */}
            <div className="flex flex-col">
              <div className="flex flex-row gap-2 w-full px-8 pt-10">
                {images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className={`cursor-pointer ${
                      currentIndex === index
                        ? "border-4 border-white rounded-lg"
                        : "opacity-75 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-72 h-80 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
              <div className="">
                <p className="pt-10 text-xl inter font-semibold text-white tracking-wider ms-5 underline underline-offset-2">
                  Project Details
                </p>
                <p className="ms-5 mt-10 text-[#e5e0db] text-xl inter font-semibold">
                  Singapore
                </p>
                <p className="ms-5 mt-6 text-[#e5e0db] text-xl inter font-semibold">
                  2023
                </p>
                <p className="ms-5 mt-6 text-[#e5e0db] text-xl inter font-semibold">
                  HDB, Interior design, Space planning, Renovation
                </p>
                <div className="flex items-center">
                  <Button isIconOnly className="ms-5 mt-6" variant="bordered">
                    <ArrowRightIcon />
                  </Button>
                  <p className="mt-5 ms-6 text-[#e5e0db] text-xl inter font-semibold">See Our Projects</p>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/3 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
