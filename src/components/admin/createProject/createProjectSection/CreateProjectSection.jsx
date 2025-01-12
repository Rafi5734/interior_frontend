import { Button } from "@nextui-org/react";
import React from "react";
import AddIcon from "../../../../assets/AddIcon";
import SectionData from "./sectionData/SectionData";
import { useSearchParams } from "react-router-dom";
import { useGetASingleProjectsQuery } from "../../../../redux/projectSlice";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import SectionCreateModal from "./sectionCreateModal/SectionCreateModal";

export default function CreateProjectSection() {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("projectId");

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { data: getASingleProject, isLoading } =
    useGetASingleProjectsQuery(projectId);

  // console.log("getASingleProject", getASingleProject?.sections);
  return (
    <div className="bg-[#25373b] text-white">
      <div className="pt-36 z-30 ps-4 pe-4">
        <p className="text-center text-5xl inter pt-10 pb-10 font-bold">
          Manage{" "}
          <span className="text-[#a89687]">{getASingleProject?.title}</span>{" "}
          sections
        </p>
        <Button
          startContent={<AddIcon />}
          variant="shadow"
          color="primary"
          className="mb-10"
          onPress={onOpen}
        >
          Create a section
        </Button>
        <SectionCreateModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          projectId={projectId}
        />
        <SectionData
          sectionData={getASingleProject?.sections}
          isLoading={isLoading}
          projectId={projectId}
        />
      </div>
    </div>
  );
}
