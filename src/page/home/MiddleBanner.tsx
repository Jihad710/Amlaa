import imag1 from "../../assets/20240217-_RHN3369.webp";
import imag2 from "../../assets/20240217-_RHN3393.webp";

const MiddleBanner = () => {
  return (
    <div className="h-screen flex flex-col  md:flex-row items-center justify-center bg-[#3c3633] py-8 md:py-20">
      <div className="w-full md:w-1/2 relative flex justify-center items-center  bg-red-500 mt-28 md:mt-0">
        <img
          className="md:w-[294px] w-[131px] md:h-96 h-[184px] absolute md:left-24 left-10 z-10 md:top-[-170px]"
          src={imag2}
          alt=""
        />
        <img
          className="w-[143px] md:w-[294px] h-[200] md:h-92 absolute  right-20 bottom-[-60px] md:bottom-0  md:right-1 md:top-[-226px] "
          src={imag1}
          alt=""
        />
      </div>
      <div className="w-full mt-20 md:mt-0 md:w-1/2 flex items-center ps-10">
        <div className="p-5 text-center md:text-left">
          <p className="font-semibold text-xl pb-4 text-white">AMLAA</p>
          <p className="text-white text-4xl font-bold">Get comfortable.</p>
        </div>
      </div>
    </div>
  );
};

export default MiddleBanner;
