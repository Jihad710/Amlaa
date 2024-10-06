import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TCartItem } from "../components/type/Types";

export const useAddToCartLocal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const addToCart = (cartItem: TCartItem) => {
    setIsLoading(true);

    try {
      const dataShow = localStorage.getItem("product");
      const localData: TCartItem[] = dataShow ? JSON.parse(dataShow) : [];

      const existingItem = localData.find(
        (item) =>
          item.menuItemId === cartItem.menuItemId &&
          item.color === cartItem.color &&
          item.size === cartItem.size
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        localData.push({...cartItem,localStoreId: Math.floor(Math.random() * 1000000000000)});
      }

      localStorage.setItem("product", JSON.stringify(localData));
      navigate("/cart");
    } catch (error) {
      console.error("Failed to add item to cart", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { addToCart, isLoading };
};
