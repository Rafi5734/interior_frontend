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
import { Image } from "@nextui-org/image";
import { useDisclosure } from "@nextui-org/modal";
import AddIcon from "../../../assets/AddIcon";
import DeleteIcon from "../../../assets/DeleteIcon";
import {
  useDeleteANavbarMutation,
  useGetAllNavbarQuery,
} from "../../../redux/navLogoSlice";
import CreateNavContentModal from "./createNavContentModal/CreateNavContentModal";
import toast from "react-hot-toast";
export default function NavbarLogoControll() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { data: getAllNavData, isLoading: navLoader } = useGetAllNavbarQuery();
  const [deleteANavbar, { isLoading: deleteLoader }] =
    useDeleteANavbarMutation();

  const handleDeleteNavbar = async (navId) => {
    try {
      const res = await deleteANavbar(navId);
      if (res?.data) {
        toast.success("Nav content deleted.");
      } else {
        toast.error("Nav content not deleted.");
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="bg-[#25373b] text-white pt-36 z-30 ps-4 pe-4 pb-10">
      <p className="inter text-center font-bold text-5xl">
        Navbar Logo Control
      </p>

      <div className="container mx-auto mt-10 mb-10">
        {getAllNavData?.length < 1 ? (
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

        <CreateNavContentModal isOpen={isOpen} onOpenChange={onOpenChange} />

        <Table
          aria-label="Example static collection table"
          className="mt-5 mb-5 text-black"
        >
          <TableHeader>
            <TableColumn>Nav Content</TableColumn>
            <TableColumn>Created At</TableColumn>
            <TableColumn>ACTIONS</TableColumn>
          </TableHeader>
          <TableBody isLoading={navLoader}>
            {getAllNavData?.map((footer) => (
              <TableRow key={footer?._id}>
                <TableCell>{footer?.content}</TableCell>
                <TableCell>{footer?.timestamp}</TableCell>
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
