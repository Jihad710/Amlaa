import { useQuery } from "react-query";

const useGetToCard = () => {
  const { isLoading, data, error } = useQuery("cartData", async () => {
    const response = await fetch("http://localhost:5000/oder/product");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  });

  return { isLoading, data, error };
};

export { useGetToCard };
