import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

interface items {
  discount: number;
  title: string;
  images: string[];
  name: string;
  price: number;
  status: string;
  _id: string;
}

const AccecsarisCard = ({ data }: { data: items[] }) => {
  const navigate = useNavigate();
  const handleClick = (id: any) => {
    navigate(`/product/${id}`);
  };

  // Check if the screen is small (less than 768 pixels wide)
  const isSmallScreen = window.innerWidth < 768; // Adjust the breakpoint as needed

  return (
    <div className="pt-5 sm:pt-14 md:pt-24">
      <div>
        <Swiper
          slidesPerView={1.6}
          spaceBetween={5}
          breakpoints={{
            460: {
              slidesPerView: 2,
            },
            540: {
              slidesPerView: 3,
            },
            820: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          navigation={!isSmallScreen} // Disable navigation on small screens
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item._id}>
              <div
                className="flex cursor-pointer rounded-md justify-center w-full my-1"
                onClick={() => handleClick(item._id)}
              >
                <div>
                  <div className="h-[300px] w-[300px] mx-auto sm:w-auto xsm:w-[220px] sm:h-[460px] rounded-md overflow-hidden relative">
                    <img
                      className="w-full max-w-[300px] h-full object-contain sm:object-cover object-top"
                      src={item.images[0]}
                      alt={item.title}
                    />
                    <p
                      className="absolute top-0 right-0 bg-[#3c3633] text-white p-1 mr-12 px-1 text-xs capitalize pt-1 
               sm:px-2 sm:p-1.5 text-right sm:text-sm md:p-2 md:text-base"
                    >
                      {item.status === "sold-out" ? "Sold Out" : "New"}
                    </p>
                  </div>
                  <div className="px-3 pt-3 ml-8 barlow-regular">
                    <p className="capitalize barlow-regular text-lg">
                      {item.title}
                    </p>
                    <p className="barlow-semibold mt-1 text-lg">
                      {item.discount > 0 ? (
                        <div className="md:font-medium text-xl gap-1 flex items-center opacity-80">
                          {item.discount && item.price && (
                            <>
                              <span className="line-through">
                                &#x09F3;{item.price}
                              </span>
                              {" - "}
                              <span>
                                &#x09F3;
                                {item.price -
                                  (item.price * item.discount) / 100}
                              </span>
                              <span className="text-sm rounded p-px bg-red-200 text-red-700">
                                -{item.discount}%
                              </span>
                            </>
                          )}
                        </div>
                      ) : (
                        <span> &#x09F3; {item.price}</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-32 rounded-full mt-3 sm:mt-15 mx-auto text-center">
        <Link to={"/products/deals"}>
          <button className="text-white uppercase font-semibold bg-[#3c3633] w-full py-2 px-2 sm:py-3 sm:px-4 text-center text-sm sm:text-base rounded-full">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AccecsarisCard;
