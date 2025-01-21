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
import toast from "react-hot-toast";
import { useCreateSliderMutation } from "../../../../redux/sliderSlice";

export default function SliderModal({ isOpen, onOpenChange }) {
  const [slider, setSlider] = useState({
    sliderName: "",
    sliderImage: "",
    shortDescription: "",
  });

  const [imageUploading, setImageUploading] = useState(false);

  const [createSlider, {isLoading: createLoader}] = useCreateSliderMutation()

  const handleSliderImageInputChange = (e) => {
    const { name, value } = e.target;
    setSlider((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSliderFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createSlider(slider);

      if(result?.data) {
        toast.success("Slider created!")
      } else {
        toast.error("Slider did not created!")
      }
    } catch (err) {
      toast.error(err?.message)
    }
    // console.log("slider", slider);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_images"); // Replace with your preset
    formData.append("cloud_name", "dhojflhbx"); // Replace with your Cloudinary cloud name

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dhojflhbx/image/upload`, // Replace with your Cloudinary URL
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.secure_url) {
        setSlider((prev) => ({ ...prev, sliderImage: data.secure_url }));
      } else {
        console.error("Upload failed", data);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setImageUploading(false);
    }
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

                <label
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
                  onChange={handleImageUpload}
                />
                {imageUploading && <p>Uploading image...</p>}
                {slider.sliderImage && (
                  <img
                    src={slider.sliderImage}
                    alt="Slider Preview"
                    className="mt-3 w-32 h-32 object-cover"
                  />
                )}

                <Input
                  label="Slider description"
                  placeholder="Enter the slider description"
                  type="text"
                  isRequired
                  name="shortDescription"
                  value={slider?.shortDescription || ""}
                  onChange={handleSliderImageInputChange}
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
