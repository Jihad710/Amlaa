import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";
import ProductCart from "../products/ProductCart";

const Shirt = () => {
  const { isLoading, data } = useQuery("allProduct", async () => {
    const response = await fetch(
      "http://localhost:5000/products/category?category=shirt"
    );
    console.log(response);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data, "......shirt page");

  return (
    <div>
      <DynamicBanner title="Shirt"></DynamicBanner>
      <ProductCart datas={data}></ProductCart>
    </div>
  );
};

export default Shirt;
