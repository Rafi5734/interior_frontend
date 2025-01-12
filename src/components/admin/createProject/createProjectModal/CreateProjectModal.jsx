import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { useCreateProjectMutation } from "../../../../redux/projectSlice";
import toast from "react-hot-toast";

export default function CreateProjectModal({ isOpen, onOpenChange }) {
  const [createProjectData, setCreateProjectData] = useState({
    title: "",
  });

  const [createProject, { isLoading }] = useCreateProjectMutation();

  const handleProjectInputChange = (e) => {
    const { name, value } = e.target;
    setCreateProjectData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleProjectSubmitForm = async (e, onClose) => {
    e.preventDefault();
    try {
      const result = await createProject(createProjectData);

      if (result?.data) {
        toast.success("Project Created!");
        onClose();
      } else {
        toast.error("Something is wrong. Try Again!");
      }
    } catch (e) {
      toast.error(e.message);
    }

    // console.log("createProject", createProjectData);
    setCreateProjectData({ title: "" });
  };
  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 inter">
                Create a project
              </ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  label="Project Title"
                  placeholder="Enter project title"
                  type="text"
                  name="title"
                  value={createProjectData?.title || ""}
                  onChange={handleProjectInputChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {isLoading ? (
                  <Button isLoading color="primary">
                    Loading
                  </Button>
                ) : (
                  <Button
                    onClick={(e) => handleProjectSubmitForm(e, onClose)}
                    // type="submit"
                    color="primary"
                    // onPress={onClose}
                  >
                    Create
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
