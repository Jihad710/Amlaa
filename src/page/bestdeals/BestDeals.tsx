import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";
import ProductCart from "../products/ProductCart";
import { TProduct } from "../../components/type/Types";

const BestDeals = () => {
  const { isLoading, data } = useQuery<TProduct[]>("allProduct", async () => {
    const response = await fetch(
      "https://black-and-white-server.vercel.app/products/category?category=deal"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Check if data is defined before rendering ProductCart
  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <DynamicBanner title="Deals"></DynamicBanner>
      <ProductCart datas={data}></ProductCart>
    </div>
  );
};

export default BestDeals;
