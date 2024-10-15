import img1 from "../../assets/pexels-josue-velasquez-282193995-16791415 1.png";
import img2 from "../../assets/istockphoto-1011172506-612x612.jpg";
import img3 from "../../assets/premium_photo-1661281366900-88b41445a004.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

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
    const [text, setText] = useState([{ text: "Top bar text" }]);
    useEffect(() => {
        fetch("https://amlaa.vercel.app/banner-moving-text")
            .then((response) => response.json())
            .then((data) => {
                setText(data);
            });
    }, []);
    const repeatedData = Array(3).fill(text);
    return (
        <div className='h-screen'>
            <Swiper
                // autoplay={{
                //     delay: 3000,
                //     disableOnInteraction: false,
                // }}
                effect={"fade"}
                pagination={true}
                modules={[Pagination, EffectFade, Autoplay]}
                className='mySwiper'>
                {bannerData.map((data, index) => (
                    <SwiperSlide key={index}>
                        <div className='w-full max-h-[500px] sm:max-h-screen h-screen relative'>
                            <img
                                className='w-full object-cover h-full'
                                src={data.image}
                                alt=''
                            />
                            <div className='absolute top-5 sm:top-10 text-right w-fit right-5 sm:right-10 z-20 text-white'>
                                <h2 className='text-3xl sm:text-5xl'>Wait is over</h2>
                                <p className='text-xl'>
                                    Experience true comfort
                                </p>
                            </div>
                            <div className='absolute bottom-7 sm:bottom-20 w-fit left-3 sm:left-10 z-20 text-white'>
                                <h2 className='text-2xl sm:text-4xl'>NEW LAUNCHED</h2>
                                <p className='text-4xl sm:text-6xl'>DROP SHOULDER</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div>
                <Marquee
                    pauseOnHover={true}
                    className='  sm:text-2xl py-2   text-[#3c3633]'>
                    {repeatedData.map((item, index) => (
                        <p key={index} className='mx-10 font-4xl font-semibold'>
                            {" "}
                            {item.text}{" "}
                        </p>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Banner;
