import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./components/landingPage/LandingPage";
// import Projects from "./components/projects/Projects";
import MainNavbar from "./components/mainNavbar/MainNavbar";
import Footer from "./footer/Footer";
import ProjectsLayout from "./layouts/ProjectsLayout";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import AdminDashboard from "./components/admin/adminDashboard/AdminDashboard";
import ProtectedRoute from "./private/ProtectedRoute";
import Login from "./components/admin/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsLayout />}>
            {/* Child routes */}
            <Route path="details" element={<Projects />} />
          </Route>
          <Route
            path="/contact"
            element={
              <>
                <MainNavbar />
                <Contact />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/admin/admin-dashboard"
            element={
              <ProtectedRoute>
                <MainNavbar />
                <AdminDashboard />
                <Footer />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/login"
            element={
              <>
                {/* <MainNavbar /> */}
                <Login />
                {/* <Footer /> */}
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
