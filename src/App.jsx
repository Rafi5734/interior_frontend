import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainNavbar from "./components/mainNavbar/MainNavbar";
import HeroSection from "./components/heroSection/HeroSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainNavbar />
      <HeroSection />
    </>
  );
}

export default App;
