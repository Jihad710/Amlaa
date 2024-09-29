import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";
import ProductCart from "../products/ProductCart";

const BottomWar = () => {
  const {
    isLoading,

    data,
  } = useQuery("allProduct", async () => {
    const response = await fetch(
     `http://localhost:5000/products/bottomwear`
    );
    console.log(response);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  if (isLoading) {
    <div>loding...............</div>;
  }
  console.log(data);
  return (
    <div>
      <DynamicBanner title="Bottomwear"></DynamicBanner>
      <ProductCart data={data}></ProductCart>
    </div>
  );
};

export default BottomWar;
