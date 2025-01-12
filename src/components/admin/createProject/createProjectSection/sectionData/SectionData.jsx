import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Image } from "@nextui-org/image";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button, Spinner } from "@nextui-org/react";
import DotIcon from "../../../../../assets/DotIcon";
import { useDeleteAProjectSectionMutation } from "../../../../../redux/projectSlice";
import toast from "react-hot-toast";

export default function SectionData({ sectionData, isLoading, projectId }) {
  const [deleteAProjectSection] = useDeleteAProjectSectionMutation();

  const handleSectionDelete = async (sectionId) => {
    try {
      const result = await deleteAProjectSection({ projectId, sectionId });
      if (result?.data) {
        toast.success("Section Deleted!");
      } else {
        toast.error("Something is wrong!");
      }
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <div className="text-black">
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>SECTION NAME</TableColumn>
          <TableColumn>IMAGE</TableColumn>
          <TableColumn>DESCRIPTION</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody
          isLoading={isLoading}
          loadingContent={<Spinner label="Loading..." />}
        >
          {sectionData?.map((section) => (
            <TableRow key={section?._id}>
              <TableCell>{section?.subTitle}</TableCell>
              <TableCell>
                <Image alt={section?.image} src={section?.image} width={350} height={150} />
              </TableCell>

              <TableCell>{section?.shortDescription}</TableCell>

              <TableCell>
                <Dropdown backdrop="blur">
                  <DropdownTrigger>
                    <Button isIconOnly variant="bordered">
                      <DotIcon />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem className="text-success" color="success">
                      Edit section
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => handleSectionDelete(section?._id)}
                      className="text-danger"
                      color="danger"
                    >
                      Delete section
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
