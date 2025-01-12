import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import DotIcon from "../../../assets/DotIcon";
import { Button, Spinner } from "@nextui-org/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {
  useDeleteAProjectMutation,
  useGetAllProjectsQuery,
} from "../../../redux/projectSlice";
import toast from "react-hot-toast";

import { useDisclosure } from "@nextui-org/modal";
import UpdateProjectModal from "./updateProjectModal/UpdateProjectModal";
import { Link } from "react-router-dom";

export default function ProjectData() {
  const [projectId, setProjectId] = useState();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { data: getAllProjectsData, isLoading } = useGetAllProjectsQuery();
  const [deleteAProject] = useDeleteAProjectMutation();

  const handleUpdateProject = (projectId) => {
    setProjectId(projectId);
  };

  const handleDeleteProject = async (projectId) => {
    try {
      const result = await deleteAProject(projectId);
      if (result?.data) {
        toast.success("Project Deleted!");
      } else {
        toast.error("Project not deleted. Try again!");
      }
    } catch (e) {
      toast.error(e.message);
    }
    // console.log("delete", projectId);
  };
  return (
    <div className="text-black">
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>CREATED AT</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody
          isLoading={isLoading}
          loadingContent={<Spinner label="Loading..." />}
        >
          {getAllProjectsData?.map((project) => (
            <TableRow key={project?._id}>
              <TableCell>{project?.title}</TableCell>
              <TableCell>
                {new Date(project?.createdAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </TableCell>

              <TableCell>
                <Dropdown backdrop="blur">
                  <DropdownTrigger>
                    <Button variant="bordered" isIconOnly>
                      <DotIcon />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions" variant="faded">
                    <DropdownItem className="inter">
                      Add project sections{" "}
                    </DropdownItem>
                    <DropdownItem className="inter">
                      <Link
                        to={`/admin/create-project/section?projectId=${project?._id}`}
                      >
                        See all sections
                      </Link>
                    </DropdownItem>
                    <DropdownItem
                      className="text-[#15b55a] inter"
                      color="success"
                      onPress={onOpen}
                      onClick={() => handleUpdateProject(project?._id)}
                    >
                      Edit project
                    </DropdownItem>
                    <DropdownItem
                      className="text-danger inter"
                      color="danger"
                      onClick={() => handleDeleteProject(project?._id)}
                    >
                      Delete project
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <UpdateProjectModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        projectId={projectId}
      />
    </div>
  );
}
