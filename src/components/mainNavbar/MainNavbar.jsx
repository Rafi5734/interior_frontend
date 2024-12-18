import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";

import { Image } from "@nextui-org/image";

import MenuIcon from "../../assets/menuIcon";

import "./mainNavbar.css";

export const MainLogo = () => {
  return (
    <Image
      alt="NextUI hero Image"
      src="https://interior.sg/images/nav/a&d-white-logo.png"
      width={153}
    />
  );
};

const MainNavbar = () => {
  return (
    <div>
      <Navbar className="bg-transparent main_navbar fixed top-0 w-full z-50 pt-8 pb-8">
        <NavbarBrand>
          <MainLogo />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link className="text-white inter" href="#">
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white inter" aria-current="page" href="#">
              Contacts
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  as={Link}
                  className="bg-transparent"
                  href="#"
                  variant="flat"
                >
                  <MenuIcon />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">Our Services</DropdownItem>
                <DropdownItem key="copy">Contact</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
