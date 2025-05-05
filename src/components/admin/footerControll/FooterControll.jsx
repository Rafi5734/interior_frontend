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
import CreateFooterControlModal from "./createFooterControlModal/CreateFooterControlModal";
import {
  useDeleteAFooterDesignMutation,
  useGetAllFooterDesignQuery,
} from "../../../redux/footerSlice";
import toast from "react-hot-toast";
export default function FooterControll() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { data: getAllData, isLoading } = useGetAllFooterDesignQuery();
  const [deleteAFooterDesign] = useDeleteAFooterDesignMutation();

  const handleDeleteFooter = async (footerId) => {
    try {
      const result = await deleteAFooterDesign(footerId);
      if (result?.data) {
        toast.success("Footer design deleted");
      } else {
        toast.error("Footer design not deleted");
      }
    } catch (err) {
      toast.error("Something is wrong", err);
    }
  };

  //   console.log("getAllData", getAllData);

  return (
    <div className="bg-[#25373b] text-white pt-36 z-30 ps-4 pe-4 pb-10">
      <p className="inter text-center font-bold text-5xl">Footer control</p>
      <div className="container mx-auto mt-10 mb-10">
        <Tooltip content="Create footer section design">
          <Button onPress={onOpen} isIconOnly color="primary">
            <AddIcon />
          </Button>
        </Tooltip>

        <CreateFooterControlModal isOpen={isOpen} onOpenChange={onOpenChange} />

        <Table
          aria-label="Example static collection table"
          className="mt-5 mb-5 text-black"
        >
          <TableHeader>
            <TableColumn>IMAGE</TableColumn>
            <TableColumn>IMAGE TITLE</TableColumn>
            <TableColumn>MAIN TITLE</TableColumn>
            <TableColumn>SUB TITLE</TableColumn>
            <TableColumn>ACTIONS</TableColumn>
          </TableHeader>
          <TableBody isLoading={isLoading}>
            {getAllData?.map((footer) => (
              <TableRow key={footer?._id}>
                <TableCell>
                  <Image
                    alt={footer?.imageLink}
                    src={footer?.imageLink}
                    width={200}
                  />
                </TableCell>
                <TableCell>{footer?.imageTitle}</TableCell>
                <TableCell>{footer?.mainTitle}</TableCell>
                <TableCell>{footer?.subTitle}</TableCell>
                <TableCell>
                  <Tooltip content="Delete footer design">
                    <Button
                      onClick={() => handleDeleteFooter(footer?._id)}
                      size="sm"
                      isIconOnly
                      color="danger"
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
