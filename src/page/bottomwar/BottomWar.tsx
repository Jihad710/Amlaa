import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";

const BottomWar = () => {
  const {
    isLoading,

    data,
  } = useQuery("allProduct", async () => {
    const response = await fetch(
      "http://localhost:5000/products/category?category=bottomware"
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
    </div>
  );
};

export default BottomWar;
