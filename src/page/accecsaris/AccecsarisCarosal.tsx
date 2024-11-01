import { useQuery } from "react-query";
import AccecsarisCard from "./AccecsarisCard";

const AccecsarisCarosal = () => {
  const { isLoading, error, data } = useQuery("accessories", async () => {
    const response = await fetch(
      "https://amlaa.vercel.app/product/home/accessories"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {(error as Error)?.message}</div>;
  }

  return (
    <div>
      <div className="text-center">
        <h1 className="mb-2 font-bold text-3xl text-[#3c3633]">ACCESSORIES</h1>
        <p className="font-semibold">YOU WILL LOVE THIS</p>
      </div>
      <div>
        <AccecsarisCard data={data}></AccecsarisCard>
      </div>
    </div>
  );
};

export default AccecsarisCarosal;
