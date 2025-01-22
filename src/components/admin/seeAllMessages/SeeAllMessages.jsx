import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Button,
} from "@nextui-org/react";
import React from "react";
import {
  useDeleteAContactMutation,
  useGetAllContactsQuery,
} from "../../../redux/contactSlice";
import DotIcon from "../../../assets/DotIcon";
import toast from "react-hot-toast";

export default function SeeAllMessages() {
  const { data: getAllMessage, isLoading } = useGetAllContactsQuery();

  const [deleteAContact] = useDeleteAContactMutation();

  const handleDeleteMessage = async (contactId) => {
    try {
      const result = await deleteAContact(contactId);
      if (result?.data) {
        toast.success("Message deleted successfully!");
      } else {
        toast.error("Message not deleted!");
      }
    } catch (err) {
      toast.error(err?.message);
    }
  };
  return (
    <div className="bg-[#25373b] text-white pt-36 z-30 ps-4 pe-4 pb-10">
      <p className="text-center text-5xl font-bold underline underline-offset-4 mt-5">
        See all messages
      </p>

      <Table
        aria-label="Example static collection table"
        className="mt-20 text-black"
      >
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>PHONE NUMBER</TableColumn>
          <TableColumn>EMAIL ADDRESS</TableColumn>
          <TableColumn>TYPE</TableColumn>
          <TableColumn>MESSAGE</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody>
          {getAllMessage?.map((message) => (
            <TableRow key={message?._id}>
              <TableCell>{message?.name}</TableCell>
              <TableCell>{message?.phoneNumber}</TableCell>
              <TableCell>{message?.email}</TableCell>
              <TableCell>{message?.type}</TableCell>
              <TableCell>{message?.message}</TableCell>
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
                      onClick={() => handleDeleteMessage(message?._id)}
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
