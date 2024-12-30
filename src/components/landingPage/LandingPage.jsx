import React from "react";
import MainNavbar from "../mainNavbar/MainNavbar";
import HeroSection from "../heroSection/HeroSection";
import OurProjects from "../ourProjects/OurProjects";
import Footer from "../../footer/Footer";
import Services from "../services/Services";

export default function LandingPage() {
  return (
    <div>
      <MainNavbar />
      <HeroSection />
      <OurProjects />
      <Services />
      <Footer />
    </div>
  );
}
