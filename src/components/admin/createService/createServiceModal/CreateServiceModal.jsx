import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";
import axios from "axios";
import { useCreateServiceMutation } from "../../../../redux/serviceSlice";
import toast from "react-hot-toast";

export default function CreateServiceModal({ isOpen, onOpenChange }) {
  const [service, setService] = useState({
    title: "",
    image: "",
    description: "",
  });

  const [createService] = useCreateServiceMutation();

  const [uploading, setUploading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setService((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true); // Indicate upload in progress
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Rafi_2");
    formData.append("folder", "client_projects"); // Replace with your Cloudinary cloud name

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dychzis9w/image/upload",
        formData
      );

      setService((prev) => ({ ...prev, image: response.data.secure_url }));
    } catch (error) {
      console.error("Image upload failed:", error);
    } finally {
      setUploading(false); // End upload indication
    }
  };

  const handleServiceFormSubmit = async (e) => {
    e.preventDefault();
    try {

      const result = await createService(service);

      if(result?.data) {
        toast.success("Service created successfully!")
      } else {
        toast.error("Service do not created successfully!")
      }

    } catch (err) {
      toast.error(err?.message)
    }
    console.log("service", service);
  };

  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create a service
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Title"
                  placeholder="Enter your service title"
                  type="text"
                  name="title"
                  defaultValue={service?.title || ""}
                  onChange={handleInputChange}
                />
                <label
                  className="block text-sm font-medium text-gray-900"
                  htmlFor="file_input"
                >
                  Upload service image
                </label>
                <input
                  className="p-5 block w-full text-sm text-gray-900 border border-[#f4f4f5] rounded-lg cursor-pointer bg-[#f4f4f5]"
                  id="file_input"
                  type="file"
                  name="service_image"
                  onChange={handleFileChange}
                />
                {uploading && <p>Uploading image...</p>}
                {service.image && (
                  <img
                    src={service.image}
                    alt="Uploaded service"
                    className="mt-2 w-24 h-auto rounded-md"
                  />
                )}
                <Textarea
                  disableAnimation
                  disableAutosize
                  name="description"
                  defaultValue={service?.description || ""}
                  onChange={handleInputChange}
                  className="mt-3"
                  classNames={{
                    base: "max-w-full",
                    input: "resize-y min-h-[40px]",
                  }}
                  label="Description"
                  placeholder="Enter your description"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  onClick={(e) => {
                    handleServiceFormSubmit(e);
                    onClose();
                  }}
                  color="primary"
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
