import { Outlet } from "react-router-dom";
import TopBar from "../ui/navbar/TopBar";
import Navbar from "../ui/navbar/Navbar";
import ConvertionF from "../ui/footer/ConvertionF";
import Footer from "../ui/footer/Footer";
import Offerd from "../ui/Offerd";

const MainLayout = () => {
  return (
    <div className="bg-[#eeedeb]">
      <TopBar></TopBar>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Offerd></Offerd>
      <ConvertionF></ConvertionF>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
