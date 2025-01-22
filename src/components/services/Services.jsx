import React from "react";
import PenIcon from "../../assets/PenIcon";
import PlaningIcon from "../../assets/PlaningIcon";
import CheckIcon from "../../assets/CheckIcon";
import HomeIcon from "../../assets/HomeIcon";
import ThreeDIcon from "../../assets/ThreeDIcon";
import { useGetAllServiceQuery } from "../../redux/serviceSlice";
import { Image } from "@nextui-org/react";

export default function Services() {
  const { data: getAllServices, isLoading } = useGetAllServiceQuery();

  console.log("getAllServices", getAllServices);

  return (
    <div className="bg-[#f5f3f2] pt-10 pb-10">
      <div className="container mx-auto mt-5">
        <p className="text-[#866d47] inter tracking-widest">Our Services</p>
        <p className="mt-3 mb-3 text-3xl font-semibold inter underline underline-offset-8 underline-[#866d47] tracking-wide	">
          What Our Services Include
        </p>
        <div className="mt-16 mb-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
          {getAllServices?.map((service, index) => (
            <div key={service?._id}>
              <div className="flex flex-row justify-between items-center">
                <Image src={service?.image} width={80} />
                <p className="inter">{++index}</p>
              </div>
              <div className="mt-5">
                <p className="text-2xl font-semibold inter">{service?.title}</p>
                <p className="mt-2 text-lg inter text-sm	text-[#666666]">
                  {service?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
