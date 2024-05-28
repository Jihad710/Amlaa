import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";
import ProductCart from "../products/ProductCart";

const Accessories = () => {
  const {
    isLoading,

    data,
  } = useQuery("allProduct", async () => {
    const response = await fetch(
      "https://black-and-white-server.vercel.app/products/category?category=accessories"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
  console.log(data);
  if (isLoading) {
    <div>loding...............</div>;
  }
  return (
    <div>
      <DynamicBanner title="Accessories"></DynamicBanner>
      <ProductCart datas={data}></ProductCart>
    </div>
  );
};

export default Accessories;
