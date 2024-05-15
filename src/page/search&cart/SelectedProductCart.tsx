import { NavLink } from "react-router-dom";

const SelectedProductCart = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-[#423e3c]">Cart </h1>
      <div className="flex h-[50vh] justify-center items-center">
        <div>
          <p className="text-center">Your cart is currently empty.</p>

          <NavLink to={"/"}>
            <button className="mt-10 p-4 px-10 tracking-widest font-semibold text-xl text-white bg-[#3c3633] rounded-full">
              Conttinue Shoping
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SelectedProductCart;
