import { Outlet } from "react-router-dom";
import Footer from "../ui/footer/Footer";
import TopBar from "../ui/navbar/TopBar";
import Navbar from "../ui/navbar/Navbar";
import MobileNavBar from "../ui/navbar/MobileNavBar";

const MainLayout = () => {
  return (
    <div className="bg-[#eeedeb]">
      <TopBar></TopBar>
      <Navbar></Navbar>
      <MobileNavBar></MobileNavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
