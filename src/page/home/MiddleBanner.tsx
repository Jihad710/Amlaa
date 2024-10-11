import imag1 from "../../assets/20240217-_RHN3369.webp";
import imag2 from "../../assets/20240217-_RHN3393.webp";

const MiddleBanner = () => {
  return (
    <div className="md:h-screen flex flex-col  md:flex-row items-center justify-center bg-[#3c3633] py-8 md:py-20">
      <div className="w-[310px] sm:w-[500px] h-[90vh] relative flex justify-center items-center mt-28 md:mt-0">
        <img
          className=" absolute w-[200px] sm:w-[300px]  top-0 right-5 sm:right-0"
          src={imag2}
          alt=""
        />
        <img
          className="absolute w-[200px] sm:w-[300px] left-5 bottom-0"
          src={imag1}
          alt=""
        />
      </div>
      <div className="mt-20 md:mt-0 flex items-center sm:ps-10">
        <div className="p-5 text-center md:text-left">
          <p className="font-semibold text-xl pb-4 text-white">AMLAA</p>
          <p className="text-white text-3xl sm:text-4xl font-bold">Get comfortable.</p>
        </div>
      </div>
    </div>
  );
};

export default MiddleBanner;
