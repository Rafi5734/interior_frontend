import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { useDisclosure } from "@nextui-org/modal";

import AddIcon from "../../../assets/AddIcon";
import DeleteIcon from "../../../assets/DeleteIcon";
import {
  useDeleteAContactInfoMutation,
  useGetAllContactInfoQuery,
} from "../../../redux/contactInfoSlice";
import toast from "react-hot-toast";
import CreateContactInfoModal from "./createContactInfoModal/CreateContactInfoModal";
export default function ChangeContactInfo() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { data: getAllContactInfo, isLoading: contactInfoLoader } =
    useGetAllContactInfoQuery();
  const [deleteAContactInfo, { isLoading: deleteLoader }] =
    useDeleteAContactInfoMutation();

  const handleDeleteNavbar = async (navId) => {
    try {
      const res = await deleteAContactInfo(navId);
      if (res?.data) {
        toast.success("Contact Info Added.");
      } else {
        toast.error("Contact Info Not Added.");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="bg-[#25373b] text-white pt-36 z-30 ps-4 pe-4 pb-10">
      <p className="inter text-center font-bold text-5xl">
        Change Contact Info
      </p>

      <div className="container mx-auto mt-10 mb-10">
        {getAllContactInfo?.length < 1 ? (
          <Tooltip content="Create footer section design">
            <Button onPress={onOpen} isIconOnly color="primary">
              <AddIcon />
            </Button>
          </Tooltip>
        ) : (
          <Tooltip content="Create footer section design">
            <Button isDisabled onPress={onOpen} isIconOnly color="primary">
              <AddIcon />
            </Button>
          </Tooltip>
        )}

        <CreateContactInfoModal isOpen={isOpen} onOpenChange={onOpenChange} />

        <Table
          aria-label="Example static collection table"
          className="mt-5 mb-5 text-black"
        >
          <TableHeader>
            <TableColumn>Email</TableColumn>
            <TableColumn>Phone Number</TableColumn>
            <TableColumn>Address</TableColumn>
            <TableColumn>Map</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody isLoading={contactInfoLoader}>
            {getAllContactInfo?.map((footer) => (
              <TableRow key={footer?._id}>
                <TableCell>{footer?.email}</TableCell>
                <TableCell>{footer?.phone_number}</TableCell>
                <TableCell>{footer?.address}</TableCell>
                <TableCell>
                  <iframe
                    src={footer?.location_iframe}
                    width="100%"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </TableCell>
                <TableCell>
                  <Tooltip content="Delete nav data">
                    <Button
                      onClick={() => handleDeleteNavbar(footer?._id)}
                      size="sm"
                      isIconOnly
                      color="danger"
                      isLoading={deleteLoader}
                    >
                      <DeleteIcon size="24px" color="#ffffff" />
                    </Button>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
