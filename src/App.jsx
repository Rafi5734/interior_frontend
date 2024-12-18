import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainNavbar from "./components/mainNavbar/MainNavbar";
import HeroSection from "./components/heroSection/HeroSection";
import OurProjects from "./components/ourProjects/OurProjects";

function App() {

  return (
    <>
      <MainNavbar />
      <HeroSection />
      <OurProjects />
    </>
  );
}

export default App;
