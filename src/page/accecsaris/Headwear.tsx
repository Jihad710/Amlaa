import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";

const Headwear = () => {
  const {
    isLoading,

    data,
  } = useQuery("allProduct", async () => {
    const response = await fetch(
      "http://localhost:5000/products/category?category=headware"
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
      <DynamicBanner title="Headwear"></DynamicBanner>
    </div>
  );
};

export default Headwear;