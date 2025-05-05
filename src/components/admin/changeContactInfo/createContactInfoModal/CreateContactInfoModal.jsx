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
import toast from "react-hot-toast";
import { useCreateContactInfoMutation } from "../../../../redux/contactInfoSlice";

export default function CreateContactInfoModal({ isOpen, onOpenChange }) {
  const [footerData, setFooterData] = useState({
    email: "",
    phone_number: "",
    address: "",
    location_iframe: "",
  });

  const [createContactInfo, { isLoading: contactLoader }] =
    useCreateContactInfoMutation();

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setFooterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createContactInfo(footerData);
      if (res?.data) {
        toast.success("Contact Info added.");
      } else {
        toast.error("Contact Info not added.");
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setFooterData({
        email: "",
        phone_number: "",
        address: "",
        location_iframe: "",
      });
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
                  label="Enter the company email"
                  type="email"
                  name="email"
                  value={footerData?.email}
                  onChange={handleInputData}
                />
                <Input
                  label="Enter the company phone number"
                  type="text"
                  name="phone_number"
                  value={footerData?.phone_number}
                  onChange={handleInputData}
                />
                <Input
                  label="Enter the company address"
                  type="text"
                  name="address"
                  value={footerData?.address}
                  onChange={handleInputData}
                />
                <Input
                  label="Enter the company map"
                  type="text"
                  name="location_iframe"
                  value={footerData?.location_iframe}
                  onChange={handleInputData}
                />
              </ModalBody>
              <ModalFooter>
                <Button type="submit" color="primary" isLoading={contactLoader}>
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
