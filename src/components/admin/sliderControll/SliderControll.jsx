import { Button } from "@nextui-org/react";
import React from "react";
import AddIcon from "../../../assets/AddIcon";
import SliderData from "./sliderData/SliderData";

import {
  useDisclosure,
} from "@nextui-org/modal";
import SliderModal from "./sliderModal/SliderModal";

export default function SliderControll() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="bg-[#25373b] text-white">
      <div className="pt-36 z-30 ps-4 pe-4">
        <p className="inter text-5xl text-center font-bold mt-5 underline underline-offset-4 pb-10">
          Slider Controlling
        </p>
        <Button
          className="mb-10 inter"
          startContent={<AddIcon />}
          onPress={onOpen}
          color="primary"
        >
          Add a slider
        </Button>
        <SliderModal isOpen={isOpen} onOpenChange={onOpenChange} />
        <SliderData />
      </div>
    </div>
  );
}
