import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import logo from "../../../../public/dm_full_1_shopify_black_ss24.avif";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[110px] py-[30px]">
      <div className="">
        <div className="w-[110px] h-[88px] ">
          <img className="w-full h-full " src={logo} alt="" />
        </div>
      </div>
      <div>
        <ul className="flex gap-5 text-xl font-light">
          <NavLink to={"/collection/spring-summer"}>SS'24 Collection</NavLink>
          <NavLink to={"/collection/best-deal"}>Best Deal </NavLink>
          <NavLink to={""}>Topwar</NavLink>
          <NavLink to={""}>Bottomwar</NavLink>
          <NavLink to={""}>Accesaris </NavLink>
        </ul>
      </div>
      <div className="flex gap-5">
        <VscAccount className="w-6 h-6" />
        <VscAccount className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Navbar;
