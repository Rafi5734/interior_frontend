import React from "react";
import PenIcon from "../../assets/PenIcon";
import PlaningIcon from "../../assets/PlaningIcon";
import CheckIcon from "../../assets/CheckIcon";
import HomeIcon from "../../assets/HomeIcon";
import ThreeDIcon from "../../assets/ThreeDIcon";

export default function Services() {
  return (
    <div className="bg-[#f5f3f2] pt-10 pb-10">
      <div className="container mx-auto mt-5">
        <p className="text-[#866d47] inter tracking-widest">Our Services</p>
        <p className="mt-3 mb-3 text-3xl font-semibold inter underline underline-offset-8 underline-[#866d47] tracking-wide	">
          What Our Services Include
        </p>
        <div className="mt-16 mb-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
          <div>
            <div className="flex flex-row justify-between items-center">
              <PenIcon />
              <p className="inter">1</p>
            </div>
            <div className="mt-5">
              <p className="text-2xl font-semibold inter">
                Personalized Design Consultations
              </p>
              <p className="mt-2 text-lg inter text-sm	text-[#666666]">
                We collaborate closely with you to understand your style,
                preferences, and lifestyle needs. We translate your aspirations
                into a cohesive design concept that is uniquely yours.
              </p>
            </div>
          </div>
          <div>
            <div>
              <div className="flex flex-row justify-between items-center">
                <PlaningIcon />
                <p className="inter">2</p>
              </div>
              <div className="mt-5">
                <p className="text-2xl font-semibold inter">
                  Thoughtful Space Planning
                </p>
                <p className="mt-2 text-lg inter text-sm	text-[#666666]">
                  We plan spaces that align with your vision, ensuring
                  functional and aesthetic harmony within your home.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex flex-row justify-between items-center">
                <CheckIcon />
                <p className="inter">3</p>
              </div>
              <div className="mt-5">
                <p className="text-2xl font-semibold inter">
                  Curated Material Selection
                </p>
                <p className="mt-2 text-lg inter text-sm	text-[#666666]">
                  Our designers help you select premium materials to ensure your
                  space is beautiful and long-lasting.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex flex-row justify-between items-center">
                <HomeIcon />
                <p className="inter">4</p>
              </div>
              <div className="mt-5">
                <p className="text-2xl font-semibold inter">
                  Seamless Technology Integration
                </p>
                <p className="mt-2 text-lg inter text-sm	text-[#666666]">
                  We incorporate smart home technology into your design for a
                  modern and convenient lifestyle.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex flex-row justify-between items-center">
                <ThreeDIcon />
                <p className="inter">5</p>
              </div>
              <div className="mt-5">
                <p className="text-2xl font-semibold inter">3D Visualization</p>
                <p className="mt-2 text-lg inter text-sm	text-[#666666]">
                  We bring your design to life with advanced 3D visualizations,
                  allowing you to experience your space before it's built.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
