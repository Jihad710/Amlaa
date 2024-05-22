import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";

const AllProduct = () => {
  const { isLoading, data } = useQuery("allProduct", async () => {
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

  return (
    <div>
      <DynamicBanner title={"Shop All"}></DynamicBanner>
      <div className="grid grid-cols-4">
        {data?.map((item) => (
          <div>
            <img src={item?.image} alt="" />
            <p>{item?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
