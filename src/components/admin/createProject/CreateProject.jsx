import { Button } from "@nextui-org/react";
import React from "react";
import { useDisclosure } from "@nextui-org/modal";
import CreateProjectModal from "./createProjectModal/CreateProjectModal";
import ProjectData from "./ProjectData";

export default function CreateProject() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="bg-[#25373b] text-white">
      <div className="pt-36 z-30 ps-4 pe-4">
        <p className="text-center text-5xl font-semibold inter">
          Project Management
        </p>
        <Button
          onPress={onOpen}
          variant="shadow"
          color="primary"
          className="mt-10 mb-10 inter "
        >
          Add a project
        </Button>
        <CreateProjectModal isOpen={isOpen} onOpenChange={onOpenChange} />
        <ProjectData />
      </div>
    </div>
  );
}
