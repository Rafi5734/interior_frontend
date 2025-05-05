import { useState } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

import { Input } from "@nextui-org/input";
import { useCreateANavContentMutation } from "../../../../redux/navLogoSlice";
import toast from "react-hot-toast";

export default function CreateNavContentModal({ isOpen, onOpenChange }) {
  const [footerData, setFooterData] = useState({
    content: "",
  });

  const [createANavContent, { isLoading }] = useCreateANavContentMutation();

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setFooterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createANavContent(footerData);
      if (res?.data) {
        toast.success("Nav content added.");
      } else {
        toast.error("Nav content not added.");
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setFooterData({ content: "" });
    }
    console.log("formData", footerData);
  };
  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleFormSubmit}>
              <ModalHeader className="flex flex-col gap-1">
                Create a navbar content
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Enter the navabr content"
                  type="text"
                  name="content"
                  value={footerData?.content}
                  onChange={handleInputData}
                />
              </ModalBody>
              <ModalFooter>
                <Button type="submit" color="primary" isLoading={isLoading}>
                  Create
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
