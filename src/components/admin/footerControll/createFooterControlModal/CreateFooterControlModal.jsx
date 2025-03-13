import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import axios from "axios";
import { useCreateFooterDesignMutation } from "../../../../redux/footerSlice";
import toast from "react-hot-toast";

export default function CreateFooterControlModal({ isOpen, onOpenChange }) {
  const [footerData, setFooterData] = useState({
    imageLink: "",
    imageTitle: "",
    mainTitle: "",
    subTitle: "",
    colorCode: "",
  });

  const [uploading, setUploading] = useState(false);

  const [createFooterDesign, { isLoading }] = useCreateFooterDesignMutation();

  // Handle image upload to Cloudinary
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true); // Indicate upload in progress
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Rafi_2"); // Your Cloudinary upload preset
    formData.append("folder", "client_projects"); // Your Cloudinary folder

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dychzis9w/image/upload",
        formData
      );

      // Update the state with the image URL
      setFooterData((prev) => ({
        ...prev,
        imageLink: response.data.secure_url,
      }));
    } catch (error) {
      console.error("Image upload failed:", error);
    } finally {
      setUploading(false); // End upload indication
    }
  };

  // Handle text inputs
  const handleInputDataChange = (e) => {
    const { name, value } = e.target;
    setFooterData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!footerData.imageLink) {
      toast.error("Please upload an image before submitting.");
      return;
    }

    try {
      const result = await createFooterDesign(footerData);
      if (result?.data) {
        toast.success("Footer design integrated.");
        setFooterData({
          imageLink: "",
          imageTitle: "",
          mainTitle: "",
          subTitle: "",
          colorCode: "",
        });
      } else {
        toast.error("Footer design is not integrated.");
      }
    } catch (err) {
      toast.error("Something is wrong. Try again.", err);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create Footer
              </ModalHeader>
              <ModalBody>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mb-2"
                />
                {uploading && <p>Uploading image...</p>}
                {footerData.imageLink && (
                  <img
                    src={footerData.imageLink}
                    alt="Uploaded Preview"
                    className="w-full h-40 object-cover rounded-md mt-2"
                  />
                )}

                <Input
                  type="text"
                  placeholder="Enter the image title"
                  name="imageTitle"
                  value={footerData.imageTitle}
                  onChange={handleInputDataChange}
                />
                <Input
                  type="text"
                  placeholder="Enter the main title"
                  name="mainTitle"
                  value={footerData.mainTitle}
                  onChange={handleInputDataChange}
                />
                <Input
                  type="text"
                  placeholder="Enter the sub title"
                  name="subTitle"
                  value={footerData.subTitle}
                  onChange={handleInputDataChange}
                />
                <Input
                  type="color"
                  name="colorCode"
                  value={footerData.colorCode}
                  onChange={handleInputDataChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onClick={handleFormSubmit}
                  isDisabled={isLoading}
                >
                  {isLoading ? "Uploading..." : "Submit"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
