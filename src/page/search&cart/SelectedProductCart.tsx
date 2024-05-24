import { NavLink } from "react-router-dom";
import { useGetToCard } from "../../hooks/useGetToCart";
import OderProductCard from "./OderProductCard";

const SelectedProductCart = () => {
  const { data, isLoading } = useGetToCard();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-[#423e3c]">Cart</h1>
      <div>
        <div>
          {data && data.length === 0 ? (
            <p className="text-center">Your cart is currently empty.</p>
          ) : (
            <OderProductCard></OderProductCard>
          )}

          <NavLink to="/">
            <button className="mt-10 p-4 px-10 tracking-widest font-semibold text-xl text-white bg-[#3c3633] rounded-full">
              Continue Shopping
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SelectedProductCart;
