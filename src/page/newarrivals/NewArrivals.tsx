import NewArrivalsItems from "./NewArrivalsItems";

const NewArrivals = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="mb-4 text-center font-bold text-3xl text-[#3c3633]">
          NEW ARRIVALS
        </h1>
        <p className="font-semibold">of the season</p>
      </div>
      <NewArrivalsItems></NewArrivalsItems>
    </div>
  );
};

export default NewArrivals;
