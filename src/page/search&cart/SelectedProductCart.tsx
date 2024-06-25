import { NavLink } from "react-router-dom";
import OderProductCard from "./OderProductCard";

import { useGetToCardLocal } from "../../hooks/useGetToCardLocal";
import { useEffect } from "react";

const SelectedProductCart = () => {
  const { loading, data } = useGetToCardLocal();
  useEffect(() => {
    console.log(localStorage.getItem("product"));
  }, [data]);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-[#423e3c]">Cart</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div>
          <OderProductCard data={data} />

          <div className="flex justify-center items-center pb-10 mb-24">
            <NavLink to="/">
              <button
                className={`${
                  data.length
                    ? "md:flex md:justify-center md:items-center text-xl capitalize font-semibold"
                    : "md:mt-10 p-4 px-10 tracking-widest font-semibold text-xl text-white bg-[#3c3633] rounded-full"
                }`}
              >
                Continue Shopping
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedProductCart;
