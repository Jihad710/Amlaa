import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import logo from "../../../../public/dm_full_1_shopify_black_ss24.avif";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import FormDialog from "../../FormDialog";

const Navbar = () => {
  const [topwarDropdownOpen, setTopwarDropdownOpen] = useState(false);
  const [accesarisDropdownOpen, setAccesarisDropdownOpen] = useState(false);

  const handleTopwarMouseEnter = () => {
    setTopwarDropdownOpen(true);
    setAccesarisDropdownOpen(false); // Close the Accesaris dropdown on hover
  };

  const handleTopwarMouseLeave = () => {
    setTopwarDropdownOpen(false);
  };

  const handleAccesarisMouseEnter = () => {
    setAccesarisDropdownOpen(true);
    setTopwarDropdownOpen(false); // Close the Topwar dropdown on hover
  };

  const handleAccesarisMouseLeave = () => {
    setAccesarisDropdownOpen(false);
  };

  return (
    <div className="flex justify-between items-center h-[110px] py-[30px]">
      <div className="">
        <div className="w-[110px] h-[88px] ">
          <NavLink to={"/"}>
            <img className="w-full h-full " src={logo} alt="" />
          </NavLink>
        </div>
      </div>
      <div>
        <ul className="flex text-xl font-light">
          <NavLink className="px-5" to={"/allProduct"}>
            All
          </NavLink>
          <NavLink className="px-5" to={"/collection/best-deal"}>
            Best Deal
          </NavLink>

          <li
            className="relative"
            onMouseEnter={handleTopwarMouseEnter}
            onMouseLeave={handleTopwarMouseLeave}
          >
            <NavLink className="px-5" to={""}>
              Topwar
            </NavLink>
            {topwarDropdownOpen && (
              <ul className="absolute left-0 top-full px-5 py-3 bg-white shadow-md  rounded-md z-10 w-40">
                <li className="pb-3">
                  <NavLink to={"/collection/t-shirt"}>T-Shirt</NavLink>
                </li>
                <li className="pb-3">
                  <NavLink to={"/collection/polo"}>Polo</NavLink>
                </li>
                <li className=" pb-3">
                  <NavLink className="mb-10" to={"/collection/shirt"}>
                    Shirt
                  </NavLink>
                </li>
                <li className="pb-3">
                  <NavLink to={"/collection/jackets"}>Jackets</NavLink>
                </li>
              </ul>
            )}
          </li>
          <NavLink className="px-5" to={"/collection/best-deal"}>
            Bottomwar
          </NavLink>
          <li
            className="relative"
            onMouseEnter={handleAccesarisMouseEnter}
            onMouseLeave={handleAccesarisMouseLeave}
          >
            <NavLink className="ps-5" to={""}>
              Accesaris
            </NavLink>
            {accesarisDropdownOpen && (
              <ul className="absolute left-0 top-full  py-3 bg-white shadow-md rounded-md z-10 w-40 p-4">
                <li className="pb-3">
                  <NavLink to={"/collection/head-wear"}>Headwear</NavLink>
                </li>
                <li className="pb-3">
                  <NavLink to={"/collection/bags-and-wallets"}>
                    Bags/Wallets
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="flex gap-5">
        <NavLink to={"/login"}>
          <VscAccount className="w-6 h-6" />
        </NavLink>

        <div>
          <FormDialog></FormDialog>
        </div>

        <NavLink to={"/cart"}>
          <FiShoppingCart className="w-6 h-6" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
