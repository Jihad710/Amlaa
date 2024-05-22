import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";

const Accessories = () => {
  const {
    isLoading,

    data,
  } = useQuery("allProduct", async () => {
    const response = await fetch(
      "http://localhost:5000/products/category?category=polos"
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
      <DynamicBanner title="Accessories"></DynamicBanner>
    </div>
  );
};

export default Accessories;
