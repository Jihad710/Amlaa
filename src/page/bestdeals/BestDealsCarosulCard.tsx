import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const BestDealsCarosulCard = ({ data }) => {
  return (
    <div className="mt-10">
      <Swiper
        slidesPerView={4}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        speed={2000}
        loop={true}
        navigation={true}
        // modules={[Autoplay, Navigation]}
      >
        {data.map((instructor) => (
          <SwiperSlide key={instructor._id}>
            <div className="mx-3 h-96">
              <div className="shadow-xl text-center cursor-pointer h-full bg-white hover:text-[#2b666c] text-neutral-600 mx-1 rounded">
                <figure>
                  <img
                    src={instructor.image}
                    alt="instructor"
                    className="w-full rounded-t-md mx-auto"
                  />
                </figure>
                <div className="mt-5 items-center text-center">
                  <h2 className="font-bold uppercase text-lg">
                    {instructor.name}
                  </h2>
                  <h2>{instructor.email}</h2>
                  <button className="bg-[#227179] mb-5 px-7 font-semibold hover:bg-[#153f44] py-2 my-2 uppercase text-sm text-white rounded-ss-xl rounded-ee-xl">
                    details
                  </button>
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
