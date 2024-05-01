import { Outlet } from "react-router-dom";
import Footer from "../ui/footer/Footer";
import TopBar from "../ui/navbar/TopBar";
import Navbar from "../ui/navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <TopBar></TopBar>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
