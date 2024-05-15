import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";
import ProductCard from "../../components/ui/ProductCard";

const AllProduct = () => {
  const { isLoading, error, data } = useQuery("allProduct", async () => {
    const response = await fetch(
      "http://localhost:5000/collection/allProducts"
    );
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
      <DynamicBanner title={"Shop All"}></DynamicBanner>
      <ProductCard></ProductCard>
    </div>
  );
};

export default AllProduct;
