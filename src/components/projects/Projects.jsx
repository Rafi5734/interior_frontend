import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
} from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Footer from "../../footer/Footer";
import MainNavbar from "../mainNavbar/MainNavbar";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

import MenuIcon from "../../assets/menuIcon";

export const MainLogo = () => {
  return (
    <Image
      alt="NextUI hero Image"
      src="https://interior.sg/images/nav/a&d-white-logo.png"
      width={153}
    />
  );
};

export default function Projects() {
  return (
    <div className="">
      <Navbar className="bg-transparent main_navbar fixed top-0 w-full z-[100] pt-8 pb-8">
        <NavbarBrand>
          <Link to="/">
            <MainLogo />
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
            <Link className="text-white inter" aria-current="page" href="#">
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
                <Button className="bg-transparent" variant="flat">
                  <MenuIcon />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions" className="inter">
                <DropdownItem>
                  <Link to="/">Our Services</Link>
                </DropdownItem>
                <DropdownItem key="copy">Contact</DropdownItem>
                <DropdownItem key="copy">About Us</DropdownItem>
                <DropdownItem>
                  <Link to="/projects/details">Projects</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className="relative flex flex-col">
        <Image
          alt="NextUI hero Image"
          src="https://interior.sg/images/default/default-section-one-banner-one.webp"
          width="100%"
          radius="none"
        />
        <div className="absolute inset-0 flex items-center flex-col justify-center text-white font-bold bg-black bg-opacity-20 inter text-7xl z-50">
          <p className="text-center inter text-2xl">Our Projects</p>
          <p className="text-center mt-3">
            Interior Design for HDB Residential in Singapore
          </p>
          <p className="text-base text-center w-11/12 mt-8 font-medium tracking-wide">
            At A & D Designer's Group, we specialize in transforming HDB flats
            into stunning and functional homes. Plus, our experienced team
            excels at creating innovative, space-saving solutions that maximize
            every inch of your HDB, whether it's a BTO, resale flat, or
            executive apartment. We're committed to delivering top-quality
            interior design services that bring your dream home to life.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute right-0 flex w-full h-full flex-col bg-[#e5e0db]">
          <Tabs aria-label="Options" className="mt-5 ms-5">
            <Tab
              key="hdb"
              title="HDB Residential"
              className="p-8 text-lg inter"
            >
              <Card className="mb-10">
                <CardBody>
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
                    <div className="m-5 inter font-bold text-xl">
                      <p>Our Resale HDB Projects</p>
                      <Image
                        src="https://interior.sg/images/projects/HDB-Residential/1-project-image.jpg"
                        alt="hbd project image"
                        className="w-full h-full mt-10"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-center text-5xl	font-semibold inter">
                        HDB Renovation at Blk 95 Tampines
                      </p>
                      <p className="text-center text-lg font-medium inter mt-8">
                        Our team brought rustic charm to this HDB flat, using
                        natural textures and a warm color palette to create a
                        tranquil and inviting space.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-center text-5xl	font-semibold inter">
                        HDB Renovation at Blk 95 Tampines
                      </p>
                      <p className="text-center text-lg font-medium inter mt-8">
                        Our team brought rustic charm to this HDB flat, using
                        natural textures and a warm color palette to create a
                        tranquil and inviting space.
                      </p>
                    </div>
                    <div className="m-5 inter font-bold text-xl">
                      <Image
                        src="https://interior.sg/images/projects/HDB-Residential/1-project-image.jpg"
                        alt="hbd project image"
                        className="w-full h-full mt-10"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="mb-10 mt-10">
                <CardBody>
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
                    <div className="m-5 inter font-bold text-xl">
                      <p>Our Resale HDB Projects</p>
                      <Image
                        src="https://interior.sg/images/projects/HDB-Residential/1-project-image.jpg"
                        alt="hbd project image"
                        className="w-full h-full mt-10"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-center text-5xl	font-semibold inter">
                        HDB Renovation at Blk 95 Tampines
                      </p>
                      <p className="text-center text-lg font-medium inter mt-8">
                        Our team brought rustic charm to this HDB flat, using
                        natural textures and a warm color palette to create a
                        tranquil and inviting space.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-center text-5xl	font-semibold inter">
                        HDB Renovation at Blk 95 Tampines
                      </p>
                      <p className="text-center text-lg font-medium inter mt-8">
                        Our team brought rustic charm to this HDB flat, using
                        natural textures and a warm color palette to create a
                        tranquil and inviting space.
                      </p>
                    </div>
                    <div className="m-5 inter font-bold text-xl">
                      <Image
                        src="https://interior.sg/images/projects/HDB-Residential/1-project-image.jpg"
                        alt="hbd project image"
                        className="w-full h-full mt-10"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="condominium"
              title="Condominium"
              className="p-8 text-lg inter"
            >
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="landed"
              title="Landed Housing"
              className="p-8 text-lg inter"
            >
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="commerce"
              title="Commercial & Others"
              className="p-8 text-lg inter"
            >
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="bto" title="BTO" className="p-8 text-lg inter">
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="kitchen" title="Kitchen" className="p-8 text-lg inter">
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
          <Footer />
        </div>
      </div>
    </div>
  );
}
