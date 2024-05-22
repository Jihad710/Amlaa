import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";

const BestDeals = () => {
  const { isLoading, data } = useQuery("allProduct", async () => {
    const response = await fetch(
      "http://localhost:5000/products/category?category=deal"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);

  return (
    <div>
      <DynamicBanner title="Deals"></DynamicBanner>
      <div className="grid grid-cols-4">
        {data.map((items) => (
          <span>{items.collectionStatus}</span>
        ))}
      </div>
    </div>
  );
};

export default BestDeals;
