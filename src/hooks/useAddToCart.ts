import { useMutation } from "react-query";

interface CartItem {
  menuItemId: string;
  name: string;
  image: string;
  price: number;
}

const useAddToCart = () => {
  return useMutation(async (cartItem: CartItem) => {
    console.log(cartItem);
    const response = await fetch("http://localhost:5000/product/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItem),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  });
};

export { useAddToCart };
