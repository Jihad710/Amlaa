import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";
import ProductCart from "../products/ProductCart";
import { TProduct } from "../../components/type/Types";

const AllProduct = () => {
  const { isLoading, data } = useQuery<TProduct[]>("allProduct", async () => {
    const response = await fetch(
      "https://black-and-white-server.vercel.app/collection/allProducts"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  if (isLoading) {
    return <div>Loading...............</div>;
  }

  return (
    <div>
      <DynamicBanner title={"Shop All"}></DynamicBanner>
      <ProductCart datas={data ?? []}></ProductCart>
    </div>
  );
};

export default AllProduct;
