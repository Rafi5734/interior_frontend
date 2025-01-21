import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React, { useState } from "react";
import { useCreateProjectSliderMutation } from "../../../../redux/projectSliderSlice";
import toast from "react-hot-toast";

export default function ProjectSliderModal({ isOpen, onOpenChange }) {
  const [projectSlider, setProjectSlider] = useState({
    projectName: "",
    image: "",
    countryName: "",
  });

  const [imageUploading, setImageUploading] = useState(false);

  const [createProjectSlider] = useCreateProjectSliderMutation();

  const handleProjectSliderImageInputChange = (e) => {
    const { name, value } = e.target;
    setProjectSlider((prevData) => ({ ...prevData, [name]: value }));
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
        setProjectSlider((prev) => ({ ...prev, image: data?.secure_url }));
      } else {
        console.error("Upload failed", data);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setImageUploading(false);
    }
  };

  const handleProjectSliderFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createProjectSlider(projectSlider);

      if (result?.data) {
        toast.success("Project slider added!");
      } else {
        toast.error("Project slider not added!");
      }
    } catch (err) {
      toast.error(err?.message);
    }
    // console.log("projectSlider", projectSlider);
  };
  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create a project slide
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Project name"
                  placeholder="Enter project name"
                  type="text"
                  isRequired
                  name="projectName"
                  value={projectSlider?.projectName || ""}
                  onChange={handleProjectSliderImageInputChange}
                />
                <input
                  className="p-5 block w-full text-sm text-gray-900 border border-[#f4f4f5] rounded-lg cursor-pointer bg-[#f4f4f5]"
                  id="image"
                  type="file"
                  name="image"
                  onChange={handleImageUpload}
                />
                {imageUploading && (
                  <p className="text-center">Uploading image...</p>
                )}
                {projectSlider?.image && (
                  <img
                    src={projectSlider?.image}
                    alt="Slider Preview"
                    className="mt-3 w-32 h-32 object-cover"
                  />
                )}
                <Input
                  label="Project country name"
                  placeholder="Enter project country name"
                  type="text"
                  isRequired
                  name="countryName"
                  value={projectSlider?.countryName || ""}
                  onChange={handleProjectSliderImageInputChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  onClick={(e) => handleProjectSliderFormSubmit(e)}
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
