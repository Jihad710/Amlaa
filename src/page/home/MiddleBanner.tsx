import imag1 from "../../assets/20240217-_RHN3369.webp";
import imag2 from "../../assets/20240217-_RHN3393.webp";

const MiddleBanner = () => {
  return (
    <div className="h-screen bg-[#3c3633] flex py-24 ">
      <div className="h-full flex relative w-1/2">
        <img
          className="w-[294px] h-92 absolute top-2 left-20 bottom-10 z-10"
          src={imag2}
          alt=""
        />
        <img
          className="w-[294px] h-92 absolute left-80 bottom-10"
          src={imag1}
          alt=""
        />
      </div>
      <div className="w-1/2 flex items-center ">
        <div className="p-5">
          <p className="font-light pb-4 text-white">Black and White</p>
          <p className="text-white text-4xl font-bold ">
            timeless minimals for your wardrobe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiddleBanner;
