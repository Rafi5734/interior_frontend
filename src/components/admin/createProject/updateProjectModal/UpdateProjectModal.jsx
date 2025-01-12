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
import {
  useGetASingleProjectsQuery,
  useProjectUpdateMutation,
} from "../../../../redux/projectSlice";
import toast from "react-hot-toast";

export default function UpdateProjectModal({
  isOpen,
  onOpenChange,
  projectId,
}) {
  const { data: getASingleProject } = useGetASingleProjectsQuery(projectId);

  const [projectUpdate, { isLoading }] = useProjectUpdateMutation();
  //   console.log("single project", getASingleProject?.title);
  const [updateProjectData, setUpdateProjectData] = useState({
    title: "",
  });

  const handleProjectInputChnage = (e) => {
    const { name, value } = e.target;
    setUpdateProjectData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdateProjectForm = async (e) => {
    e.preventDefault();
    try {
      const result = await projectUpdate({ updateProjectData, projectId });
      if (result?.data) {
        toast.success("Project title updated!");
      } else {
        toast.error("Something is wrong. Try again!");
      }
    } catch (e) {
      toast.error(e.message);
    }

    setUpdateProjectData({ title: "" });

    // console.log("Update", updateProjectData);
  };
  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 inter">
                Update {getASingleProject?.title}
              </ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  label="Project Title"
                  placeholder="Enter project title"
                  type="text"
                  name="title"
                  value={updateProjectData?.title || getASingleProject?.title}
                  onChange={handleProjectInputChnage}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  onClick={(e) => handleUpdateProjectForm(e)}
                  color="primary"
                  onPress={onClose}
                >
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
