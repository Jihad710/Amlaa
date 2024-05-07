import { Swiper, SwiperSlide } from "swiper/react";
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
        "https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/popular/instructor"
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
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div className="my-24">
      <div className="text-center">
        <h1 className="mb-4 font-bold text-3xl text-[#3c3633]">Deals</h1>
        <p className="font-semibold">you don't want to miss</p>
      </div>
      <BestDealsCarosulCard data={data}></BestDealsCarosulCard>
    </div>
  );
};

export default BestDealsCarousel;
