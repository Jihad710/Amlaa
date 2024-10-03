import img1 from "../../assets/istockphoto-1011172506-612x612.jpg";
import img2 from "../../assets/istockphoto-1217805751-612x612.jpg";
import img3 from "../../assets/premium_photo-1661281366900-88b41445a004.avif";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Marquee from "react-fast-marquee";

const text = [
  {
    title: "it's time you get comfortable. ",
  },
  {
    title: "it's time you get comfortable.",
  },
  {
    title: "it's time you get comfortable. ",
  },
  {
    title: "it's time you get comfortable. ",
  },
];

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
    <div className="h-screen">
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
              <img className="w-full h-full" src={data.image} alt="" />
              <h1>{data.title}</h1>
              <p>{data.subTitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        
        <Marquee pauseOnHover={true} className="  text-2xl py-2  text-[#3c3633]">
          {text.map((item, index) => (
            <p key={index} className="mx-10 font-4xl font-semibold">
              {" "}
              {item.title}{" "}
            </p>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Banner;
