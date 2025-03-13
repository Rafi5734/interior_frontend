import { Image } from "@nextui-org/image";
import ArrowRightIcon from "../assets/ArrowRightIcon";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useGetAllFooterDesignQuery } from "../redux/footerSlice";

export default function Footer() {
  const { data: getAllData, isLoading } = useGetAllFooterDesignQuery();

  return (
    <div className="bg-[#25373b] text-white">
      {getAllData?.map((footer) => (
        <div
          key={footer?._id}
          className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5"
        >
          <div className="relative w-full">
            {/* Text Overlay */}
            <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center">
              <h1 className="text-white text-7xl inter font-bold z-30 mt-10">
                {footer?.imageTitle}
              </h1>
            </div>

            {/* Background Image */}
            <Image
              alt={footer?.imageLink}
              src={footer?.imageLink}
              width="100%"
              className="block"
              radius="none"
            />
          </div>
          <div className="relative flex justify-center items-center flex-col">
            <p className="text-6xl text-center inter font-bold mt-10">
              {footer?.mainTitle}
            </p>
            <p className="text-lg text-center inter tracking-wider mt-3">
              {footer?.subTitle}
            </p>
            <div>
              <Link className="flex items-center" to="/contact">
                <Button isIconOnly className="ms-5 mt-6" variant="bordered">
                  <ArrowRightIcon />
                </Button>
                <p className="mt-5 ms-6 text-[#e5e0db] text-xl inter font-semibold">
                  Get a quote now
                </p>
              </Link>
              <div className="absolute left-0 bottom-0 inter ">
                <div className="flex flex-row gap-8">
                  <p className="text-xl font-semibold hover:underline hover:underline-offset-2 cursor-pointer">
                    About Us
                  </p>
                  <p className="text-xl font-semibold hover:underline hover:underline-offset-2 cursor-pointer">
                    Contact
                  </p>
                  <p className="text-xl font-semibold hover:underline hover:underline-offset-2 cursor-pointer">
                    Services
                  </p>
                  <p className="text-xl font-semibold hover:underline hover:underline-offset-2 cursor-pointer">
                    Projects
                  </p>
                </div>
                <p className="mt-4 mb-4 text-xl text-[#ffffff80]">
                  Copyright 2025 © A & D Designer’s Group.
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
