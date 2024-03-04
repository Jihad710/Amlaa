import img1 from "../../assets/istockphoto-1011172506-612x612.jpg";
import img2 from "../../assets/istockphoto-1217805751-612x612.jpg";
import img3 from "../../assets/premium_photo-1661281366900-88b41445a004.avif";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const bannerData = [
  {
    image: img1,
    title: "Elevate Your Look: Explore [Brand Name] Fashion",
    subTitle: "",
  },
  {
    image: img2,
    title: "Elevate Your Look: Explore [Brand Name] Fashion",
    subTitle: "",
  },
  {
    image: img3,
    title: "Elevate Your Look: Explore [Brand Name] Fashion",
    subTitle: "",
  },
];

const Banner = () => {
  return (
    <div className="h-screen mb-20">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {bannerData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-screen">
              <img className="w-full " src={data.image} alt="" />
              <h1>{data.title}</h1>
              <p>{data.subTitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
