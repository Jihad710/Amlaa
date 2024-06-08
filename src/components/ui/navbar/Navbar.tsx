import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import logo from "../../../../public/dm_full_1_shopify_black_ss24.avif";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import FormDialog from "../../FormDialog";
import { useGetToCard } from "../../../hooks/useGetToCart";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  const { data } = useGetToCard();

  const [topwarDropdownOpen, setTopwarDropdownOpen] = useState(false);
  const [accesarisDropdownOpen, setAccesarisDropdownOpen] = useState(false);

  const handleTopwarMouseEnter = () => {
    setTopwarDropdownOpen(true);
    setAccesarisDropdownOpen(false);
  };

  const handleTopwarMouseLeave = () => {
    setTopwarDropdownOpen(false);
  };

  const handleAccesarisMouseEnter = () => {
    setAccesarisDropdownOpen(true);
    setTopwarDropdownOpen(false);
  };

  const handleAccesarisMouseLeave = () => {
    setAccesarisDropdownOpen(false);
  };

  return (
    <div className="bg-[#eeedeb] py-4 text-[#3c3633] md:flex hidden">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <NavLink to={"/"}>
            <img className="w-[110px] h-[84px]" src={logo} alt="Logo" />
          </NavLink>
        </div>
        <ul className="flex text-lg font-light items-center space-x-6">
          <NavLink
            className="hover:text-gray-700 text-2xl font-semibold"
            to={"/allProduct"}
          >
            All
          </NavLink>
          <NavLink
            className="hover:text-gray-700 text-2xl font-semibold"
            to={"/collection/best-deal"}
          >
            Best Deal
          </NavLink>

          <li
            className="relative w-[120px] ps-1"
            onMouseEnter={handleTopwarMouseEnter}
            onMouseLeave={handleTopwarMouseLeave}
          >
            <NavLink
              className="hover:text-gray-700 flex items-center justify-between  font-semibold text-2xl"
              to={""}
            >
              Topwar <FaAngleDown className="ml-1" />
            </NavLink>
            {topwarDropdownOpen && (
              <ul className="absolute ps-1 left-0 top-full bg-white shadow-md rounded-md z-10 w-40 py-3 mt-2">
                <li className="pb-3">
                  <NavLink
                    className="hover:text-gray-700"
                    to={"/collection/t-shirt"}
                  >
                    T-Shirt
                  </NavLink>
                </li>
                <li className="pb-3 ">
                  <NavLink
                    className="hover:text-gray-700"
                    to={"/collection/polo"}
                  >
                    Polo
                  </NavLink>
                </li>
                <li className="pb-3">
                  <NavLink
                    className="hover:text-gray-700"
                    to={"/collection/shirt"}
                  >
                    Shirt
                  </NavLink>
                </li>
                <li className="pb-3">
                  <NavLink
                    className="hover:text-gray-700"
                    to={"/collection/jackets"}
                  >
                    Jackets
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <NavLink
            className="hover:text-gray-700 text-2xl font-semibold"
            to={"/collection/bottomwar"}
          >
            Bottomwar
          </NavLink>
          <li
            className="relative w-[140px] ps-1"
            onMouseEnter={handleAccesarisMouseEnter}
            onMouseLeave={handleAccesarisMouseLeave}
          >
            <NavLink
              className="hover:text-gray-700 flex items-center justify-between font-semibold text-2xl"
              to={""}
            >
              Accesaris <FaAngleDown className="ml-1" />
            </NavLink>
            {accesarisDropdownOpen && (
              <ul className="absolute left-0 top-full bg-white shadow-md rounded-md z-10 w-40 py-3 mt-1 ps-1">
                <li className="pb-3">
                  <NavLink
                    className="hover:text-gray-700"
                    to={"/collection/head-wear"}
                  >
                    Headwear
                  </NavLink>
                </li>
                <li className="pb-3">
                  <NavLink
                    className="hover:text-gray-700"
                    to={"/collection/accessories"}
                  >
                    Bags/Wallets
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className="flex items-center space-x-5">
          <NavLink to={"/login"}>
            <VscAccount className="w-6 h-6 hover:text-gray-700" />
          </NavLink>
          <FormDialog />
          <NavLink to={"/cart"} className="relative">
            <FiShoppingCart
              className={`${
                data && data.length
                  ? "w-12 h-12 p-3  bg-gray-300 rounded-full "
                  : "w-6 h-6 rounded-md"
              } `}
            />
            {data && data.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {data.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
