import { Outlet } from "react-router-dom";
import Footer from "../ui/footer/Footer";
import TopBar from "../ui/navbar/TopBar";
import Navbar from "../ui/navbar/Navbar";
import MobileNavBar from "../ui/navbar/MobileNavBar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MiddleNav from "../ui/navbar/MiddleNav";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  const { openModalRs } = useContext(AuthContext);
  return (
    <div className="">
      <TopBar></TopBar>
      <MiddleNav></MiddleNav>
      <Navbar></Navbar>
      {openModalRs ? "" : <MobileNavBar></MobileNavBar>}
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default MainLayout;
