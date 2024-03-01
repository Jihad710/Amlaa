import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="">
        <h1 className="text-8xl font-bold">
          w<span className="ms-[-25px] text-red-500">b</span>
        </h1>
        <span className="text-center mx-auto">Black & White</span>
      </div>
      <div>
        <ul className="flex gap-5 text-xl font-light">
          <li>SS'24 Collection</li>
          <li>Best Deal </li>
          <li>Topwar</li>
          <li>Bottomwar</li>
          <li>Accesaris </li>
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
