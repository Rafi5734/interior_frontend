import React, { useState, useEffect } from "react";
import ArrowLeftIcon from "../../assets/ArrowLeftIcon";
import ArrowRightIcon from "../../assets/ArrowRightIcon";
import { Button, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useGetAllProjectSlidersQuery } from "../../redux/projectSliderSlice";

export default function OurProjects() {
  const { data: getAllProjectSlider, isLoading: projectSliderLoader } =
    useGetAllProjectSlidersQuery();

  // State for the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle slide changes with animation
  const handleSlideChange = (newIndex) => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300); // Duration matches CSS animation
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % (getAllProjectSlider?.length || 1);
    handleSlideChange(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      currentIndex === 0
        ? (getAllProjectSlider?.length || 1) - 1
        : currentIndex - 1;
    handleSlideChange(newIndex);
  };

  // Fallback if API is still loading
  if (projectSliderLoader) {
    return <div>Loading...</div>;
  }

  // Get current slide data
  const currentSlide = getAllProjectSlider?.[currentIndex] || {};

  return (
    <div className="bg-[#a89687] pe-3">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 items-center">
        {/* Active Carousel Image */}
        <div className="relative overflow-hidden">
          <div
            className={`w-full h-[794px] transition-transform duration-500 ease-in-out transform ${
              isAnimating ? "scale-110 opacity-90" : ""
            }`}
          >
            <Image
              radius="none"
              src={currentSlide.image}
              alt={currentSlide.projectName || "Slide"}
              className="w-full h-screen object-cover shadow-lg"
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
                {getAllProjectSlider?.map((slide, index) => (
                  <div
                    key={slide._id}
                    onClick={() => handleSlideChange(index)}
                    className={`cursor-pointer ${
                      currentIndex === index
                        ? "border-4 border-white rounded-lg"
                        : "opacity-75 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.projectName || `Thumbnail ${index + 1}`}
                      className="w-72 h-80 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="pt-10 text-xl inter font-semibold text-white tracking-wider ms-5 underline underline-offset-2">
                  Project Details
                </p>
                <p className="ms-5 mt-10 text-[#e5e0db] text-xl inter font-semibold">
                  {currentSlide.countryName}{" "}
                  <span>
                    ({new Date(currentSlide.createdAt).getFullYear()})
                  </span>
                </p>
                <p className="ms-5 mt-6 text-[#e5e0db] text-xl inter font-semibold">
                  {currentSlide.projectName || "No description available"}
                </p>
                <div>
                  <Link
                    to={`/projects/details`}
                    className="flex items-center"
                  >
                    <Button isIconOnly className="ms-5 mt-6" variant="bordered">
                      <ArrowRightIcon />
                    </Button>
                    <p className="mt-5 ms-6 text-[#e5e0db] text-xl inter font-semibold">
                      See Our Projects
                    </p>
                  </Link>
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
