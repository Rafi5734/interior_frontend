import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/react";

import { Input } from "@nextui-org/input";

export default function SliderModal({ isOpen, onOpenChange }) {
  const [slider, setSlider] = useState({
    sliderName: "",
    sliderImage: "",
  });

  const handleSliderImageInputChange = (e) => {
    const { name, value } = e.target;
    setSlider((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSliderFormSubmit = (e) => {
    e.preventDefault();
    console.log("slider", slider);
  };
  return (
    <div className="inter">
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create a slider
              </ModalHeader>
              <ModalBody className="inter">
                <Input
                  label="Slider name"
                  placeholder="Enter the slider name"
                  type="text"
                  isRequired
                  name="sliderName"
                  value={slider?.sliderName || ""}
                  onChange={handleSliderImageInputChange}
                />

                {/* <label
                  className="block text-sm font-medium text-gray-900"
                  htmlFor="file_input"
                >
                  Upload slider image
                </label>
                <input
                  className="p-5 block w-full text-sm text-gray-900 border border-[#f4f4f5] rounded-lg cursor-pointer bg-[#f4f4f5]"
                  id="file_input"
                  type="file"
                  name="sliderImage"
                  //   onChange={handleSectionInputChange}
                /> */}
                <Input
                  label="Slider image"
                  placeholder="Upload a slider image"
                  type="file"
                  isRequired
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  className="inter"
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  onClick={(e) => handleSliderFormSubmit(e)}
                  className="inter"
                  color="primary"
                  onPress={onClose}
                >
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
