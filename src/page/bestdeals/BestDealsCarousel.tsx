import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useQuery } from "react-query";
import BestDealsCarosulCard from "./BestDealsCarosulCard";

const BestDealsCarousel = () => {
  const { isLoading, error, data } = useQuery(
    "popularInstructors",
    async () => {
      const response = await fetch(
        "http://localhost:5000/products"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as Error)?.message}</div>;
  }

  return (
    <div className="my-14">
      <div className="text-center">
        <h1 className="mb-4 font-bold text-3xl text-[#3c3633]">DEALS</h1>
        <p className="font-semibold">YOU DON’T WANT TO MISS</p>
      </div>
      <BestDealsCarosulCard data={data}></BestDealsCarosulCard>
    </div>
  );
};

export default BestDealsCarousel;
