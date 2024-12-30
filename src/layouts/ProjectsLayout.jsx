import React from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "../components/mainNavbar/MainNavbar";
import Footer from "../footer/Footer";

export default function ProjectsLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <MainNavbar /> */}
      {/* Dynamic content will be rendered here */}
      <div className="">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
