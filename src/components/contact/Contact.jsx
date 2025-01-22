import { Button, Image } from "@nextui-org/react";
import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { Input, Textarea } from "@nextui-org/input";
import MailIcon from "../../assets/MailIcon";
import PhoneIcon from "../../assets/PhoneIcon";
import LocationIcon from "../../assets/LocationIcon";
import { useCreateContactMutation } from "../../redux/contactSlice";
import toast from "react-hot-toast";

export const enquiryTypes = [
  { key: "booking_appointment", label: "Booking Appointment" },
  { key: "get_quote", label: "Get Quote" },
  { key: "partner", label: "Partner" },
  { key: "join_our_team", label: "Join Our Team" },
];

export default function Contact() {
  const [value, setValue] = useState(new Set([]));

  const [createContact] = useCreateContactMutation();

  const [formData, setFormData] = useState({
    type: "",
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createContact(formData);

      if (result?.data) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Message not sent!");
      }
    } catch (err) {
      toast.error(err?.message);
    }
    console.log("formData", formData);
  };

  return (
    <div>
      <div className="relative flex flex-col">
        <Image
          alt="NextUI hero Image"
          src="https://interior.sg/images/contact/banner-img.jpg"
          width="100%"
          radius="none"
        />
        <div className="absolute inset-0 flex items-center flex-col justify-center text-white font-bold bg-black bg-opacity-20 inter text-7xl z-30">
          <p className="text-center inter text-2xl tracking-widest">
            Contact Us
          </p>
          <p className="text-center mt-3">Let's Talk</p>
        </div>
      </div>
      <div className="mt-10 mb-10 container mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
          <div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.747756031005!2d103.88603018363618!3d1.3273246582111646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17b4e5555555%3A0xe620ff5ae87e70b4!2sA%20%26%20D%20Designer%E2%80%99s%20Group%20Pte%20Ltd!5e0!3m2!1sen!2sbd!4v1734875247428!5m2!1sen!2sbd"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="bg-[#a89687] mt-8 p-8 text-white text-4xl font-semibold inter">
              <p className="tracking-wider">Contact Us!</p>
              <hr className="h-px mt-5 bg-gray-200 border-0" />
              <div className="mt-5 flex flex-row items-center">
                <MailIcon /> <p className="text-xl ms-4">enquiry@interior.sg</p>
              </div>
              <div className="mt-5 flex flex-row items-center">
                <PhoneIcon /> <p className="text-xl ms-4">01998828</p>
              </div>
              <div className="mt-5 flex flex-row items-center">
                <LocationIcon />
                <p className="text-xl ms-4">
                  140 Paya Lebar Rd, #02-13 AZ@Paya Lebar, Singapore 409015
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div>
              <p className="text-4xl inter font-bold tracking-wider mb-6">
                Book an appointment
              </p>
              <p className="text-xl inter">
                Get in touch using the form with our designers and enjoy a
                unique experience!
              </p>
              <p className="text-xl inter mt-5">We’ll get back to you soon!</p>
              <hr className="h-px my-8 bg-[#666666]" />
              <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
                <div>
                  <Select
                    isRequired
                    className="max-w-full inter"
                    defaultSelectedKeys={["booking_appointment"]}
                    label="Enquiry Type"
                    placeholder="Select an enquiry type"
                    selectedKeys={new Set([formData.type])}
                    onSelectionChange={(keys) =>
                      handleInputChange("type", Array.from(keys)[0])
                    }
                  >
                    {enquiryTypes?.map((item) => (
                      <SelectItem className="inter" key={item.key}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div>
                  <Input
                    isRequired
                    label="Your name"
                    className="inter"
                    placeholder="Enter your name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    isRequired
                    label="Phone Number"
                    className="inter"
                    placeholder="Enter your phone number"
                    type="text"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      handleInputChange("phoneNumber", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Input
                    isRequired
                    label="Email Address"
                    className="inter"
                    placeholder="Enter your email address"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
              </div>
              <Textarea
                isRequired
                className="max-w-full inter mt-5"
                isClearable
                minRows={10}
                label="Message"
                placeholder="Enter your message..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
              />
              <Button
                className="mt-5 inter"
                color="primary"
                onClick={handleFormSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
