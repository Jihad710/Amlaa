import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

interface Item {
  discount: number;
  title: string;
  images: string[];
  name: string;
  price: number;
  status: string;
  _id: string;
  collectionStatus: string;
}

interface Props {
  items: Item[];
}

const NewArrivalsItems: React.FC<Props> = ({ items = [] }) => {
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const handleResize = () => setIsDesktop(window.innerWidth > 768);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (id: string) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="pt-5 sm:pt-14 md:pt-24">
      <div>
        <Swiper
          slidesPerView={1.7}
          spaceBetween={2}
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
          navigation={isDesktop} // Enable navigation only on larger screens
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {items.map((item) => (
            <SwiperSlide key={item._id}>
              <div
                className="flex cursor-pointer rounded-md justify-center w-full my-1"
                onClick={() => handleClick(item._id)}
              >
                <div>
                  <div className="h-[260px] w-[220px] mx-auto sm:w-[240px] sm:h-[360px] rounded-md overflow-hidden relative">
                    <img
                      className="w-full h-full object-contain sm:object-cover object-top"
                      src={item.images[0]}
                      alt={item.title}
                    />
                    <p
                      className="absolute top-0 right-0 bg-[#3c3633] text-white p-1 px-1 mr-5 text-xs capitalize pt-1 
               sm:px-2 sm:p-1.5 text-right sm:text-sm md:p-2 md:text-base"
                    >
                      {item.status === "sold-out" ? "Sold Out" : "New"}
                    </p>
                  </div>

                  <div className="mt-4 px-3 ml-4 barlow-regular">
                    <p className="capitalize barlow-regular text-lg">
                      {item.title}
                    </p>
                    <p className="barlow-semibold mt-1 text-lg">
                      {item.discount > 0 ? (
                        <div className="md:font-medium text-xl gap-1 flex items-center opacity-80">
                          <span className="line-through">
                            &#x09F3;{item.price}
                          </span>
                          {" - "}
                          <span>
                            &#x09F3;
                            {item.price - (item.price * item.discount) / 100}
                          </span>
                          <span className="text-sm rounded p-px bg-red-200 text-red-700">
                            -{item.discount}%
                          </span>
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

      <div className="w-32 rounded-full mt-3 sm:mt-10 mx-auto text-center">
        <NavLink to={"/products/all"}>
          <button className="text-white uppercase font-semibold bg-[#3c3633] w-full py-2 px-2 sm:py-3 sm:px-4 text-center text-sm sm:text-base rounded-full">
            View All
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NewArrivalsItems;
