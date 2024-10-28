import React, { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import pleceholderImage from "../../assets/pleceholder.png";
import { Link } from "react-router-dom";
import { TCartItem } from "../../components/type/Types";

interface SingleProductCardProps {
  value: TCartItem;
  cartItems: {
    localStoreId: number;
    menuItemId: string;
    quantity: number;
    price: number;
    discount?: number;
  }[];
  setCartItems: React.Dispatch<
    React.SetStateAction<
      {
        localStoreId: number;
        menuItemId: string;
        quantity: number;
        price: number;
        discount?: number;
      }[]
    >
  >;
  handleQuantityIncrement: (menuItemId: string) => void;
}

const MobileCard: React.FC<SingleProductCardProps> = ({
  value,
  cartItems,
  setCartItems,
  handleQuantityIncrement,
}) => {
  const [isSoldOut, setIsSoldOut] = useState(false);
  const [notAvailable, setNotAvailable] = useState(true);
  const [showZero, setShowZero] = useState(false); // State to control the display of zero quantity

  useEffect(() => {
    (async () => {
      try {
        if (!value.menuItemId) {
          return;
        }
        const response = await fetch(
          `https://amlaa.vercel.app/product/${value.menuItemId}`
        );
        const result = await response.json();

        if (result.status) {
          setNotAvailable(false);
          if (result.status === "sold-out") {
            setIsSoldOut(true);
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [value]);

  const cartItem = cartItems.find(
    (item) => item.localStoreId === value.localStoreId
  ) || { quantity: 0 };

  const handleQuantityDecrement = (menuItemId: string) => {
    if (cartItem.quantity > 0) {
      const updatedCart = cartItems.map((item) =>
        item.menuItemId === menuItemId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      // Check if the quantity will become 0
      if (cartItem.quantity === 1) {
        setShowZero(true); // Show zero temporarily
        localStorage.setItem("product", JSON.stringify(updatedCart));
        setCartItems(updatedCart);

        // Set timeout to remove the product from cart after 1 second
        setTimeout(() => {
          const newCart = updatedCart.filter((item) => item.quantity > 0);
          localStorage.setItem("product", JSON.stringify(newCart));
          setCartItems(newCart);
        }, 1000);
      } else {
        localStorage.setItem("product", JSON.stringify(updatedCart));
        setCartItems(updatedCart);
      }
    }
  };

  const calculateDiscountedPrice = (
    quantity: number,
    price: number,
    discount?: number
  ) => {
    if (discount && price) {
      const discountAmount = (price * discount) / 100;
      return (price - discountAmount) * quantity;
    }
    return price * quantity;
  };

  return (
    <div className="pb-5 flex flex-col w-full border-gray-500">
      <div className="flex items-start gap-5">
        <div className="h-32 w-[100px] relative overflow-hidden rounded">
          <img src={value?.image || pleceholderImage} alt={value?.name} />
          {(isSoldOut || notAvailable) && (
            <div className="absolute flex items-center justify-center top-0 left-0 bg-slate-600 bg-opacity-60 text-black font-bold w-full h-full text-center">
              {isSoldOut
                ? "Sold Out"
                : notAvailable
                ? "Product Not Available"
                : null}
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="mt-3 capitalize">
            <Link
              to={`/product/${value.menuItemId}`}
              className="text-lg font-semibold hover:underline"
            >
              {value?.name}
            </Link>
            <p>
              <span className="font-medium">Style:</span>
              <span className="ml-1 font-light">{value?.detailsMaterial}</span>
            </p>
            <p>
              <span className="font-medium">Color:</span>
              <span className="ml-1 font-light">{value?.color || "N/A"}</span>
            </p>
            <p>
              <span className="font-medium">Size:</span>
              <span className="ml-1 font-light">{value?.size || "N/A"}</span>
            </p>
          </div>
          <div className="flex items-center flex-wrap justify-between mt-4">
            <div className="p-2 text-center">
              <div className="flex justify-center items-center gap-2">
                <FiMinus
                  onClick={() => {
                    handleQuantityDecrement(String(value.menuItemId));
                  }}
                  className="cursor-pointer"
                />
                {/* Show zero quantity temporarily */}
                <p>{showZero ? 0 : cartItem.quantity}</p>
                <FiPlus
                  onClick={() =>
                    handleQuantityIncrement(String(value.localStoreId))
                  }
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="text-center">
              &#x09F3;
              {value.price ? (
                <span
                  className={`${(notAvailable || isSoldOut) && "line-through"}`}
                >
                  {calculateDiscountedPrice(
                    cartItem.quantity,
                    value.price,
                    value.discount
                  ).toFixed(2)}
                </span>
              ) : (
                "00"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
