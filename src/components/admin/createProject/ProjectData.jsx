import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import DotIcon from "../../../assets/DotIcon";
import { Button } from "@nextui-org/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

export default function ProjectData() {
  return (
    <div className="text-black">
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>IMAGE</TableColumn>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>
              <Dropdown backdrop="blur">
                <DropdownTrigger>
                  <Button variant="bordered" isIconOnly>
                    <DotIcon />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions" variant="faded">
                  <DropdownItem key="new" className="inter">Add project sections </DropdownItem>
                  <DropdownItem key="new" className="inter">Edit project sections </DropdownItem>
                  <DropdownItem key="copy" className="inter">See all project sections </DropdownItem>
                  <DropdownItem
                    key="edit"
                    className="text-[#15b55a] inter"
                    color="success"
                    
                  >
                    Edit project
                  </DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger inter"
                    color="danger"
                    
                  >
                    Delete project
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
