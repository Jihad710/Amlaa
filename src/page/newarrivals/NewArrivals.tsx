import { useQuery } from "react-query";
import NewArrivalsItems from "./NewArrivalsItems";

const NewArrivals = () => {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery("allProduct", async () => {
    const response = await fetch(
      "http://localhost:5000/collection/?collectionStatus=new"
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
      <div className="text-center">
        <h1 className="mb-4 text-center font-bold text-3xl text-[#3c3633]">
          NEW ARRIVALS
        </h1>
        <p className="font-semibold">of the season</p>
      </div>
      <NewArrivalsItems items={items}></NewArrivalsItems>
    </div>
  );
};

export default NewArrivals;
