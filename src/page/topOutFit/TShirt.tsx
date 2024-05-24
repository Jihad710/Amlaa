import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";
import ProductCart from "../products/ProductCart";

const TShirt = () => {
  const {
    isLoading,

    data,
  } = useQuery("allProduct", async () => {
    const response = await fetch(
      "https://black-and-white-server.vercel.app/products/category?category=tshirt"
    );
    console.log(response);

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
      <DynamicBanner title="T-Shirt"></DynamicBanner>
      <ProductCart datas={data}></ProductCart>
    </div>
  );
};

export default TShirt;
