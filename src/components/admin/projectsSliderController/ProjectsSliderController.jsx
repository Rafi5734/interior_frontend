import React from "react";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Spinner,
  Image,
} from "@nextui-org/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import AddIcon from "../../../assets/AddIcon";
import { Button } from "@nextui-org/react";
import DotIcon from "../../../assets/DotIcon";

import { useDisclosure } from "@nextui-org/react";
import ProjectSliderModal from "./projectSliderModal/ProjectSliderModal";
import {
  useDeleteAProjectSliderMutation,
  useGetAllProjectSlidersQuery,
} from "../../../redux/projectSliderSlice";
import toast from "react-hot-toast";

export default function ProjectsSliderController() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { data: getAllProjectSlider, isLoading: projectSliderLoader } =
    useGetAllProjectSlidersQuery();

  const [deleteAProjectSlider] = useDeleteAProjectSliderMutation();

  const handleProjectSliderDelete = async (projectSliderId) => {
    try {
      const result = await deleteAProjectSlider(projectSliderId);
      if (result?.data) {
        toast.success("Project slider deleted!");
      } else {
        toast.error("Project do not deleted!");
      }
    } catch (err) {
      toast.error(err?.message);
    }
    // console.log("projectSliderId", projectSliderId);
  };

  return (
    <div className="pt-36 bg-[#25373b] text-white ps-4 pe-4">
      <p
        className="text-center pt-5 pb-5 text-5xl font-bold underline underline-offset-4"
      >
        Project slider controlling
      </p>
      <div className="pb-10 mt-10">
        <Button onPress={onOpen} color="primary" startContent={<AddIcon />}>
          Add a project slide
        </Button>

        <ProjectSliderModal isOpen={isOpen} onOpenChange={onOpenChange} />

        <Table
          className="mt-10 text-black"
          aria-label="Example static collection table"
        >
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>IMAGE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody
            isLoading={projectSliderLoader}
            loadingContent={<Spinner label="Loading..." />}
          >
            {getAllProjectSlider?.map((projectSlider) => (
              <TableRow key={projectSlider?._id}>
                <TableCell>{projectSlider?.projectName}</TableCell>
                <TableCell>
                  <Image src={projectSlider?.image} width={150} />
                </TableCell>
                <TableCell>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button isIconOnly variant="bordered">
                        <DotIcon />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                      <DropdownItem
                        key="delete"
                        className="text-danger"
                        color="danger"
                        onClick={() =>
                          handleProjectSliderDelete(projectSlider?._id)
                        }
                      >
                        Delete file
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
