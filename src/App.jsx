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
import CreateProject from "./components/admin/createProject/CreateProject";
import CreateProjectSection from "./components/admin/createProject/createProjectSection/CreateProjectSection";
import SliderControll from "./components/admin/sliderControll/SliderControll";
import ProjectsSliderController from "./components/admin/projectsSliderController/ProjectsSliderController";
import CreateService from "./components/admin/createService/CreateService";
import SeeAllMessages from "./components/admin/seeAllMessages/SeeAllMessages";
import FooterControll from "./components/admin/footerControll/FooterControll";
import NavbarLogoControll from "./components/admin/navbarLogoControll/NavbarLogoControll";

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
            path="/admin/slider-controll"
            element={
              <ProtectedRoute>
                <MainNavbar />
                <SliderControll />
                <Footer />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/projects-slider-controll"
            element={
              <ProtectedRoute>
                <MainNavbar />
                <ProjectsSliderController />
                <Footer />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path={`/admin/create-project/section`}
            element={
              <ProtectedRoute>
                <MainNavbar />
                <CreateProjectSection />
                <Footer />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path={`/admin/services`}
            element={
              <ProtectedRoute>
                <MainNavbar />
                <CreateService />
                <Footer />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/create-project"
            element={
              <ProtectedRoute>
                <MainNavbar />
                <CreateProject />
                <Footer />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/all-message"
            element={
              <ProtectedRoute>
                <MainNavbar />
                <SeeAllMessages />
                <Footer />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/footer"
            element={
              <ProtectedRoute>
                <MainNavbar />
                <FooterControll />
                <Footer />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/navbar"
            element={
              <ProtectedRoute>
                <MainNavbar />
                <NavbarLogoControll />
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
