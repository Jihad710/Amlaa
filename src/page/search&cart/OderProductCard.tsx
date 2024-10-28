import { useState, useEffect } from "react";
import ResponsiveDialog from "./ConfirmOderModal";
import { Product, TCartItem } from "../../components/type/Types";
import SingleProductCard from "./SingleProductCard";
import MobileCard from "./MobileCard";

interface OderProductCardProps {
  data: Product[];
}

const OderProductCard = ({}: OderProductCardProps) => {
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);
  const [buyAvailProducts, setBuyAvailProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getAllItems: TCartItem[] = JSON.parse(
      localStorage.getItem("product") || "[]"
    );
    setCartItems(getAllItems);
  }, []);

  const handleQuantityIncrement = (id: string) => {
    const updatedItems = cartItems.map((item) => {
      if (String(item.localStoreId) === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
    localStorage.setItem("product", JSON.stringify(updatedItems));
  };

  const handleQuantityDecrement = (id: string) => {
    const updatedItems = cartItems.map((item) => {
      if (String(item.localStoreId) === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
    localStorage.setItem("product", JSON.stringify(updatedItems));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      const discountAmount = item.discount
        ? (item.price * item.discount) / 100
        : 0;
      const discountedPrice = item.price - discountAmount;
      return acc + discountedPrice * item.quantity;
    }, 0);
  };

  return (
    <div className="w-full px-5 md:px-0 md:w-10/12 mx-auto">
      {cartItems.length ? (
        <>
          {/* Table for larger screens */}
          <div className="hidden sm:block">
            <table className="w-full table-auto">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 "></th>
                  <th className="p-2 "></th>
                  <th className="p-2 ">Quantity</th>
                  <th className="p-2 ">Total</th>
                  <th className="p-2 ">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((value, idx) => (
                  <SingleProductCard
                    key={idx}
                    setCartItems={setCartItems}
                    buyAvailProducts={buyAvailProducts}
                    setBuyAvailProducts={setBuyAvailProducts}
                    cartItems={cartItems}
                    handleQuantityIncrement={handleQuantityIncrement}
                    handleQuantityDecrement={handleQuantityDecrement}
                    value={value}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards for mobile screens */}
          <div className="block sm:hidden mt-5">
            <div className="grid gap-6">
              {cartItems.map((value, idx) => (
                <MobileCard
                  key={idx}
                  setCartItems={setCartItems}
                  buyAvailProducts={buyAvailProducts}
                  setBuyAvailProducts={setBuyAvailProducts}
                  cartItems={cartItems}
                  handleQuantityIncrement={handleQuantityIncrement}
                  handleQuantityDecrement={handleQuantityDecrement}
                  value={value}
                />
              ))}
            </div>
          </div>

          <hr className="w-full h-1 bg-slate-400 my-2" />
          <div className="flex justify-end text-lg font-semibold">
            <span className="mt-2">
              Subtotal:৳ {calculateSubtotal().toFixed(2)}
            </span>
          </div>

          <div>
            <ResponsiveDialog
              setCartItems={setCartItems}
              cartItems={cartItems}
            />
          </div>
        </>
      ) : (
        <p className="text-center pt-7 mb-5 text-xl">
          Your cart is currently empty.
        </p>
      )}
    </div>
  );
};

export default OderProductCard;
