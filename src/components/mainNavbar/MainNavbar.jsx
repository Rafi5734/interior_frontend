import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

import { Image } from "@nextui-org/image";

import MenuIcon from "../../assets/menuIcon";

import { Link } from "react-router-dom";

import "./mainNavbar.css";
import { useGetAllNavbarQuery } from "../../redux/navLogoSlice";

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
  const { data: getAllNavData } = useGetAllNavbarQuery();

  return (
    <div className="container mx-auto">
      <Navbar className="bg-transparent main_navbar fixed top-0 w-full z-50 pt-8 pb-8 forum">
        <NavbarBrand className="flex justify-center items-center">
          <Link to="/">
            {getAllNavData?.map((content) => (
              <p
                key={content?._id}
                className="text-5xl text-white italic text-center font-bold"
              >
                {content?.content}
              </p>
            ))}
          </Link>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link className="text-white inter" to="/">
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/contact" className="text-white inter">
              Contacts
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white inter" aria-current="page" to="/">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-white inter"
              aria-current="page"
              to="/projects/details"
            >
              Projects
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
              <DropdownMenu aria-label="Static Actions" className="inter">
                <DropdownItem>
                  <Link to="/" className="text-black">
                    Our Services
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/contact">Contact</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/">About Us</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/projects/details">Projects</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
