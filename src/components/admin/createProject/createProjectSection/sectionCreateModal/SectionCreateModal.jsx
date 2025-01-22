import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { Input, Textarea } from "@nextui-org/input";
import AddIcon from "../../../../../assets/AddIcon";
import toast from "react-hot-toast";
import { useCreateSectionMutation } from "../../../../../redux/projectSlice";

export default function SectionCreateModal({
  isOpen,
  onOpenChange,
  projectId,
}) {
  const [sectionTitle, setSectionTitle] = useState({
    subTitle: "",
    image: "",
    shortDescription: "",
  });

  const [createSection, { isLoading }] = useCreateSectionMutation();

  const handleSectionInputChange = async (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files?.length > 0) {
      const file = files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "Rafi_2");
      formData.append("folder", "client_projects");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dychzis9w/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        if (data?.secure_url) {
          toast.success("Image uploaded");
        } else {
          toast.error("Image not uploaded!");
        }
        // console.log("Uploaded image URL:", data.secure_url);

        // Update state with the uploaded image URL
        setSectionTitle((prevData) => ({
          ...prevData,
          image: data.secure_url,
        }));
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
      }
    } else {
      setSectionTitle((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSectionFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createSection({
        sectionTitle,
        projectId,
      });
      if (result?.data) {
        toast.success("Section created!");
      } else {
        toast.error("Something is wrong. Try again!");
      }
    } catch (e) {
      toast.error(e.message);
    }

    // console.log("sectionTitle", sectionTitle);
  };
  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create a section
              </ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  label="Section Title"
                  placeholder="Enter a section title"
                  type="text"
                  name="subTitle"
                  defaultValue={sectionTitle?.subTitle || ""}
                  onChange={handleSectionInputChange}
                />
                <label
                  className="block text-sm font-medium text-gray-900"
                  htmlFor="file_input"
                >
                  Upload section image
                </label>
                <input
                  className="p-5 block w-full text-sm text-gray-900 border border-[#f4f4f5] rounded-lg cursor-pointer bg-[#f4f4f5]"
                  id="file_input"
                  type="file"
                  name="image"
                  onChange={handleSectionInputChange}
                />
                <Textarea
                  className="w-full"
                  classNames={{
                    base: "max-w-full",
                    input: "resize-y min-h-[80px]",
                  }}
                  disableAutosize
                  label="Description"
                  placeholder="Enter your description"
                  name="shortDescription"
                  defaultValue={sectionTitle?.shortDescription || ""}
                  onChange={handleSectionInputChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  onClick={(e) => handleSectionFormSubmit(e)}
                  startContent={<AddIcon />}
                  color="primary"
                  onPress={onClose}
                >
                  Create a section
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
