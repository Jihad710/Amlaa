import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const MobileNavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="md:hidden">
      <nav
        className={`bg-[#3c3633] w-10/12 fixed left-1/2 transform -translate-x-1/2 bottom-8 z-20 py-3 px-4 flex flex-col items-center rounded-2xl backdrop-blur-lg transition-all duration-300 ${
          expanded ? "h-auto" : "h-[60px]"
        }`}
      >
        {expanded && (
          <div className="flex w-full flex-col items-center gap-2 mb-2">
            <NavLink to="/all" className="py-2 px-4 rounded text-white">
              all
            </NavLink>
            <NavLink to="/deal" className="py-2 px-4 rounded text-white">
              deal
            </NavLink>
            <NavLink to="/topwar" className="py-2 px-4 rounded text-white">
              topwar
            </NavLink>
            <NavLink to="/bottomwar" className="py-2 px-4 rounded text-white">
              bottomwar
            </NavLink>
            <NavLink to="/login" className="py-2 px-4 rounded text-white">
              login
            </NavLink>
            <NavLink to="/search" className="py-2 px-4 rounded text-white">
              search
            </NavLink>
          </div>
        )}
        <div
          className={`flex items-center justify-center w-full ${
            expanded ? "border-t" : ""
          }`}
        >
          <button
            className="py-2 px-4 rounded text-white"
            onClick={handleNavToggle}
          >
            {expanded ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavBar;
