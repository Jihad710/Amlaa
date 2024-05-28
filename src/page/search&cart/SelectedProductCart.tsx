import { NavLink } from "react-router-dom";
import OderProductCard from "./OderProductCard";
import { useGetToCard } from "../../hooks/useGetToCart";
// import { useQuery } from "react-query";

const SelectedProductCart = () => {
  const { data, isLoading } = useGetToCard();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-[#423e3c]">Cart</h1>
      <div>
        <OderProductCard data={data} />

        <NavLink to="/">
          <button
            className={`${
              data.length
                ? "text-center"
                : "mt-10 p-4 px-10 tracking-widest font-semibold text-xl text-white bg-[#3c3633] rounded-full"
            }`}
          >
            Continue Shopping
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default SelectedProductCart;
