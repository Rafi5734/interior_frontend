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
import DotIcon from "../../../../assets/DotIcon";
import toast from "react-hot-toast";
import { useDeleteASliderMutation } from "../../../../redux/sliderSlice";

export default function SliderData({
  getAllSlidersData,
  isLoading: sliderDataLoader,
}) {
  console.log("getAllSlidersData", getAllSlidersData);

  const [deleteASlider, { isLoading: sliderLoader }] =
    useDeleteASliderMutation();

  const handleSliderDelete = async (sliderId) => {
    try {
      const result = await deleteASlider(sliderId);

      if (result?.data) {
        toast.success("Slider delete successfully!");
      } else {
        toast.error("Slider do not deleted!");
      }
    } catch (err) {
      toast.error(err.message);
    }
    console.log("sliderId", sliderId);
  };
  return (
    <div className="text-black inter">
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>SLIDER NAME</TableColumn>
          <TableColumn>IMAGE</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody
          isLoading={sliderDataLoader}
          loadingContent={<Spinner label="Loading..." />}
        >
          {getAllSlidersData?.map((slider) => (
            <TableRow key={slider?._id}>
              <TableCell>{slider?.sliderName}</TableCell>
              <TableCell>
                <Image
                  alt="NextUI hero Image"
                  src={slider?.sliderImage}
                  width={200}
                />
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
                      onClick={() => handleSliderDelete(slider?._id)}
                    >
                      Delete slider
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
