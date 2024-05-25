import { useQuery } from "react-query";
import NewArrivalsItems from "./NewArrivalsItems";

const NewArrivals = () => {
  const { isLoading, data: items } = useQuery(["allProduct"], async () => {
    const response = await fetch(
      "https://black-and-white-server.vercel.app/products/category?category=new"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hidden md:block">
      <div>
        <div className="text-center">
          <h1 className="mb-4 text-center font-bold text-3xl text-[#3c3633]">
            NEW ARRIVALS
          </h1>
          <p className="font-semibold">of the season</p>
        </div>
        <NewArrivalsItems items={items}></NewArrivalsItems>
      </div>
    </div>
  );
};

export default NewArrivals;
