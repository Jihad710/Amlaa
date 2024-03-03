import { Outlet } from "react-router-dom";
import TopBar from "../ui/navbar/TopBar";
import Navbar from "../ui/navbar/Navbar";
import ConvertionF from "../ui/footer/ConvertionF";
import Footer from "../ui/footer/Footer";
import Offerd from "../ui/Offerd";
import MiddleBanner from "../../page/home/MiddleBanner";
import Sestion from "../../page/home/Sestion";
import Contact from "../../page/home/Contact";

const MainLayout = () => {
  return (
    <div className="bg-[#eeedeb]">
      <TopBar></TopBar>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <MiddleBanner></MiddleBanner>
      <Sestion></Sestion>
      <Contact></Contact>
      <Offerd></Offerd>
      <ConvertionF></ConvertionF>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
