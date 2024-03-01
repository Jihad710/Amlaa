import { Outlet } from "react-router-dom";
import TopBar from "../../page/navbar/TopBar";
import Navbar from "../../page/navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <TopBar></TopBar>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
