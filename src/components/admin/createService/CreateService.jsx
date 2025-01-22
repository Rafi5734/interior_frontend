import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";
import AddIcon from "../../../assets/AddIcon";
import DotIcon from "../../../assets/DotIcon";

import { useDisclosure } from "@nextui-org/react";
import CreateServiceModal from "./createServiceModal/CreateServiceModal";
import {
  useDeleteAServiceMutation,
  useGetAllServiceQuery,
} from "../../../redux/serviceSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
export default function CreateService() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { data: getAllServices, isLoading } = useGetAllServiceQuery();

  const [deleteAService] = useDeleteAServiceMutation();

  const handleDeleteService = async (serviceId) => {
    try {
      const result = await deleteAService(serviceId);
      if (result?.data) {
        toast.success("Service deleted successfully!");
      } else {
        toast.error("Service do not deleted!");
      }
    } catch (err) {
      toast.error(err?.message);
    }
  };

  // console.log("getAllServices", getAllServices);

  return (
    <div className="pt-36 bg-[#25373b] text-white ps-4 pe-4">
      <p className="text-center pt-5 pb-10 text-5xl font-bold underline underline-offset-4">
        Services controller
      </p>

      <Button onPress={onOpen} startContent={<AddIcon />} color="primary">
        Create a service
      </Button>

      <CreateServiceModal isOpen={isOpen} onOpenChange={onOpenChange} />

      <Table
        aria-label="Example static collection table"
        className="text-black mt-5 pb-10"
      >
        <TableHeader>
          <TableColumn>TITLE</TableColumn>
          <TableColumn>IMAGE</TableColumn>
          <TableColumn>DESCRIPTION</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody>
          {getAllServices?.map((service) => (
            <TableRow key={service?._id}>
              <TableCell>{service?.title}</TableCell>
              <TableCell>{service?.description}</TableCell>
              <TableCell>
                <Image src={service?.image} width={200} />
              </TableCell>
              <TableCell>
                <Dropdown backdrop="blur">
                  <DropdownTrigger>
                    <Button variant="bordered" isIconOnly>
                      <DotIcon />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions" variant="faded">
                    <DropdownItem
                      className="text-danger inter"
                      color="danger"
                      onClick={() => handleDeleteService(service?._id)}
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
    </div>
  );
}
