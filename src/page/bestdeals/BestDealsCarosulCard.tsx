import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

import { Keyboard, Scrollbar, Navigation } from "swiper/modules";

type Instructor = {
  _id: string;
  name: string;
  email: string;
  image: string;
};

const BestDealsCarosulCard = ({ data }: { data: Instructor[] }) => {
  return (
    <div
      className="mt-10 swiper-container"
      style={{ width: "100%", overflow: "hidden" }}
    >
      <style>
        {`
          .swiper-scrollbar {
            height: 200px;
            background-color:#eeedeb;
          }

          .swiper-scrollbar .swiper-scrollbar-drag {
            background-color: #c1c1c1;
            border-radius: 0;
            height: 100px;
          }
        `}
      </style>
      <Swiper
        slidesPerView={4}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        speed={2000}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        scrollbar={{
          draggable: true,
          hide: false,
        }}
        modules={[Scrollbar, Navigation, Keyboard]}
        className="swipers"
      >
        {data.map((instructor: Instructor) => (
          <SwiperSlide key={instructor._id}>
            <div className="mx-3 mb-5">
              <div className=" text-center cursor-pointer h-full bg-[#eeedeb]  text-neutral-600 mx-1 ">
                <figure>
                  <img
                    src={instructor.image}
                    alt="instructor"
                    className="w-full h-[327px]  mx-auto"
                  />
                </figure>
                <div className="mt-5 items-center text-center">
                  <h2 className="font-bold uppercase text-lg">
                    {"Grow Almond — Heavy Weight T-Shirt"}
                  </h2>
                  <h2 className="pb-3">{"₹ 1,490.00 Sale price₹ 990.00"}</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestDealsCarosulCard;
