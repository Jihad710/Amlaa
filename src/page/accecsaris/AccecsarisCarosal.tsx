import { useQuery } from "react-query";
import AccecsarisCard from "./AccecsarisCard";

const AccecsarisCarosal = () => {
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
    return <div>Error: {(error as Error)?.message}</div>;
  }

  return (
    <div>
      <h1 className="mb-7 font-bold text-3xl text-[#3c3633] text-center">
        Explore Accessories
      </h1>
      <div>
        <AccecsarisCard data={data}></AccecsarisCard>
      </div>
    </div>
  );
};

export default AccecsarisCarosal;
