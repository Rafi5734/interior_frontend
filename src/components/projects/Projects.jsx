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
import { useGetAllProjectsQuery } from "../../redux/projectSlice";

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
  const [selected, setSelected] = React.useState("");

  const { data: getAllProjects, isLoading } = useGetAllProjectsQuery();

  const filterProject = getAllProjects?.filter(
    (project) => project?.title === selected
  );

  const bannerImage = filterProject?.map(
    (project) => project?.sections[0]?.image
  );

  // const filteredSections = filterProject[0]?.sections;

  console.log("clicked", selected);
  // console.log("filteredSections", filteredSections);

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
          src={bannerImage}
          width="100%"
          radius="none"
        />
        <div className="absolute inset-0 flex items-center flex-col justify-center text-white font-bold bg-black bg-opacity-20 inter text-7xl z-50">
          <p className="text-center inter text-2xl">Our Projects</p>
          <p className="text-center mt-3">{selected}</p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute right-0 flex w-full h-full flex-col bg-[#e5e0db]">
          <Tabs
            selectedKey={selected}
            onSelectionChange={setSelected}
            aria-label="Options"
            className="mt-5 ms-5"
          >
            {getAllProjects?.map((project) => (
              <Tab
                key={project?.title}
                title={project?.title}
                className="p-8 text-lg inter"
              >
                {project?.sections?.map((section) => (
                  <Card className="mb-10">
                    <CardBody>
                      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
                        <div className="m-5 inter font-bold text-xl">
                          {/* <p>{project?.title}</p> */}
                          <Image
                            isZoomed
                            src={section?.image}
                            alt="hbd project image"
                            className="w-full h-full"
                          />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <p className="text-center text-5xl	font-semibold inter">
                            {section?.subTitle}
                          </p>
                          <p className="text-center text-lg font-medium inter mt-8">
                            {section?.shortDescription}
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </Tab>
            ))}
          </Tabs>

          <Footer />
        </div>
      </div>
    </div>
  );
}
